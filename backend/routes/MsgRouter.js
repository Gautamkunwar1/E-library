import express from 'express';
import { addMsg, getAllMsg } from '../controllers/MsgController.js';

const msgRouter = express.Router();
msgRouter.post("/addMsg",addMsg);
msgRouter.get("/getAllMsg", getAllMsg);

export default msgRouter;