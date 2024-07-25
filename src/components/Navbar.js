import React, { useState } from 'react'
import { IoPersonOutline } from "react-icons/io5";
import { MdGTranslate } from "react-icons/md";
import { TbMenu } from "react-icons/tb";
import { BsTwitterX, BsInstagram, BsGlobe2 } from "react-icons/bs";
import { FaFacebookF, FaLinkedinIn  } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
      const[nav, setNav] = useState(false)
      const handleNav = () => {
        setNav(!nav);       
      }
      const navigate = useNavigate();

  return (
    <div className='flex w-full justify-between items-center h-20 bg-transparent px-5 absolute z-10 '>
       <div>
        <h1 className=' font-bold text-2xl text-white'> <span className='text-[#497c9b]'> TRAVEL</span >_BUDDY</h1>
       </div>
       <ul className='hidden md:flex gap-5 cursor-pointer font-semibold'>
        <li onClick={() => navigate('/')} className='hover:text-[#497c9b] text-white'>Home</li>
        <li  onClick={() => navigate('/guide')} className='hover:text-[#497c9b] text-white'>Guide</li>
        <li  onClick={() => navigate('/destiny')} className='hover:text-[#497c9b] text-white'>Destinations</li>
        <li  onClick={() => navigate('/packages')} className='hover:text-[#497c9b] text-white'>Packages</li>
        <li  onClick={() => navigate('/blog')} className='hover:text-[#497c9b] text-white'>Blog</li>
       </ul>
       <div className='hidden md:flex gap-5'>
       <IoPersonOutline className='text-xl mt-2 hover:text-[#497c9b] cursor-pointer font-semibold text-white'/>
       <MdGTranslate className='text-xl mt-2 hover:text-[#497c9b] cursor-pointer font-semibold text-white'/>
       <button className=' px-3 py-1 border border-white text-white font-semibold'>LogIn / SigIn</button>

       </div>

{/* hamberguer */}
       <div onClick={handleNav} className='md:hidden flex gap-5 z-10'>
        {nav ? <MdClose className='text-2xl mt-2 hover:text-[#497c9b] cursor-pointer font-semibold'/> : <TbMenu className='text-3xl mt-2 hover:text-[#497c9b] cursor-pointer font-semibold text-white'/>}
       
      
       </div>

{/* mobile menu */}
       <div onClick={handleNav} className ={nav ? ' absolute left-0 top-0 w-full bg-gray-100/90 px-4 py-7 flex flex-col' : ' absolute left-[-100%] '}>
        <ul className='text-xl space-y-5 font-semibold'>
        <h1 className=' font-bold text-2xl'> <span className='text-[#497c9b]'> TRAVEL</span>_BUDDY</h1>
        <li className='hover:text-[#497c9b] border-b-2 border-black'>Home</li>
        <li className='hover:text-[#497c9b] border-b-2 border-black'>Guide</li>
        <li className='hover:text-[#497c9b] border-b-2 border-black'>Destinations</li>
        <li className='hover:text-[#497c9b] border-b-2 border-black'>Packages</li>
        <li className='hover:text-[#497c9b] border-b-2 border-black'>Blog</li>
        <div className='flex flex-col my-5'>
        <button className=' py-2 mb-6 bg-[#09a5bc] text-white font-semibold'>Profile</button>
        <button className=' py-2 bg-[#09a5bc] text-white font-semibold'>LogIn / SigIn</button>
        </div>
        <div className='flex justify-evenly font-semibold cursor-pointer'>
        <BsTwitterX  className='hover:text-[#497c9b] '/>
        <FaFacebookF  className='hover:text-[#497c9b] '/>
        <BsInstagram  className='hover:text-[#497c9b] '/>
        <FaLinkedinIn  className='hover:text-[#497c9b] '/>
        <BsGlobe2  className='hover:text-[#497c9b] '/>
        </div>
        </ul>
        
       </div>
    </div>
  )
}

export default Navbar
