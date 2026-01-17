import { Request, Response } from 'express';
import Booking, { BookingStatus } from '../models/Booking';
import Unit from '../models/Unit';

// @desc    Create a new booking
// @route   POST /api/bookings
// @access  Private
export const createBooking = async (req: Request, res: Response) => {
  const { unitId, startDate, endDate } = req.body;

  const unit = await Unit.findById(unitId);

  if (!unit) {
    res.status(404).json({ message: 'Unit not found' });
    return;
  }

  // Calculate total price (basic logic, can be expanded)
  const start = new Date(startDate);
  const end = new Date(endDate);
  const days = Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
  const totalPrice = unit.basePrice * days;

  const booking = await Booking.create({
    userId: req.user._id,
    unitId,
    startDate,
    endDate,
    totalPrice,
    status: BookingStatus.PENDING,
  });

  res.status(201).json(booking);
};

// @desc    Get logged in user bookings
// @route   GET /api/bookings/mybookings
// @access  Private
export const getMyBookings = async (req: Request, res: Response) => {
  const bookings = await Booking.find({ userId: req.user._id }).populate('unitId');
  res.json(bookings);
};

// @desc    Get all bookings (Admin)
// @route   GET /api/bookings
// @access  Private/Admin
export const getBookings = async (req: Request, res: Response) => {
  const bookings = await Booking.find().populate('userId', 'name email').populate('unitId');
  res.json(bookings);
};
