import { ArrowUpCircleIcon } from '@heroicons/react/24/solid'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import About from '../components/About'
import Contact from '../components/Contact'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Service from '../components/Service'
import Skills from '../components/Skills'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
      <Head>
        <title>Shimil Tharayil</title>
       
      </Head>
           {/* Header      */}
            <Header />
           {/* Hero */} 
           <section id='hero' className='snap-start'>
            <Hero />
           </section>

           {/* About */}
           <section id='about'className='snap-center' >
            <About />
           </section>

           {/* Exprience */}
           <section id='service' className='snap-center'>
            <Service />

           </section>
           {/* Skills */}
             <section id='skills' className='snap-start'>
              <Skills />
              </section>  
           {/* Projects */}

           {/* Contact */}
             <section id='contact' className='snap-start'>
              <Contact />
             </section>
             <Link href="#hero" >
              <footer className='sticky bottom-10 w-full cursor-pointer' >
                <div className='flex items-center justify-center' >
                      <ArrowUpCircleIcon className="h-11 w-11 text-[#F7AB0A] hover:cursor-pointer " />
                </div>
              </footer>
             </Link>
    </div>
  )
}

export default Home
