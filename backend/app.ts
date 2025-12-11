import express from 'express';
import cors from 'cors';
import slotRoutes from './routes/slots.routes';
import analyticsRoutes from './routes/analytics.routes';
import authRoutes from './routes/auth.routes';

const app = express();

app.use(cors() as any);
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/slots', slotRoutes);
app.use('/api/analytics', analyticsRoutes);

export default app;