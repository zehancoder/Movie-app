import React from "react";
import Container from "../common/Container";
import Heading from "../common/Heading";
import ParagraphText from "../common/ParagraphText";
import CarouselMaker from "./Carousel";



function Section2() {
  return (
    <div className="w-[100vw] bg-[#141414] py-5 px-0 md:px-3 z-30 overflow-x-hidden">
      <Container className={"mx-auto"}>
        <div className="md:py-10 sm:py-8 py-6 lg:py-14">
          <div className="flex items-center justify-between">
            <div className="md:px-0 px-2">
              <Heading className={"font-medium"}>
                Explore our wide variety of categories
              </Heading>
              <ParagraphText className={'md:mt-3 mt-2 lg:mt-4'}>
                Whether you're looking for a comedy to make you laugh, a drama
                to make you think, or a documentary to learn something new
              </ParagraphText>
            </div>
            <div></div>
          </div>
        </div>
        <CarouselMaker/>
      </Container>
    </div>
  );
}

export default Section2;
