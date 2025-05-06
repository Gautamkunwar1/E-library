import React from 'react'
import { FaUserCircle } from "react-icons/fa";

function AdminInfo() {
    return (
        <>
            <div className="flex justify-between items-start p-6 bg-[#46885cbe] w-[73.9vw]">
                <div className="w-[50vw] px-4  ">
                    <div className="w-full ">
                    </div>
                </div>
                <div className="flex items-center gap-3 text-xl">
                    <FaUserCircle  className='text-white'/>
                    <p className="font-semibold  text-white">Welcome admin! Gautam</p>
                </div>
            </div>
        </>
    )
}

export default AdminInfo
