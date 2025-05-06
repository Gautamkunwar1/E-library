import React, { useState } from "react";
import { CgLogOut } from "react-icons/cg";
import { FaUsers } from "react-icons/fa6";
import { GiBookshelf } from "react-icons/gi";
import { MdDashboard } from "react-icons/md";
import { BiSolidBookAdd } from "react-icons/bi";
import { TiMessages } from "react-icons/ti";
import { Link } from "react-router-dom";

function Sidebar() {
    const [activeTab, setActiveTab] = useState(null);

    const tabs = [
        { id: "dashboard", label: "Dashboard", to: "/admin", icon: <MdDashboard /> },
        { id: "user", label: "Users", to: "/admin/user", icon: <FaUsers /> },
        { id: "books", label: " All Books", to: "/admin/books", icon: <GiBookshelf />},
        { id: "addBook", label: "Add Book", to: "/admin/addBook", icon: <BiSolidBookAdd /> },
        { id: "allmsg", label: "Messages", to: "/admin/allmsg", icon: <TiMessages /> },
        { id: "logout", label: "Logout", to: "/login", icon: <CgLogOut /> },
    ];

    return (
        <div className="bg-[#46885cbe] w-[25vw] h-[100vh] shadow-xl pt-3">
            <div className="flex items-center justify-center pt-2">
                <div className='flex justify-center items-center gap-3'>
                                <Link to="/admin" className="text-3xl font-bold text-[#fff] flex items-center gap-2">
                                    <img src="src/Images/logo.png" alt="#" className='inline-block w-10' />
                                    Books Store
                                </Link>
                    </div>
            </div>

            <div>
                {tabs.map((tab) => (
                    <Link
                        key={tab.id}
                        to={tab.to}
                        onClick={() => setActiveTab(tab.id)}
                        className={`mt-5 flex pl-7 items-center gap-5 p-5 text-lg font-semibold text-white w-full ${
                            activeTab === tab.id
                                ? "bg-[#48754e] text-black"
                                : "bg-[#90e09b] hover:bg-[#63966a]"
                        }`}
                    >
                        {tab.icon}
                        {tab.label}
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Sidebar;
