import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { AiFillGithub } from 'react-icons/ai'

export const Footer = () => {
  return (
    <motion.div className='bg-gray-900 text-white'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1.5 }}
    >
        <ul className='flex space-x-4 text-lg mt-3 pt-3 font-thin pb-3 justify-center'>
                <Link href={"https://github.com/AtarioPZ"} passHref>
                <li className='cursor-pointer mx-2'>
                   <AiFillGithub /> 
                </li>
                </Link>            
        </ul>
    </motion.div>
  )
}
