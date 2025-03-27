import React from 'react'

const Contact = () => {
  return (
   <div className='px-20'>
     <div className='text-center text-2xl pt-10 border-t'>
      <h1>Contact Us</h1>
    </div>
    <div className='py-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
      <img src="src/assets/p1.avif" alt="" 
      className='w-full md:max-w-[450px]'/>
      <div className='flex flex-col justify-center items-start gap-6'>
        <p className='text-lg'>Our Stores</p>
        <p className='text-gray-500'>Sarmujwa-2, Rautahat</p>
        <p className='text-gray-500'>Phone:+977 9846638937 <br />Email:shahjugal067@gmail.com</p>
        <p className='text-xl text-gray-600'>Career</p>
        <p>Privacy Policy</p>
        <button className='bg-yellow-500 text-white px-8 py-4 text-sm hover:bg-gray-700 transition-all duration-300'>
          Explore jobs
        </button>
      </div>
    </div>
   </div>
  )
}

export default Contact