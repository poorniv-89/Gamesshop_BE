//import
import mongoose from 'mongoose';
import dotenv from 'dotenv';

//setups
dotenv.config();
const connectionStr = process.env.mongoURI || '';

async function connectDB()
{
    try{
        await mongoose.connect(connectionStr);
        console.log('connected to MongoDB...')
    }
    catch(e)
    {
        console.error(e);
    }
}

export default connectDB;


