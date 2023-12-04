import React from 'react'

function Navbar() {
    
  return (
    <div className='flex items-center justify-around w-full mt-9'>
        <div className=''>
            <h2 className='text-orange-500 text-[40px] font-normal leading-125'>Infusion</h2>
        </div>

        <div className=''>
            <ul className='flex gap-9 text-gray-700 text-center text-[20px] font-normal leading-125'>
                <li>Solutions</li>
                <li>Pricing</li>
                <li>Resources</li>
                <li>Contact</li>
            </ul>
        </div>

        <div className=' flex justify-center items-center w-[225px] h-[59px] text-center px-5 bg-orange-500 shadow-lg'>
            <h2 className=' text-white text-base font-semibold leading-125 tracking-wider'>Start Free Trial</h2>
        </div>
    </div>
  )
}

export default Navbar