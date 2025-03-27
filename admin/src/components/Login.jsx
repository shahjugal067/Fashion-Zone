import { EyeOff, Mail } from 'lucide-react'
import React, { useState } from 'react'
import axios from 'axios'
import { backendUrl } from '../App'
import { toast } from 'react-toastify'

const Login = ({ setToken }) => {
    const [email,setEmil] = useState('')
    const [password,setPassword] = useState('')

    const onSubmitHandler = async(e) => {
        
        try {
            e.preventDefault();
            const  response = await axios.post(backendUrl+'/api/user/admin',{email,password});
            if(response.data.success ){
                setToken(response.data.token)
            }else{
                toast.error(response.data.message)
            }
        } catch (error) {
         console.log(error)   
            toast.error(error.response.data.message)
         }
    }

  return (
    <div className='min-h-screen flex items-center justify-center w-full'>
        <div className='  bg-gray-300 shadow-md rounded-lg px-8 py-6 max-w-md'>
            <h1 className='text-2xl text-emerald-600'>Admin</h1>
            <form onSubmit={onSubmitHandler} >
                <div className='mb-3 min-w-72 flex'>
                    <Mail className=' absolute w-5 h-5 mt-3 ml-4 text-green-500' />
                    <input onChange={(e)=> setEmil(e.target.value)} value={email} 
                    type="email" placeholder='your email' required 
                    className='text-center rounded-md w-full px-3 py-2 outline-none border border-yellow-400 '/>
                </div>
                <div className='mb-3 min-w-72'>
                <EyeOff className=' absolute w-5 h-5 mt-3 ml-4 text-green-500' />
                    <input onChange={(e)=> setPassword(e.target.value)} value={password} 
                    type="password" placeholder='your password' required 
                    className='text-center rounded-md w-full px-3 py-2 outline-none border border-yellow-400 '/>
                </div>
                <button type='submit' className='mt-2 w-full py-2 rounded-lg px-2 bg-yellow-600 hover:bg-yellow-300'>
                    Login
                </button>
            </form>
        </div>
    </div>
  )
}

export default Login