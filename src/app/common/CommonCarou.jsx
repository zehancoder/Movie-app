import React from "react";
import Container from "./Container";
import { FaArrowRight } from "react-icons/fa6";

function CommonCarou({ img1, img2, img3, img4, text }) {
  return (
    <div>
      <div className="m-3 cursor-pointer overflow-hidden border border-[#383838] bg-[#1A1A1A] rounded-xl">
        <div className="md:p-6 p-4 lg:p-8  relative">
          <div className="">
            <div className="flex items-center justify-center brightness-75 gap-4">
              <img
                className="xl:w-[100px] lg:w-[80px] md:w-[80px] md:h-[100px] w-[60px] h-[80px] rounded-lg   lg:h-[100px] xl:h-[120px] object-cover"
                src={img1}
                alt=""
              />
              <img
                className="xl:w-[100px] lg:w-[80px] md:w-[80px] md:h-[100px] w-[60px] h-[80px]  rounded-lg  lg:h-[100px] xl:h-[120px] object-cover"
                src={img2}
                alt=""
              />
            </div>
            <div className="flex mt-2 items-center  justify-center brightness-75 gap-4">
              <img
                className="xl:w-[100px] lg:w-[80px] md:w-[80px] md:h-[100px] w-[60px] h-[80px]  rounded-lg  lg:h-[100px] xl:h-[120px] object-cover"
                src={img3}
                alt=""
              />
              <img
                className="xl:w-[100px] lg:w-[80px] md:w-[80px] md:h-[100px] w-[60px] h-[80px]  rounded-lg  lg:h-[100px] xl:h-[120px] object-cover"
                src={img4}
                alt=""
              />
            </div>
          </div>
          <div className="flex items-center justify-between mt-10">
            <p className="text-center z-30 text-white font-medium md:text-[17px] text-[15px] lg:text-xl">
              {text}
            </p>
            <FaArrowRight className="text-white text-2xl font-medium" />
          </div>
          <div className="overlay2"></div>
        </div>
      </div>
    </div>
  );
}

export default CommonCarou;
