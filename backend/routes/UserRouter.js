import express from 'express';
import {allUsers} from '../controllers/UserContoller.js'

const userRouter = express.Router();
userRouter.get("/allUsers",allUsers);
export default userRouter;