import express from 'express';
import { bookEdit,deleteBook, deleteUser,deleteMsg } from '../controllers/AdminController.js';

const AdminRouter = express.Router();
AdminRouter.put("/edit/:id",bookEdit);
AdminRouter.delete("/delete/:id",deleteBook);
AdminRouter.delete("/deleteUser/:id",deleteUser);
AdminRouter.delete("/deleteMsg/:id",deleteMsg);

export default AdminRouter;