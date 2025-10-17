import React from "react";
import ParagraphText from "../common/ParagraphText";
import Heading from "../common/Heading";
import Container from "../common/Container";
import VariousDevicesCard from "../common/VariousDevicesCard";
import jsonData from '../../data/veriousDevices.json'
function Section3() {
  return (
    <div>
      <div>
        <div>
          <div className="w-[100vw] bg-[#141414] py-5 px-3 z-30 overflow-x-hidden">
            <Container className={"mx-auto"}>
              <div className="md:py-10 sm:py-8 py-6 lg:py-14">
                <div className=''>
                  <div>
                    <Heading className={"font-medium"}>
                      We Provide you streaming experience across various
                      devices.
                    </Heading>
                    <ParagraphText className={"md:mt-3 mt-2 lg:mt-4 max-w-[1200px]"}>
                      With StreamVibe, you can enjoy your favorite movies and TV
                      shows anytime, anywhere. Our platform is designed to be
                      compatible with a wide range of devices, ensuring that you
                      never miss a moment of entertainment.
                    </ParagraphText>
                  </div>
                  <div className="flex flex-wrap justify-center  lg:px-6 md:px-3 px-0 items-center md:mt-10 mt-8 lg:mt-14">
                    {
                      jsonData.map(({device, deviceImg, drescription}) => (
                        <VariousDevicesCard device={device} deviceImg={deviceImg} drescription={drescription}/>
                      ))
                    }
                  </div>
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
