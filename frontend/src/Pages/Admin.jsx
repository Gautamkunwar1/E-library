import React from 'react'
import CardDashboard from '../Components/CardDashboard';
import LineChart from "../Components/LineChart";
import Calender from "../Components/Calender"
import { ImUsers } from "react-icons/im";
import { IoIosTime } from "react-icons/io";
import { FaBookBookmark } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa6";


function Admin() {
    const cards = [
        { id: "visitors",symbol:<ImUsers />, heading: "Total Visitors", detail: "295", growth:"5% this month" },
        { id: "borrowedBooks",symbol:<FaBookBookmark />, heading: "Borrowed Books ", detail: "15",growth:"20% this month"  },
        { id: "overDue",symbol:<IoIosTime />, heading: "OverDue Books", detail: "20",growth:"+5" },
        { id: "userRegistered",symbol:<FaUsers />, heading: "Registered Users", detail: "45",growth:"5% this month"  },
    ];
    return (
        < div className='bg-green-50 h-[88vh]'>
            
            <div className="flex gap-4 p-4 pt-4 ">
                        {cards.map((card) => (
                            <CardDashboard key={card.id} id={card.id} symbol={card.symbol} head={card.heading} detail={card.detail} growth={card.growth}/>
                        ))}
                    </div>
            <div className='flex w-full mt-15'>
                        <div className='w-[70%]'><LineChart/></div>
                        <div className='w-[50%]'><Calender/></div>
            </div>
        </div>
    )
}

export default Admin
