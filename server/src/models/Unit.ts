import mongoose, { Document, Schema } from 'mongoose';

export enum UnitType {
  ROOM = 'ROOM',
  HALL = 'HALL',
  HOUSE = 'HOUSE',
}

export enum UnitStatus {
  CLEAN = 'CLEAN',
  DIRTY = 'DIRTY',
  MAINTENANCE = 'MAINTENANCE',
}

export interface IUnit extends Document {
  propertyId: mongoose.Types.ObjectId;
  name: string;
  type: UnitType;
  basePrice: number;
  status: UnitStatus;
  description?: string;
  capacity?: number;
  createdAt: Date;
  updatedAt: Date;
}

const UnitSchema: Schema = new Schema({
  propertyId: { type: Schema.Types.ObjectId, ref: 'Property', required: true },
  name: { type: String, required: true },
  type: { type: String, enum: Object.values(UnitType), required: true },
  basePrice: { type: Number, required: true },
  status: { type: String, enum: Object.values(UnitStatus), default: UnitStatus.CLEAN },
  description: { type: String },
  capacity: { type: Number },
}, { timestamps: true });

export default mongoose.model<IUnit>('Unit', UnitSchema);
