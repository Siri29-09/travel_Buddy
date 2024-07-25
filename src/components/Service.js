import React, { useState } from 'react'

const Service = () => {
   
  return (
    <div className='py-6 '>
        <div className='max-w-[500px] mx-auto w-full text-center'>
     <h1 className='font-semibold text-4xl '>Why Choose Us?</h1>
     <p className='text-sm mt-3 text-gray-700'>We are available 7 days week to assist and answer any quations you have to ensure your vacation is unforgettable</p> 
     </div>
     <div className='flex items-center justify-center my-6 container mx-auto '>
      
           <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-7'>

             
                {data.map((d) => (
                   <div className=' shadow-lg  bg-white cursor-pointer'>
                  <div className='p-5 flex flex-col'>
                  <div className='flex justify-center'>
                    <img src={d.img} className=' w-[50%]' alt='' />
                  </div>
                  <div>
                    <h3  className='text-center text-sm font-semibold '>{d.name}</h3>
                  </div>
                  
                </div>
                </div>  
                ))}


           </div>

     </div>
    </div>
  )
}

const data = [
  {
    name : 'Stay',
    img : './images/icn1.png'
  },
  {
    name : 'Packages',
    img : './images/icn2.png'
  },
  {
    name : 'Food',
    img : './images/icn3.webp'
  },
  {
    name : 'Mapping',
    img : './images/icn4.webp'
  },
  {
    name : 'Weather',
    img : './images/icn5.png'
  },
  {
    name : '24*7 Support',
    img : './images/icn6.webp'
  },
]
export default Service
