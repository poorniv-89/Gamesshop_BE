import mongoose from "mongoose";


const gameSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    category: 
    {
        type: String,
        required: true,
        enum: ['Board', 'Dice', 'Card', 'Outdoor', 'Video', 'Other']
    },
    price:{
        type: Number,
        required: true
    },
    description:{
        type: String
    },
    quantity: {
        type: Number,
        required: true
    }
})

export default mongoose.model('Game', gameSchema);