import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Collection from './pages/Collection'
import Login from './pages/Login'
import About from './pages/About'
import Contact from './pages/Contact'
import Product from './pages/Product'
import Cart from './pages/Cart'
import PlaceOrder from './pages/PlaceOrder'
import Orders from './pages/Orders'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SearchBar from './components/SearchBar'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Verify from './pages/Verify'
import HelpCenter from './components/HelpCenter'
import Blog from './pages/Blog'
import MyProfile from './pages/MyProfile'
import AboutPage from './pages/AboutPage'

const App = () => {
  return (
    <div className=''>
      <ToastContainer />
      <Navbar/>
      {/* <SearchBar/> */}
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/collection' element={<Collection/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/about' element={<AboutPage/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/product/:productId' element={<Product/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/place-order' element={<PlaceOrder/>} />
        <Route path='/orders' element={<Orders/>} />
        <Route path='/verify' element={<Verify/>} />
        <Route path='helpcenter' element={<HelpCenter/>} />
        <Route path='blog' element={<Blog/>} />
        <Route path='myprofile' element={<MyProfile/>} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App