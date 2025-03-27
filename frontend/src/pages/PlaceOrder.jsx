import React, { useContext, useState } from 'react'
import Title from '../components/Title'
import CartTotal from '../components/CartTotal'

import { ShopContext } from '../context/ShopContext';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const PlaceOrder = () => {
  const [method,setMethod] = useState('COD');
  const navigate = useNavigate()
  const {backendUrl,token, cartItems,setCartItems,getCartAmount,delivery_fee, products } = useContext(ShopContext);
  const [formData ,setFormData ] = useState({
    firstName:'',
    lastName:'',
    email:'',
    street:'',
    city:'',
    state:'',
    zipCode:'',
    country:'',
    phone:'',
  })
  const onChangeHandler = (e) =>{
    const name = e.target.name
    const value = e.target.value

    setFormData(data=>({...data,[name]:value}))
  }
  
  const onSubmitHandler = async(e)=>{
    e.preventDefault()
    try {
      
      let orderItems = []
    for(const items in cartItems){
      for(const item in cartItems[items]){
        if(cartItems[items][item] > 0){
            const itemInfo = structuredClone(products.find((product)=> product._id == items));
            if(itemInfo){
              itemInfo.size = item;
              itemInfo.quantity = cartItems[items][item];
              orderItems.push(itemInfo);
            }
        }
      }
    }
    
    const orderData = {
      address:formData,
      items: orderItems,
      amount: getCartAmount() + delivery_fee,
    }
    switch (method){
      case 'COD':
       { const response = await axios.post(backendUrl+'/api/order/place',orderData,{headers:{token}})
        
        if(response.data.success){
          setCartItems({});
          navigate('/orders');
        }else{
          toast.error(response.data.message)
        }
        break;
      }
      case 'stripe':
           const responseStripe = await axios.post(backendUrl + '/api/order/stripe',orderData,{headers:{token}})
              console.log(responseStripe.data)
          if(responseStripe.data.success){
            const { session_url } = responseStripe.data
            window.location.replace(session_url)
          }else{
            toast.error(responseStripe.data.message)
          }
      break;
     
        default:
          break;
    }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }
  
  return (
    <form onSubmit={onSubmitHandler}
    className='px-10 flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t'>
      {/* left side  */}
         <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>
            <div className='text-xl my-3 sm:text-2xl'>
                <Title text1='Delivery' text2='Information' />
            </div>
            <div className='flex gap-3'>
                <input onChange={onChangeHandler} name='firstName' value={formData.firstName} required
                type="text" placeholder='First name ...' className='rounded py-1.5 px-3.5 w-full outline-none border border-gray-400' />
                <input onChange={onChangeHandler} name='lastName' value={formData.lastName}
                 type="text" placeholder='First name ...' className='rounded py-1.5 px-3.5 w-full outline-none border border-gray-400' />
            </div>
            
            <input onChange={onChangeHandler} name='email' value={formData.email} required 
             type="email" placeholder='Enter Email ...' className='rounded py-1.5 px-3.5 w-full outline-none border border-gray-400' />
            <input onChange={onChangeHandler} name='street' value={formData.street} required
            type="text" placeholder='Street name ...' className='rounded py-1.5 px-3.5 w-full outline-none border border-gray-400' />
            <div className='flex gap-3'>
                <input onChange={onChangeHandler} name='city' value={formData.city} required
                 type="text" placeholder='City name ...' className='rounded py-1.5 px-3.5 w-full outline-none border border-gray-400' />
                <input onChange={onChangeHandler} name='state' value={formData.state} required
                type="text" placeholder='State name ...' className='rounded py-1.5 px-3.5 w-full outline-none border border-gray-400' />
         </div>
         <div className='flex gap-3'>
                <input onChange={onChangeHandler} name='zipCode' value={formData.zipCode}  required
                type="number" placeholder='Zipcode  ...' className='rounded py-1.5 px-3.5 w-full outline-none border border-gray-400' />
                <input onChange={onChangeHandler} name='country' value={formData.country} required
                type="text" placeholder='country name ...' className='rounded py-1.5 px-3.5 w-full outline-none border border-gray-400' />
         </div>
         <input onChange={onChangeHandler} name='phone' value={formData.phone} required
         type="number" placeholder='Phone number ...' className='rounded py-1.5 px-3.5 w-full outline-none border border-gray-400' />
         </div>
        {/* right side contents  */}
        <div className='mt-8'>
          <div className='mt-8 min-w-80'>
              <CartTotal />
          </div>
            <div className='mt-12'>
              <Title text1='Payment' text2='Method' />
              <div className='flex gap-3 flex-col lg:flex-row'>
                <div onClick={()=> setMethod('stripe')}
                 className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
                  <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'stripe' ? 'bg-green-500' : ''}`}></p>
                  <p>Stripe</p>
                </div>

                <div onClick={()=> setMethod('razor')}
                className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
                  <p className={`min-w-3.5 h-3.5 border rounded-full  ${method === 'razor' ? 'bg-green-500' : ''}`}></p>
                  <p>Razor Payment</p>
                </div>

                <div  onClick={()=> setMethod('COD')}
                 className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
                  <p className={`min-w-3.5 h-3.5 border rounded-full  ${method === 'COD' ? 'bg-green-500' : ''}`}></p>
                  <p>Cash On Delivery</p>
                </div>
              </div>
              <div className='w-full text-end mt-8'>
                <button  type='submit'
                className='bg-yellow-500 px-16 py-2 text-white'>Place Order</button>
              </div>
            </div>
        </div>
    </form>
  )
}

export default PlaceOrder