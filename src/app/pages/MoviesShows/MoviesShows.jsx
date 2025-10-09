import React, { useEffect } from "react";
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

function MoviesShows() {
  const [movie, setMovies] = useState([]);

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

  console.log(movie);

  // carousel count number
  const [carouselNum, setCarouselNum] = useState(0);
  const [carouselTranslate, setCarouselTranslet] = useState(0);

  const carouselUp = () => {
    console.log("up");
    if (carouselNum >= 3) {
      setCarouselNum(0);
      setCarouselTranslet(0);
    } else {
      setCarouselNum(carouselNum + 1);
      setCarouselTranslet(carouselTranslate + 100);
    }
  };

  console.log(carouselTranslate);

  const carouselDown = () => {
    console.log("down");
    if (carouselNum < 1) {
      setCarouselNum(3);
      setCarouselTranslet(carouselTranslate + 300);
    } else {
      setCarouselNum(carouselNum - 1);
      setCarouselTranslet(carouselTranslate - 100);
    }
  };

  console.log(carouselTranslate);

  // const bgImageSize = document.querySelector(".bgImageSize")

  return (
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
          className={`md:mt-20 mt-24  lg:mt-28 h-full flex w-auto   transition duration-500 ease-in`}
          style={{
            transform: `translateX(-${carouselTranslate}%)`,
          }}
        >
          {/* show movies in carousel type */}

          <div
            className={`w-full  shrink-0 -z-10 transform   h-full relative rounded-lg overflow-hidden bg-contain `}
            id="bgUrl1"
          >
            <img
              src="https://lumiere-a.akamaihd.net/v1/images/alladin_600x450_moviespg_mobile_7_d097b99b.jpeg?region=0,0,600,450"
              className="absolute brightness-75 top-0 left-0 h-full w-full object-cover"
              alt=""
            />
            <div className="overlay"></div>
            <div className="absolute left-[50%] transform -translate-x-[50%] text-center w-[90%] md:max-w-6xl md:bottom-40 top-32 lg:bottom-60 w">
              <div>
                <Heading className={""}>Avengers : Endgame</Heading>
                <ParagraphText className={"mt-4"}>
                  With the help of remaining allies, the Avengers must assemble
                  once more in order to undo Thanos's actions and undo the chaos
                  to the universe, no matter what consequences may be in store,
                  and no matter who they face... Avenge the fallen.
                </ParagraphText>
                <div className="flex items-center justify-center mt-4">
                  <Button className={"bg-[#ff0000] flex items-center gap-2"}>
                    <IoPlay /> Play Now
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* movie 2 */}

          <div
            className={`w-full -z-10 shrink-0  h-full relative rounded-lg overflow-hidden  `}
          >
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc7TpfY-YKPjSV356lx5s0wSs2nxAFzhjR6Q&s"
              className="absolute brightness-75 top-0 left-0 h-full w-full object-cover"
              alt=""
            />
            <div className="overlay"></div>
            <div className="absolute left-[50%] transform -translate-x-[50%] text-center w-[90%] md:max-w-6xl  md:bottom-40 bottom-36 lg:bottom-60">
              <div>
                <Heading>Avengers : Endgame</Heading>
                <ParagraphText>
                  With the help of remaining allies, the Avengers must assemble
                  once more in order to undo Thanos's actions and undo the chaos
                  to the universe, no matter what consequences may be in store,
                  and no matter who they face... Avenge the fallen.
                </ParagraphText>
                <div className="flex items-center justify-center mt-4">
                  <Button className={"bg-[#ff0000] flex items-center gap-2"}>
                    <IoPlay /> Play Now
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* movie 3 */}

          <div
            className={`w-full shrink-0   h-full relative rounded-lg overflow-hidden  `}
          >
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR46Xkf4nDxz3UQPfwcOFtDGr2LeibNY7ahBQ&s"
              className="absolute brightness-75  top-0 left-0 h-full w-full object-cover"
              alt=""
            />
            <div className="overlay"></div>
            <div className="absolute left-[50%] transform -translate-x-[50%] text-center w-[90%] md:max-w-6xl md:bottom-40 bottom-36 lg:bottom-60">
              <div>
                <Heading>Avengers : Endgame</Heading>
                <ParagraphText>
                  With the help of remaining allies, the Avengers must assemble
                  once more in order to undo Thanos's actions and undo the chaos
                  to the universe, no matter what consequences may be in store,
                  and no matter who they face... Avenge the fallen.
                </ParagraphText>
                <div className="flex items-center justify-center mt-4">
                  <Button className={"bg-[#ff0000] flex items-center gap-2"}>
                    <IoPlay /> Play Now
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* movie 4 */}
          <div
            className={`w-full shrink-0   h-full relative rounded-lg overflow-hidden  `}
          >
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfyoR3GCWsGRBWdKD-gRANPLqhmV95G64VVw&s"
              className="absolute brightness-75 top-0 left-0 h-full w-full object-cover"
              alt=""
            />
            <div className="overlay"></div>
            <div className="absolute left-[50%] transform -translate-x-[50%] text-center w-[90%] md:max-w-6xl md:bottom-40 bottom-36 lg:bottom-60">
              <div>
                <Heading>Avengers : Endgame</Heading>
                <ParagraphText>
                  With the help of remaining allies, the Avengers must assemble
                  once more in order to undo Thanos's actions and undo the chaos
                  to the universe, no matter what consequences may be in store,
                  and no matter who they face... Avenge the fallen.
                </ParagraphText>
                <div className="flex items-center justify-center mt-4">
                  <Button className={"bg-[#ff0000] flex items-center gap-2"}>
                    <IoPlay /> Play Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default MoviesShows;
