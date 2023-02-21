import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { HiMenuAlt1 } from "react-icons/hi";

function Navbar() {

    // const [resnav, setResnav] = useState(false);

    // const togglenav = () => {
    //     setResnav(!resnav);
    // }

    return (
        <>
            <nav className='fixed bg-white/90 w-full flex justify-between item-center px-10 md:px-20 border-b-2 z-20'>
                <div className="logo">
                    <h1 className='h-full flex item-center justify-center text-3xl md:text-4xl font-bold p-4'>TRAVITY</h1>
                </div>

                <ul className='hidden md:flex m-2 font-semibold'>
                    <Link className='m-4 cursor-pointer hover:font-bold hover:underline underline-offset-8 ease-in-out inline-block'>
                        Explore
                    </Link>
                    <Link className='m-4 cursor-pointer hover:font-bold hover:underline underline-offset-8 ease-in-out'>
                        Book Hotel
                    </Link>
                    <Link className='m-4 cursor-pointer hover:font-bold hover:underline underline-offset-8 ease-in-out'>
                        Our Blog
                    </Link>
                    <Link className='m-4 cursor-pointer hover:font-bold hover:underline underline-offset-8 ease-in-out'>
                        Contact
                    </Link>
                </ul>

                <div className="signup___signin hidden md:flex justify-center items-center  cursor-pointer">
                    <div className='flex justify-center items-center gap-2'>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK5q0FP74VV9wbfwP378_7kj7iDomHuKrxkXsxDdUT28V9dlVMNUe-EMzaLwaFhneeuZI&usqp=CAU" alt="" className='h-10' />
                        <h1 className='font-semibold'>Continue with Google</h1>
                    </div>

                </div>

                {/* responsive */}

                {/* <div className='flex md:hidden justify-center items-center cursor-pointer' onClick={togglenav}>
                    <button className='flex justify-center items-center p-2 border-2 border-gray-600/30 rounded-lg hover:border-blue-300'>
                        <HiMenuAlt1 size={30} />
                    </button>
                </div> */}
            </nav>

            {/* responsive nav */}

           

            {/* <nav className='fixed py-5 w-screen bg-white/90 border-b-4 z-10 translate-y-[50px] px-20'>
                <Link className='w-full border-b-2 flex justify-center py-5 font-semibold text-2xl'>
                    Explore
                </Link>
                <Link className='w-full border-b-2 flex justify-center py-5 font-semibold text-2xl'>
                    Book Hotel
                </Link>
                <Link className='w-full border-b-2 flex justify-center py-5 font-semibold text-2xl'>
                    Our Blog
                </Link>
                <Link className='w-full border-b-2 flex justify-center py-5 font-semibold text-2xl'>
                    Contact
                </Link>
            </nav>
                 */}
  
    </>

    )
}

export default Navbar