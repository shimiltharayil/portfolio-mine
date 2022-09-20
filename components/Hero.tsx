import Image from 'next/image';
import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles';
import Link from "next/link"

type Props = {};

export default function Hero({}: Props) {
    const [text, count] = useTypewriter({
        words: [
            "Hi, The Name's Shimil Tharayil",
            "Guy-who-loves-Coffee.jsx",
            "...ButLovesToCodeMore..."
        ],
        loop:true,
        delaySpeed: 2000,
    })

  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <img
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
        src="/photo_2022-08-25_23-12-02.jpg"
        alt=""
      />
      <div className='z-20'>
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
          Web Developer
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10">
          <span>{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>
        <div className="pt-5">
          <Link href="#about" >
          <button className="heroButton">About</button>
          </Link>
          <Link href="#service" >
          <button className="heroButton">Service</button>
          </Link>
          <Link href="#skills" >
          <button className="heroButton">Skills</button>
          </Link>
          <Link href="#project" >
          <button className="heroButton">Projects</button>
          </Link>


        </div>
      </div>
    </div>
  );
}