import mongoose, { Document, Schema } from 'mongoose';

export enum PropertyType {
  GUEST_HOUSE = 'GUEST_HOUSE',
  ENTIRE_HOME = 'ENTIRE_HOME',
}

export interface IProperty extends Document {
  name: string;
  type: PropertyType;
  description?: string;
  createdAt: Date;
  updatedAt: Date;
}

const PropertySchema: Schema = new Schema({
  name: { type: String, required: true },
  type: { type: String, enum: Object.values(PropertyType), required: true },
  description: { type: String },
}, { timestamps: true });

export default mongoose.model<IProperty>('Property', PropertySchema);
