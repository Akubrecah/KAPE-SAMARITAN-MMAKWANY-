import mongoose, { Document, Schema } from 'mongoose';

export enum OrderStatus {
  PENDING = 'PENDING',
  COOKING = 'COOKING',
  READY = 'READY',
  SERVED = 'SERVED',
  CANCELLED = 'CANCELLED',
}

interface OrderItem {
  item: string;
  qty: number;
  price: number;
}

export interface IOrder extends Document {
  bookingId?: mongoose.Types.ObjectId;
  items: OrderItem[];
  status: OrderStatus;
  totalAmount: number;
  createdAt: Date;
  updatedAt: Date;
}

const OrderSchema: Schema = new Schema({
  bookingId: { type: Schema.Types.ObjectId, ref: 'Booking' }, // Optional for walk-ins
  items: [{
    item: { type: String, required: true },
    qty: { type: Number, required: true },
    price: { type: Number, required: true },
  }],
  status: { type: String, enum: Object.values(OrderStatus), default: OrderStatus.PENDING },
  totalAmount: { type: Number, required: true },
}, { timestamps: true });

export default mongoose.model<IOrder>('Order', OrderSchema);
