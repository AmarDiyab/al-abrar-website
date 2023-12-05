"use client";
import React from "react";
import Image from "next/image";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "../assets/bali.webp";
import img2 from "../assets/my-kines-island.webp";
import img3 from "../assets/uludag.jpeg";
import img4 from "../assets/bern.jpg";
import indonesia from "../assets/indonesia-flag.png";
import turkey from "../assets/turkey-flag.png";
import swiss from "../assets/swiss-flag.png";

import "swiper/css";

import { Navigation } from "swiper/modules";

const PopularDestinations = () => {
  return (
    <div className="flex flex-col mt-[5rem] text-[#0d3d4d] ">
      <div className="flex flex-col mx-[10rem] sm:mx-[2rem] ">
        <span className="font-medium sm:text-xs">WHERE TO GO</span>
        <div className="flex justify-between mt-2">
          <h1 className="text-4xl font-semibold sm:text-3xl ">Popular destinations</h1>
          <div className="flex gap-2">
            <button className="prev-btn border border-[#0d3d4e] rounded-full px-4 py-2 sm:py-1 sm:h-[25px]  text-[#0d3d4e] hover:bg-[#0d3d4e] hover:text-white ">
              <FaArrowLeftLong className="sm:w-[8px] " />
            </button>
            <button className="next-btn border border-[#0d3d4e] rounded-full px-4 py-2 sm:py-1 sm:h-[25px] text-[#0d3d4e] hover:bg-[#0d3d4e] hover:text-white ">
              <FaArrowRightLong className="sm:w-[8px] " />
            </button>
          </div>
        </div>
      </div>

      <div className="ml-[10rem] sm:ml-[2rem] ">
        <Swiper
          draggable={true}
          slidesPerView={3.75}
          spaceBetween={50}
          className="mt-10"
          navigation={{
            nextEl: ".next-btn",
            prevEl: ".prev-btn"
          }}
          modules={[Navigation]}
          breakpoints={{
            '@0.00': {
              slidesPerView: 1.25,
              spaceBetween: 20,
            },
            '@1.00': {
              slidesPerView: 3.5,
              spaceBetween: 30,
            },
            '@1.50': {
              slidesPerView: 4.5,
              spaceBetween: 50,
            },
          }}
        >
          <SwiperSlide>
            <div className="group relative h-[550px]">
              <Image
                src={img4}
                alt="img"
                className="object-cover rounded-2xl h-[500px]  group-hover:h-[550px] transition-all duration-300 ease-in-out "
              />
              <div className="flex flex-col space-y-2 items-center justify-center absolute bottom-20 left-[10%] sm:left-[5%] text-white z-30 text-center">
                <h1 className="text-3xl font-semibold">Bali</h1>
                <div className="flex space-x-2 items-center">
                  <Image
                    src={indonesia}
                    alt="flag-icon"
                    className="rounded-full w-[20px] h-[20px]"
                  />
                  <span className="font-medium text-center">Indonesia</span>
                </div>
                <span className="font-light">543 wants to travel here</span>
              </div>
              <div className="absolute flex justify-center items-center bottom-7 left-[20%] sm:left-[15%] opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out  ">
                <button className="bg-[#d9ed83] text-[#0d3d4e] hover:bg-[#d6e59a] px-5 py-3 rounded-full text-xs font-semibold ">
                  I want to travel here
                </button>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="group relative h-[550px]">
              <Image
                src={img2}
                alt="img"
                className="object-cover rounded-2xl h-[500px]  group-hover:h-[550px] transition-all duration-300 ease-in-out "
              />
              <div className="flex flex-col space-y-2 items-center justify-center absolute bottom-20 left-[10%] text-white z-30">
                <h1 className="text-3xl font-semibold text-center">MyKines Island</h1>
                <div className="flex space-x-2 items-center">
                  <Image
                    src={indonesia}
                    alt="flag-icon"
                    className="rounded-full w-[20px] h-[20px]"
                  />
                  <span className="font-medium text-center">Indonesia</span>
                </div>
                <span className="font-ligh">312 wants to travel here</span>
              </div>
              <div className="absolute flex justify-center items-center bottom-7 left-[20%] sm:left-[15%] opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out  ">
                <button className="bg-[#d9ed83] text-[#0d3d4e] hover:bg-[#d6e59a] px-5 py-3 rounded-full text-xs font-semibold ">
                  I want to travel here
                </button>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="group relative h-[550px]">
              <Image
                src={img3}
                alt="img"
                className="object-cover rounded-2xl h-[500px]  group-hover:h-[550px] transition-all duration-300 ease-in-out "
              />
              <div className="flex flex-col space-y-2 items-center absolute bottom-20 left-[10%] sm:left-[5%] text-white z-30">
                <h1 className="text-3xl font-semibold">Uludag</h1>
                <div className="flex space-x-2 items-center">
                  <Image
                    src={turkey}
                    alt="flag-icon"
                    className="rounded-full w-[20px] h-[20px]"
                  />
                  <span className="font-medium">Turkey</span>
                </div>
                <span className="font-light">543 wants to travel here</span>
              </div>
              <div className="absolute flex justify-center items-center bottom-7 left-[20%] sm:left-[10%] opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out  ">
                <button className="bg-[#d9ed83] text-[#0d3d4e] hover:bg-[#d6e59a] px-5 py-3 rounded-full text-xs font-semibold ">
                  I want to travel here
                </button>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="group relative h-[550px]">
              <Image
                src={img4}
                alt="img"
                className="object-cover rounded-2xl h-[500px]  group-hover:h-[550px] transition-all duration-300 ease-in-out "
              />
              <div className="flex flex-col space-y-2 items-center absolute bottom-20 left-[10%] sm:left-[5%] text-white z-30">
                <h1 className="text-3xl font-semibold">Bern</h1>
                <div className="flex space-x-2 items-center">
                  <Image
                    src={swiss}
                    alt="flag-icon"
                    className="rounded-full w-[20px] h-[20px]"
                  />
                  <span className="font-medium">Swiss</span>
                </div>
                <span className="font-light">80 wants to travel here</span>
              </div>
              <div className="absolute flex justify-center items-center bottom-7 left-[20%] sm:left-[10%] opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out  ">
                <button className="bg-[#d9ed83] text-[#0d3d4e] hover:bg-[#d6e59a] px-5 py-3 rounded-full text-xs font-semibold ">
                  I want to travel here
                </button>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="group relative h-[550px]">
              <Image
                src={img4}
                alt="img"
                className="object-cover rounded-2xl h-[500px]  group-hover:h-[550px] transition-all duration-300 ease-in-out "
              />
              <div className="flex flex-col space-y-2 items-center absolute bottom-20 left-[10%] sm:left-[5%] text-white z-30">
                <h1 className="text-3xl font-semibold">Bali</h1>
                <div className="flex space-x-2 items-center">
                  <Image
                    src={indonesia}
                    alt="flag-icon"
                    className="rounded-full w-[20px] h-[20px]"
                  />
                  <span className="font-medium">Indonesia</span>
                </div>
                <span className="font-light">543 wants to travel here</span>
              </div>
              <div className="absolute flex justify-center items-center bottom-7 left-[20%] sm:left-[10%] opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out  ">
                <button className="bg-[#d9ed83] text-[#0d3d4e] hover:bg-[#d6e59a] px-5 py-3 rounded-full text-xs font-semibold ">
                  I want to travel here
                </button>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="group relative h-[550px]">
              <Image
                src={img4}
                alt="img"
                className="object-cover rounded-2xl h-[500px]  group-hover:h-[550px] transition-all duration-300 ease-in-out "
              />
              <div className="flex flex-col space-y-2 items-center absolute bottom-20 left-[10%] sm:left-[8%] text-white z-30">
                <h1 className="text-3xl font-semibold">Bali</h1>
                <div className="flex space-x-2 items-center">
                  <Image
                    src={indonesia}
                    alt="flag-icon"
                    className="rounded-full w-[20px] h-[20px]"
                  />
                  <span className="font-medium">Indonesia</span>
                </div>
                <span className="font-light">543 wants to travel here</span>
              </div>
              <div className="absolute flex justify-center items-center bottom-7 left-[20%] sm:left-[12%] opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out  ">
                <button className="bg-[#d9ed83] text-[#0d3d4e] hover:bg-[#d6e59a] px-5 py-3 rounded-full text-xs font-semibold ">
                  I want to travel here
                </button>
              </div>
            </div>
          </SwiperSlide>
          {/* <SwiperSlide>
            <div className="group relative">
              <Image
                src={img4}
                alt="img"
                className="object-cover rounded-2xl h-[500px]  group-hover:h-[650px] transition-all duration-300 ease-in-out "
              />
              <div className="flex flex-col space-y-2 items-center absolute bottom-16 left-12 text-white z-30">
                <h1 className="text-3xl font-semibold">Bali</h1>
                <div className="flex space-x-2 items-center">
                  <Image
                    src={indonesia}
                    alt="flag-icon"
                    className="rounded-full w-[20px] h-[20px]"
                  />
                  <span className="font-medium">Indonesia</span>
                </div>
                <span className="font-light">543 wants to travel here</span>
              </div>
              <div className="absolute flex justify-center items-center bottom-4 left-16 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out  ">
                <button className="bg-[#d9ed83] text-[#0d3d4e] hover:bg-[#d6e59a] px-5 py-3 rounded-full text-xs font-semibold ">
                  I want to travel here
                </button>
              </div>
            </div>
          </SwiperSlide> */}
        </Swiper>
      </div>
    </div>
  );
};

export default PopularDestinations;
