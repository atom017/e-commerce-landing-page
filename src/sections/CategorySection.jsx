import React from 'react'
import ProductsSlider from '../components/ProductsSlider'
import { hero_slides, products } from '../data'

const CategorySection = () => {
  return (
    <div className='w-full md:container mx-auto bg-black py-6 my-5 rounded-md flex gap-1 justify-between'>
        <div className='max-w-[150px] h-full relative'>
            <img className='w-full h-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9Hxvq0iRzI6bNsc8xb-kToWWafKL6rzMN07S3LRLS3tmLtk3QzexO0tP3-uJmSLYM0Nc&usqp=CAU" alt="" />
            <div className="absolute right-0">
                <h2 className='text-white'>Devices</h2>
            <p className='text-white'>for the best</p>
            </div>
           
        </div>
        <ProductsSlider slides={products}/>
    </div>
  )
}

export default CategorySection