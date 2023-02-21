import React from 'react'
import { Searchbar } from '../assets/Searchbar'
import Header from '../assets/Header'
import underline from '../images/underline.svg'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { Link } from 'react-router-dom';

export const SearchPage = () => {
  return (
    <>
      {/* // <div className='backdrop-blur-3xl'> */}
      <div className='px-4 md:px-20 py-8 md:py-5 flex flex-col items-center'>
        <Header title="You are ready to book" />
        <div className=''>
          <Searchbar />
        </div>


        {/* ai model */}

        <section className='h-auto md:h-80 w-screen overflow-hidden bg-blue-500/20 md:bg-bg2 bg-cover my-10 px-2 md:px-40 border-2 md:rounded-tl-full md:rounded-br-full rounded-2xl md:rounded-none flex flex-col md:flex-row'>
          
          <div className='h-full flex justify-center items-center '>
            <iframe className='h-[300px] md:h-full' src="https://embed.lottiefiles.com/animation/112236"></iframe>
          </div>

          <div className='w-full h-full flex justify-center items-center px-2 md:px-30 text-center flex-col'>
            <h1 className='text-black font-extrabold text-3xl md:text-4xl block md:flex flex-col items-center leading-[50px]'>Generate your plan with our <span className=' bg-clip-text text-transparent inline-block bg-gradient-to-r from-blue-500 to-red-500'>AI Planner <img src={underline} className="translate-x-12 w-20" alt="underline"/></span></h1>


            <Link to="/aiplanner" className='flex w-40 justify-between items-center border-2 bg-blue-300 md:bg-transparent md:border-black m-4 font-bold text-xl rounded-full p-3 hover:bg-blue-600/10'>Check out <ArrowOutwardIcon /></Link>
          </div>

        
        </section>
      </div>



      {/* // </div> */}
    </>

  )
}
