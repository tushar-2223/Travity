import React from 'react'
import { Link } from 'react-router-dom'
import { isMobile } from 'react-device-detect'

function Navbar() {
    return (
        <>

                <nav className='fixed bg-white/90 w-full flex justify-between item-center px-20 border-b-2 z-20'>
                    <div className="logo">

                    </div>

                    <ul className='flex m-2 font-semibold'>
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

                    <div className="signup___signin">
                            
                    </div>
                </nav>


        </>

    )
}

export default Navbar