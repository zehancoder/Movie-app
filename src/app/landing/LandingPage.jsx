import React from "react";
import Container from "../common/Container";
import Button from "../common/Button";
import { FaPlay } from "react-icons/fa6";
import Heading from "../common/Heading";
import Section2 from "./Section2";
import ParagraphText from "../common/ParagraphText";
import { Route, Routes } from "react-router-dom";

function LandingPage() {
  return (
    <>
      <div
        className="sticky top-0 -z-10 w-screen
    customBg sm:h-[650px] h-[550px] md:h-[660px] lg:h-[90vh]"
      >
        <Container className={"overflow-x-hidden"}>
          <div className="absolute w-full flex items-center justify-center font-manrope bottom-16 md:bottom-24 text-center z-50">
            <div className="max-w-5xl ">
              <Heading className={"md:text-3xl text-2xl lg:text-[56px]"}>
                The Best Straming Experience
              </Heading>
              <ParagraphText className={'md:mt-6 mt-4 lg:mt-8'}>
                StreamVibe is the best streaming experience for watching your
                favorite movies and shows on demand, anytime, anywhere. With
                StreamVibe, you can enjoy a wide variety of content, including
                the latest blockbusters, classic movies, popular TV shows, and
                more. You can also create your own watchlists, so you can easily
                find the content you want to watch.
              </ParagraphText>
              <Button
                className={
                  "flex bg-[#e50000] items-center gap-2 mx-auto md:mt-4 mt-2 lg:mt-5 "
                }
              >
                <FaPlay className="text-[15px]" />
                Start Watching Now
              </Button>
            </div>
          </div>
        </Container>
      </div>

      <Section2 />


      <Routes>
        <Route path=""/>
      </Routes>
    </>
  );
}

export default LandingPage;
