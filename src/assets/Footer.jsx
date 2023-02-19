import React from 'react'
import { BsFacebook ,BsInstagram,BsTwitter,BsBehance} from "react-icons/bs";


export const Footer = () => {
  return (
    <div className='bg-blue-900/20 px-40 py-20 flex justify-around'>
      <div className='flex flex-col justify-center items-center border-2 border-black/10 rounded-xl p-10'>
        <div className='logo'>
          <h1 className='text-4xl font-bold p-2'>TRAVITY</h1>
        </div>
        <div className='social__icon flex gap-4 p-2'>
          <BsFacebook className='text-4xl '/>
          <BsInstagram className='text-4xl ' />
          <BsTwitter className='text-4xl ' />
          <BsBehance className='text-4xl '/>
        </div>
      </div>

      <div className='flex items-center'>
        <ul className='font-xl font-semibold text-center flex flex-col gap-4'>
          <li>About us</li>
          <li>terms and condition</li>
          <li>Read blogs</li>
          <li>Ai planner</li>
        </ul>
      </div>

      <div className='rounded-xl'>
        <h1 className='py-5 text-2xl font-bold text-blue-800'>Subscribe</h1>
        <div>
          <input type="email"  className='w-80 outline-none border-2 rounded-xl p-2'/>
        </div>
        <div className='py-5'>
          <button className='p-3 bg-blue-400 rounded-2xl w-40 font-bold'>Send</button>
          </div>
      </div>
    </div>
  )
}
