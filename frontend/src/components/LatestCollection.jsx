import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import ProductItem from './ProductItem';

const LatestCollection = () => {
     const { products } = useContext(ShopContext);
     
    const [latestProducts, setLatestProducts ] = useState([])

    useEffect(()=>{
        setLatestProducts(products.slice(0,16));
    },[products])

  return (
    <div className='my-10 px-20'>
        <div className='text-center py-8 text-2xl'>
            <Title text1='New' text2='Arrivals' />
            <p className='w-2/3 m-auto text-sm sm:text-sm text-gray-700 md:text-base'>
            Grab Them Before They're Gone! | Get Yours Now!
            </p>
        </div>
        {/* rendering products  */}
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4'>
            {latestProducts.map((item,index)=>(
              <ProductItem key={index} id={item._id} image={item.image}
              name={item.name} price={item.price} />
            ))}
        </div>
        
    </div>
  )
}

export default LatestCollection