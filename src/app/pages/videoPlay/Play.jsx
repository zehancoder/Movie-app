import React, { useEffect, useState } from "react";
import Container from "../../common/Container";
import { useLocation } from "react-router-dom";
import Heading from "../../common/Heading";
import { useSelector } from "react-redux";
import { LuMoveLeft } from "react-icons/lu";
import { LuMoveRight } from "react-icons/lu";
import { useDispatch } from "react-redux";
import SingleMovieCarou from "../../common/SingleMovieCarou";
import { Link, Route, Routes, useParams } from "react-router-dom";
import { upComeing, relatedMovies } from "../../../redux/dataFetch";
import { FaEye } from "react-icons/fa6";

function Play() {
  const { id } = useParams();
  const [video, setVideo] = useState({
    published_at: "",
    name: "",
    key: "",
    size: "",
  });
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
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      options
    )
      .then((res) => res.json())
      .then((res) => setVideo(res.results[0]))
      .catch((err) => console.error(err));
  }, [id]);

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const size =
    video.size.toString().split("").slice(0, 1).join("") +
    "." +
    video.size
      .toString()
      .split("")
      .slice(1, video.size.toString().split("").length)
      .join("");

  // show realted movies with fetch data
  const [carouselNum, setCarouselNum] = useState(0);

  const [movie, setMovies] = useState([]);

  const dispatch = useDispatch();
  // getting data from tmdb api

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=4",
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
      dispatch(relatedMovies(movie));
    }
  }, [movie]);

  // get all movies from redux store
  const trandingPage1 = useSelector((state) => state.relatedMovies);

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
      <div className="py-8">
        <div className="text-white overflow-hidden w-screen py-8 md:h-[700px] h-[600px] lg:h-[1000px] ">
          <div className="h-24 w-full"></div>
          <Container className="mx-auto h-full relative xl:p-0  overflow-hidden">
            <div className="2xl:h-[90%] xl:h-[80%] lg:h-[75%] lg:w-[87%] md:h-[70%] h-[60%] w-[95%] rounded-lg overflow-hidden md:w-[80%] xl:w-[90%] mx-auto 2xl:w-full  ">
              <div className="h-full w-full ">
                <iframe
                  className="rounded-3 lg:rounded-lg h-full w-full"
                  src={`https://www.youtube.com/embed/${video.key}`}
                  title="React Projects For Beginners | Master React.js In One Video | React Projects for Resume"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </Container>
        </div>
        <Container className={"mx-auto  "}>
          <div className="w-full flex items-center justify-between text-[15px] font-medium font-manrope  text-white bg-[#1A1A1A] rounded-lg md:px-4 px-3 lg:px-6 py-6 lg:py-12">
            <div>
              <p>
                <span className="text-[#999999] text-[16px] ">Title:</span>
                {video.name}
              </p>
              <p className="mt-3">
                <span className="text-[#999999] text-[16px] ">Size: </span>
                {size} GB
              </p>
            </div>
            <div>
              <p>
                <span className="text-[#999999] text-[16px]">Relese At: </span>{" "}
                {video.published_at.slice(0, 10)}
              </p>
              <p className="mt-3">
                <span className="text-[#999999] text-[16px]">Language: </span>{" "}
                {(video.iso_3166_1 = "US" && "English")}
              </p>
            </div>
          </div>
          {/* showing realted movies in playing  */}
          <div>
            <div>
              <div>
                <div className="flex items-center font-manrope lg:py-12 md:py-10 sm:py-6 py-4 justify-between">
                  <Heading>More Movies</Heading>
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
            ({ poster_path, original_title, id, release_date, vote_average, popularity }, i) => (
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
                        <div className="flex absolute bottom-[11px] right-[16px] md:bottom-[18px] md:right-[18px] items-center gap-1">
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
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

export default Play;
