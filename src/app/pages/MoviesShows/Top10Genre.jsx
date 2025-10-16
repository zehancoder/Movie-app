import React from "react";
import Container from "../../common/Container";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { page2, page3 } from "../../../redux/dataFetch";
import { LuMoveLeft } from "react-icons/lu";
import { LuMoveRight } from "react-icons/lu";
import CommonCarou from "../../common/CommonCarou";
import Heading from "../../common/Heading";
import Button from "../../common/Button";
import { Link } from "react-router-dom";
function Top10Genre() {
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
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=4",
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
      dispatch(page3(movie));
    }
  }, [movie]);

  // get all movies from redux store
  const page1Data = useSelector((state) => state.movies);
  const page2Data = useSelector((state) => state.page2);

  const page2Movie = page2Data[0];
  const page1Movie = page1Data[0];
  // successfuly get data from redux store

  // get 4 movies from playingData for showing in carousel
  const [carouselMovies, setCarouselMovies] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      if (movie.length > 0 && page1Movie.length > 0) {
        let data1 = [];
        for (let val = 0; val <= 3; val++) {
          data1.push(movie[val]);
        }
        let data2 = [];
        for (let val = 4; val <= 7; val++) {
          data2.push(movie[val]);
        }
        let data3 = [];
        for (let val = 8; val <= 11; val++) {
          data3.push(movie[val]);
        }
        let data4 = [];
        for (let val = 12; val <= 15; val++) {
          data4.push(movie[val]);
        }
        let data5 = [];
        for (let val = 15; val <= 18; val++) {
          data5.push(movie[val]);
        }
        let data6 = [];
        for (let val = 0; val <= 3; val++) {
          data6.push(page2Movie[val]);
        }

        let data7 = [];
        for (let val = 4; val <= 7; val++) {
          data7.push(page2Movie[val]);
        }
        let data8 = [];
        for (let val = 8; val <= 11; val++) {
          data8.push(page2Movie[val]);
        }
        let data9 = [];
        for (let val = 12; val <= 15; val++) {
          data9.push(page2Movie[val]);
        }

        let data10 = [];
        for (let val = 16; val <= 19; val++) {
          data10.push(page2Movie[val]);
        }

        setCarouselMovies([
          data1,
          data2,
          data3,
          data4,
          data5,
          data6,
          data7,
          data8,
          data9,
          data10,
        ]);
      }
    }, 400);
  }, [movie, page2Movie]);

  // moves category title
  const title = [
    "Drama",
    "Comedy",
    "Action",
    "Horror",
    "Mystery",
    "Thriller",
    "Sci-Fi",
    "Romance",
    "Fantasy",
    "Superhero",
  ];

  // carousel count number
  const [carouselNum, setCarouselNum] = useState(0);
  const [carouselTranslate, setCarouselTranslet] = useState(0);
  // make dinamic arr for making loop and make carousel tracker;
  const [arrowArr, setArrowArr] = useState(7);

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth < 1280) {
        setArrowArr(8);
      }
      if (window.innerWidth < 850) {
        setArrowArr(9);
      }
      if (window.innerWidth > 1280) {
        setArrowArr(7);
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
        carouselTranslate + arrowArr === 8 ? 700 : arrowArr === 9 ? 800 : 600
      );
    } else {
      setCarouselNum(carouselNum - 1);
      setCarouselTranslet(carouselTranslate - 100);
    }
  };

  return (
    <>
      <div>
        <div className="w-full lg:py-12 md:py-10 sm:py-8 py-6">
          <div className="flex items-center justify-between w-full ">
            <Heading className={""}>Popular Top 10 In Genres</Heading>
            {/* carousel items */}
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
        </div>
        <div className="flex items-center ">
          {carouselMovies.length > 0 ? (
            carouselMovies.map((data, idx) => (
              <div
                className="shrink-0 relative md2:w-[33.5%] w-[50%] sm2:w-[50%] xl:w-[25%] transition duration-[.6s]"
                style={{ transform: `translateX(${-carouselTranslate}%)` }}
                id="carousel"
              >
                <Link to={title[idx]}>
                  <div className=" absolute bottom-[45px] md:bottom-[60px] lg:bottom-[75px] z-30 left-6 md:left-10 lg:left-12">
                    <p className="bg-[#ff0000] px-1.5 md:text-[9px] text-[7px] lg:text-[11px] text-white rounded-[2px] py-1">
                      Top 10 In
                    </p>
                  </div>
                  {
                    <CommonCarou
                      img1={`https://image.tmdb.org/t/p/w500${data[0].backdrop_path}`}
                      img2={`https://image.tmdb.org/t/p/w500${data[1].backdrop_path}`}
                      img3={`https://image.tmdb.org/t/p/w500${data[2].backdrop_path}`}
                      img4={`https://image.tmdb.org/t/p/w500${data[3].backdrop_path}`}
                      text={title[idx]}
                    />
                  }
                </Link>
              </div>
            ))
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
}

export default Top10Genre;
