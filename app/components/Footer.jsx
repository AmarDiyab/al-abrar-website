import React from 'react'
import Navbar from './Navbar'
import { FaFacebook } from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className='bg-[#0d3d4e] pt-[2rem] pb-5 flex flex-col space-y-3 '>
        <Navbar />
        <div className='mx-[10rem] bg-[#5c9db4] h-[1px]   ' />
        <div className='flex justify-between mx-[10rem] mt-10 text-[#5c9db4]'>
            <span className='font-extralight text-sm'>Copyright </span>
            <div className='flex gap-5'>
            <FaFacebook />
            <GrInstagram />
            <FaTwitter />
            <FaYoutube />
            </div>
        </div>
        
    </div>
  )
}

export default Footer