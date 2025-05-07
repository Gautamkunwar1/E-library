import express from 'express';
import { bookEdit,deleteBook, deleteUser } from '../controllers/AdminController.js';

const AdminRouter = express.Router();
AdminRouter.put("/edit/:id",bookEdit);
AdminRouter.delete("/delete/:id",deleteBook);
AdminRouter.delete("/deleteUser/:id",deleteUser);

export default AdminRouter;