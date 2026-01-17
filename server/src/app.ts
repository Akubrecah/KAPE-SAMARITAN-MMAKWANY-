import express from 'express';
import cors from 'cors';
import userRoutes from './routes/userRoutes';
import propertyRoutes from './routes/propertyRoutes';
import bookingRoutes from './routes/bookingRoutes';
import orderRoutes from './routes/orderRoutes';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/users', userRoutes);
app.use('/api/properties', propertyRoutes);
app.use('/api/bookings', bookingRoutes);
app.use('/api/orders', orderRoutes);

// Basic Route
app.get('/', (req, res) => {
  res.send('API is running...');
});

export default app;
