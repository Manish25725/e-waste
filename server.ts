import app from './backend/app';
import { connectDB } from './backend/config/db';
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || 3001;

// Connect to Database
connectDB();

app.listen(PORT, () => {
  console.log(`EcoCycle Backend running on http://localhost:${PORT}`);
});