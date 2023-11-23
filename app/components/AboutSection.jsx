import React from 'react';
import { IoShieldCheckmark } from "react-icons/io5";
import { MdLocationOn } from "react-icons/md";
import { HiAdjustmentsHorizontal } from "react-icons/hi2";

const AboutSection = () => {
  return (
    <div className='flex justify-between items-start bg-[#d9ed82] px-[10rem] py-[5rem] text-[#0d3d4e] '>
        <div className='flex flex-col justify-center max-w-[30%] space-y-2 '>
            <IoShieldCheckmark className='w-[50px] h-[50px] ' />
            <span className='text-3xl'>Enjoy some flexibility</span>
            <span>Stays with flexible cancellation make it easy to re-book if your plans change.</span>
        </div>

        <div className='flex flex-col justify-center max-w-[30%] space-y-2 '>
            <MdLocationOn className='w-[50px] h-[50px] ' />
            <span className='text-3xl'>More than 7M Active Trip</span>
            <span>Stays with flexible cancellation make it easy to re-book if your plans change.</span>
        </div>

        <div className='flex flex-col justify-center max-w-[30%] space-y-2 '>
            <HiAdjustmentsHorizontal className='w-[50px] h-[50px] ' />
            <span className='text-3xl'>100+ filters for tailored stays</span>
            <span>Stays with flexible cancellation make it easy to re-book if your plans change.</span>
        </div>
    </div>
  )
}

export default AboutSection