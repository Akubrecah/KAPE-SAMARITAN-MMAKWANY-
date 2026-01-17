import { Request, Response } from 'express';
import Order from '../models/Order';

// @desc    Create a new order
// @route   POST /api/orders
// @access  Private (Guest or Staff)
export const createOrder = async (req: Request, res: Response) => {
  const { bookingId, items, totalAmount } = req.body;

  const order = await Order.create({
    bookingId, // Optional
    items,
    totalAmount,
    status: 'PENDING',
  });

  // TODO: Emit Socket.io event to Kitchen
  // req.app.get('io').emit('newOrder', order);

  res.status(201).json(order);
};

// @desc    Get all active orders (Kitchen)
// @route   GET /api/orders/kitchen
// @access  Private/Kitchen
export const getKitchenOrders = async (req: Request, res: Response) => {
  const orders = await Order.find({ status: { $ne: 'SERVED' } }).sort({ createdAt: 1 });
  res.json(orders);
};

// @desc    Update order status
// @route   PUT /api/orders/:id
// @access  Private/Kitchen
export const updateOrderStatus = async (req: Request, res: Response) => {
  const { status } = req.body;
  const order = await Order.findByIdAndUpdate(req.params.id, { status }, { new: true });
  
  if (order) {
     // TODO: Emit update to guest/waiter
     res.json(order);
  } else {
    res.status(404).json({ message: 'Order not found' });
  }
};
