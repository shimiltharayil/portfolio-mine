import React from 'react'
import { PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from '@mui/icons-material/GitHub';
import LocationOnIcon from '@mui/icons-material/LocationOn';
type Inputs = {
    name:string,
    email:string,
    subject:string,
    message:string,
}
type Props = {}

function Contact({}: Props) {
    const {register,handleSubmit } = useForm<Inputs>();
    
     const onSubmit = (data: Inputs) => {
    console.log(data);
     }
  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact
      </h3>
      <div className="flex flex-col space-y-10 mt-20">
        <h4 className="text-lg md:text-2xl font-semibold text-center">
          I have got what you need,
          <span className="decoration-[#F7AB0A]/50 underline">Lets Talk.</span>
        </h4>
        <div>
         
          <div className="flex items-center space-x-5">
            <EnvelopeIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-sm md:text-2xl">shimiltharayil007@gmail.com</p>
          </div>
          <div className="flex items-center space-x-5">
            <LocationOnIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-sm md:text-2xl ">Kerala, India </p>
          </div>
          <section className='flex p-10 justify-between' >

          <div className="flex items-center ">
            <a href="https://www.instagram.com/_shimil_47_/">
              <InstagramIcon className="h-14 w-14 text-[#F7AB0A] hover:animate-bounce " />
            </a>
          </div>
          <div className="flex items-center ">
            <a href="https://www.linkedin.com/in/shimil-t-50912817b/">
              <LinkedInIcon className="h-14 w-14 text-[#F7AB0A] hover:animate-bounce" />
            </a>
          </div>
          <div className="flex items-center space-x-5">
            <a href="https://github.com/shimiltharayil">
              <GitHubIcon className="h-14 w-14 text-[#F7AB0A] hover:animate-bounce" />
            </a>
          </div>
          </section>
        </div>
        {/* <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-fit mx-auto"
        >
          <div className="flex space-x-2">
            <input
              {...register("name")}
              className="contactInput"
              placeholder="Name"
              type="text"
            />

            <input
              {...register("email")}
              className="contactInput"
              placeholder="Email"
              type="email"
            />
          </div>
          <input
            {...register("subject")}
            className="contactInput"
            placeholder="Subject"
            type="text"
          />
          <textarea
            {...register("message")}
            className="contactInput"
            placeholder="Message"
          />
         
          <button
            className="bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg "
            type="submit"
          >Submit</button>
        </form> */}
      </div>
    </div>
  );
}

export default Contact