import React, { ReactElement } from 'react'
import { motion} from "framer-motion"
import ServiceCard from './ServiceCard';
import ServiceCardTwo from "./ServiceCardTwo";
import ServiceCard3 from './ServiceCard3';
import ServiceCard4 from "./ServiceCard4";

interface Props {
    
}

export default function Service({}: Props): ReactElement {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="h-screen flex relative overflow-hidden flex-col text-left max-w-full px-10 justify-evenly mx-auto items-center"
      >
        <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
          Service
        </h3>
        <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
          {/* Service Card */}
          <ServiceCard />
          <ServiceCardTwo />
          <ServiceCard3 />
          <ServiceCard4 />
        </div>
      </motion.div>
    );
}
