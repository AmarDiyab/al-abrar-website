import React from "react";
import Navbar from "./Navbar";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

const HeroSection = () => {
  return (
      <div className="h-[100vh] bg-hero-section-bg w-full bg-cover bg-bottom relative ">
        <Navbar />
        <div className="absolute top-0 inset-0 bg-gradient-to-b from-[#122f39] to-transparent mix-blend-multiply h-[400px] z-10  "></div>
        <div className="absolute bottom-0 w-full bg-gradient-to-t from-[#1d4a5b] to-transparent mix-blend-multiply h-[400px] z-10  "></div>

        <div className="flex flex-col space-y-10 z-50 mt-[10rem] relative mx-[10rem] text-white max-w-[50%] ">
          <h1 className="text-6xl font-semibold ">
            Explore the world with exciting people
          </h1>
          <span>We help people to find ideal company for the join trips</span>
          <div className="flex space-x-3 justify-center items-center bg-[#d9ed83] text-[#0d3d4e] hover:bg-[#d6e59a]  cursor-pointer rounded-full max-w-[30%] px-7 py-3 ">
            <button className="text-xs font-semibold">Start your trips </button>
            <FaArrowRightLong />
          </div>
        </div>

        <div className="flex flex-col mx-[10rem] mt-[3rem] text-white z-50 relative ">
          <div className="flex flex-row-reverse gap-4 items-center w-full ">
            <button className="bg-[#ffffff4a] text-[#fff] hover:bg-white hover:text-[#0d3d4e] rounded-full px-4 py-2 ">
              <FaArrowRightLong />
            </button>
            <span>1/4</span>
            <button className="bg-[#ffffff4a] text-[#fff] hover:bg-white hover:text-[#0d3d4e] rounded-full px-4 py-2 ">
              <FaArrowLeftLong />
            </button>
          </div>

          <hr className="mt-5" />

          <div className="flex justify-between mt-5 ">
            <div className="flex flex-col space-y-2 w-[30%]">
              <h1 className="text-2xl font-medium">01</h1>
              <span className="font-medium text-lg">Choose place, activity and time</span>
              <span className="font-extralight">
                Every can choose a root and activity according to his taste and
                possible{" "}
              </span>
            </div>

            <div className="flex flex-col space-y-2 w-[30%]">
              <h1 className="text-2xl font-medium">02</h1>
              <span className="font-medium text-lg">Find people who have the same...</span>
              <span className="font-extralight">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis, repudiandae!
              </span>
            </div>

            <div className="flex flex-col space-y-2 w-[30%]">
              <h1 className="text-2xl font-medium">03</h1>
              <span className="font-medium text-lg">Start chat and offer to go on...</span>
              <span className="font-extralight">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, excepturi.
              </span>
            </div>
          </div>
        </div>
      </div>
  );
};

export default HeroSection;
