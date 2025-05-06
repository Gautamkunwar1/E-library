import React from 'react';
import { FaStar } from "react-icons/fa";

function BookCard({ image, bookName, author, publishYear, genre, desc, pdf }) {
    const imageUrl = `http://localhost:8000/uploads/images/${image}`;
    const pdfUrl = `http://localhost:8000/uploads/pdfs/${pdf}`;

    return (
        <div className='w-[380px] p-2 shadow-2xl bg-[#e4fcf4da]'>
            <div className='w-full h-56 '>
                <img className='w-full h-full object-cover' src={imageUrl} alt={bookName} />
            </div>
            <div className='text-center mt-2'>
                <h2 className='text-lg font-bold'>{bookName} <span className='text-blue-500'>by {author}</span></h2>
                <p className='flex justify-end items-center gap-7 mr-6'>
                    <span className='flex gap-2 text-yellow-500'> {[1, 2, 3, 4, 5].map((star) => (
                        <FaStar key={star} />
                    ))}</span>
                    <span>{publishYear}</span>
                    <span>{genre}</span>
                </p>
            </div>
            <div className='text-center p-2'>
                <p className='line-clamp-2'>{desc}</p>

                {/* Read Now Button: opens PDF in new tab */}
                <a href={pdfUrl} target="_blank" rel="noopener noreferrer">
                    <button className='bg-[#6baf76] w-full p-2 mt-2 font-bold text-white cursor-pointer hover:bg-[#436e4a]'>
                        Read Now
                    </button>
                </a>
            </div>
        </div>
    );
}


export default BookCard
