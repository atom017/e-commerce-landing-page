import React from 'react'
import { AiFillStar } from 'react-icons/ai'

const BestProduct = ({product}) => {
  return (
   
    <div className = ' col-span-3 md:col-span-1  rounded overflow-hidden hover:scale-105'>
       <div className='relative w-full'>
        <p className='absolute top-0 -translate-x-1/2 left-1/2 w-[50px] text-[12px] bg-red-600 text-center text-white'>25%off</p>
        
        <img className=' w-full h-[140px]  md:h-[180px] rounded-md object-cover' src={product.image} alt="" />
       </div>
        
        <div className="flex flex-col justify-center items-center py-4">
            <p className='text-sm self-center'>Refreshing Mint</p>
            <p className='text-sm self-center'>30000mmk</p>
            <s className='self-center text-xs'>3000mmk</s>
            <div className='flex '>
            <AiFillStar className='text-yellow-400 text-xs '/>
            <span className='text-yellow-400 text-xs'>600 points</span>
            </div>
            
        </div>
    </div>
   
  )
}

export default BestProduct