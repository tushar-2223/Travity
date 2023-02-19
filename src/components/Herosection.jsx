import React from 'react'
import bestbg2 from '../images/bestbg2.svg'


function HeroSection() {
  return (
    <div className='h-screen p-20 py-60 border-red-200'>

      <img src={bestbg2} alt="ill" className='absolute -z-10 top-0 right-0 h-[120vh] translate-x-20 -translate-y-10'/>

      <div className='container'>

        <div className="tagline__section w-[50%] flex justify-center items-start px-[60px] flex-col">
          <h1 className='font-extrabold text-7xl leading-[70px]'>Plan Your Dream <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-pink-600'>Journey </span>with Us</h1>

          <h6 className='text-xl py-2 font-bold'>Check out our best Packages</h6>

          <a href="#packages" className='font-bold p-3  bg-gradient-to-l from-green-500 to-blue-500 border-2 rounded-full'>Our Packages</a>
        </div>


      </div>

      {/* <div className="tagline__section h-full w-[50%] flex justify-center px-[60px] flex-col">
        <h1 className='font-extrabold text-7xl leading-[70px]'>Plan Your Dream <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-pink-600'>Journey </span>with Us</h1>

        <h6>Check out</h6>

      </div>

      <div className='h-full w-[50%] overflow-hidden'> */}
      {/* <div className='h-[750px] w-full bg-heroimage bg-cover'>

          </div> */}
      {/* <img src={backgroundimg} alt="" className='w-[1000px] translate-x-10'/> */}
      {/* <img src={backgroundimg} className="bg-cover" alt="hero__illustrator" srcset="" />
        <h1 className='font-extrabold text-6xl'>Plan Your Dream Journey with Us</h1> */}
      {/* </div> */}
    </div>
  )
}

export default HeroSection