import { Request, Response } from 'express';
import Property from '../models/Property';
import Unit from '../models/Unit';

// @desc    Get all properties
// @route   GET /api/properties
// @access  Public
export const getProperties = async (req: Request, res: Response) => {
  const properties = await Property.find();
  res.json(properties);
};

// @desc    Create a property
// @route   POST /api/properties
// @access  Private/Admin
export const createProperty = async (req: Request, res: Response) => {
  const { name, type, description } = req.body;

  const property = await Property.create({
    name,
    type,
    description,
  });

  res.status(201).json(property);
};

// @desc    Get units for a property
// @route   GET /api/properties/:id/units
// @access  Public
export const getPropertyUnits = async (req: Request, res: Response) => {
  const units = await Unit.find({ propertyId: req.params.id });
  res.json(units);
};

// @desc    Create a unit
// @route   POST /api/properties/:id/units
// @access  Private/Admin
export const createUnit = async (req: Request, res: Response) => {
  const { name, type, basePrice, description, capacity } = req.body;

  const unit = await Unit.create({
    propertyId: req.params.id,
    name,
    type,
    basePrice,
    description,
    capacity,
  });

  res.status(201).json(unit);
};
