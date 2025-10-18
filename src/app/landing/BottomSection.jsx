import React from "react";
import Container from "../common/Container";
import Button from "../common/Button";
import ParagraphText from "../common/ParagraphText";
import Heading from "../common/Heading";

function BottomSection() {
  return (
    <div className="w-[100vw] bg-[#141414] py-5 px-3 overflow-x-hidden">
      <Container className={"mx-auto"}>
        <div className="md:py-10 sm:py-8 py-6 lg:py-14">
          <div className="relative rounded-xl bottomGradient  text-white py-16 px-8 overflow-hidden">
            {/* Background image overlay */}
            <div
              className="absolute customGradientColor inset-0 bg-[url('./images/heroImg.png')]
                   bg-cover bg-center opacity-30 overflow-hidden"
            ></div>

            {/* Content */}
            <div className="relative max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
              {/* Left text */}
              <div className="max-w-xl">
                <Heading className={"font-medium"}>
                  Start your free trial today!
                </Heading>
                <ParagraphText className={'mt-3'}>
                  This is a clear and concise call to action that encourages
                  users to sign up for a free trial of StreamVibe.
                </ParagraphText>
              </div>

              {/* Right button */}
              <Button className={"bg-[#e50000] customBtnHoverEffect"} href="#">
                Start a Free Trial
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default BottomSection;
