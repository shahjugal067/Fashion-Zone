import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { SearchIcon } from 'lucide-react';
// import { IoIosClose } from "react-icons/io";
import {useLocation} from 'react-router-dom'

const SearchBar = () => {
    const {search,setSearch,showSearch,setShowSearch} = useContext(ShopContext);

    const [visible,setVisible] =useState(false)
    const location = useLocation();

    useEffect(()=> {
        if(location.pathname.includes('collection')){
            setVisible(true)
        }else{
            setVisible(false)
        }
    
    },[location])

  return showSearch && visible ? (

    <div className=' text-center'>
        <div className='inline-flex items-center justify-center border border-yellow-300
         py-1  rounded-full'>
            <input value={search} onChange={(e)=> setSearch(e.target.value)}
            type="text" placeholder='Search ...' className=' ml-2 outline-none bg-inherit text-sm' />
            <SearchIcon className='w-5 h-5 mr-2 hover:text-yellow-600 cursor-pointer'/>
        </div>
        {/* <IoIosClose onClick={()=> setShowSearch(false)} className='inline w-6 h-6 cursor-pointer hover:text-red-400' /> */}
    </div>
  ) : null
}

export default SearchBar