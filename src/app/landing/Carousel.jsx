import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { LuMoveLeft } from "react-icons/lu";
import jsonData from '../../data/carouselData.json'
import { LuMoveRight } from "react-icons/lu";
import CategoryCard from "../common/CategoryCard";
import CommonCarou from "../common/CommonCarou";



function CarouselMaker() {


  // const text = [
  //   "Action & Adventure",
  //   "Animation",
  //   "Comedy",
  //   "Crime",
  //   "Documentary",
  //   "Drama",
  //   "Family",
  //   "Kids",
  //   "Mystry",
  //   "News",
  //   "Reality",
  //   "Sci-fi & Fantasy",
  //   "Swap",
  //   "Talk",
  //   "War & Policies",
  //   "Western",
  // ];

  return (
    <div className="slider-container list-none p-2 md:p-3 w-full mx-auto">
        {jsonData.map(({text, img1, img2, img3, img4}) => {
          return  <div
                  className="shrink-0  md2:w-[33.5%] w-[100%] sm2:w-[50%] xl:w-[25%] transition duration-[.6s]"
                  style={{ transform: `translateX(${-carouselTranslate}%)` }}
                  id="carousel"
                >
                  {
                    <CommonCarou
                      iimg1={img1} img2={img2} img3={img3} img4={img4}
                      text={text}
                    />
                  }
                </div>
        })}
    </div>
  );
}

export default CarouselMaker;
