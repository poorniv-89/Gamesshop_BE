import express from 'express';
import { register, login } from '../controllers/userController.mjs';


const router = express.Router();

//@route: POST /api/user
//@desc: register user route
//@access: Public

router.post('/register', register)


//login / authentication created  
router.post('/login', login)

export default router;