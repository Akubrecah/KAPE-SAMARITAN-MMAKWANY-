import express from 'express';
import {
  getProperties,
  createProperty,
  getPropertyUnits,
  createUnit,
} from '../controllers/propertyController';
import { protect, authorize } from '../middleware/authMiddleware';
import { UserRole } from '../models/User';

const router = express.Router();

router.route('/')
  .get(getProperties)
  .post(protect, authorize(UserRole.SUPER_ADMIN), createProperty);

router.route('/:id/units')
  .get(getPropertyUnits)
  .post(protect, authorize(UserRole.SUPER_ADMIN), createUnit);

export default router;
