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
      <h1 className="text-5xl font-semibold ">Completed Journey</h1>

      <div className="bg-[#f0eded] -mx-[10rem] mt-[15rem]  ">
        <div className="grid grid-cols-3 gap-4 -my-[10rem] mx-[10rem] text-white  ">
          <div className="col-span-1 relative">
            <Image
              src={img1}
              alt="First Image"
              className="w-full h-[350px] rounded-2xl "
            />
            <div className="absolute flex flex-col bottom-5 left-5 z-20 ">
              <h1 className="text-3xl font-semibold">Rome</h1>
              <span className="font-extralight">543 user travel here</span>
            </div>
            <div className="absolute bottom-0 w-full bg-gradient-to-t from-[#44616b] to-transparent  h-[200px] z-10 rounded-2xl  "></div>
          </div>
          <div className="col-span-2 relative">
            <Image
              src={img2}
              alt="Second Image"
              className="w-full h-[350px] rounded-2xl "
            />
             <div className="absolute flex flex-col bottom-5 left-5 z-20 ">
              <h1 className="text-3xl font-semibold">Milan</h1>
              <span className="font-extralight">543 user travel here</span>
            </div>
            <div className="absolute bottom-0 w-full bg-gradient-to-t from-[#44616b] to-transparent  h-[200px] z-10 rounded-2xl  "></div>
          </div>

          <div className="col-span-1 relative">
            <Image
              src={img3}
              alt="Third Image"
              className="w-full h-[350px] rounded-2xl"
            />
             <div className="absolute flex flex-col bottom-5 left-5 z-20 ">
              <h1 className="text-3xl font-semibold">Raja Ampat</h1>
              <span className="font-extralight">53 user travel here</span>
            </div>
            <div className="absolute bottom-0 w-full bg-gradient-to-t from-[#44616b] to-transparent  h-[200px] z-10 rounded-2xl  "></div>
          </div>
          <div className="col-span-1 relative">
            <Image
              src={img4}
              alt="Fourth Image"
              className="w-full h-[350px] rounded-2xl"
            />
             <div className="absolute flex flex-col bottom-5 left-5 z-20 ">
              <h1 className="text-3xl font-semibold">Tiga Warna</h1>
              <span className="font-extralight">513 user travel here</span>
            </div>
            <div className="absolute bottom-0 w-full bg-gradient-to-t from-[#44616b] to-transparent  h-[200px] z-10 rounded-2xl  "></div>
          </div>
          <div className="col-span-1 relative ">
            <Image
              src={img5}
              alt="Fifth Image"
              className="w-full h-[350px] rounded-2xl "
            />
             <div className="absolute flex flex-col bottom-5 left-5 z-20">
              <h1 className="text-3xl font-semibold">Sempu Beach</h1>
              <span className="font-extralight">213 user travel here</span>
            </div>
            <div className="absolute bottom-0 w-full bg-gradient-to-t from-[#44616b] to-transparent  h-[200px] z-10 rounded-2xl  "></div>
          </div>
        </div>

        <div className="flex justify-center mx-[10rem] mt-[12rem] mb-20 ">
          <button className="bg-[#d9ed82] text-[#0d3d4e] text-xs px-16 py-3 rounded-full font-semibold ">
            More Journey
          </button>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
