import React, { useEffect, useState } from 'react'
import axios from 'axios';
import TableRow from './TableRow';
import SearchBox from "../Components/SearchBox";
import formatDateTime from '../utils/formatDateTime';
import { FaTrashAlt } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";

function Table() {
    const tableHeader = ["UserId","Username","Email","Created At","Action"];
    const[tableRowData,setTableRowData] = useState([]);

    useEffect(()=>{
        const fetchData = async()=>{
            try {
                const response = await axios.get("/api/user/allUsers");
                setTableRowData(response.data.users);
            } catch (error) {
                console.error("Error fetching data:",error.message);
            }
        };
        fetchData();
    },[])
    return (
        <div className='bg-green-50 h-[88vh]'>
            <div className='flex justify-around items-center  bg-[#7fb690] h-[8vh] w-full'>
                <h1 className='text-2xl text-white font-semibold'>All Registered Users</h1>
                <div className='w-[40%]'><SearchBox/></div>
            </div>
            <table className='mx-auto w-[90%] mt-10' >
                <thead className='bg-green-100 border-1 text-lg text-green-800'>
                    <tr>
                        {tableHeader.map((header,index)=>(
                            <th key={index} className='border border-green-400'>{header}</th>
                        ))}
                    </tr>
                </thead>

                <tbody>
                    {tableRowData.map((row)=>(
                        <TableRow key ={row._id} 
                        td1 = {row._id}
                        td2 = {row.name}
                        td3 = {row.email}
                        td4 = {formatDateTime(row.createdAt)}
                        td5={<span className="flex pl-5 gap-4 text-lg cursor-pointer"><FiEdit /> <FaTrashAlt /></span>}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Table
