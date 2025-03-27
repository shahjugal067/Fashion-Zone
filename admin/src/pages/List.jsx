import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { backendUrl, currency } from '../App'
import { Trash } from 'lucide-react'

const List = ({token}) => {

  const [list,setList] = useState([])

  const fetchList = async()=>{
    try {
       const response = await axios.get(backendUrl+'/api/product/list')
       
       if(response.data.success){
        setList(response.data.products)
       }else{
        toast.error(response.data.message)
       }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }
  const removeProduct = async (id)=>{
      try {
        const response = await axios.post(backendUrl+'/api/product/remove',{id},{headers:{token}})

        if(response.data.success){
          toast.success(response.data.message)
         await fetchList();
        }else{
          toast.error(response.data.message)
        }
      } catch (error) {
        console.log(error)
        toast.error(error.message)
      }
  }

  useEffect(()=>{
    fetchList();
  },[])
  
  return (
    <>
     <p className='mb-2'>All Products</p> 
     <div className='flex flex-col gap-2'>
      {/* create table for the title  */}
        <div className='hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr] border
         text-center bg-purple-100 px-2 text-sm text-gray-600'>
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b className='text-center'>Actions</b>
        </div>
        {list.map((item,index)=>(
          <div key={index} className='grid grid-cols-[1fr_3fr_1fr] md:grid-cols-[1fr_3fr_1fr_1fr_1fr] text-sm text-center justify-center gap-2 items-center border py-1 px-2' >
            <img className='w-12 h-12' src={item.image[0]} alt="" />
            <p>{item.name}</p>
            <p>{item.category}</p>
            <p>{currency}{item.price}</p>
            <Trash onClick={()=> removeProduct(item._id)}
             className='text-red-400 w-4 h-4 md:text-center text-right cursor-pointer text-lg '/>
          </div>
        ))}
     </div>
    </>
  )
}

export default List