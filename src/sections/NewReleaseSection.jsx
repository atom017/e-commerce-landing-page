import React from 'react'
import NewProduct from '../components/NewProduct'
import { new_products,products } from '../data'
import {IoIosArrowForward} from 'react-icons/io'
const NewReleaseSection = () => {
    
  return (
    <section className='xl:container xl:mx-auto lg:px-6 py-7 overflow-hidden'>
      <div className='flex flex-col justify-center items-center'>
        <h2 className='text-3xl font-bold self-center'><span className='text-red-600'>New </span>Release</h2>
        <p className='py-3 self-center '>Just for you</p>
      </div>
      <div className='flex md:flex-wrap overflow-hidden flex-col items-center md:flex-row gap-1 relative'>
      {new_products.map((product,i) =>(
            <NewProduct key={i} product={product}/>
      ))}
      </div>
      <div className='flex justify-center items-center'>
      <button className='px-10 mt-4 py-2 self-center bg-gray-200 rounded-full hover:bg-gray-600 hover:text-white'>View More <IoIosArrowForward className='inline'/> </button>
      </div>
      
        
    </section>
  )
}

export default NewReleaseSection