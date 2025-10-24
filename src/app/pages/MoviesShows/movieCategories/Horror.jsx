import React from "react";
import Container from "../../../common/Container";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect, useRef } from "react";
import FetchWithCategory from "../../../../data/FetchCategoryMovie";
import Heading from "../../../common/Heading";
import Button from "../../../common/Button";
import { category, likeVideos, removeLike } from "../../../../redux/dataFetch";
import { Link } from "react-router-dom";
import { IoPlay } from "react-icons/io5";
import { AiFillLike, AiFillSound } from "react-icons/ai";
import { FiPlus } from "react-icons/fi";
import { FaEye } from "react-icons/fa6";
import SingleMovieCarou from "../../../common/SingleMovieCarou";
function Horror() {
  const [movie, setMovies] = useState([]);

  const dispatch = useDispatch();
  // getting data from tmdb api
  const [page, setPage] = useState(1);

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
      `https://api.themoviedb.org/3/discover/movie?api_key=1a05bd3a661c3ad18b28dfdde27416e8&with_genres=${27}&page=${page}`,
      options
    )
      .then((res) => res.json())
      .then((res) => setMovies((prev) => [...prev, res.results]))
      .catch((err) => console.error(err));
  }, [page]);

  useEffect(() => {
    movie.length > 0 && dispatch(category(movie));
  }, [movie]);


  const mainData = useSelector((state) => state.category);

  // const [page, setPage] = useState(2);
  const newDataImport = () => {
    setPage((prev) => prev + 1);
  };

    // store like video in redux;

  const likeHandle = (likeItems) => {
    document.getElementById(`${likeItems.id}`).style.backgroundColor === "red"
      ? dispatch(removeLike({ like: true, data: likeItems }))
      : dispatch(likeVideos({ like: true, data: likeItems }));

    document.getElementById(`${likeItems.id}`).style.backgroundColor =
      document.getElementById(`${likeItems.id}`).style.backgroundColor === "red"
        ? "#0F0F0F"
        : "red";
  };

  const likeData = useSelector((state) => state.likeVideos);

  //track like vidoes from redux store
  const likeTrack = () =>
    likeData.map(({ data }) => {
      setTimeout(() => {
        document.getElementById(`${data.id}`).style.background = "red";
      }, 400);
    });

  likeTrack();

  return (
    <div className="overflow-hidden w-screen py-8">
      <div className="h-28"></div>
      <Container className={"mx-auto h-full relative xl:p-0"}>
        <div>
          <Heading>Horror</Heading>
          <div className="py-5">
            {movie.length > 0 && (
              <div>
                <div>
                  <div className="flex items-center flex-wrap">
                   {movie.map((data) =>
                      data.map(
                        ({
                          poster_path,
                          original_title,
                          vote_average,
                          popularity,
                          id,
                        }, idx) => (
                          <div
                            className="lg:w-[16.66%] md2:w-[20%] showPlaylikeOnhoverParent  sm:w-[25%] sm2:w-[33.33%] w-[50%] xl:w-[14.28%]  scrollAnimation"
                          >
                            <div>
                              <div className="">
                                <SingleMovieCarou
                                  img={`https://image.tmdb.org/t/p/original${poster_path}`}
                                  hoverItem={
                                    <div>
                                      <div className=" text-white text-center">
                                        <Button
                                          className={
                                            "bg-[#ff0000] md:text-[12px] lg:text-[14px] md:px-1.5 md:py-1.5 px-1.5 py-1.5 lg:px-2.5 lg:py-2.5 customBtnHoverEffect"
                                          }
                                        >
                                          <Link
                                            to={`/MoviesShows/video/${id}`}
                                            className="flex items-center gap-2"
                                          >
                                            <IoPlay /> Play Now
                                          </Link>
                                        </Button>
                                        <div className="flex items-center gap-2 text-[13px] mt-2">
                                          <span className="px-2 md:px-2.5 border border-[#1F1F1F] py-[7.5px] lg:py-2.5 bg-[#0F0F0F] rounded-lg cursor-pointer carouselArrowEffect">
                                            <FiPlus />
                                          </span>{" "}
                                         <span
                                            id={id}
                                            onClick={() =>
                                              likeHandle(data[idx])
                                            }
                                            className={`px-2 lg:px-2.5 border border-[#1F1F1F] py-[7.5px] lg:py-2.5 bg-[#0F0F0F] rounded-lg cursor-pointer carouselArrowEffect `}
                                          >
                                            <AiFillLike />
                                          </span>
                                          <span className="px-2 lg:px-2.5 border border-[#1F1F1F] py-[7.5px] lg:py-2.5 bg-[#0F0F0F] rounded-lg cursor-pointer carouselArrowEffect">
                                            <AiFillSound />
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  }
                                ></SingleMovieCarou>
                              </div>
                              <div className="w-full font-manrope h-24 relative pb-3 px-2">
                                <div className="border bg-[#1A1A1A] border-[#262626] h-full w-full px-3 py-1.5 rounded-lg">
                                  <div>
                                    <p className="text-sm font-medium text-[#999999]">
                                      {original_title}
                                    </p>
                                  </div>
                                  <div className="text-[#999999] w-full flex items-center justify-center absolute bottom-6 left-0 px-5">
                                    <div className=" gap-1   w-full">
                                      {/* <MdWatchLater /> */}
                                      {vote_average > 7 ? (
                                        <div className="flex items-center w-2.5 md:w-[13px]  gap-1 ">
                                          <img src="/icons/one.png" alt="" />
                                          <span className="text-sm font-medium">
                                            5.0
                                          </span>
                                        </div>
                                      ) : vote_average > 6 ? (
                                        <div className="flex items-center w-2.5 md:w-[13px]  gap-1">
                                          <img src="/icons/one.png" alt="" />
                                          <span className="text-sm font-medium">
                                            4.5
                                          </span>
                                        </div>
                                      ) : vote_average < 5 ? (
                                        <div className="flex items-center w-2.5 md:w-[13px]  gap-1">
                                          <img src="/icons/one.png" alt="" />
                                          <span className="text-sm font-medium">
                                            4.0
                                          </span>
                                        </div>
                                      ) : (
                                        <div className="flex items-center w-2.5 md:w-[13px]  gap-1">
                                          <img src="/icons/one.png" alt="" />
                                          <span className="text-sm font-medium">
                                            3.5
                                          </span>
                                        </div>
                                      )}
                                    </div>
                                    <div className="flex  z-30 items-center gap-1">
                                      <FaEye className="text-[12px] md:text-sm" />
                                      <p className="text-[12px] md:text-[14px]">
                                        {Math.floor(popularity)}k
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        )
                      )
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="w-full text-center " onClick={newDataImport}>
            <Button className={"bg-[#ff0000] mx-auto customBtnHoverEffect"}>
              Load More
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Horror;
