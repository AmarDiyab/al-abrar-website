import React from "react";
import Image from "next/image";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import img1 from "../assets/bali.webp";
import img2 from "../assets/my-kines-island.webp";
import img3 from "../assets/uludag.jpeg";
import img4 from "../assets/bern.jpg";

const PopularDestinations = () => {
  return (
    <div className="flex flex-col mt-[5rem] text-[#0d3d4d] ">
      <div className="flex flex-col mx-[10rem] ">
        <span className="font-medium ">WHERE TO GO</span>
        <div className="flex justify-between mt-2">
          <span className="text-4xl font-semibold ">Popular destinations</span>
          <div className="flex gap-5">
            <button className="border border-[#0d3d4e] rounded-full px-4 py-2 text-[#0d3d4e] ">
              <FaArrowLeftLong />
            </button>
            <button className="border border-[#0d3d4e] rounded-full px-4 py-2 text-[#0d3d4e] ">
              <FaArrowRightLong />
            </button>
          </div>
        </div>
      </div>

      <div className="flex gap-5 mt-10 ml-[10rem] ">
        <div className="relative ">
          <Image
            src={img4}
            alt="Destination Image"
            className="rounded-[20px] w-[350px] h-[500px] "
          />
          <div className="flex flex-col space-y-3 absolute bottom-5 justify-center left-14 items-center text-white">
            <span className="text-3xl font-semibold">Bali</span>
            <span className="font-medium">Indonesia</span>
            <span className="font-light">543 wants to travel here</span>
          </div>
        </div>
        <div className="relative">
          <Image
            src={img2}
            alt="Destination Image"
            className="rounded-[20px] w-[350px] h-[500px] "
          />
          <div className="flex flex-col space-y-3 absolute bottom-5 justify-center left-14 items-center text-white">
            <span className="text-3xl font-semibold">MyKines Island</span>
            <span className="font-medium">Indonesia</span>
            <span className="font-light">312 wants to travel here</span>
          </div>
        </div>
        <div className="relative">
          <Image
            src={img3}
            alt="Destination Image"
            className="rounded-[20px] w-[350px] h-[500px] "
          />
          <div className="flex flex-col space-y-3 absolute bottom-5 justify-center left-14 items-center text-white">
            <span className="text-3xl font-semibold">Uludag</span>
            <span className="font-medium">Turkey</span>
            <span className="font-light">543 wants to travel here</span>
          </div>
        </div>
        <div className="relative">
          <Image
            src={img4}
            alt="Destination Image"
            className="rounded-[20px] w-[350px] h-[500px] "
          />
          <div className="flex flex-col space-y-3 absolute bottom-5 justify-center left-14 items-center text-white">
            <span className="text-3xl font-semibold">Bern</span>
            <span className="font-medium">Swiss</span>
            <span className="font-light">80 wants to travel here</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularDestinations;
