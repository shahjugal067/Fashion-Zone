import { EyeOff, Mail, User } from 'lucide-react';
import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext';
import axios from 'axios';
import { toast } from 'react-toastify';

const Login = () => {

  const [currentState, setCurrentState] = useState('Login');

  const { token, setToken, navigate, backendUrl } = useContext(ShopContext);

  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');

  const onSubmitHandler = async(e)=>{
    e.preventDefault();
   try {
    if(currentState === 'Sign Up'){
      const response = await axios.post(backendUrl+'/api/user/register',{name,email,password});
      if(response.data.success){
        setToken(response.data.token);
        localStorage.setItem('token',response.data.token)
      }else{
        toast.error(response.data.message)
      }
      }else {
        const response = await axios.post(backendUrl +'/api/user/login',{email,password})
       if(response.data.success){
        setToken(response.data.token)
        localStorage.setItem('token',response.data.token)
       }else{
        toast.error(response.data.message)
       }
      }
    
   } catch (error) {
    console.log(error)
    toast.error(error.message)
   }
 }
 useEffect(()=>{
  if(token){
    navigate('/');
  }
 },[token])


  return (
    <form onSubmit={onSubmitHandler}
     className='flex flex-col items-center w-[90%] mt-14 mx-auto sm:w-96 gap-4 text-gray-800'>
      <div className='inline-flex items-center gap-2 mb-2 mt-10'>
          <p className='text-2xl'>{currentState}</p>
          
      </div>
      { currentState === 'Login' ? "" :<span className='w-full'> <User className='absolute w-5 h-5 mt-3 ml-3' />
      <input onChange={(e)=>setName(e.target.value) } value={name}
      type="text" className='w-full text-center rounded-lg px-3 py-2 outline-none border border-gray-800' 
      placeholder='Enter Name ...' required/></span>}

      <span className='w-full'> <Mail className='absolute w-5 h-5 mt-3 ml-3' />
      <input onChange={(e)=>setEmail(e.target.value) } value={email}
      type="email" className='w-full px-3 text-center py-2 outline-none rounded-lg border border-gray-800' 
      placeholder='Enter email ...' required />
      </span>

      <span className='w-full'> <EyeOff className='absolute w-5 h-5 mt-3 ml-3' />
      <input onChange={(e)=>setPassword(e.target.value) } value={password}
      type="password" className='w-full px-3 py-2 text-center rounded-lg outline-none border border-gray-800'
      required placeholder='Enter password ...' />
      </span>

      <div className='w-full flex justify-between text-sm mt-[-8px]'>
        <p className='text-gray-700 cursor-pointer'>Forgot Password?</p>
        { currentState === 'Login' 
         ? <p onClick={() => setCurrentState('Sign Up')} className='text-gray-700 cursor-pointer'>Create an account</p>
         : <p onClick={() => setCurrentState('Login')} className='text-gray-700 cursor-pointer'>Login</p>}

      </div>
      <button className='bg-yellow-500 px-8 py-2 mt-4 text-white rounded-lg hover:bg-gray-600'>
        {currentState === 'Login' ? 'Sign In' : 'Sign Up'}
      </button>
    </form>
  )
}

export default Login