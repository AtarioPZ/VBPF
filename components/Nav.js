import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'
import Projects from '../pages/Projects'

const Nav = () => {
  return (
    <motion.div className='bg-gray-700 text-white'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1.5 }}
    >
        <ul className='flex space-x-4 text-lg pt-3 font-thin pb-3 justify-center'>
                <Link href={"./"} passHref>
                <li className='cursor-pointer mx-2'>
                    Home
                </li>
                </Link>

                <Link href="/Projects"> 
                  Projects
                 </Link>
            
        </ul>
    </motion.div>
  )
}

export default Nav