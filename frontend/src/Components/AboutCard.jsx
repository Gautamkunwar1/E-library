import React from 'react';
import { FaBookOpen, FaClock, FaGlobe, FaSyncAlt, FaLightbulb } from 'react-icons/fa';

function AboutCard() {
    return (
        <div className='flex flex-col lg:flex-row justify-around items-center  rounded-xl shadow-lg mt-10 w-[95%] mx-auto p-8 bg-[#a9e6c4be]'>
            {/* Left Section */}
            <div className='lg:w-[45%] text-center lg:text-left mb-8 lg:mb-0 '>
                <h1 className='text-5xl font-extrabold text-green-800 mb-4 text-center'>About Us</h1>
                <p className='text-lg text-green-900 leading-relaxed'>
                    Welcome to our e-library, your digital gateway to a world of knowledge and learning. With a vast collection of books, articles, and resources across various subjects, we aim to provide easy, 24/7 access to information for learners, educators, and curious minds alike. Explore, discover, and expand your horizons with just a click!
                </p>
            </div>

            {/* Right Section */}
            <div className='lg:w-[53%] bg-white p-6 rounded-lg shadow-md'>
                <p className='text-lg text-gray-800 mb-4 font-semibold'>Key Features:</p>
                <ul className='space-y-4 text-gray-700'>
                    <li className='flex items-start gap-3'>
                        <FaBookOpen className='text-green-600 mt-1' />
                        <span className='flex-1'><strong>Vast Collection:</strong> Thousands of digital books and resources across various subjects.</span>
                    </li>
                    <li className='flex items-start gap-3'>
                        <FaClock className='text-green-600 mt-1' />
                        <span className='flex-1'><strong>24/7 Access:</strong> Learn anytime, anywhere, on any device.</span>
                    </li>
                    <li className='flex items-start gap-3'>
                        <FaGlobe className='text-green-600 mt-1' />
                        <span className='flex-1'><strong>User-Friendly Interface:</strong> Easy search and navigation for a seamless experience.</span>
                    </li>
                    <li className='flex items-start gap-3'>
                        <FaSyncAlt className='text-green-600 mt-1' />
                        <span className='flex-1'><strong>Regular Updates:</strong> Fresh content added regularly for your learning needs.</span>
                    </li>
                    <li className='flex items-start gap-3'>
                        <FaLightbulb className='text-green-600 mt-1' />
                        <span className='flex-1'><strong>Personalized Experience:</strong> Save favorites, track progress, and create reading lists.</span>
                    </li>
                </ul>

                <p className='mt-5 text-md text-gray-800'>Join us today and unlock endless learning possibilities!</p>
            </div>
        </div>
    );
}

export default AboutCard;
