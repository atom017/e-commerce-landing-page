import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation,Autoplay, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css/pagination';

import 'swiper/css';
import {AiOutlineArrowRight,AiOutlineArrowLeft, AiFillStar} from 'react-icons/ai'

const ProductsSlider = ({slides}) => {
    return (
        <div className='relative w-[75%] my-3 h-full  overflow-hidden '>
          {/* <div className="absolute rounded-md opacity-60 py-[3rem] px-3 backdrop-blur-md bg-slate-700 text-white flex z-[2] transform -translate-y-1/2 cursor-pointer top-[calc(50%-1rem)] image-swiper-button-prev">
            <AiOutlineArrowLeft className='text-white backdrop-blur-sm' />
          </div> */}
          <div className="absolute rounded-md opacity-90 py-6 px-3 backdrop-blur-md bg-slate-900 text-white right-[15px] flex z-[2] cursor-pointer  bottom-0 image-swiper-button-next">
            <AiOutlineArrowRight className='text-white font-bold backdrop-blur-md'/>
          </div>
          <Swiper
          className='w-full h-full bg-black'
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay]}
        spaceBetween={50}
        slidesPerView={1.5}
        navigation={{
          nextEl: ".image-swiper-button-next",
          prevEl: ".image-swiper-button-prev",
          disabledClass: "swiper-button-disabled"
        }}
        breakpoints={{
            380:{slidesPerView:2.5},
            640: { slidesPerView: 4.5},
          }}
        
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')
        
      }
      >
        {slides.map((slide,i) => (
            <SwiperSlide key={i} className='w-full h-full  relative'>
              <div className='w-[120px] md:[120px] py-[1px]  h-[120px] md:h[140px] overflow-hidden'>
              <img className = 'w-full h-full  object-cover rounded-md ' src={slide.image} alt="" />
              </div>
              <p className='text-xs md:text-sm text-white'>Refreshing Mint</p>
              <p className='text-xs md:text-sm font-bold text-white'>3000mmk</p>
              <div className='flex '>
                <AiFillStar className='text-yellow-400 text-xs '/>
                <span className='text-yellow-400 text-xs'>600 points</span>
              </div>
            </SwiperSlide>
        ))}
        
      </Swiper>
        </div>
    )    
}

export default ProductsSlider