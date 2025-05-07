import express from 'express';
import connectDb from './db/db.js';
import cors from 'cors'
import path from 'path'
import dotenv from 'dotenv';
import AuthRouter from './routes/AuthRouter.js';
import msgRouter from './routes/MsgRouter.js';
import bookRouter from './routes/BookRouter.js';
import userRouter from './routes/UserRouter.js';
import AdminRouter from './routes/AdminRouter.js';
import cookieParser from "cookie-parser"

dotenv.config();


const app = express();
const port = process.env.PORT || 8001;

app.use(cors({
    origin:"http://localhost:8000",
    credentials:true
}));
app.use(cookieParser());
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use('/uploads', express.static(path.join(process.cwd(), 'uploads')));
app.use("/api/auth",AuthRouter);
app.use("/api/user",userRouter);
app.use("/api/book",bookRouter);
app.use("/api/msg",msgRouter);
app.use("/api/admin",AdminRouter)


app.listen(port, async () => {
    try {
        console.log(`Server is running on ${port}`);
        await connectDb();
    } catch (error) {
        console.error(`error: ${error}`);
    }
});
