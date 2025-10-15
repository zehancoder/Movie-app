import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { LuMoveLeft } from "react-icons/lu";
import jsonData from '../../data/carouselData.json'
import { LuMoveRight } from "react-icons/lu";
import CategoryCard from "../common/CategoryCard";
import CommonCarou from "../common/CommonCarou";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;

  return (
    <div
      style={{ ...style }}
      onClick={onClick}
      id="arrows"
      className="absolute right-5 cursor-pointer -top-5 md:-top-7 transform -translate-[50%] z-10 opacity-80"
    >
      <div className="text-white rounded-lg bg-[#2e2e2e] px-3 md:px-5 py-1.5 md:py-3 carouselArrowEffect">
        <LuMoveRight className="cursor-pointer md:text-xl text-xl lg:text-2xl " />
      </div>
      <div className={className} style={{ display: "none" }}>
        Hello
      </div>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      style={{ ...style }}
      onClick={onClick}
      className="absolute right-28 -top-5 md:-top-7 cursor-pointer transform -translate-[50%] z-10 opacity-80"
    >
      <div className="text-white rounded-lg bg-[#2e2e2e] carouselArrowEffect px-3 md:px-5 py-1.5 md:py-3">
        <LuMoveLeft className="cursor-pointer md:text-xl text-xl lg:text-2xl   " />
      </div>
      <div className={className} style={{ display: "none" }}>
        Hello
      </div>
    </div>
  );
}

function CarouselMaker() {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    appendDots: (dots) => (
      <div>
        <div style={{ margin: "0px" }}> {dots} </div>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={{
          padding: "4px",
          width: "3px",
          height: "3px",
          marginTop: "20px",
          borderRadius: "100%",
          backgroundColor: "white",
        }}
      ></div>
    ),

    responsive: [
      {
        breakpoint: 1324,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 430,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

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
      <Slider {...settings}>
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
      </Slider>
    </div>
  );
}

export default CarouselMaker;
