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
      <div className='px-20 py-5 flex flex-col items-center'>
        <Header title="You are ready to book" />
        <div className=''>
          <Searchbar />
        </div>


        {/* ai model */}

        <section className='h-80 overflow-hidden w-screen bg-bg2 bg-cover my-10 px-40 border-2 rounded-tl-full rounded-br-full flex'>
          
          <div className='h-full relative left-40'>
            <iframe className='h-full' src="https://embed.lottiefiles.com/animation/112236"></iframe>
          </div>

          <div className='w-full h-full flex justify-center items-center px-30 flex-col'>
            <h1 className='font-extrabold text-4xl flex flex-col items-center leading-[50px]'>Generate your plan with our <span className=' bg-clip-text text-transparent inline-block bg-gradient-to-r from-blue-500 to-red-500'>AI Planner <img src={underline} className="translate-x-12 w-20" /></span></h1>


            <Link to="/aiplanner" className='flex w-40 justify-between items-center border border-black m-4 font-bold text-xl  rounded-full p-3 hover:bg-blue-600/10'>Check out <ArrowOutwardIcon /></Link>
          </div>

        
        </section>
      </div>



      {/* // </div> */}
    </>

  )
}
