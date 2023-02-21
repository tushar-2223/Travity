import { motion } from "framer-motion"
import React from 'react'

function Header({ title }) {
    
    return (
        <motion.div
            initial={{ x: -50, opacity: 0 }}
            transition={{ duration: 2 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{once:true}}
        >
            <h1 className='text-3xl md:text-[40px] font-bold text-blue-900 text-center my-10'>{title}</h1>
        </motion.div>
    )
}

export default Header