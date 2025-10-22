import React from "react";

function SingleMovieCarou({ img, leftText, rightText, hoverItem }) {
  return (
    <div className="md:m-2 m-1.5 xl:m-2  ">
      <div className="px-3 rounded-lg  border-1 border-[#262626]  w-full bg-[#1A1A1A]  py-3 relative overflow-hidden">
        <div className="absolute top-0 left-0 h-full w-full flex items-center justify-center  bg-[#00000094] z-30 showPlaylikeOnhover" >{hoverItem}</div>

        <div className="w-full relative h-full rounded-md overflow-hidden">
          <img
            className="w-full h-full object-contain bg-no-repeat"
            src={img}
            alt=""
          />
        </div>
        <div className="flex items-center justify-between">
          <div>{leftText}</div>
          <div>{rightText}</div>
        </div>
      </div>
    </div>
  );
}

export default SingleMovieCarou;
