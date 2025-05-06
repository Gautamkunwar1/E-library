import React from 'react';
import { FaSearch, FaBook, FaStar } from 'react-icons/fa';

function BookBanner() {
    return (
        <div className='px-4 lg:px-24 bg-[#d0f8e7c5] py-28'>
            <div className='flex flex-col md:flex-row items-center justify-between gap-15'>

                {/* Left Side - Image */}
                <div className='w-full md:w-1/2 flex justify-center'>
                    <img
                        src="src/Images/bookShelf.jpg"
                        alt="Book Browsing"
                        className='h-full w-full object-contain'
                    />
                </div>

                {/* Right Side - Content */}
                <div className='w-full md:w-1/2 space-y-6 text-center md:text-left'>
                    <h2 className='text-3xl md:text-[40px] font-bold leading-snug text-black'>
                        Explore Our  <span className='text-[#428b5e]'> Book Collection</span>
                    </h2>
                    <p className='text-gray-700 md:w-4/5 mx-auto md:mx-0'>
                        Browse thousands of titles, from timeless classics to the latest bestsellers. Filter by genre, author, or popularity to find your next great read.
                    </p>

                    {/* Interactive Search */}
                    <div className='flex items-center gap-2 bg-white shadow-md rounded-md px-4 py-2 w-full md:w-[80%] mx-auto md:mx-0'>
                        <FaSearch className='text-gray-500' />
                        <input
                            type='text'
                            placeholder='Search books, authors...'
                            className='w-full outline-none text-sm text-gray-800'
                        />
                        <button className='bg-[#44a561f1] text-white px-4 py-1 rounded hover:bg-[#388f55] transition font-medium'>
                            Search
                        </button>
                    </div>

                    {/* Quick Categories */}
                    <div className='flex flex-wrap justify-center md:justify-start gap-3 text-sm text-white font-medium'>
                        <span className='bg-[#60b98a] px-3 py-1 rounded-full cursor-pointer hover:bg-[#428b5e] transition'><FaBook className='inline mr-1' /> Fiction</span>
                        <span className='bg-[#60b98a] px-3 py-1 rounded-full cursor-pointer hover:bg-[#428b5e] transition'><FaBook className='inline mr-1' /> Science</span>
                        <span className='bg-[#60b98a] px-3 py-1 rounded-full cursor-pointer hover:bg-[#428b5e] transition'><FaBook className='inline mr-1' /> Biography</span>
                        <span className='bg-[#60b98a] px-3 py-1 rounded-full cursor-pointer hover:bg-[#428b5e] transition'><FaBook className='inline mr-1' /> History</span>
                        <span className='bg-[#60b98a] px-3 py-1 rounded-full cursor-pointer hover:bg-[#428b5e] transition'><FaStar className='inline mr-1' /> Top Rated</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BookBanner;
