import React, { ReactElement } from "react";
import { motion } from "framer-motion";
interface Props {}

export default function ServiceCard({}: Props): ReactElement {
  return (
    <article className="md:flex md:flex-col rounded-lg text-center items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] lg:w-[900px] snap-center bg-[#292929] hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 ">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        src="/unsplash_mr4jg4syof8.png"
        alt=""
      />
      <div className="px-0 md:px-10">
        <h4 className="uppercase font-bold text-center">Web Apps.</h4>

        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>
            A Web application (Web app) is an application program that is stored
            on a remote server and delivered over the Internet through a browser
            interface
          </li>
        </ul>
      </div>
    </article>
  );
}
