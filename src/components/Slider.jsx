import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation,Autoplay, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css/pagination';

import 'swiper/css';
import {AiOutlineArrowRight,AiOutlineArrowLeft} from 'react-icons/ai'

const Slider = ({slides}) => {
  return (
    <div className='relative w-full h-full  overflow-hidden '>
      <div className="absolute rounded-md opacity-60 py-[3rem] px-3 backdrop-blur-md bg-slate-700 text-white flex z-[2] transform -translate-y-1/2 cursor-pointer top-[calc(50%-1rem)] image-swiper-button-prev">
        <AiOutlineArrowLeft className='text-white backdrop-blur-sm' />
      </div>
      <div className="absolute rounded-md opacity-70 py-[3rem] px-3 backdrop-blur-md bg-slate-700 text-white right-[15px] flex z-[2] cursor-pointer transform -translate-y-1/2 top-[calc(50%-1rem)] image-swiper-button-next">
        <AiOutlineArrowRight className='text-white font-bold backdrop-blur-md'/>
      </div>
      <Swiper
      className='w-full h-full '
    // install Swiper modules
    modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay]}
    spaceBetween={50}
    slidesPerView={1}
    navigation={{
      nextEl: ".image-swiper-button-next",
      prevEl: ".image-swiper-button-prev",
      disabledClass: "swiper-button-disabled"
    }}
    autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
    pagination={{ clickable: true }}
    scrollbar={{ draggable: true }}
    onSwiper={(swiper) => console.log(swiper)}
    onSlideChange={() => console.log('slide change')
    
  }
  >
    {slides.map((slide,i) => (
        <SwiperSlide key={i} className='w-full h-full  relative'>
          <div className='w-full h-full  overflow-hidden'>
          <img className = 'w-full h-[calc(100%-2rem)]  object-cover ' src={slide.image} alt="" />
          </div>
          {/* <div className='absolute flex flex-col transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'>
            <p className='text-white self-center'>The Best Look</p>
            <h2 className='text-white self-center text-3xl lg:text-4xl font-bold' >Anytime Anywhere</h2>
            <p className='text-white self-center'>Starts from 1000 mmk</p>
            <button className='rounded-full px-8 py-2 backdrop-blur-sm opacity-70 self-center text-white bg-black w-fit'>View</button>
          </div> */}
            
        </SwiperSlide>
    ))}
    
  </Swiper>
    </div>
    
  )
}

export default Slider