import express from 'express'
import {signup,login,logout, getProfile} from "../controllers/AuthController.js"
import { protectRoute } from '../middleware/auth_middleware.js';

const router = express.Router();
router.post('/signup',signup);
router.post('/login',login);
router.post('/logout',logout);
router.get('/profile',protectRoute,getProfile);
export default router;