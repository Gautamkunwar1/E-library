import { Link } from "react-router-dom"

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

                        <div className='flex justify-center md:justify-start '>
                        <Link to ="/premium"><button className='w-40 bg-[#44a561f1] py-2 rounded-md text-white font-semibold hover:bg-[#388f55] transition'>
                            Explore Now
                        </button></Link> 
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
