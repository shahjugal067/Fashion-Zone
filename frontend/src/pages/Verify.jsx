import React, { useContext, useEffect } from 'react'
import { ShopContext } from '../context/ShopContext'
import { useSearchParams } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'
import {ArrowRight, CheckCircle, HandHeart} from 'lucide-react'

const Verify = () => {

    const { navigate, token, setCartItems ,backendUrl} = useContext(ShopContext)
    const [searchParams,setSearchParams ] = useSearchParams()

    const success = searchParams.get('success')
    const orderId = searchParams.get('orderId')

    const verifyPayment = async()=>{
            try {
                if(!token){
                    return null
                }
                const response = await axios.post(backendUrl + '/api/order/verifyStripe',{success,orderId},{headers:{token}})
    
                if(response.data.success){
                    setCartItems({}); // cart data will be empty after payment success
                    navigate('/orders')
                }else{
                    navigate('/cart')
                }
            } catch (error) {
                console.log(error)
                toast.error(error.message)
            }
    }

    useEffect(()=>{
        verifyPayment();
    },[token])

  return (
    <div className='h-screen flex items-center justify-center px-2'>
    {/* <Confetti width={window.innerWidth} height={window.innerHeight}  */}
    {/* gravity={0.1} style={{zIndex:99}} numberOfPieces={600} recycle={false}/> */}

    <div className='max-w-md w-full bg-gray-800 rounded-lg p-4 shadow-xl relative z-10 overflow-hidden'>
        <div className='p-6 sm:p-8'>
            <div className='flex justify-center'>
                <CheckCircle className='text-green-500 w-14 h-14 mb-4' />
                </div>
                <h1 className='text-2xl sm:text-3xl text-center text-emerald-400 mb-2'>Purchase successful Enjoy</h1>
                
                <p className='text-yellow-500 text-center mb-2'>
                    Greate ful for your order We are Processing now.
                </p>
                <p className='text-yellow-400 text-center mb-2'>
                    Check your mail for order details
                </p>
                </div>
                <div className='bg-gray-700 rounded-lg mb-6'>
                    <div className='flex items-center justify-between py-2 px-4'>
                        <span className='text-sm text-white'>Order Number</span>
                        <span className='text-sm text-white'>#12345</span>
                    </div>
                    <div className='flex items-center justify-between mb-2  py-2 px-4'>
                        <span className='text-sm text-white'>Estimated delivery</span>
                        <span className='text-sm text-white'>3-5 working days</span>
                    </div>
                   
                </div>
                <div className='space-y-4'>
                    <button className='w-full bg-amber-600 hover:bg-amber-300 text-white py-2 px-4 rounded-lg
                     transition duration-300 flex items-center justify-center'>
                        <HandHeart className='mr-2 w-4 h-4' />
                        Thanks for Purchasing
                    </button>
                    <button className='w-full bg-amber-600 hover:bg-amber-300 text-white py-2 px-4 rounded-lg
                     transition duration-300 flex items-center justify-center'>
                        
                        Continue Shopping
                        <ArrowRight className='mr-2 w-4 h-4' />
                    </button>
            </div>
    </div>    
</div>
  )
}

export default Verify