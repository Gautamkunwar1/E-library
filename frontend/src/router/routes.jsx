import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AdminLayout from "../Layout/AdminLayout";
import About from "../Pages/About";
import Admin from "../Pages/Admin";
import AdminAddBook from "../Pages/AdminAddBook";
import AllBooks from "../Pages/AllBooks";
import AllMessages from "../Pages/AllMessages";
import AllUsers from "../Pages/AllUsers";
import Blog from "../Pages/Blog";
import Books from "../Pages/Books";
import Contact from "../Pages/Contact";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import NotFound from "../Pages/NotFound";
import AdminRoute from "./AdminRoute";


const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { path: "/", element: <Home /> },
            { path: "/about", element: <About /> },
            { path: "/books", element: <Books /> },
            { path: "/contact", element: <Contact /> },
            { path: "/blog", element: <Blog /> },
            { path: "/login", element: <Login /> },
            { path: "/signup", element: <Signup /> },
            { path:"*", element:<NotFound/> }
        ],
    },
    {
        path: "admin",
        element: <AdminRoute />, 
        children: [
            {
                element: <AdminLayout />,
                children: [
                    { index:true, element: <Admin /> },
                    { path: "user", element: <AllUsers /> },
                    { path: "books", element: <AllBooks /> },
                    { path: "addBook", element: <AdminAddBook /> },
                    { path: "allmsg", element: <AllMessages /> },
                    { path:"*", element:<NotFound/> }
                ],
            },
        ],
    },

]);

export default router;
