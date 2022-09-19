import React from 'react'
import { SocialIcon } from 'react-social-icons'
import {motion} from "framer-motion";


type Props = {}

function Header({}: Props) {
  return (
    <header className='sticky top-0 p-5 flex items-start justify-between max-w-2xl mx-auto z-99 xl:items-center'>
        <motion.div initial={{
           x:-500,
           opacity:0,
           scale:0.5
        }}
          animate={{
            x:0,
            opacity:1,
            scale:1
          }}
          transition={{
            duration: 1.5,
          }}

         className='flex flex-row items-center text-gray-300 ' >
            {/* Social Icons */}
            <SocialIcon url="https://linkedin.com/in/"
             fgColor='gray'
             bgColor='transparent'
             />
            <SocialIcon url="https://github.in/in/"
             fgColor='gray'
             bgColor='transparent'
             />
            <SocialIcon url="https://gmail.com/"
             fgColor='gray'
             bgColor='transparent'
             />
             <SocialIcon url="https://instagram.com/in/shimiltharayil"
             fgColor='gray'
             bgColor='transparent'
             />

        </motion.div>
        <motion.div 
        initial={{
           x:500,
           opacity:0,
           scale:0.5
        }}
          animate={{
            x:0,
            opacity:1,
            scale:1
          }}
          transition={{
            duration: 1.5,
          }}
        className='flex flex-row items-center text-gray-300 cursor-pointer' >

            <SocialIcon 
             className='cursor-pointer'
             network='email'
             fgColor='gray'
             bgColor='transparent'
             />
             <p className='uppercase hidden md:inline-flex text-sm text-gray-400' >Get In Touch. </p>

        </motion.div>
    </header>
  )
}

export default Header