import express from 'express';
import User from '../models/userSchema.mjs'
import Cart from '../models/cartSchema.mjs';

const router = express.Router();

//@route: POST /api/user
//@desc: register user route
//@access: Public

router.post('/register', async (req, res) => {
    const { username, email, password } = req.body;


    if(!username || !email || !password)
        return res.status(400).json({
    message: 'All fields are required'})

    //check if user already exists
    let user = await User.findOne({email})
    if(user)
        return res.status(400).json({
    message: 'Email already exists!'})
    
    //create a new user
    user = new User({email, username, password})
    await user.save();

    const cart = new Cart({user: user._id, items: [] })
    await cart.save();

    user.cart = cart._id;
    await user.save();

    res.status(201).json({
        message: "New User created",
        "userid": user._id
    })



})

router.post('/login', async(req,res)=>{
    const {email, password } = req.body;

    if(!email || !password)
        return res.status(400).json({
    message: 'Email and password are required'})
    let user = await User.findOne({email})
    if(!user)
        return res.status(400).json({
    message: 'Invalid credentials'})
    if(user.password !== password)
    {
        return res.status(400).json({
            message: 'invalid credentials'
        })
    }
    res.status(200).json({
        message: "Login successful",
        "userid": user._id,
        "cart_id": user.cart})

})

export default router;