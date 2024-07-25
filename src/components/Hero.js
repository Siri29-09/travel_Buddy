
import { IoSearch } from "react-icons/io5";

const Hero = () => {
  return (
    <div className='w-full h-screen relative'> 
    <video className='w-full h-full object-cover'  src='./images/ban2.mp4' autoPlay loop muted/>
    <div className=' absolute w-full h-full top-0 left-0 bg-gray-900/40'>
      <div className=' absolute top-0 w-full h-full flex flex-col justify-center text-center'>
         <h1  className=' font-bold text-5xl text-white'>Adventure knows no boundaries with us</h1>
         <h5  className=' font-bold text-2xl text-white'>Let's make travel fun again!</h5>
          <form className='flex justify-between max-w-[700px] mx-auto w-full border-b-2 text-white mt-5 '>  
           
            <div>
            <input className='ps-2 py-3 bg-transparent focus:outline-none w-[300px] sm:w-[400px]' type='text' placeholder='Search Destinations' />
            </div>
            <div >
            <button className='ps-4 pe-2 py-3'><IoSearch size={20} className='text-white '/></button>
            </div>
          </form>
      </div>
    </div>
    </div>
  )
}

export default Hero
