import React from "react";
import Container from "../common/Container";
import Heading from "../common/Heading";
import ParagraphText from "../common/ParagraphText";
import Button from "../common/Button";

function Section4() {
  return (
    <div className="w-[100vw] bg-[#141414] py-5 px-3 z-30 overflow-x-hidden">
      <Container className={"mx-auto"}>
        <div className="md:py-10 sm:py-8 py-6 lg:py-14">
          <div className="flex items-center justify-between">
            <div>
              <Heading className={"font-medium"}>
                Frequently Asked Questions
              </Heading>
              <ParagraphText className={"md:mt-3 mt-2 lg:mt-4 max-w-[1200px]"}>
               Got questions? We've got answers! Check out our FAQ section to find answers to the most common questions about StreamVibe.
              </ParagraphText>
            </div>
            <Button className='bg-[#e50000]'>
                Ask a Question
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Section4;
