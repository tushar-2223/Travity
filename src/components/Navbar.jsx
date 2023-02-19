import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <>
            <nav className='fixed bg-white/90 w-full flex justify-center md:justify-between item-center px-20 border-b-2 z-20'>
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

                <div className="signup___signin hidden md:flex justify-center items-center p-2 cursor-pointer">
                    <div className='flex justify-center items-center gap-2'>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK5q0FP74VV9wbfwP378_7kj7iDomHuKrxkXsxDdUT28V9dlVMNUe-EMzaLwaFhneeuZI&usqp=CAU" alt="" className='h-10' />
                        <h1 className='font-semibold'>Continue with Google</h1>
                    </div>

                </div>
            </nav>


        </>

    )
}

export default Navbar