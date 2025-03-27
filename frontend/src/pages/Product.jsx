import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
import { Star } from 'lucide-react';
import RelatedProducts from '../components/RelatedProducts';

const Product = () => {
  const { productId } = useParams();
  const { products,currency,addToCart } = useContext(ShopContext)

  const [productData, setProductData] = useState(false)
  const [image,setImage] = useState('')
  const [size,setSize] = useState('')

  const fetchProductData = async()=>{
      products.map((item)=>{
        if(item._id=== productId){
          setProductData(item)
          setImage(item.image)
          return null
        }
      })
  }
  useEffect(()=>{
    fetchProductData();
  },[productId])
  return productData ? (
      <div className='border-t pt-10 transition-opacity ease-in duration-500 opacity-100'>
        {/* product data is heer  */}
        <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>

        {/* product image are here  */}
        <div  className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between
           sm:justify-normal sm:w-[18%] w-full'>
            { productData.image.map((item,index)=>(
              <img src={item} key={index} alt="" className='w-[24%] sm:w-full cursor-pointer flex-shrink-0 ' 
              onClick={()=>setImage(item)}/>
            ))}
          </div>
            <div className='w-full sm:w-[80%] '>
              <img src={image} alt="" className='w-full h-auto' />

            </div>
        </div>
         {/* product detail here  */}
         <div className='flex-1 '>
          <h1 className='text-xl mt-2'>{productData.name}</h1>
            <div className='flex items-center gap-1 mt-2'>
              <Star src="" alt="" className='w-3.5 text-yellow-500' />
              <Star src="" alt="" className='w-3.5 text-yellow-500' />
              <Star src="" alt="" className='w-3.5 text-yellow-500' />
              <Star src="" alt="" className='w-3.5 text-yellow-500'/>
              <Star src="" alt="" className='w-3.5'/>
              <p className='pl-2'>(150)</p>
            </div>
            <p className='mt-5 text-2xl '>{currency}{' '}{productData.price}</p>
            <p className='mt-5 text-gray-500 md:w-4/5'>{productData.description}</p>
            <div className='flex flex-col gap-4 my-8'>
              <p>Select Size</p>
              <div className='flex gap-2'>
            { productData.sizes.map((item,index)=>(
              <button onClick={()=>setSize(item)}
              key={index} className={`border border-gray-500 text-gray-500 px-3 py-1 ${item === size ? 'bg-yellow-500 text-white' : ''}`}>{item}</button>
            ))}
              </div>
            </div>
            <button onClick={()=>addToCart(productData._id,size)}
            className='bg-yellow-500 text-white py-3 px-8 text-sm active:bg-yellow-600 rounded-sm'>
              Add To Cart
            </button>
            <hr  className='mt-8 sm:w-4/5'/>
            <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
              <p>100% Original Granted.</p>
              <p>Cash On delivery available.</p>
              <p>Return policy available.</p>

            </div>
         </div>
        </div>
        {/* description and review section here  */}
        <div className='mt-10'>
            <div className='flex'>
              <p className='border px-5 py-3 text-sm'>Description</p>
              <p className='border px-5 py-3 text-sm'>Reviews</p>
            </div>
            <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-600'>
              <p>this is ecommerce website</p>
              <p>this is ecommerce website</p>
            </div>
        </div>
         {/* related products are here  */}
         <RelatedProducts category={productData.category} subCategory={productData.subCategory}/>
      </div>
  ): <div className='opacity-0'>

  </div>
}

export default Product