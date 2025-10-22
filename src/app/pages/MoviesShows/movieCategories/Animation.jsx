import React from "react";
import Container from "../../../common/Container";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect, useRef } from "react";
import FetchWithCategory from "../../../../data/FetchCategoryMovie";
import Heading from "../../../common/Heading";
import Button from "../../../common/Button";
function ActionsAdve() {
  const [movie, setMovies] = useState([]);

  //   const dispatch = useDispatch();
  //   // getting data from tmdb api

  //   const options = {
  //     method: "GET",
  //     headers: {
  //       accept: "application/json",
  //       Authorization:
  //         "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYTA1YmQzYTY2MWMzYWQxOGIyOGRmZGRlMjc0MTZlOCIsIm5iZiI6MTc1NzUxMTMyOS41MjEsInN1YiI6IjY4YzE3ZWExY2IwMDI0MWE4YzRlNmY0YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4VgIPDknlg-LsiibDyaZ6qZldUrgsLly_zuLKEoVlYs",
  //     },
  //   };

  //   useEffect(() => {
  //     fetch(
  //       "https://api.themoviedb.org/3/discover/movie?api_key=1a05bd3a661c3ad18b28dfdde27416e8&with_genres=28,%2012",
  //       options
  //     )
  //       .then((res) => res.json())
  //       .then((res) => setMovies(res.results))
  //       .catch((err) => console.error(err));
  //   }, []);

  return (
    <div className="overflow-hidden w-screen py-8">
      <div className="h-28"></div>
      <Container className={"mx-auto h-full relative xl:p-0"}>
        <div>
          <Heading>Action</Heading>
          <div className="py-5">
            <FetchWithCategory genreId={28} page={1} dataNumber={0} />
            <FetchWithCategory genreId={28} page={2} dataNumber={1} />
          </div>

          <div className="w-full text-center ">
            <Button className={"bg-[#ff0000] mx-auto customBtnHoverEffect"}>Load More</Button>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default ActionsAdve;
