import React from 'react'

function Explore() {
  return (
    <div className='grid  md:grid-cols-1 grid-cols-1 lg:grid-cols-2   mt-10    '>
        <div>
      <div className=' relative'>
        <img src='./images/exp1.jpg' alt='' className=' w-full  h-[350px] overflow-hidden'/>   
        <div className=' w-full h-[350px] bg-gray-900/40 absolute top-0 z-10 flex flex-col justify-center text-center'>
        
        <h5  className=' font-bold text-2xl text-white  mb-5'>Explore Cities</h5>
        <div>
        <button className=' px-3 py-1 border border-white text-white font-semibold'>View Packages</button>
        </div>
        </div>   
      </div>
      </div>
      <div>
      <div className='  relative'>
        <img src='./images/exp2.jpg' alt=''  className='w-full  h-[350px] overflow-hidden'/>
        <div className=' w-full h-[350px] bg-gray-900/40 absolute top-0 z-10 flex flex-col justify-center text-center'>
       
        <h5  className=' font-bold text-2xl text-white mb-5'>Explore Nature</h5>
        <div>
        <button className=' px-3 py-1 border border-white text-white font-semibold'>View Packages</button>
        </div>
        
        </div>
        </div>
        </div>
      
    </div>
  )
}

export default Explore
