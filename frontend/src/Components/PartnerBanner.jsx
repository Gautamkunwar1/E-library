import React from 'react'

function PartnerBanner() {
    return (
        <>
            <h1 className='text-center text-3xl font-bold pl-5 mt-20'>Our Major Publisher Partners</h1>
            <p className='text-center text-lg mt-2'>Enjoy reading books from our elite publishing partners in India</p>

            <div className='flex flex-wrap lg:flex-nowrap justify-center lg:justify-around items-center mx-auto w-[95%] lg:w-[90%] rounded-lg shadow-2xl m-2 opacity-75 mt-5  bg-[#88e69888] py-4 gap-4'>
                <div className='h-20 sm:h-24 md:h-28 lg:h-32 p-2'>
                    <img src="src/Images/nbt.png" className='h-full w-auto object-contain' alt="NBT" />
                </div>
                <div className='h-20 sm:h-24 md:h-28 lg:h-32 p-2'>
                    <img src="src/Images/walker.png" className='h-full w-auto object-contain' alt="Walker" />
                </div>
                <div className='h-20 sm:h-24 md:h-28 lg:h-32 p-2'>
                    <img src="src/Images/rupa.png" className='h-full w-auto object-contain' alt="Rupa" />
                </div>
                <div className='h-20 sm:h-24 md:h-28 lg:h-32 p-2'>
                    <img src="src/Images/assestplan.png" className='h-full w-auto object-contain' alt="Asset Plan" />
                </div>
                
                <div className='h-20 sm:h-24 md:h-28 lg:h-32 p-2'>
                    <img src="src/Images/shri.png" className='h-full w-auto object-contain' alt="Shri" />
                </div>
            </div>
        </>
    )
}

export default PartnerBanner;
