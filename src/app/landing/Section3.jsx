import React from "react";
import ParagraphText from "../common/ParagraphText";
import Heading from "../common/Heading";
import Container from "../common/Container";
function Section3() {
  return (
    <div>
      <div>
        <div>
          <div className="w-[100vw] bg-[#141414] py-5 px-3 z-30 overflow-x-hidden">
            <Container className={"mx-auto"}>
              <div className="md:py-10 sm:py-8 py-6 lg:py-14">
                <div className="flex items-center justify-between">
                  <div>
                    <Heading className={"font-medium"}>
                      We Provide you streaming experience across various
                      devices.
                    </Heading>
                    <ParagraphText className={"md:mt-3 mt-2 lg:mt-4"}>
                      With StreamVibe, you can enjoy your favorite movies and TV
                      shows anytime, anywhere. Our platform is designed to be
                      compatible with a wide range of devices, ensuring that you
                      never miss a moment of entertainment.
                    </ParagraphText>
                  </div>
                  <div></div>
                </div>
              </div>
            </Container>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section3;
