import React, { useEffect, useState } from "react";
import TableRow from "./TableRow";
import { FaTrashAlt } from "react-icons/fa";
import { allUser } from "../api/alluserapi";

export default function Table() {
    const tableHeader = ["UserId", "Username", "Email", "Created", "Action"];
    const [tableRowData, setTableRowData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const users = await allUser();
            setTableRowData(users);
        };

        fetchData();
    }, []);

    return (
        <table className="border-collapse border border-blue-500 w-full mt-5">
            <thead>
                <tr className="text-center bg-gray-100">
                    {tableHeader.map((head, index) => (
                        <th key={index} className="border border-blue-400 px-4 py-2">
                            {head}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody className="bg-[#cad9f371] shadow-xl">
                {tableRowData.map((row) => (
                    <TableRow
                        key={row._id}
                        td1={row._id}
                        td2={row.name}
                        td3={row.email}
                        // td4={`${new Date(row.createdAt).getDate().toString().padStart(2, '0')}/${
                        //     (new Date(row.createdAt).getMonth() + 1).toString().padStart(2, '0')}/${
                        //     new Date(row.createdAt).getFullYear()
                        // }`}
                        td4={new Date(row.createdAt).toLocaleDateString()}
                        td5={<FaTrashAlt />}
                    />
                ))}
            </tbody>
        </table>
    );
}
