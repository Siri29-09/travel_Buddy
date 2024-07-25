import React ,  { useRef } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



function Stay() {


  let sliderRef = useRef(null);
  const play = () => {
    sliderRef.slickPlay();
  };
  const pause = () => {
    sliderRef.slickPause();
  };
  
  const settings = {
    
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]


  };

  return (
    <div className='mx-7 mt-5'>
      <h1 className='font-semibold text-4xl'>Browse by property type</h1>
      <div className='w-full'>
      <div className=' mt-10'>
      <Slider ref={slider => (sliderRef = slider)}  {...settings}>
            {data.map((d) => (
              <div className='text-black h-[280px] font-medium gap-5'>
                <div>
                  <img src={d.img} alt='' className=' h-52 w-52' />
                </div>

                <div>
                  <h5>{d.name}</h5>
                </div>
              </div>
            ))            
            }
            </Slider>
            <div style={{ textAlign: "center" }}>
        <button className="button" onClick={play}>
          
        </button>
        <button className="button" onClick={pause}>
        
        </button>
      </div>
      </div>

      </div>
      
    </div>
  )
}
const data = [
  {
    name:'Hotels',
    img:'./images/stay1.webp',
  },
  {
    name:'Tiny House',
    img:'./images/stay2.jpg',
  },
  {
    name:'Appartments',
    img:'./images/stay3.jpg',
  },
  {
    name:'Restorts',
    img:'./images/stay4.jpg',
  },
  {
    name:'Villas',
    img:'./images/stay5.webp',
  },
  {
    name:'Tree Houses',
    img:'./images/stay6.webp',
  },
  {
    name:'Coteges',
    img:'./images/stay7.jpg',
  },
]
export default Stay
