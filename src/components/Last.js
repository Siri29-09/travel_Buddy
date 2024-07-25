import React from 'react';
import { FaFacebookMessenger, FaLinkedinIn, FaTwitter } from "react-icons/fa6";


function Last() {
  return (
    <div className='w-full bg-[#faf9f9] mt-12 flex flex-col justify-center'>
      <div className=' mx-auto grid grid-col-1 md:grid-cols-4   py-10 border-b border-black '>
        <div>
        <h1 className=' font-bold text-2xl '> <span className='text-[#497c9b]'> TRAVEL</span >_BUDDY</h1>
        <p className=' text-sm'>Travel helps clients manage trips eaasily</p>
        <div className='flex gap-3 my-2'>   <FaLinkedinIn />
        <FaFacebookMessenger />
        <FaTwitter /></div>     
        </div>

        <div className='mb-3'>
            <h1 className=' font-medium'>Company</h1>
            <p className=' text-sm'>About Us</p>
            <p className=' text-sm'>Careers</p>
            <p className=' text-sm'>Blog</p>
            <p className=' text-sm'>Pricing</p>
        </div>

        <div className='mb-3'>
            <h1 className=' font-medium'>Destinations</h1>
            <p className=' text-sm'>Maldives</p>
            <p className=' text-sm'>Paris</p>
            <p className=' text-sm'>Bali</p>
            <p className=' text-sm'>Torronto</p>
        </div>

        <div>
            <h1 className=' font-medium'>Join Our Newsletter</h1>
            <input placeholder='your email address' className=' px-2 py-1'></input>
            <button className='border border-black px-2 py-1 my-1'>Subscribe</button>
            <p className=' text-xs'>Will send you weekkly updates out newest tour packages</p>
        </div>
      </div>
      <div className=' flex justify-center'>
        <p className='py-6 text-xs'>Copyright @ Kareem Enab 2024. All Rights Reserved.</p>
      </div>
    </div>
  )
}

export default Last
