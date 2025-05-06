import React from 'react'
import { Link } from 'react-router-dom'
function Logo() {
    return (
        <div>
            <div className='flex justify-center items-center gap-3'>
                <Link to="/" className="text-2xl font-bold text-[#206b4e] flex items-center gap-2">
                    <img src="src/Images/logo.png" alt="#" className='inline-block w-10' />
                    Books Store
                </Link>
            </div>
        </div>
    )
}

export default Logo
