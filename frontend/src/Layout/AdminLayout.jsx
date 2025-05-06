import React from "react";
import { Outlet } from "react-router-dom";
import AdminInfo from "../Components/AdminINfo";
import Sidebar from "../Components/AdminSideBar";

function AdminLayout(){
    return (
        <div className="flex">
        <div><Sidebar/></div>
        
        <div>
        <AdminInfo/>
        <Outlet />
        </div>
    </div>
    );
}

export default AdminLayout; 
