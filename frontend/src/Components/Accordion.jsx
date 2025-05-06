import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

function Accordion({ title, desc }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <div className="bg-[#30c774a9] w-[90%] h-[50px] mx-auto text-white pl-5 flex justify-between items-center pr-5 shadow-2xl mb-1 cursor-pointer" onClick={toggleAccordion} >
                <h1 className="font-medium cursor-pointer text-[17px]">{title}</h1>
                {isOpen ? <FaMinus /> : <FaPlus />} 
            </div>
            {isOpen &&
                <div className="w-[90%] mx-auto pl-5 pb-3">
                    <p>{desc}</p>
                </div>
            }
        </div>
    );
}

export default Accordion;
