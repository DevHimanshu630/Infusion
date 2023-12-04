import React from 'react'
// import images from './digital1.jpg';
function Main() {

const imagePath = 'digital1.jpg'; // Replace with the actual path to your image

  const myStyles = {
    backgroundImage: `url('${imagePath}')`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    WebkitTextFillColor: 'transparent',
    WebkitBackgroundClip: 'text',
  };
  const centerDiv = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: '1',
  };
  return (
    <div className='flex flex-col mt-9' style={centerDiv}>
        <div className='flex justify-start absolute mt-[70px] text-gray-800 text-[40px]  font-medium leading-125 tracking-wider'>
            Manage
        </div>
        
        <div className=''>
            <h1 className='font-poppins text-[334px] font-bold  uppercase' style={myStyles}>digital</h1>
        </div>

        <div className='flex justify-end absolute mt-[380px] ml-[850px] text-gray-800 text-[40px]  font-medium leading-125 tracking-wider'>
            Signage with Ease
        </div>

        <div className='flex gap-5 mt-[90px]'>
            
                <p className='text-gray-400 text-[30px] leading-150 tracking-tighter'>The ultimate solution to streamline your signage operations</p>
                
                <div className=' flex items-center text-center justify-center w-[225.163px] h-[59px] p-[31.306px 57.796px] gap-[12.041px] border-[1.204px] border-orange-500'>
                    <button className='text-orange-500 text-[21.673px] font-semibold leading-125 tracking-wider'>Schedule my Demo</button>
                </div>
                <div className=' flex items-center text-center justify-center w-[225.163px] h-[59px] p-[31.306px 57.796px] gap-[12.041px] border-[1.204px] bg-[#FF6500]'>
                     <button className='text-[#fff] text-[21.673px] font-semibold leading-125 tracking-wider'>Start Free Trial</button>
                </div>
        </div>

    </div>
  )
}

export default Main