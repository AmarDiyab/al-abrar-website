import Image from "next/image";
import React from "react";
import img1 from "../assets/gallery-1.jpeg";
import img2 from "../assets/gallery-2.png";
import img3 from "../assets/gallery-3.jpeg";
import img4 from "../assets/gallery-4.jpeg";
import img5 from "../assets/gallery-5.jpeg";

const Gallery = () => {
  return (
    <div className="flex flex-col items-center text-[#0d3d4e] gap-3 mx-[10rem] ">
      <span className="font-medium">GALLERY OF OUR TRIPS</span>
      <span className="text-5xl font-semibold ">Completed Journey</span>

      <div className="bg-[#f0eded] h-[] -mx-[10rem] my-[15rem]  ">

      <div className="grid grid-cols-3 gap-4 -my-[10rem] mx-[10rem]  ">
        <div className="col-span-1">
          <Image src={img1} alt="First Image" className="w-full h-[350px] rounded-2xl " />
        </div>
        <div className="col-span-2">
          <Image src={img2} alt="Second Image" className="w-full h-[350px] rounded-2xl " />
        </div>

        <div className="col-span-1">
          <Image src={img3} alt="Third Image" className="w-full h-[350px] rounded-2xl" />
        </div>
        <div className="col-span-1">
          <Image src={img4} alt="Fourth Image" className="w-full h-[350px] rounded-2xl" />
        </div>
        <div className="col-span-1 group overflow-hidden ">
          <Image src={img5} alt="Fifth Image" className="w-full h-[350px] rounded-2xl " />
        </div>
      </div>

      <div className="flex justify-center mx-[10rem] mt-[12rem] mb-20 ">
        <button className="bg-[#d9ed82] text-[#0d3d4e] px-16 py-3 rounded-full font-semibold ">More Journey</button>
      </div>

      </div>

    </div>
  );
};

export default Gallery;
