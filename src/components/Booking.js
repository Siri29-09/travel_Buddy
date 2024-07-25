import React from 'react'
import { PiAirplaneTakeoffLight } from "react-icons/pi";
import { LuCalendarCheck2 } from "react-icons/lu";
import { HiOutlineRocketLaunch } from "react-icons/hi2";

function Booking() {
  return (
    <div className='grid  md:grid-cols-1 grid-cols-1 lg:grid-cols-2 gap-7 mt-10  mx-7 '>
        
        <div className=' '>
          
         <h1>Fast & Easy</h1>
        <h1 className='font-semibold text-4xl '>Book your next trip with us!!</h1>
           <div className='flex items-center justify-end my-6  mx-auto '>
     <div >
        <div className='flex gap-4 mt-6'>
        <PiAirplaneTakeoffLight size={55} className='mt-2'/>
        <div className='w-2/4'>
        <h1 className='font-medium'>Choose Destination</h1>
        <p className='text-xs '>We help you choose your next holiday destination thanks to complete and well detailed guides and tips that will help you make the best of your journey!</p>
        </div>        
        </div>

        <div className='flex gap-4 mt-6'>
        <LuCalendarCheck2 size={55} className='mt-2'/>
        <div className='w-2/4'>
        <h1 className='font-medium'>Choose Destination</h1>
        <p className='text-xs '>We help you choose your next holiday destination thanks to complete and well detailed guides and tips that will help you make the best of your journey!</p>
        </div>        
        </div>

        <div className='flex gap-4 mt-6'>
        <HiOutlineRocketLaunch  size={55} className='mt-2'/>
        <div className='w-2/4'>
        <h1 className='font-medium'>Choose Destination</h1>
        <p className='text-xs '>We help you choose your next holiday destination thanks to complete and well detailed guides and tips that will help you make the best of your journey!</p>
        </div>        
        </div>

        </div>

        </div>
        </div>
      <div className='flex items-center  my-6 mx-auto '>
        <img src='./images/book1.png' alt='/' className='' />
    
      </div>
    </div>
  )
}

export default Booking
