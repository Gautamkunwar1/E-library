import express from "express";
import { addBook, getAllBook } from "../controllers/BookController.js";
import upload from "../uploads/upload.js";

const bookRouter = express.Router();
bookRouter.post('/addbook', upload.fields([
    { name: 'image', maxCount: 1 },
    { name: 'pdf', maxCount: 1 }
]), addBook);
bookRouter.get("/getAllBook",getAllBook);

export default bookRouter;