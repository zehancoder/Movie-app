import React from "react";
import Container from "./Container";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect, useRef } from "react";
import Heading from "./Heading";
import Button from "./Button";
import { Link } from "react-router-dom";
import { IoPlay } from "react-icons/io5";
import { AiFillLike, AiFillSound } from "react-icons/ai";
import { FiPlus } from "react-icons/fi";
import { FaEye } from "react-icons/fa6";
import SingleMovieCarou from "./SingleMovieCarou";
import { removeLike, removeLikeAnimations } from "../../redux/dataFetch";
function LikeVideos() {
  const movie = useSelector((state) => state.likeVideos);
  const dispatch = useDispatch();
  // track like videos from redux store
  const likeTrack = () =>
    movie.map(({ data }) => {
      setTimeout(() => {
        document.getElementById(`${data.id}`).style.background = "red";
      }, 400);
    });

  const animations = useSelector((state) => state.likeAnimations);
  const animationLikeTrack = () =>
    animations.map(({ data }) => {
      setTimeout(() => {
        document.getElementById(`${data.id}`).style.background = "red";
      }, 400);
    });

  likeTrack();
  animationLikeTrack()
  return (
    <div className="overflow-hidden w-screen py-8">
      <div className="h-28"></div>
      <Container className={"mx-auto h-full relative xl:p-0"}>
        <div>
          <Heading>
            {movie.length > 0 ? "You Liked Movies" : "No Liked Movies"}
          </Heading>
          <div className="py-5">
            {movie.length > 0 && (
              <div>
                <div>
                  <div className="flex items-center flex-wrap">
                    {movie.map(({ data }) => (
                      <div className="lg:w-[16.66%] md2:w-[20%] showPlaylikeOnhoverParent  sm:w-[25%] sm2:w-[33.33%] w-[50%] xl:w-[14.28%]  scrollAnimation">
                        <div>
                          <div className="">
                            <SingleMovieCarou
                              img={`https://image.tmdb.org/t/p/original${data.poster_path}`}
                              hoverItem={
                                <div>
                                  <div className=" text-white text-center">
                                    <Button
                                      className={
                                        "bg-[#ff0000] md:text-[12px] lg:text-[14px] md:px-1.5 md:py-1.5 px-1.5 py-1.5 lg:px-2.5 lg:py-2.5 customBtnHoverEffect"
                                      }
                                    >
                                      <Link
                                        to={`/MoviesShows/video/${data.id}`}
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
                                        id={data.id}
                                        onClick={() =>
                                          dispatch(
                                            removeLike({
                                              like: true,
                                              data: data,
                                            })
                                          )
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
                                  {data.original_title}
                                </p>
                              </div>
                              <div className="text-[#999999] w-full flex items-center justify-center absolute bottom-6 left-0 px-5">
                                <div className=" gap-1   w-full">
                                  {/* <MdWatchLater /> */}
                                  {data.vote_average > 7 ? (
                                    <div className="flex items-center w-2.5 md:w-[13px]  gap-1 ">
                                      <img src="/icons/one.png" alt="" />
                                      <span className="text-sm font-medium">
                                        5.0
                                      </span>
                                    </div>
                                  ) : data.vote_average > 6 ? (
                                    <div className="flex items-center w-2.5 md:w-[13px]  gap-1">
                                      <img src="/icons/one.png" alt="" />
                                      <span className="text-sm font-medium">
                                        4.5
                                      </span>
                                    </div>
                                  ) : data.vote_average < 5 ? (
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
                                    {Math.floor(data.popularity)}k
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        {/* showing liked animations */}


        <div>
          <Heading>
            {animations.length > 0
              ? "You Liked Animations"
              : "No Liked Animations"}
          </Heading>
          <div className="py-5">
            {animations.length > 0 && (
              <div>
                <div>
                  <div className="flex items-center flex-wrap">
                    {animations.map(({ data }) => (
                      <div className="lg:w-[16.66%] md2:w-[20%] showPlaylikeOnhoverParent  sm:w-[25%] sm2:w-[33.33%] w-[50%] xl:w-[14.28%]  scrollAnimation">
                        <div>
                          <div className="">
                            <SingleMovieCarou
                              img={`https://image.tmdb.org/t/p/original${data.poster_path}`}
                              hoverItem={
                                <div>
                                  <div className=" text-white text-center">
                                    <Button
                                      className={
                                        "bg-[#ff0000] md:text-[12px] lg:text-[14px] md:px-1.5 md:py-1.5 px-1.5 py-1.5 lg:px-2.5 lg:py-2.5 customBtnHoverEffect"
                                      }
                                    >
                                      <Link
                                        to={`/Animations/video/${data.id}`}
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
                                        id={data.id}
                                        onClick={() =>
                                          dispatch(
                                            removeLikeAnimations({
                                              like: true,
                                              data: data,
                                            })
                                          )
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
                                  {data.original_title}
                                </p>
                              </div>
                              <div className="text-[#999999] w-full flex items-center justify-center absolute bottom-6 left-0 px-5">
                                <div className=" gap-1   w-full">
                                  {/* <MdWatchLater /> */}
                                  {data.vote_average > 7 ? (
                                    <div className="flex items-center w-2.5 md:w-[13px]  gap-1 ">
                                      <img src="/icons/one.png" alt="" />
                                      <span className="text-sm font-medium">
                                        5.0
                                      </span>
                                    </div>
                                  ) : data.vote_average > 6 ? (
                                    <div className="flex items-center w-2.5 md:w-[13px]  gap-1">
                                      <img src="/icons/one.png" alt="" />
                                      <span className="text-sm font-medium">
                                        4.5
                                      </span>
                                    </div>
                                  ) : data.vote_average < 5 ? (
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
                                    {Math.floor(data.popularity)}k
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
}

export default LikeVideos;
