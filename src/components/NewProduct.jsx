import React from 'react'

const NewProduct = ({product}) => {
  return (
    <div
    style={{'--image-url':`url(${product.image})`}}
     className="relative bg-[image:var(--image-url)] w-[250px] h-[150px] bg-center bg-no-repeat bg-cover rounded-md">
      <div className="absolute bottom-0 pl-2">
      <p className=' text-white w-[60%]'>{product.desc}</p>
      <p className=' text-white text-sm w-1/2'>{product.price}</p>
     
      </div>
      
    </div>
  )
}

export default NewProduct