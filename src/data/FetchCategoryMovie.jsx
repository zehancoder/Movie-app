import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { category } from "../redux/dataFetch";
import SingleMovieCarou from "../app/common/SingleMovieCarou";
import ParagraphText from "../app/common/ParagraphText";
import { FaEye } from "react-icons/fa6";
const FetchWithCategory = ({ genreId, page, dataNumber }) => {
  const [movies, setMovies] = useState({
    page: "",
    data: [],
    genreId: "",
    dataNumber: "",
  });
  const dispatch = useDispatch();
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYTA1YmQzY2MwQzQGRmZGRlMjc0MTZiOS4MiJ9",
    },
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=1a05bd3a661c3ad18b28dfdde27416e8&with_genres=${genreId}&page=${page}`,
      options
    )
      .then((res) => res.json())
      .then((res) =>
        setMovies({
          page: page,
          data: res.results,
          genreId: genreId,
          dataNumber: dataNumber,
        })
      )
      .catch((err) => console.error(err));
  }, [genreId, page]);

  useEffect(() => {
    movies.data.length > 0 && dispatch(category(movies));
  }, [movies]);

  const data = useSelector((state) => state.category);
  // console.log(data[0]);

  const genres = [
    { name: "Action & Adventure", id: 28 },
    { name: "Animation", id: 16 },
    { name: "Comedy", id: 35 },
    { name: "Crime", id: 80 },
    { name: "Documentary", id: 99 },
    { name: "Drama", id: 18 },
    { name: "Family", id: 10751 },
    { name: "Kids", id: 10751 },
    { name: "Mystery", id: 9648 },
    { name: "News", id: 10763 },
  ];

  return (
    <div>
      <div>
        <div className="flex items-center flex-wrap">
          {data.length > 0 &&
            data[dataNumber].data.map(
              ({ poster_path, original_title, vote_average, popularity }) => (
                <div className="lg:w-[16.66%] md2:w-[20%] sm:w-[25%] sm2:w-[33.33%] w-[50%] xl:w-[14.28%] cursor-pointer">
                  <div>
                    <div>
                      <SingleMovieCarou
                        img={`https://image.tmdb.org/t/p/original${poster_path}`}
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
                                <span className="text-sm font-medium">5.0</span>
                              </div>
                            ) : vote_average > 6 ? (
                              <div className="flex items-center w-2.5 md:w-[13px]  gap-1">
                                <img src="/icons/one.png" alt="" />
                                <span className="text-sm font-medium">4.5</span>
                              </div>
                            ) : vote_average < 5 ? (
                              <div className="flex items-center w-2.5 md:w-[13px]  gap-1">
                                <img src="/icons/one.png" alt="" />
                                <span className="text-sm font-medium">4.0</span>
                              </div>
                            ) : (
                              <div className="flex items-center w-2.5 md:w-[13px]  gap-1">
                                <img src="/icons/one.png" alt="" />
                                <span className="text-sm font-medium">3.5</span>
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
  );
};

export default FetchWithCategory;
