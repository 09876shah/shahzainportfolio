import React from 'react'
import  { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function testimonial() {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
      progressCircle.current.style.setProperty('--progress', 1 - progress);
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };
    return (
   <section className='flex flex-col justify-center items-center mt-14 gap-6 pb-16' id='testimonial'>
    <div className="heading flex flex-col  items-center gap-5">
        <h1 className='font-bold text-4xl'>Testimonials</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas vitae modi, ad corporis expedita accusantium.</p>
    </div>
    <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >{

        testimonialdata.map((item,index)=>(
        <SwiperSlide className=''>
            <div className="slideitem  text-center  bg-gray-300 p-6 rounded-md">
            <p className=''>{item.Text}</p>
            <div className="main">
                <span className='text-orange-500 '>{item.name}</span>
            </div>
            </div>


            
        </SwiperSlide>
        ))
        
      }
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
   </section>
  )
}

const testimonialdata=[
    {
        name:"SHAHZAIN",
        Text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam deserunt magni laudantium.Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam deserunt magni laudantiumLorem ipsum dolor sit amet consectetur adipisicing elit. Veniam deserunt magni laudantium.Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam deserunt magni laudantium.."
    },
    {
        name:"SHAHZAIN",
        Text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam deserunt magni laudantium.Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam deserunt magni laudantium.Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam deserunt magni laudantium.Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam deserunt magni laudantium."
    },
    {
        name:"SHAHZAIN",
        Text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam deserunt magni laudantium.Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam deserunt magni laudantium.Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam deserunt magni laudantium.Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam deserunt magni laudantium."
    },
    {
        name:"SHAHZAIN",
        Text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam deserunt magni laudantium.Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam deserunt magni laudantium.Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam deserunt magni laudantium.Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam deserunt magni laudantium."
    },
    {
        name:"SHAHZAIN",
        Text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam deserunt magni laudantium.Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam deserunt magni laudantium.Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam deserunt magni laudantium.Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam deserunt magni laudantium."
    },
]