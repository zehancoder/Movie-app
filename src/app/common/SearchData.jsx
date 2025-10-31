import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Container from "./Container";
import Heading from "./Heading";
import ParagraphText from "./ParagraphText";
import { likeVideos, newSavedData, removeLike, searchDataHandle } from "../../redux/dataFetch";
import SingleMovieCarou from "./SingleMovieCarou";
import Button from "./Button";
import { Link } from "react-router-dom";
import { IoPlay } from "react-icons/io5";
import { FiPlus } from "react-icons/fi";
import { AiFillLike, AiFillSound } from "react-icons/ai";
import { FaEye } from "react-icons/fa";

function SearchData() {
  //   const [data, setData] = useState([]);
  //   const [loading, setLoading] = useState(true);
    const dispatch = useDispatch()

  //   const options = {
  //     method: "GET",
  //     headers: {
  //       accept: "application/json",
  //       Authorization:
  //         "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYTA1YmQzYTY2MWMzYWQxOGIyOGRmZGRlMjc0MTZlOCIsIm5iZiI6MTc1NzUxMTMyOS41MjEsInN1YiI6IjY4YzE3ZWExY2IwMDI0MWE4YzRlNmY0YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4VgIPDknlg-LsiibDyaZ6qZldUrgsLly_zuLKEoVlYs",
  //     },
  //   };

  //   useEffect(() => {
  //     const getAllData = async () => {
  //       try {
  //         const [
  //           data1Res,
  //           data2Res,
  //           data3Res,
  //           data4Res,
  //           data5Res,
  //           data6Res,
  //           data7Res,
  //           data8Res,
  //         ] = await Promise.all([
  //           fetch(
  //             "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=2",
  //             options
  //           ),
  //           fetch(
  //             "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
  //             options
  //           ),
  //           fetch(
  //             "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=3",
  //             options
  //           ),
  //           fetch(
  //             "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
  //             options
  //           ),
  //           fetch(
  //             "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=2",
  //             options
  //           ),
  //           fetch(
  //             "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=3",
  //             options
  //           ),
  //           fetch(
  //             "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
  //             options
  //           ),
  //           fetch(
  //             "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=2",
  //             options
  //           ),
  //           fetch(
  //             "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=3",
  //             options
  //           ),
  //         ]);

  //         const [data1, data2, data3, data4, data5, data6, data7, data8] =
  //           await Promise.all([
  //             data1Res.json(),
  //             data2Res.json(),
  //             data3Res.json(),
  //             data4Res.json(),
  //             data5Res.json(),
  //             data6Res.json(),
  //             data7Res.json(),
  //             data8Res.json(),
  //           ]);

  //         setData([
  //           ...data1.results,
  //           ...data2.results,
  //           ...data3.results,
  //           ...data4.results,
  //           ...data5.results,
  //           ...data6.results,
  //           ...data7.results,
  //           ...data8.results,
  //         ]);
  //       } catch (error) {
  //         console.error("Error fetching:", error);
  //       } finally {
  //         setLoading(false);
  //       }
  //     };

  //     getAllData();
  //   }, []);

  //   useEffect(() => {
  //     dispatch(searchDataHandle(data))
  //   }, [data]);

  // select after search data
  const afterSerach = useSelector((state) => state.mainSearchData);
  useEffect(() => {
    console.log(afterSerach);
  }, [afterSerach]);

  //   console.log(users, comments, posts);

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

  // add movie saved functionality and save them in redux;
  // const [input, setInput] = useState('hello');
  const savedHandle = (savedItems) => {
    dispatch(newSavedData(savedItems));
  };

  // saved movies track
  const savedMovies = useSelector((state) => state.savedMovies);
  const savedTrack = () =>
    savedMovies.map(({ data }, idx) => {
      setTimeout(() => {
        document.getElementById(`${data.id + `s`}`).style.background = "red";
      }, 400);
    });

  savedTrack();

  const search = useSelector(state => state.searchingText  )

  return (
    <div className={`overflow-hidden w-screen py-8 font-manrope ${afterSerach.length > 0 ? "h-auto" : "h-[700px]"}`}>
      <div className="h-28"></div>
      <Container className={"mx-auto h-full relative xl:p-0"}>
        <div>
          <Heading className={'text-[#BFBFBF]'}>You Search: <span className="text-[#fff]">{search}</span></Heading>
          <div className="py-5">
            {afterSerach.length > 0 && (
              <div>
                <div>
                  <div className="flex items-center flex-wrap">
                    {afterSerach.map(
                      (
                        {
                          poster_path,
                          original_title,
                          vote_average,
                          popularity,
                          id,
                        },
                        idx
                      ) => (
                        <div className="lg:w-[16.66%] md2:w-[20%] showPlaylikeOnhoverParent  sm:w-[25%] sm2:w-[33.33%] w-[50%] xl:w-[14.28%]  scrollAnimation">
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
                                        <span
                                          id={id + `s`}
                                          onClick={() =>
                                            savedHandle(afterSerach[idx])
                                          }
                                          className="px-2 md:px-2.5 border border-[#1F1F1F] py-[7.5px] lg:py-2.5 bg-[#0F0F0F] rounded-lg cursor-pointer carouselArrowEffect"
                                        >
                                          <FiPlus />
                                        </span>{" "}
                                        <span
                                          id={id}
                                          onClick={() =>
                                            likeHandle(afterSerach[idx])
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
                    )}
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

export default SearchData;
