import { Headphones, Headset, Repeat1Icon, ShieldCheck } from 'lucide-react'
import React from 'react'

const Policy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center
     py-20 text-xs sm:text-sm md:text-base text-gray-800'>
        <div className=''>
            <Repeat1Icon className='w-12 m-auto mb-3' />
            <p>Exchange Policy</p>
            <p className='text-gray-400'>We offer 30 days free exchange policy</p>
        </div>
        <div className=''>
            <ShieldCheck className='w-12 m-auto mb-3' />
            <p>Quality Exchange Policy</p>
            <p className='text-gray-400'>We offer 7 days free exchange policy on Quality</p>
        </div>
        <div className=''>
            <Headset className='w-12 m-auto mb-3' />
            <p>Customer support Policy</p>
            <p className='text-gray-400'>We provide 24/7 customer support Policy</p>
        </div>
    </div>
  )
}

export default Policy