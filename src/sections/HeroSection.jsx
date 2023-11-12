import React from 'react'
import Carousel from '../components/Carousel'
import Slider from '../components/Slider'
import { hero_slides } from '../data';
import {FaBars} from 'react-icons/fa'
import { AiOutlineSearch , AiOutlineShoppingCart} from 'react-icons/ai';
const HeroSection = () => {
  return (
    <div className='  h-[50vh] w-screen md:h-[80vh] relative'>
      <nav className='absolute z-[3] w-[50%] left-1/4 top-[5%]'>
        <div className="flex justify-between">
        <p className='text-white'>PI </p>
        <div className='flex'>
          <AiOutlineSearch className='text-white mr-3'/>
          <AiOutlineShoppingCart className='text-white mr-3'/>
          <FaBars className='text-white'/>
        </div>
        </div>
        
      </nav>
        <Slider slides={hero_slides} />
        <div className='absolute z-[2] flex flex-col transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2  justify-center'>
            <p className='text-white text-sm self-center'>The Best Look</p>
            <h2 className='p-0 m-0 text-white self-center text-xl md:text-3xl lg:text-4xl font-bold' >Anytime Anywhere</h2>
            <p className='text-white text-sm self-center'>Starts from 1000 mmk</p>
            <button className='rounded-full px-8 py-2 backdrop-blur-lg opacity-60 self-center text-white bg-black w-fit'>View</button>
          </div>
    </div>
  )
}

export default HeroSection