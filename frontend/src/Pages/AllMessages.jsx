import axios from 'axios';
import { useEffect, useState } from 'react';
import { FaTrashAlt } from "react-icons/fa";
import SearchBox from '../Components/SearchBox';
import TableRow from '../Components/TableRow';
import formatDateTime from '../utils/formatDateTime';

function AllMessages() {
  const tableHeader = ["Name", "Email", "Message", "Date", "Action"];
  const [tableRowData, setTableRowData] = useState([]);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/msg/getAllMsg");
        setTableRowData(response.data.allMsg);
      } catch (error) {
        console.error("Error in fetching Api:", error.message);
      }
    };
    fetchData();
  }, [refresh]);

  async function handleDelClick(row) {
    const userId = row._id;
    const confirmed = confirm("Are you sure to delete this message")
    if (!confirmed) return

    if (confirmed) {
      setRefresh(prev => !prev)
    }

    try {
      await axios.delete(`/api/admin/deleteMsg/${userId}`)
    } catch (error) {
      console.error("Something went wrong");
    }
  }

  return (
    <div className='bg-green-50 h-[88vh]'>
      <div className='flex justify-around items-center bg-[#7fb690] h-[8vh] w-full'>
        <h1 className='text-2xl text-white font-semibold'>All Messages List</h1>
        <div className='w-[40%]'><SearchBox /></div>
      </div>
      <table className='mx-auto w-[90%] mt-10'>
        <thead className='bg-green-100 border-1 text-lg text-green-800'>
          <tr>
            {tableHeader.map((header, index) => (
              <th key={index} className='border border-green-400'>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Array.isArray(tableRowData) && tableRowData.map((row) => (
            <TableRow
              key={row._id}
              td1={row.name}
              td2={row.email}
              td3={row.msg}
              td4={formatDateTime(row.createdAt)}
              td5={
                <button className='cursor-pointer' onClick={() => handleDelClick(row)}> <FaTrashAlt /> </button>
              }
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AllMessages;
