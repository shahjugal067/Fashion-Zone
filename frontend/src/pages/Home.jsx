import React from 'react'
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
import BestSeller from '../components/BestSeller'
import Policy from '../components/Policy'
import NewsBox from '../components/NewsBox'
import HeroCarousel from './HeroCarousel'

const Home = () => {
  return (
    <div>
        {/* <Hero/> */}
        <div>
        <HeroCarousel/>
        </div>
       <div>
       <LatestCollection/>
        <BestSeller />
        <Policy />
        <NewsBox/>
       </div>
    </div>
  )
}

export default Home