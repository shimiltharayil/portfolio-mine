import React, { ReactElement } from 'react'
import { motion } from "framer-motion"
interface Props {
    directionLeft?: boolean;
}

function Skill({directionLeft}: Props): ReactElement {
    return (
        <div className='group relative flex cursor-pointer' >
            <motion.img 
            initial={{
                x:directionLeft ? -200:200,
                opacity:0
            }}
            transition={{ duration: 1}}
            whileInView={{ opacity:1, x:0}}
            className="rounded-full border border-gray-500 object-cover h-10 w-10 md:w-24 md:h-24 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out"
            src="/download.png" alt="" />
            <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-10 w-10 md:w-24 md:h-24 xl:w-32 xl:h-32 rounded-full z-0' >
                <div className='flex items-center justify-center h-full'>
                    <p className='text-sm md:text-3xl font-bold text-black opacity-100'>85%</p>
                </div>
            </div>
        </div>
    )
}

export default Skill
