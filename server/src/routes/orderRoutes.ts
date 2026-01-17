import express from 'express';
import { createOrder, getKitchenOrders, updateOrderStatus } from '../controllers/orderController';
import { protect, authorize } from '../middleware/authMiddleware';
import { UserRole } from '../models/User';

const router = express.Router();

router.route('/')
  .post(protect, createOrder);

router.route('/kitchen')
  .get(protect, authorize(UserRole.KITCHEN, UserRole.SUPER_ADMIN), getKitchenOrders);

router.route('/:id')
  .put(protect, authorize(UserRole.KITCHEN, UserRole.SUPER_ADMIN), updateOrderStatus);

export default router;
