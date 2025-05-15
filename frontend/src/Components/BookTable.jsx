import axios from 'axios';
import { useEffect, useState } from 'react';
import { FaTrashAlt } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import EditCarModel from './EditBookModel';
import SearchBox from './SearchBox';
import TableRow from './TableRow';

function BookTable() {
    const tableHeader = ["ISBN","BooKName","Author","PublishYear","Genre","Image","Action"];
    const[tableRowData,setTableRowData] = useState([]);
    const[refresh,setRefresh] = useState(false)
    const[isOpen,setIsOpen] = useState(false);
    const [editedBook, setEditedBook] = useState({})

    useEffect(()=>{
        const fetchData = async()=>{
            try {
                const response = await axios.get("/api/book/getAllBook");
                setTableRowData(response.data.allBook)
            } catch (error) {
                console.error("Error fetching data:",error.message)
            }
        };
        fetchData();
    },[refresh])

    async function handleDelClick(row){
        const bookId = row._id;
        const confirmed = confirm("Are you sure to delete this book?")
        if(!confirmed) return;
        
        if(confirmed){
            setRefresh(prev=>!prev)
        }
        try {
            await axios.delete(`/api/admin/delete/${bookId}`);
        } catch (error) {
            console.error("Something went wrong")
        }
    }

    function handleEditClick(row){
        setIsOpen(true)
        setEditedBook(row)
    }
    return (
        <div className='bg-green-50 h-[88vh]'>
        <div className='flex justify-around items-center  bg-[#7fb690] h-[8vh] w-full'>
            <h1 className='text-2xl text-white font-semibold'>All Book List</h1>
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
                    td1 = {row.isbn}
                    td2 = {row.bookName}
                    td3 = {row.author}
                    td4 = {row.publishYear}
                    td6 = {row.genre}
                    td7 = {row.image}
                    td8={<span className="flex gap-4 text-lg "><button className='cursor-pointer' onClick={()=>handleEditClick(row)}><FiEdit /></button>
                    <button className='cursor-pointer' onClick={()=>handleDelClick(row)}><FaTrashAlt /></button></span>}
                    />
                ))}
            </tbody>
        </table>
        {isOpen && <EditCarModel editedBook={editedBook} setIsOpen={setIsOpen}/>}
    </div>
    )
}

export default BookTable
