import React from 'react'

function Header({ title }) {
    return (
        <>
            <h1 className='text-3xl md:text-[40px] font-bold text-blue-900 text-center my-10'>{title}</h1>
        </>
    )
}

export default Header