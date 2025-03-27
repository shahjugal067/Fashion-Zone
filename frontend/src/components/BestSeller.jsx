import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'
import ProductItem from './ProductItem'

const BestSeller = () => {
    const { products } = useContext(ShopContext)
    const [bestSeller, setBestSeller ] = useState([])

    useEffect(()=>{
        const bestProduct = products.filter((item)=> (item.bestSeller))
        setBestSeller(bestProduct.slice(0,10));
    },[products])

    console.log(products)
  return (
    <div className='my-10 px-20'>
        <div className='text-center text-3xl py-8'>
            <Title text1='Top' text2='Seller' />
            <p className='text-sm text-gray-700 m-auto sm:text-sm md:text-base w-3/4'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.
            </p>
        </div>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4'>
            {bestSeller.map((item,index)=>(
                <ProductItem key={index} id={item._id} name={item.name} image={item.image}
                price={item.price} />
            ))}

        </div>
    </div>
  )
}

export default BestSeller