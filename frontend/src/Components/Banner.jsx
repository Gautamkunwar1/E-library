import React from 'react'

function Banner() {
    return (
        <>
        <div className='px-4 lg:px-24 bg-[#d0f8e7c5] flex items-center'>
            <div className='flex w-full flex-col md:flex-row justify-between items-center gap-12 py-35'>
                {/* Left side */}
                <div className='md:w-1/2 space-y-8 h-full'>
                    <h2 className='text-5xl font-bold leading-snug text-black'> Access and Read Books <span className='text-[#428b5e]'>from worldwide locations</span>
                    </h2>
                    <p className='md:w-4/5'>Discover a wide variety of books tailored for every reader. Whether you’re into fiction, research, or learning new skills — our e-library has something just for you.</p>

                    <div className='flex gap-2'>
                        <input type="search" name="search" id='search' placeholder='Search a book' className='lg:w-sm py-2 px-2 rounded-s-sm outline-none bg-white '/>
                        <button className='bg-[#26914a] px-6 py-2 text-white font-medium hover:bg-[#325a37] transition-all ease-in duration-200 cursor-pointer'>Search</button>
                    </div>
                </div>

                {/* Right side */}
                <div className='h-[60vh]'>
                    <img src="src/Images/banner.png" alt="can't load" className='h-full' />
                </div>
            </div>
        </div>
        </>
    )
}

export default Banner
