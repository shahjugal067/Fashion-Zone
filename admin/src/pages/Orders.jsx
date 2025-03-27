import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import {backendUrl,currency} from '../App'
import {toast} from 'react-toastify'
import { ShoppingBag } from 'lucide-react'

const Orders = ({ token }) => {
  const [orders,setOrders] = useState([])

  const fetchAllOrders = async()=>{

    if(!token){
      return null
    }
    try {
      const response = await axios.post(backendUrl + '/api/order/list',{},{headers:{token}})
      
      if(response.data.success){
        setOrders(response.data.orders.reverse())
      }else{
        toast.error(response.data.message)
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  const statusHandler = async(e,orderId)=>{
    try {
      const response = await axios.post(backendUrl + '/api/order/status',{orderId,status:e.target.value},{headers:{token}})

      if(response.data.success){
        await fetchAllOrders();
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  useEffect(()=>{
    fetchAllOrders()
  },[token])

  return (
    <div>
        <h1>Orders</h1>
        <div className=''>
            {orders.map((order,index)=>(
              <div key={index} className='grid grid-cols-1 sm:grid-cols-[0.5fr_2fr_1fr] 
              lg:grid-cols-[0.5fr_2fr_2fr_1fr_1fr] gap-3 items-start border-2 border-amber-200
               md:p-8 my-3 md:my-4 text-xs sm:text-sm text-green-700 '>
                  <ShoppingBag className='w-10 h-10'/>
                  <div>
                  <div>
                    {order.items.map((item,index)=>{
                      if(index === order.items.length - 1){
                        return <p key={index} className='py-0.5'>{item.name} x {item.quantity}
                        <span>{item.size}</span></p>
                      }else{
                        return <p key={index} className='py-0.5'>{item.name} x {item.quantity}
                        <span>{item.size},</span></p>
                      }
                    })}
                  </div>
                  <p className='mb-2 mt-2'>{order.address.firstName + " " + order.address.lastName}</p>
                  <div>
                    <p>{order.address.street + ", " }</p>
                    <p>{order.address.city + ", " + order.address.state + ", " + order.address.country + ", " + order.address.zipCode }</p>
                  </div>
                  <p>{order.address.phone}</p>
              </div>
              <div>
                <p className='text-sm sm:text-base'>item:{order.items.length}</p>
                <p className='mt-2'>Method:{order.paymentMethod}</p>
                <p>Payment:{order.payment ? 'Done': 'Pending'}</p>
                <p>Date:{new Date(order.date).toLocaleDateString()}</p>
              </div>
              <p className='text-sm sm:text-base'>{currency}{order.amount}</p>
              <select onChange={(e)=>statusHandler(e,order._id)} value={order.status} className='p-1'>
               <option value="Order Placed">Order Placed</option>
               <option value="Packing">Packing</option>
               <option value="Shipped">Shipped</option>
               <option value="Out for Delivery">Out for Delivery</option>
               <option value="Delivered">Delivered</option>
              </select>
              </div>
            ))}
        </div>
    </div>
  )
}

export default Orders