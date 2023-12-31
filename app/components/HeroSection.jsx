"use client";
import React from "react";
import Navbar from "./Navbar";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import { Navigation } from "swiper/modules";

const HeroSection = () => {
  return (
    <div className="h-[100vh] bg-hero-section-bg w-full bg-cover bg-bottom relative sm:h-[100dvh] flex flex-col-reverse gap-[10%] ">
      <div className="absolute top-0 inset-0 bg-gradient-to-b from-[#122f39] to-transparent mix-blend-multiply h-[400px] z-10  "></div>
      <div className="absolute bottom-0 w-full bg-gradient-to-t from-[#1d4a5b] to-transparent mix-blend-multiply h-[400px] z-10  "></div>

      <div className="flex flex-col mx-[10rem] sm:mx-[2rem] mb-[5%] mt-[4%] 3xl:mt-[20%] sm:mt-[20%] text-white z-50 relative ">
        <div className="flex flex-row-reverse gap-4 sm:gap-2 items-center w-full ">
          <button className="next-btn bg-[#ffffff4a] text-[#fff] hover:bg-white hover:text-[#0d3d4e] rounded-full px-4 py-2 sm:px-3 sm:py-1 ">
            <FaArrowRightLong className="sm:w-[7px]" />
          </button>
          <span className="sm:text-[8px] ">1/4</span>
          <button className="prev-btn bg-[#ffffff4a] text-[#fff] hover:bg-white hover:text-[#0d3d4e] rounded-full px-4 py-2 sm:px-3 sm:py-1 ">
            <FaArrowLeftLong className="sm:w-[7px]" />
          </button>
        </div>

        <hr className="my-5" />

        <Swiper
          draggable={true}
          slidesPerView={3}
          spaceBetween={30}
          slidesPerGroup={3}
          className="w-full"
          speed={1000}
          modules={[Navigation]}
          navigation={{
            nextEl: ".next-btn",
            prevEl: ".prev-btn",
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
              slidesPerGroup: 1,
            },
            640: {
              slidesPerView: 2,
              slidesPerGroup: 2,
              spaceBetween: 20,
            },
            1280: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
        >
          <SwiperSlide className="flex flex-col space-y-2 sm:text-center ">
            <h1 className="text-2xl font-medium ">01</h1>
            <span className="font-medium text-lg sm:text-xs ">
              Choose place, activity and time
            </span>
            <span className="font-extralight sm:text-xs">
              Every can choose a root and activity according to his taste and
              possible{" "}
            </span>
          </SwiperSlide>

          <SwiperSlide className="flex flex-col space-y-2 sm:text-center ">
            <h1 className="text-2xl font-medium">02</h1>
            <span className="font-medium text-lg sm:text-xs">
              Find people who have the same...
            </span>
            <span className="font-extralight sm:text-xs">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Veritatis, repudiandae!
            </span>
          </SwiperSlide>

          <SwiperSlide className="flex flex-col space-y-2 sm:text-center">
            <h1 className="text-2xl font-medium">03</h1>
            <span className="font-medium text-lg sm:text-xs">
              Start chat and offer to go on...
            </span>
            <span className="font-extralight sm:text-xs">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic,
              excepturi.
            </span>
          </SwiperSlide>

          <SwiperSlide className="flex flex-col space-y-2 sm:text-center ">
            <h1 className="text-2xl font-medium">04</h1>
            <span className="font-medium text-lg sm:text-xs">
              Find people who have the same...
            </span>
            <span className="font-extralight sm:text-xs">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Veritatis, repudiandae!
            </span>
          </SwiperSlide>

          <SwiperSlide className="flex flex-col space-y-2 sm:text-center">
            <h1 className="text-2xl font-medium">05</h1>
            <span className="font-medium text-lg sm:text-xs">
              Start chat and offer to go on...
            </span>
            <span className="font-extralight sm:text-xs">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic,
              excepturi.
            </span>
          </SwiperSlide>

          <SwiperSlide className="flex flex-col space-y-2 sm:text-center">
            <h1 className="text-2xl font-medium">06</h1>
            <span className="font-medium text-lg sm:text-xs">
              Start chat and offer to go on...
            </span>
            <span className="font-extralight sm:text-xs">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic,
              excepturi.
            </span>
          </SwiperSlide>
        </Swiper>
      </div>

      <div>
        <div className="flex flex-col space-y-10 sm:space-y-3 z-50 mt-[5rem] relative mx-[10rem] sm:mx-[3rem] text-white max-w-[50%] ">
          <h1 className="text-6xl font-semibold sm:text-3xl  ">
            Explore the world with exciting people
          </h1>
          <span className="sm:text-[8px] sm:font-extralight ">
            We help people to find ideal company for the join trips
          </span>
          <div className="flex space-x-3 sm:space-x-1 justify-center items-center bg-[#d9ed83] text-[#0d3d4e] hover:bg-[#d6e59a] cursor-pointer rounded-full max-w-[30%] w-full sm:w-[80px] sm:max-w-[80%] px-1 py-3 sm:py-1 ">
            <button className="sm:text-[6px] text-sm font-semibold">
              Start your trips
            </button>
            <FaArrowRightLong className="sm:w-[7px] " />
          </div>
        </div>
      </div>

<div className="absolute top-0">
      <Navbar />
</div>
    </div>
  );
};

export default HeroSection;
