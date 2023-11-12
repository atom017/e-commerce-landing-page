import React from 'react'
import { products } from '../data'
import BestProduct from '../components/BestProduct'
import { AiFillAccountBook } from 'react-icons/ai'
import {IoIosArrowForward} from 'react-icons/io'
const BestProductSection = () => {
  return (
    <section className='xl:container  xl:mx-auto px-3 lg:px-6 py-7 overflow-hidden'>
      <div className='flex flex-col justify-center items-center'>
        <h2 className='text-3xl font-bold self-center'>Best Deals</h2>
        <p className='py-3 self-center '>Just for you</p>
      </div>
      <div className='grid grid-cols-6 place-items-center gap-1 justify-evenly'>
      {products.map((product,i) =>(
            <BestProduct key={i} product={product}/>
      ))}
      </div>
      <div className='flex justify-center items-center'>
      <button className='px-10 py-2 self-center bg-gray-200 rounded-full hover:bg-gray-600 hover:text-white'>View More <IoIosArrowForward className='inline'/> </button>
      </div>
      
        
    </section>
  )
}

export default BestProductSection