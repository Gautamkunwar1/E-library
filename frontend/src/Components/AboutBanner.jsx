import React from 'react';
import InfoCard from './InfoCard';

function AboutBanner() {
    return (
        <div className='px-4 lg:px-24 bg-[#d0f8e7c5] py-24 '>
            <div className='flex flex-col md:flex-row items-center justify-between gap-10'>
                {/* Left Side - Image */}
                <div className='w-full md:w-1/2 flex justify-center'>
                    <img 
                        src="src/Images/Books.png" 
                        alt="Book Illustration" 
                        className='max-h-96 w-auto object-contain' 
                    />
                </div>

                {/* Right Side - Text Content */}
                <div className='w-full md:w-1/2 space-y-6 text-center md:text-left'>
                    <h2 className='text-4xl md:text-5xl font-bold leading-snug text-black'>
                        Find Your Favourite <br />
                        <span className='text-[#428b5e]'>Book Here</span>
                    </h2>
                    <p className='text-gray-700 md:w-4/5 mx-auto md:mx-0'>
                        Discover a wide variety of books tailored for every reader. Whether you’re into fiction, research, or learning new skills — our e-library has something just for you.
                    </p>

                    <div className='flex justify-center md:justify-start'>
                        <InfoCard />
                    </div>

                    <div className='flex justify-center md:justify-start'>
                        <button className='w-40 bg-[#44a561f1] py-2 rounded-md text-white font-semibold hover:bg-[#388f55] transition'>
                            Explore Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutBanner;
