import React, { useEffect, useRef } from "react";
import Container from "../../common/Container";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";
import { LuMoveLeft } from "react-icons/lu";
import { LuMoveRight } from "react-icons/lu";
import Heading from "../../common/Heading";
import ParagraphText from "../../common/ParagraphText";
import Button from "../../common/Button";
import { IoPlay } from "react-icons/io5";
import { AiFillLike, AiFillSound } from "react-icons/ai";
import { FiPlus } from "react-icons/fi";
import { nowPlaying } from "../../../redux/dataFetch";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import MoviesSection from "./MoviesSection";
import { FaPauseCircle, FaPlayCircle } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

function MoviesShows() {
  // making scroll bar when path name is changed
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const [movie, setMovies] = useState([]);
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
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
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
      dispatch(nowPlaying(movie));
    }
  }, [movie]);

  // data getting complete from api

  // get all movies from redux store
  const playingData = useSelector((state) => state.movies);

  // successfuly get data from redux store

  // get 4 movies from playingData for showing in carousel
  const [carouselMovies, setCarouselMovies] = useState([]);
  useEffect(() => {
    if (playingData.length !== 0) {
      for (let val = 0; val <= 7; val++) {
        const getRandomMovie = playingData[0][Math.floor(Math.random() * 19)];

        setCarouselMovies((prev) => [...prev, getRandomMovie]);
      }
    }
  }, [playingData]);

  // 4 movies getting complete

  // carousel count number

  const [carouselNum, setCarouselNum] = useState(0);
  const [carouselTranslate, setCarouselTranslet] = useState(0);
  const timerRef = useRef(null);

  const startAutoPlay = () => {
    // আগের interval থাকলে বন্ধ করো (নিরাপদভাবে)
    clearInterval(timerRef.current);

    timerRef.current = setInterval(() => {
      setCarouselNum((prevNum) => {
        if (prevNum >= 7) {
          setCarouselTranslet(0);
          return 0;
        } else {
          setCarouselTranslet((prevTrans) => prevTrans + 100);
          return prevNum + 1;
        }
      });
    }, 10000);
  };

  const stopAutoPlay = () => {
    clearInterval(timerRef.current);
  };

  useEffect(() => {
    startAutoPlay();
    return () => stopAutoPlay();
  }, []);

  const carouselUp = () => {
    stopAutoPlay();

    setCarouselNum((prevNum) => {
      if (prevNum >= 7) {
        setCarouselTranslet(0);
        return 0;
      } else {
        setCarouselTranslet((prevTrans) => prevTrans + 100);
        return prevNum + 1;
      }
    });

    startAutoPlay();
  };

  const carouselDown = () => {
    stopAutoPlay();

    setCarouselNum((prevNum) => {
      if (prevNum < 1) {
        setCarouselTranslet(600);
        return 7;
      } else {
        setCarouselTranslet((prevTrans) => prevTrans - 100);
        return prevNum - 1;
      }
    });

    startAutoPlay();
  };



  return (
    <>
      <div className=" text-white overflow-hidden w-screen py-8 md:h-[700px] h-[600px] lg:h-[1000px] ">
        <Container className={"mx-auto h-full relative xl:p-0"}>
          {/* carousel arrow */}

          <div className=" absolute -bottom-8 md:bottom-0 flex items-center justify-between px-12 py-5 z-20 w-full h-32 text-xl font-bold">
            <div
              onClick={carouselDown}
              className="px-2 md:px-3 py-2 md:py-3 bg-[#0F0F0F] carouselArrowEffect cursor-pointer border rounded-lg border-[#1F1F1F]"
            >
              <LuMoveLeft className="" />
            </div>

            <div className="flex items-center gap-1">
              <div
                className={`   ${
                  carouselNum == 0
                    ? "bg-[#ff0000] h-1 md:h-1.5 w-4 md:w-5"
                    : "bg-[#333333] h-0.5 md:h-1 w-3 md:w-4"
                }`}
              ></div>
              <div
                className={`   ${
                  carouselNum == 1
                    ? "bg-[#ff0000] h-1 md:h-1.5 w-4 md:w-5"
                    : "bg-[#333333] h-0.5 md:h-1 w-3 md:w-4"
                }`}
              ></div>
              <div
                className={`   ${
                  carouselNum == 2
                    ? "bg-[#ff0000] h-1 md:h-1.5 w-4 md:w-5"
                    : "bg-[#333333] h-0.5 md:h-1 w-3 md:w-4"
                }`}
              ></div>
              <div
                className={`  ${
                  carouselNum == 3
                    ? "bg-[#ff0000] h-1 md:h-1.5 w-4 md:w-5"
                    : "bg-[#333333] h-0.5 md:h-1 w-3 md:w-4"
                }`}
              ></div>

              <div
                className={`   ${
                  carouselNum == 4
                    ? "bg-[#ff0000] h-1 md:h-1.5 w-4 md:w-5"
                    : "bg-[#333333] h-0.5 md:h-1 w-3 md:w-4"
                }`}
              ></div>
              <div
                className={`   ${
                  carouselNum == 5
                    ? "bg-[#ff0000] h-1 md:h-1.5 w-4 md:w-5"
                    : "bg-[#333333] h-0.5 md:h-1 w-3 md:w-4"
                }`}
              ></div>
              <div
                className={`   ${
                  carouselNum == 6
                    ? "bg-[#ff0000] h-1 md:h-1.5 w-4 md:w-5"
                    : "bg-[#333333] h-0.5 md:h-1 w-3 md:w-4"
                }`}
              ></div>
              <div
                className={`  ${
                  carouselNum == 7
                    ? "bg-[#ff0000] h-1 md:h-1.5 w-4 md:w-5"
                    : "bg-[#333333] h-0.5 md:h-1 w-3 md:w-4"
                }`}
              ></div>
            </div>

            <div
              onClick={carouselUp}
              className="px-2 md:px-3 py-2 md:py-3 bg-[#0F0F0F] carouselArrowEffect cursor-pointer border rounded-lg border-[#1F1F1F]"
            >
              <LuMoveRight className="" />
            </div>
          </div>

          {/* carousel arrow */}

          <div
            className={`md:mt-20 mt-24  lg:mt-28 h-full flex w-auto   transition duration-[.6s] ease-in `}
            style={{
              transform: `translateX(-${carouselTranslate}%)`,
            }}
          >
            {/* show movies in carousel type */}

            {carouselMovies.map(
              ({ backdrop_path, overview, original_title, id }, idx) => (
                <div
                  key={idx}
                  className={`w-full  shrink-0 -z-10 transform   h-full relative rounded-lg  overflow-hidden bg-contain `}
                  id="bgUrl1"
                >
                  <img
                    src={`https://image.tmdb.org/t/p/w500${backdrop_path}`}
                    className="absolute brightness-75 top-0 left-0 h-full w-full object-cover "
                    alt=""
                  />
                  <div className="overlay"></div>
                  <div className="absolute left-[50%] transform -translate-x-[50%] text-center w-[90%] md:max-w-6xl  md:bottom-40 bottom-36 lg:bottom-60  ">
                    <div>
                      <Heading className={""}>{original_title}</Heading>
                      <ParagraphText className={"mt-4"}>
                        {overview}
                      </ParagraphText>
                      <div className="flex items-center justify-center mt-4">
                        <Button
                          className={"bg-[#ff0000]  "}
                        >
                          <Link to={`video/${id}`} className="flex items-center gap-2">
                            <IoPlay /> Play Now
                          </Link>
                        </Button>
                        <div className="flex items-center gap-2 text-[18px] ml-2">
                          <span className="px-3 md:px-4 border border-[#1F1F1F] py-2 lg:py-4 bg-[#0F0F0F] rounded-lg cursor-pointer carouselArrowEffect">
                            <FiPlus />
                          </span>{" "}
                          <span className="px-3 lg:px-4 border border-[#1F1F1F] py-2 lg:py-4 bg-[#0F0F0F] rounded-lg cursor-pointer carouselArrowEffect">
                            <AiFillLike />
                          </span>
                          <span className="px-3 lg:px-4 border border-[#1F1F1F] py-2 lg:py-4 bg-[#0F0F0F] rounded-lg cursor-pointer carouselArrowEffect">
                            <AiFillSound />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </Container>
      </div>

      <MoviesSection />
    </>
  );
}

export default MoviesShows;
