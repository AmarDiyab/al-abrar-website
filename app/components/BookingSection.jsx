import Image from "next/image";
import React from "react";
import img from "../assets/booking-section-img.jpeg";
import { FaArrowRightLong } from "react-icons/fa6";

const BookingSection = () => {
  return (
    <div className="flex mx-[10rem] my-[10rem] justify-between text-[#0d3d4e] ">
      <div className="flex flex-col max-w-[33%] gap-5 ">
        <span className="text-4xl font-semibold">
          Fun for them, made easy for you
        </span>
        <span>
          We at Luckey provide comprehensive management of your property,
          allowing you to earn extra income from renting your space, without the
          time commitment.
        </span>
      </div>

      <div className="max-w-[40%]">
        <Image src={img} alt="Image" className="h-[300px] w-[300px] " />
      </div>

      <div className="flex flex-col gap-5 max-w-[20%] ">
        <div className="flex flex-col">
          <span className="text-2xl font-semibold">Book Car</span>
          <span>Lorem ipsum dolor sit amet consectetur.</span>
          <div className="flex items-center space-x-2 mt-3">
            <span>Start your trips</span>
            <FaArrowRightLong />
          </div>
        </div>

        <div className="flex flex-col">
          <span className="text-2xl font-semibold">Book Hotel</span>
          <span>Lorem ipsum dolor sit amet consectetur.</span>
          <div className="flex items-center space-x-2 mt-3">
            <span>Start your trips</span>
            <FaArrowRightLong />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingSection;
