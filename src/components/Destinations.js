import React, { useState } from 'react'

function Destinations() {
  const[noOfElement, setnoOfElement] = useState(4);

  const loadMore = ()=>{
    setnoOfElement(noOfElement + noOfElement);
  }

  const slice = data.cardData.slice(0, noOfElement);
  return (
    <div className='mx-5'>
          <h1 className='font-semibold text-4xl'>Trending Destinations</h1>
          <div className='mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 '>

           {slice.map((d) => (
            
             <div className='flex flex-col '>
             <div className=' overflow-hidden h-full '>
                <div>
                 <img src={d.img} className=' w-96 h-56' alt='' />
                 </div>
                 <div>
                  <h1 className='text-sm font-semibold'>{d.name}</h1>
                 </div>
             </div>
             </div>
             
           )) }
        </div>
          
       <div className='max-w-[500px] mx-auto w-full flex justify-center mt-10'>
       <button onClick={()=> loadMore()} className='border border-black px-4 py-3 font-medium '>View More</button>
       </div>
    </div>
  )
}

const data = {
  cardData:[
  {
    name : 'Barcelona',
    img :'./images/plc1.jpg'
  },
  {
    name : 'Paris',
    img :'./images/plc2.png'
  },
  {
    name : 'Rome',
    img :'./images/plc3.jpg'
  },
  {
    name : 'Vietnam',
    img :'./images/plc4.jpg'
  },
  {
    name : 'India',
    img :'./images/plc5.jpg'
  },
  {
    name : 'İstanbul',
    img :'./images/plc6.webp'
  },
  {
    name : 'Marrakech',
    img :'./images/plc7.avif'
  },
  {
    name : 'Cancún',
    img :'./images/plc8.jpg'
  },
  {
    name : 'Tokyo',
    img :'./images/plc9.webp'
  },
  {
    name : 'Sydney',
    img :'./images/plc10.jpg'
  },
  {
    name : 'Costa Rica',
    img :'./images/plc11.jpg'
  },
  {
    name : 'Phuket',
    img :'./images/plc12.jpg'
  },
]
}

export default Destinations
