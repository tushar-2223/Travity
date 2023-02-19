import React from 'react'
import Herosection from '../components/Herosection'
import PopDestination from '../components/PopDestination'
import Navbar from '../components/Navbar'
import { SearchPage } from '../components/SearchPage'
import { Services } from '../components/Services'
import { Packages } from '../components/Packages'
import { Footer } from '../assets/Footer'
import Plans from '../components/Plans'

function Homepage() {
  return (
    <>
      <Navbar />
      <div className='bg-background bg-cover bg-top overflow-x-hidden'>
        <div className='backdrop-blur-3xl'>
          <Herosection />
          <SearchPage />
          <PopDestination />
          <Services />
          <Packages />
          <Plans/>
        </div>
      </div>
      <Footer/>
    </>

  )
}

export default Homepage