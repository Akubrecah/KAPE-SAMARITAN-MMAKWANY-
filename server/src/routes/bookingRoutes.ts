import express from 'express';
import { createBooking, getMyBookings, getBookings } from '../controllers/bookingController';
import { protect, authorize } from '../middleware/authMiddleware';
import { UserRole } from '../models/User';

const router = express.Router();

router.route('/')
  .post(protect, createBooking)
  .get(protect, authorize(UserRole.SUPER_ADMIN, UserRole.RECEPTIONIST), getBookings);

router.route('/mybookings').get(protect, getMyBookings);

export default router;
