import React from 'react'
import { NavLink } from 'react-router-dom'
import {List, Plus} from 'lucide-react'

const Sidebar = () => {
  return (
    <div className='w-[18%] min-h-screen border-r-2'>
        <div className='flex flex-col gap-4 pt-6 pl-[20%] text-[14px]'>
            <NavLink to={'/add'} className='flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-lg'>
                <Plus className='h-5 w-5 text-red-400'/>
                <p className='hidden md:block'>Add Items</p>
            </NavLink>

            <NavLink to={'/orders'} className='flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-lg'>
                <List className='h-5 w-5 text-red-400'/>
                <p className='hidden md:block'>Orders</p>
            </NavLink>

            <NavLink to={'/list'} className='flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-lg'>
                <List className='h-5 w-5 text-yellow-700'/>
                <p className='hidden md:block'>List Items</p>
            </NavLink>
        </div>
    </div>
  )
}

export default Sidebar