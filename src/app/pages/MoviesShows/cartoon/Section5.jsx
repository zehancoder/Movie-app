import React from "react";
import Heading from "../../../common/Heading";
import { useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import { LuMoveLeft } from "react-icons/lu";
import { LuMoveRight } from "react-icons/lu";
import { useDispatch } from "react-redux";
import { cartoon2, cartoon6 } from "../../../../redux/dataFetch";
import { FaEye } from "react-icons/fa6";
import SingleMovieCarou from "../../../common/SingleMovieCarou";
import { Link, useParams } from "react-router-dom";

function Section5() {
  const [carouselNum, setCarouselNum] = useState(0);

  const trandingPage1 = useSelector((state) => state.cartoon3);

  const trandingPage1Movie = trandingPage1[0];
  // successfuly get data from redux store

  // get 4 movies from playingData for showing in carousel
  const [carouselMovies, setCarouselMovies] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      if (trandingPage1Movie.length > 0) {
        for (let val = 0; val < 14; val++) {
          setCarouselMovies((prev) => [...prev, trandingPage1Movie[val]]);
        }
      }
    }, 500);
  }, [trandingPage1Movie]);

  // carousel count number
  const [carouselTranslate, setCarouselTranslet] = useState(0);
  // make dinamic arr for making loop and make carousel tracker;
  const [arrowArr, setArrowArr] = useState(8);

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth < 1536) {
        setArrowArr(9);
      }
      if (window.innerWidth < 1280) {
        setArrowArr(10);
      }
      if (window.innerWidth < 1024) {
        setArrowArr(11);
      }
      if (window.innerWidth < 850) {
        setArrowArr(12);
      }
      if (window.innerWidth < 580) {
        setArrowArr(13);
      }
      if (window.innerWidth > 1536) {
        setArrowArr(8);
        setCarouselNum(0);
        setCarouselTranslet(0);
      }
    });
  }, [window.innerWidth]);

  //end make dinamic arr for making loop and make carousel tracker;

  const carouselUp = () => {
    if (carouselNum >= arrowArr - 1) {
      setCarouselNum(0);
      setCarouselTranslet(0);
    } else {
      setCarouselNum(carouselNum + 1);
      setCarouselTranslet(carouselTranslate + 100);
    }
  };

  const carouselDown = () => {
    if (carouselNum < 1) {
      setCarouselNum(arrowArr - 1);
      setCarouselTranslet(
        carouselTranslate + arrowArr === 13
          ? 1200
          : arrowArr === 10
          ? 900
          : arrowArr === 11
          ? 1000
          : arrowArr === 12
          ? 1100
          : arrowArr === 9
          ? 800
          : 700
      );
    } else {
      setCarouselNum(carouselNum - 1);
      setCarouselTranslet(carouselTranslate - 100);
    }
  };

  return (
    <>
      <div>
        <div className="flex items-center font-manrope lg:py-12 md:py-10 sm:py-6 py-4 justify-between">
          <Heading>Must - Watch Animations</Heading>
          <div className="w flex items-center gap-2 text-white px-3 py-3 z-20 rounded-lg text-xl font-bold border bg-[#0F0F0F] border-[#1F1F1F]">
            <div
              onClick={carouselDown}
              className="px-2 md:px-4 py-2 md:py-3 bg-[#1a1a1a] carouselArrowEffect cursor-pointer  rounded-lg "
            >
              <LuMoveLeft className="" onClick={carouselUp} />
            </div>

            <div className="flex flex-wrap w-[70px] md:w-20 items-center gap-1">
              {carouselMovies.length > 0 &&
                [...Array(arrowArr)].map((item, idx) => (
                  <div
                    key={idx}
                    className={`mx-auto  ${
                      carouselNum === idx
                        ? "bg-[#ff0000] h-[3px] lg:h-1 w-3 md:w-4"
                        : "bg-[#333333] h-[1px] lg:h-0.5 w-2 md:w-3"
                    }`}
                  ></div>
                ))}
            </div>

            <div
              onClick={carouselUp}
              className="px-2 md:px-4 bg-[#1a1a1a] py-2 md:py-3  carouselArrowEffect cursor-pointer  rounded-lg "
            >
              <LuMoveRight className="" onClick={carouselDown} />
            </div>
          </div>
        </div>
        <div className="flex items-center ">
          {carouselMovies.map(
            (
              {
                poster_path,
                original_title,
                id,
                release_date,
                vote_average,
                popularity,
              },
              i
            ) => (
              <div
                className=" relative   lg:w-[20%] md2:w-[25%] w-[50%] sm2:w-[33.33%]  xl:w-[16.66%] 2xl:w-[14.2857%] transition duration-[.4s] ease-in shrink-0"
                key={i}
                style={{ transform: `translateX(-${carouselTranslate}%)` }}
              >
                <Link to={`video/${id}`}>
                  <SingleMovieCarou
                    img={`https://image.tmdb.org/t/p/original` + poster_path}
                    leftText={
                      <div className="text-[#999999]  w-full flex items-center justify-between ">
                        <div className=" gap-1  pt-2   w-full">
                          {/* <MdWatchLater /> */}
                          {vote_average > 7 ? (
                            <div className="flex items-center w-2.5 md:w-[13px]  gap-1 ">
                              <img src="/icons/one.png" alt="" />
                              <img src="/icons/one.png" alt="" />
                              <img src="/icons/one.png" alt="" />
                              <img src="/icons/one.png" alt="" />
                              <img src="/icons/one.png" alt="" />
                            </div>
                          ) : vote_average < 7 ? (
                            <div className="flex items-center w-2.5 md:w-[13px]  gap-1">
                              <img src="/icons/one.png" alt="" />
                              <img src="/icons/one.png" alt="" />
                              <img src="/icons/one.png" alt="" />
                              <img src="/icons/one.png" alt="" />
                              <img src="/icons/three.png" alt="" />
                            </div>
                          ) : (
                            <></>
                          )}
                        </div>
                        <div className="flex absolute bottom-[6px] right-[16px] md:bottom-[6px] md:right-[18px] items-center gap-1">
                          <FaEye className="text-[12px] md:text-sm" />
                          <p className="text-[12px] md:text-[14px]">
                            {Math.floor(popularity)}k
                          </p>
                        </div>
                      </div>
                    }
                  />
                </Link>
              </div>
            )
          )}
        </div>
      </div>
    </>
  );
}

export default Section5;
