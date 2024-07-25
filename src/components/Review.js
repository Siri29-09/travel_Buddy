import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


function Review() {
   
        var settings = {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
        };
    
  return (
    <div className='max-w-[480px] mx-auto  text-center mt-10'>
        <div className='flex justify-center text-center '>
        <h1 className='font-semibold text-4xl text-center'>See What Our Clients Saying About Us</h1>
        </div>
      <div className='relative'>
      <div className='max-w-[480px] mx-auto w-full text-center mt-10 '>
      <Slider {...settings}>
       {data.map((d) => (
        <div className=' '>
       <div className='bg-white mt-10 relative shadow-lg'>
        <p className=' pt-10 px-5 text-sm'>{d.name}</p>
        <p className='pb-5 font-medium pt-3'>{d.customer}</p>
       <div className=' absolute top-[-25%] left-[40%] z-10 '>
        <img src={d.img} alt='' className=' w-20 h-20 rounded-full ]'  />
       </div>
       </div>
         
      </div>
       ))}
       </Slider>
   </div>
  
      </div>
      
   </div>
  )
}

const data = [
   {
    name:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
    img:'./images/rev1.jpg',
    customer:'jones -Paris'
   },
   {
    name:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,',
    img:'./images/rev2.jpg',
     customer:'jones -Paris'
   },
   {
    name:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,.',
    img:'./images/rev3.jpg',
     customer:'jones -Paris'
   },
   {
    name:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,.',
    img:'./images/rev4.jpg',
     customer:'jones -Paris'
   },
]

export default Review
