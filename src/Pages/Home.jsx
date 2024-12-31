import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import LatestCollection from '../Components/LatestCollection'
import OurPolicy from '../Components/OurPolicy';
import NewsLetterBox from '../Components/NewsLetterBox'
import Product from './Product';


function Home() {
  return (
    <div>
      <Hero/>
      <LatestCollection/>
      <OurPolicy/>
      <NewsLetterBox/>
    </div>
  )
}

export default Home