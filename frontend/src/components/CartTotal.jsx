import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';

const CartTotal = () => {
    const {currency,delivery_fee, getCartAmount } = useContext(ShopContext);

  return (
    <div className='w-full px-20'>
        <div className='text-2xl'>
            <Title text1='Cart' text2='Total' />
        </div>

        <div className='flex flex-col gap-2 mt-2 text-sm'>
            <div className='flex justify-between '>
                <p>Subtotal</p>
                <p>{currency}{getCartAmount().toFixed(2)}</p>
            </div>
            <hr />
            <div className='flex justify-between ' >
                <p>Delivery Charges</p>
                <p>{currency}{delivery_fee.toFixed(2)}</p>
            </div>
            <hr />
            <div className='flex justify-between '>
                <b>Total:</b>
                <b>{currency}{getCartAmount() ===0 ? 0 : getCartAmount() + delivery_fee}</b>
            </div>
        </div>
    </div>
  )
}

export default CartTotal