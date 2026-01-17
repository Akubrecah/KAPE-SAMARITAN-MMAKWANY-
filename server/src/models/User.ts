import mongoose, { Document, Schema } from 'mongoose';
import bcrypt from 'bcryptjs';

export enum UserRole {
  GUEST = 'GUEST',
  SUPER_ADMIN = 'SUPER_ADMIN',
  RECEPTIONIST = 'RECEPTIONIST',
  KITCHEN = 'KITCHEN',
  HOUSEKEEPING = 'HOUSEKEEPING',
}

export interface IUser extends Document {
  email: string;
  passwordHash: string;
  role: UserRole;
  name: string;
  phone: string;
  createdAt: Date;
  updatedAt: Date;
  matchPassword(enteredPassword: string): Promise<boolean>;
}

const UserSchema: Schema = new Schema({
  email: { type: String, required: true, unique: true },
  passwordHash: { type: String, required: true },
  role: { type: String, enum: Object.values(UserRole), default: UserRole.GUEST },
  name: { type: String, required: true },
  phone: { type: String, required: true },
}, { timestamps: true });

UserSchema.methods.matchPassword = async function (enteredPassword: string) {
  return await bcrypt.compare(enteredPassword, this.passwordHash);
};

UserSchema.pre('save', async function (this: any, next: any) {
  if (!this.isModified('passwordHash')) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.passwordHash = await bcrypt.hash(this.passwordHash, salt);
});

export default mongoose.model<IUser>('User', UserSchema);
