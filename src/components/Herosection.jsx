import React from 'react'
import bestbg2 from '../images/bestbg2.svg'
import { motion } from 'framer-motion'


function HeroSection() {
  return (
    <div className='p-0 md:p-20 py-20 md:py-60'>

      <img src={bestbg2} alt="ill" className='invisible md:visible absolute -z-10 top-0 right-0 h-[110vh] md:translate-x-20 md:-translate-y-5' />

      <div className='container'>

        <motion.div
            initial={{ x: -50, opacity: 0 }}
            transition={{ duration: 1.2 }}
            whileInView={{ opacity: 1, x: 0 }}

          className="tagline__section w-full md:w-1/2 ms flex justify-center items-start p-2 md:px-[60px] flex-col gap-4 md:gap-2">

          <h1 className='font-extrabold text-7xl leading-[80px] md:leading-[70px]'>Plan Your Dream <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-pink-600'>Journey </span>with Us</h1>

          <h6 className='text-xl py-2 font-bold'>Adventure Awaits, Go Find It.</h6>

          <a href="#packages" className='font-bold p-3  bg-gradient-to-l from-green-500 to-blue-500 border-2 rounded-full'>Our Packages</a>
        </motion.div>


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