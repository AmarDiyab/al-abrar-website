import React from 'react';
import { IoShieldCheckmark } from "react-icons/io5";
import { MdLocationOn } from "react-icons/md";
import { HiAdjustmentsHorizontal } from "react-icons/hi2";

const AboutSection = () => {
  return (
    <div className='flex sm:flex-col sm:space-y-10 justify-between items-start bg-[#d9ed82] px-[10rem] py-[5rem] sm:px-[2rem] sm:items-center text-[#0d3d4e] '>
        <div className='flex flex-col justify-center max-w-[30%] sm:max-w-full sm:items-center sm:text-center space-y-2 '>
            <IoShieldCheckmark className='w-[50px] h-[50px] ' />
            <h1 className='text-3xl font-semibold'>Enjoy some flexibility</h1>
            <span>Stays with flexible cancellation make it easy to re-book if your plans change.</span>
        </div>

        <div className='flex flex-col justify-center max-w-[30%] sm:max-w-full sm:items-center sm:text-center space-y-2 '>
            <MdLocationOn className='w-[50px] h-[50px] ' />
            <h1 className='text-3xl font-semibold'>More than 7M Active Trip</h1>
            <span>Stays with flexible cancellation make it easy to re-book if your plans change.</span>
        </div>

        <div className='flex flex-col justify-center max-w-[30%] sm:max-w-full sm:items-center sm:text-center space-y-2 '>
            <HiAdjustmentsHorizontal className='w-[50px] h-[50px] ' />
            <h1 className='text-3xl font-semibold'>100+ filters for tailored stays</h1>
            <span>Stays with flexible cancellation make it easy to re-book if your plans change.</span>
        </div>
    </div>
  )
}

export default AboutSection