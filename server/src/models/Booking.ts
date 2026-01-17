import mongoose, { Document, Schema } from 'mongoose';

export enum BookingStatus {
  CONFIRMED = 'CONFIRMED',
  CANCELLED = 'CANCELLED',
  CHECKED_IN = 'CHECKED_IN',
  CHECKED_OUT = 'CHECKED_OUT',
  PENDING = 'PENDING',
}

export interface IBooking extends Document {
  userId: mongoose.Types.ObjectId;
  unitId: mongoose.Types.ObjectId;
  startDate: Date;
  endDate: Date;
  status: BookingStatus;
  totalPrice: number;
  createdAt: Date;
  updatedAt: Date;
}

const BookingSchema: Schema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  unitId: { type: Schema.Types.ObjectId, ref: 'Unit', required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  status: { type: String, enum: Object.values(BookingStatus), default: BookingStatus.PENDING },
  totalPrice: { type: Number, required: true },
}, { timestamps: true });

export default mongoose.model<IBooking>('Booking', BookingSchema);
