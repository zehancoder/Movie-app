import React from "react";
import Heading from "../../common/Heading";
import { useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import { LuMoveLeft } from "react-icons/lu";
import { LuMoveRight } from "react-icons/lu";
import { useDispatch } from "react-redux";
import { page3, trandingNow1 } from "../../../redux/dataFetch";
import { MdWatchLater } from "react-icons/md";
import { FaEye } from "react-icons/fa6";
import SingleMovieCarou from "../../common/SingleMovieCarou";
import { Link } from "react-router-dom";

function TrandingNow() {
  const [carouselNum, setCarouselNum] = useState(0);

  const [movie, setMovies] = useState([]);
  const [movie2, setMovies2] = useState([]);

  const dispatch = useDispatch();
  // getting data from tmdb api

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYTA1YmQzYTY2MWMzYWQxOGIyOGRmZGRlMjc0MTZlOCIsIm5iZiI6MTc1NzUxMTMyOS41MjEsInN1YiI6IjY4YzE3ZWExY2IwMDI0MWE4YzRlNmY0YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4VgIPDknlg-LsiibDyaZ6qZldUrgsLly_zuLKEoVlYs",
    },
  };

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      options
    )
      .then((res) => res.json())
      .then((res) => setMovies(res.results))
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    if (movie.length === 0) {
      return;
    } else {
      dispatch(trandingNow1(movie));
    }
  }, [movie]);

  // get all movies from redux store
  const trandingPage1 = useSelector((state) => state.trandingNow1);

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
  }, [movie, trandingPage1Movie]);

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
          <Heading>Trending Now</Heading>
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
          {carouselMovies.map(({ poster_path, original_title, id }, i) => (
            <div
              className=" lg:w-[20%] md2:w-[25%] w-[50%] sm2:w-[33.33%]  xl:w-[16.66%] 2xl:w-[14.2857%] transition duration-[.4s] ease-in shrink-0"
              key={i}
              style={{ transform: `translateX(-${carouselTranslate}%)` }}
            >
              <Link to={`video/${id}`}>
                <SingleMovieCarou
                  img={`https://image.tmdb.org/t/p/original` + poster_path}
                  leftText={
                    <div className="text-[#999999]">
                      <div className="flex items-center gap-1 pt-2">
                        <MdWatchLater />
                        {}
                      </div>
                    </div>
                  }
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default TrandingNow;
