import React from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { FaRegCircle } from "react-icons/fa";
import { LuDot } from "react-icons/lu";
import { BsDot } from "react-icons/bs";
import avatar1 from "../assets/avatar1.jpeg";
import avatar2 from "../assets/avatar2.png";
import avatar3 from "../assets/avatar3.png";

const Testimonials = () => {
  return (
    <div className="flex mx-[10rem] my-[5rem] text-[#0d3d4e] justify-between ">
      <div className="flex flex-col max-w-[50%] space-y-5">
        <h1 className="text-5xl font-semibold">What our happy client</h1>
        <span>
          <i>&quot;</i>Jhon De is a native of the redion Che wac a hoet horcelf
          before she started offering her service to other people, so she knows
          about the necessity to have someone to take care of all the little
          things<i>&quot;</i>
        </span>
        {/* ratings */}
        <div className="flex items-center gap-2 text-yellow-500 ">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <span className="text-[#0d3d4e] ml-2">5/5</span>
        </div>
        {/* avatars */}
        <div className="flex space-x-5">
          <div className="flex flex-col space-y-2 items-center ">
            <Image src={avatar2} alt="avatar" className="w-[70px]" />
            <span>John De</span>
          </div>

          <div className="flex flex-col space-y-2 items-center ">
            <Image src={avatar3} alt="avatar" className="w-[70px]" />
            <span>John De</span>
          </div>

          <div className="flex flex-col space-y-2 items-center ">
            <Image
              src={avatar1}
              alt="avatar"
              className="w-[70px] rounded-full"
            />
            <span>John De</span>
          </div>
        </div>
      </div>
      <div className="relative">
        <Image
          src={avatar1}
          alt="AVATAR"
          className="rounded-b-full rounded-tr-full w-[300px] z-20 "
        />
        <FaRegCircle
          color="#d8ec81"
          size={100}
          className="absolute bottom-10 -left-10 -z-10"
        />

        <div className="grid grid-cols-8 text-[#e1e1e1] w-[150px] absolute top-7 left-52 -z-10  ">
          {Array(64)
            .fill()
            .map((_, index) => (
              <BsDot key={index} size={20} />
            ))}{" "}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
