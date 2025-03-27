import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom'


const ProductItem = ({ id, image,name,price }) => {
    const { currency } = useContext(ShopContext)
  return (
    <Link to={`/product/${id}`} className='text-gray-800 cursor-pointer'>
        <div className='overflow-hidden mx-auto '>
          <img src={image[0]} alt="" className='w-40 h-40 hover:scale-110 transition ease-in-out' />
        </div>
        <p className='pt-3 pb-1 text-sm'>{name}</p>
        <p className='text-sm'>{currency}{price}</p>
    
    </Link>
  )
}

export default ProductItem