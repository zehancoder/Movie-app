import React from "react";
import Container from "../common/Container";
import Heading from "../common/Heading";
import ParagraphText from "../common/ParagraphText";
import CarouselMaker from "./Carousel";
import { useState, useEffect } from "react";
import { LuMoveLeft } from "react-icons/lu";
import { LuMoveRight } from "react-icons/lu";
import jsonData from "../../data/carouselData.json";
import CommonCarou from "../common/CommonCarou";
import { Link } from "react-router-dom";

function Section2() {
  // carousel count number
  const [carouselNum, setCarouselNum] = useState(0);
  const [carouselTranslate, setCarouselTranslet] = useState(0);
  // make dinamic arr for making loop and make carousel tracker;
  const [arrowArr, setArrowArr] = useState(8);

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth < 1280) {
        setArrowArr(8);
      }
      if (window.innerWidth < 850) {
        setArrowArr(10);
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
    console.log("down");
    if (carouselNum < 1) {
      setCarouselNum(arrowArr - 1);
      setCarouselTranslet(
        carouselTranslate + arrowArr === 10 ? 700 : arrowArr === 8 ? 700 : 600
      );
    } else {
      setCarouselNum(carouselNum - 1);
      setCarouselTranslet(carouselTranslate - 100);
    }
  };

  return (
    <div className="w-[100vw] bg-[#141414] py-5 px-0 md:px-3 z-30 overflow-x-hidden">
      <Container className={"mx-auto "}>
        <div className="md:py-10 sm:py-8 py-6 lg:py-14">
          <div className="flex md:flex-row flex-col items-center md:gap-0 gap-4 justify-between">
            <div className="md:px-0 px-2">
              <Heading className={"font-medium"}>
                Explore our wide variety of categories
              </Heading>
              <ParagraphText className={"md:mt-3 mt-2 lg:mt-4"}>
                Whether you're looking for a comedy to make you laugh, a drama
                to make you think, or a documentary to learn something new
              </ParagraphText>
            </div>
            <div>
              <div className="w flex items-center gap-2 text-white px-3 py-3 z-20 rounded-lg text-xl font-bold border bg-[#0F0F0F] border-[#1F1F1F]">
                <div
                  onClick={carouselDown}
                  className="px-2 md:px-4 py-2 md:py-3 bg-[#1a1a1a] carouselArrowEffect cursor-pointer  rounded-lg "
                >
                  <LuMoveLeft className="" onClick={carouselUp} />
                </div>

                <div className="flex flex-wrap w-[70px] md:w-20 items-center gap-1">
                  {jsonData.length > 0 &&
                    [...Array(arrowArr)].map((item, idx) => (
                      <div
                        className={`mx-auto  ${
                          carouselNum === idx
                            ? "bg-[#ff0000] h-[3px] lg:h-1.5 w-4 md:w-5"
                            : "bg-[#333333] h-0.5 lg:h-1 w-3 md:w-4"
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
        </div>
        <div className="flex items-center">
          {jsonData.map(({ text, img1, img2, img3, img4 }) => {
            return (
              <div
                className="shrink-0  md2:w-[33.5%] w-[100%] sm2:w-[50%] xl:w-[25%] transition duration-[.6s]"
                style={{ transform: `translateX(${-carouselTranslate}%)` }}
                id="carousel"
              >
                <Link to={`/MoviesShows/${text}`}>
                  {
                    <CommonCarou
                      img1={img1}
                      img2={img2}
                      img3={img3}
                      img4={img4}
                      text={text}
                    />
                  }
                </Link>
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
}

export default Section2;
