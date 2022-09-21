import React from 'react'
import { SocialIcon } from 'react-social-icons'
import {motion} from "framer-motion";
import Link from 'next/link';


type Props = {}

function Header({}: Props) {
  return (
    <header className="hidden sticky top-0 p-5  md:flex items-start justify-between md:cursor-pointer max-w-2xl mx-auto z-99 xl:items-center cursor-pointer ">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center text-gray-300 "
      >
        {/* Social Icons */}
        <Link href="https://www.linkedin.com/in/shimil-t-50912817b/">

        <SocialIcon
          url="https://www.linkedin.com/in/shimil-t-50912817b/"
          href="https://github.com/shimiltharayil"
          fgColor="gray"
          bgColor="transparent"
          />
          </Link>
          <Link href="" >

        <SocialIcon
          url="https://github.com/shimiltharayil"
          fgColor="gray"
          bgColor="transparent"
          />
          </Link>
    
        <SocialIcon
          url="https://www.instagram.com/_shimil_47_/"
          fgColor="gray"
          bgColor="transparent"
        />
      </motion.div>
      <Link href="#contact">
        <motion.div
          initial={{
            x: 500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.5,
          }}
          className="flex flex-row items-center text-gray-300 cursor-pointer"
        >
          <SocialIcon
            className="cursor-pointer"
            network="email"
            fgColor="gray"
            bgColor="transparent"
          />
          <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
            Get In Touch.{" "}
          </p>
        </motion.div>
      </Link>
    </header>
  );
}

export default Header