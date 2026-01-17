
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import User, { UserRole } from './models/User';
import connectDB from './config/db';

dotenv.config();

connectDB();

const importData = async () => {
  try {
    await User.deleteMany();

    const users = [
      {
        name: 'Super Admin',
        email: 'admin@kape.com',
        passwordHash: '123456', // Will be hashed by pre-save hook
        role: UserRole.SUPER_ADMIN,
        phone: '0700000000'
      },
      {
        name: 'Receptionist',
        email: 'reception@kape.com',
        passwordHash: '123456',
        role: UserRole.RECEPTIONIST,
        phone: '0700000001'
      },
      {
        name: 'Kitchen Staff',
        email: 'kitchen@kape.com',
        passwordHash: '123456',
        role: UserRole.KITCHEN,
        phone: '0700000002'
      },
      {
        name: 'Housekeeping',
        email: 'clean@kape.com',
        passwordHash: '123456',
        role: UserRole.HOUSEKEEPING,
        phone: '0700000003'
      },
      {
        name: 'John Guest',
        email: 'guest@gmail.com',
        passwordHash: '123456',
        role: UserRole.GUEST,
        phone: '0712345678'
      }
    ];

    await User.insertMany(users);

    console.log('Data Imported!');
    process.exit();
  } catch (error) {
    console.error(`Error: ${error}`);
    process.exit(1);
  }
};

importData();
