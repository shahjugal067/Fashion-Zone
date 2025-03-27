import React from 'react'

const Hero = () => {
  return (
    <div className='flex flex-col sm:flex-row border border-gray-500'>
        {/* left section */}
        <div  className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0'>
        <div  className='text-gray-500'>
            <div className='flex items-center gap-2'>
                <p className='w-8 md:w-11 h-[2px] bg-[#424242]'></p>
                <p className='text-sm md:text-base'>Best Seller</p>
            </div>
                <h1 className='text-2xl sm:py-3 lg:text-4xl leading-relaxed'>Latest Arrival Collection</h1>
                <div className='flex items-center gap-2'>
                <p className='text-sm md:text-base'>Shop Now</p>
                <p className='w-8 md:w-11 h-[1px] bg-[#424242]'></p>

                </div>
            </div>
        </div>
        {/* right section  */}
    <img className='w-full sm:w-1/3 h-80' src='src/assets/p1.avif' alt="" />
    </div>
  )
}

export default Hero