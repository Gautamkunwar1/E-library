import { Link } from "react-router-dom";

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

                    <div className='flex justify-center md:justify-start '>
                    <Link to ="/premium"><button className='w-40 bg-[#44a561f1] py-2 rounded-md text-white font-semibold hover:bg-[#388f55] transition'>
                            Explore Now
                        </button></Link> 
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BookBanner;
