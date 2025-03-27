import React from 'react'

const Navbar = ({ setToken }) => {
  return (
    <div className='flex justify-between items-center p-2 bg-black/50 mx-auto top-0'>
        <img src="src/assets/logo1.PNG" width={100} alt="" />
        <button onClick={()=> setToken('')} 
        className='bg-yellow-500 text-white px-5 py-2 sm:px-6 sm:py-2 rounded-lg text-sm'>
            Logout
        </button>
    </div>
  )
}

export default Navbar