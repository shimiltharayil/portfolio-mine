import React, { ReactElement } from 'react';
import { motion } from "framer-motion";
import Image from "next/image";

interface Props {
    
}

function About({}: Props): ReactElement {
    return (
      <motion.div 
      initial={{ opacity:0 }}
      whileInView={{ opacity:1}}
      transition={{ duration:1.5}}
      className="flex flex-col relative h-screen text-center md:text-center md:text-left md:flex-col max-w-7xl px-10 justify-evenly mx-auto items-center">

        <h3 className="absolute top-20  uppercase tracking-[20px] text-gray-500 text-2xl">
          About
        </h3>

        <motion.img
          initial={{
            x: -200,
          }}
          transition={{
            duration: 1.2,
          }}
          whileInView={{ opacity:1,x: 0 }}
          viewport={{ once: true }}
          src="/mine.png.jpg"
          alt=""
          className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[500px]"
        />
        <div className=" px-0 md:px-10">
          <p className='text-sm'>
            I'm Shimil. I create Web applications using HTML, CSS and
            JavaScript in the client-side,Typescript, React and Next.js has a
            Front-End frame work,MongoDb,Mongoose,Express,Node.js in the back-
            End and bit of UI/UX design using Figma I create Web applications
            using HTML, CSS and JavaScript in the client-side,Typescript, React
            and Next.js has a Front-End frame
            work,MongoDb,Mongoose,Express,Node.js in the back- End and bit of
            UI/UX design using Figma
          </p>
        </div>
      </motion.div>
    );
}

export default About
