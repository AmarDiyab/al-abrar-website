import Image from "next/image";
import React from "react";
import img from "../assets/booking-section-img.jpeg";
import { FaArrowRightLong } from "react-icons/fa6";

const BookingSection = () => {
  return (
    <div className="flex sm:flex-col sm:space-y-10 mx-[10rem] sm:mx-[3rem] my-[10rem] justify-between sm:items-center sm:text-center text-[#0d3d4e] ">
      <div className="flex flex-col max-w-[33%] sm:max-w-[100%] gap-5 ">
        <h1 className="text-4xl font-semibold">
          Fun for them, made easy for you
        </h1>
        <span>
          We at Luckey provide comprehensive management of your property,
          allowing you to earn extra income from renting your space, without the
          time commitment.
        </span>
      </div>

      <div className="max-w-[40%] sm:max-w-[100%]">
        <Image src={img} alt="Image" className="h-[300px] w-[300px] object-cover rounded-2xl " />
      </div>

      <div className="flex flex-col gap-5 sm:gap-10 max-w-[20%] sm:max-w-[100%] ">
        <div className="flex flex-col">
          <h1 className="text-2xl font-semibold">Book Car</h1>
          <span>Lorem ipsum dolor sit amet consectetur.</span>
          <div className="flex items-center space-x-2 mt-3 group cursor-pointer sm:justify-center ">
            <span className="underline">Start your trips</span>
            <FaArrowRightLong className="group-hover:ml-4 transition-all duration-300 ease-in-out " />
          </div>
        </div>

        <div className="flex flex-col">
          <h1 className="text-2xl font-semibold">Book Hotel</h1>
          <span>Lorem ipsum dolor sit amet consectetur.</span>
          <div className="flex items-center space-x-2 group cursor-pointer mt-3 sm:justify-center">
            <span className="underline">Start your trips</span>
            <FaArrowRightLong className="group-hover:ml-4 transition-all duration-300 ease-in-out " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingSection;
