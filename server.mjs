//imports
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import globalError from './middlewares/globalError.mjs';
import morgan from 'morgan';
import connectDB from './db/conn.mjs';
import userRoutes from './routes/userRoutes.mjs'

//setups
const app = express();
dotenv.config();
const PORT = process.env.PORT || 3001; 
connectDB();

//middlewares
app.use(express.json());
app.use(cors());
app.use(morgan('tiny'));

//routes
app.use('/api/user', userRoutes);
//error handling middleware 
app.use(globalError);

//listener
app.listen(PORT, ()=>{
    console.log(`Server is running on PORT:${PORT}`);
})