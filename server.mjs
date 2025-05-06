//imports
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import globalError from './middlewares/globalError.mjs';
import morgan from 'morgan';

//setups
const app = express();
dotenv.config();
const PORT = process.env.PORT || 3001; 


//middlewares
app.use(express.json());
app.use(cors());
app.use(morgan('tiny'));

//routes

//error handling middleware 
app.use(globalError);

//listener
app.listen(PORT, ()=>{
    console.log(`Server is running on PORT:${PORT}`);
})