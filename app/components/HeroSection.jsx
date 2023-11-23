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
          <span className="text-6xl ">
            Explore the world with exciting people
          </span>
          <span>We help people to find ideal company for the join trips</span>
          <div className="flex space-x-3 justify-center items-center bg-[#d9ed83] text-[#0d3d4e] rounded-full max-w-[30%] px-7 py-3 ">
            <button>Start your trips </button>
            <FaArrowRightLong />
          </div>
        </div>

        <div className="flex flex-col mx-[10rem] mt-[3rem] text-white z-50 relative ">
          <div className="flex flex-row-reverse gap-4 items-center w-full ">
            <button className="bg-white text-[#0d3d4e] rounded-full px-4 py-2 ">
              <FaArrowRightLong />
            </button>
            <span>1/4</span>
            <button className="bg-white text-[#0d3d4e] rounded-full px-4 py-2 ">
              <FaArrowLeftLong />
            </button>
          </div>

          <hr className="mt-5" />

          <div className="flex justify-between mt-5 ">
            <div className="flex flex-col space-y-2 w-[30%]">
              <span className="text-2xl font-semibold">01</span>
              <span>Choose place, activity and time</span>
              <span>
                Every can choose a root and activity according to his taste and
                possible{" "}
              </span>
            </div>

            <div className="flex flex-col space-y-2 w-[30%]">
              <span className="text-2xl font-semibold">02</span>
              <span>Choose place, activity and time</span>
              <span>
                Every can choose a root and activity according to his taste and
                possible{" "}
              </span>
            </div>

            <div className="flex flex-col space-y-2 w-[30%]">
              <span className="text-2xl font-semibold">03</span>
              <span>Choose place, activity and time</span>
              <span>
                Every can choose a root and activity according to his taste and
                possible{" "}
              </span>
            </div>
          </div>
        </div>
      </div>
  );
};

export default HeroSection;
