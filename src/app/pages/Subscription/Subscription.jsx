import React, { useState } from "react";
import Container from "../../common/Container";
import Heading from "../../common/Heading";
import Button from "../../common/Button";
import { IoCheckmarkOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";

function Subscription() {
  const [yearly, setYearly] = useState(false);

  const strandard = [
    { text: "Fast Processing", included: true },
    { text: "Limited Styles & Models", included: true },
    { text: "Commercial License", included: true },
    { text: "Android Access", included: false },
    { text: "Early Access to new features", included: false },
    { text: "24hr Support", included: false },
  ];
  const business = [
    { text: "Fast Processing", included: true },
    { text: "Limited Styles & Models", included: true },
    { text: "Commercial License", included: true },
    { text: "Android Access", included: true },
    { text: "Early Access to new features", included: true },
    { text: "24hr Support", included: false },
  ];
  const enterprice = [
    { text: "Fast Processing", included: true },
    { text: "Limited Styles & Models", included: true },
    { text: "Commercial License", included: true },
    { text: "Android Access", included: true },
    { text: "Early Access to new features", included: true },
    { text: "24hr Support", included: true },
  ];

  return (
    <div className="w-[100vw] bg-[#141414] py-5 px-0 md:px-3 z-30 overflow-x-hidden ">
      <Container className={"mx-auto"}>
        <div className="h-20 w-full"></div>
        <div className="md:py-10 sm:py-8 py-6 lg:py-14">
          <div>
            <div>
              <Heading
                className={
                  "text-center font-manrope tracking-wide lg:text-5xl font-normal"
                }
              >
                Pricing plan for every need
              </Heading>
            </div>
            <div className="flex text-[14px] md:text-[16px] items-center font-medium font-manrope gap-3 text-white mx-auto mt-6 justify-center">
              <p className="">Monthly</p>
              <button
                onClick={() => setYearly(!yearly)}
                className="rounded-full w-10 lg:w-12 cursor-pointer h-5 lg:h-6 bg-[#2b2a2a] px-0.5 py-0.5 border border-[#414141] "
              >
                <div
                  className={`w-[50%] h-full rounded-full  transition duration-300 transform ${
                    yearly
                      ? "translate-x-[100%] bg-[#ff0000]"
                      : "translate-x-0 bg-[#cfcfcfc2]"
                  }`}
                ></div>
              </button>
              <p className="">Yearly</p>
            </div>
            <div className="flex items-center flex-col lg:flex-row justify-between md:gap-5 mt-8 m-3">



              {/* subscription card 1 */}
              <div className="xl:px-7 rounded-lg customGradientColor2 lg:px-5 px-2 xl:py-8 lg:py-6 py-4 bg-[#1A1A1A] border border-[#262626] md:w-[50%] w-[100%] lg:w-[33.33%]">
                <p className="flex items-center justify-between font-medium text-white lg:text-[20px] md:text-[18px] text-[17px]  xl:text-2xl font-manrope tracking-wide uppercase">
                  Standard{" "}
                  <span className="border border-[#ff0000] rounded px-1.5 md:px-3 py-0.5 md:py-1 md:text-[15px] text-[14px] xl:text-[17px]">
                    11K+
                  </span>
                </p>
                <p className="font-medium text-[#999999]  md:text-[14px] text-[12px] mt-3 lg:text-[16px] font-manrope">
                  For newcomers exploring, with limited features and image
                  Generation.
                </p>
                <div className="mt-4 font-manrope">
                  <div className="flex items-center gap-3">
                    <h1 className="lg:text-5xl md:text-4xl text-3xl xl:text-6xl font-medium  text-white ">
                      {yearly ? "$30" : "$8"}
                    </h1>
                    <div className="text-[12px] md:text-[14px] lg:text-base">
                      <h5 className="text-[#ff0000] line-through font-manrope ">
                        {yearly ? "$35" : "$11"}
                      </h5>
                      <p className="text-[#999999] font-normal ">{yearly ? "/yearly" :  "/month"}</p>
                    </div>
                  </div>
                  {!yearly && (
                    <div className="flex items-center gap-3 lg:gap-5 font-medium text-white md:text-[14px] text-[12px] mt-5 lg:text-[16px] ">
                      <p className=" px-2 py-1.5 rounded bg-[#6e0e0e]  ">
                        Billed Yearly
                      </p>
                      <p className=" px-2 py-1.5 rounded bg-[#6e0e0e]  ">
                        30% off
                      </p>
                    </div>
                  )}
                  <Button
                    className={"bg-[#141414] mt-8  carouselArrowEffect w-full"}
                  >
                    Subscribe
                  </Button>
                  <div className="mt-3">
                    <p className=" md:text-[15px] text-[14px] lg:text-[17px] font-normal text-white">
                      What's included
                    </p>
                   <div className="mt-3">
                    {
                      strandard.map((feature, idx) =>(
                        <div className="text-[12px] flex items-center gap-2 lg:text-[14px] mt-2">
                          {
                            feature.included ? <IoCheckmarkOutline className="text-green-700"/> : <RxCross2 className="text-[#ff0000]"/>
                          }
                          <p className={`${feature.included ? "text-white" : "text-[#999999]"}`}>{feature.text}</p>
                        </div>
                      ))
                    }
                   </div>
                  </div>
                </div>
              </div>



              {/* subscription card 2 */}
              <div className="xl:px-7 lg:mt-0 mt-4 rounded-lg customGradientColor2 lg:px-5 px-2 xl:py-8 lg:py-6 py-4 bg-[#1A1A1A] border border-[#262626] md:w-[50%] w-[100%] lg:w-[33.33%]">
                <p className="flex items-center justify-between font-medium text-white lg:text-[20px] md:text-[18px] text-[17px]  xl:text-2xl font-manrope tracking-wide uppercase">
                  Business{" "}
                  <span className="border border-[#ff0000] rounded px-1.5 md:px-3 py-0.5 md:py-1 md:text-[15px] text-[14px] xl:text-[17px]">
                    70k+
                  </span>
                </p>
                <p className="font-medium text-[#999999]  md:text-[14px] text-[12px] mt-3 lg:text-[16px] font-manrope">
                  For newcomers exploring, with limited features and image
                  Generation.
                </p>
                <div className="mt-4 font-manrope">
                  <div className="flex items-center gap-3">
                    <h1 className="lg:text-5xl md:text-4xl text-3xl xl:text-6xl font-medium  text-white ">
                      {yearly ? "$50" : "$15"}
                    </h1>
                    <div className="text-[12px] md:text-[14px] lg:text-base">
                      <h5 className="text-[#ff0000] line-through font-manrope ">
                        {yearly ? "$55" : "$18"}
                      </h5>
                      <p className="text-[#999999] font-normal ">{yearly ? "/yearly" : "/month"}</p>
                    </div>
                  </div>
                  {!yearly && (
                    <div className="flex items-center gap-3 lg:gap-5 font-medium text-white md:text-[14px] text-[12px] mt-5 lg:text-[16px] ">
                      <p className=" px-2 py-1.5 rounded bg-[#6e0e0e]  ">
                        Billed Yearly
                      </p>
                      <p className=" px-2 py-1.5 rounded bg-[#7a0404]  ">
                        30% off
                      </p>
                    </div>
                  )}
                  <Button
                    className={"bg-[#700909] mt-8  carouselArrowEffect w-full"}
                  >
                    Subscribe
                  </Button>
                  <div className="mt-3">
                    <p className=" md:text-[15px] text-[14px] lg:text-[17px] font-normal text-white">
                      What's included
                    </p>
                   <div className="mt-3">
                    {
                      business.map((feature, idx) =>(
                        <div key={idx} className="text-[12px] flex items-center gap-2 lg:text-[14px] mt-2">
                          {
                            feature.included ? <IoCheckmarkOutline className="text-green-700"/> : <RxCross2 className="text-[#ff0000]"/>
                          }
                          <p className={`${feature.included ? "text-white" : "text-[#999999]"}`}>{feature.text}</p>
                        </div>
                      ))
                    }
                   </div>
                  </div>
                </div>
              </div>



              {/* subscription card 3 */}
              <div className="xl:px-7 rounded-lg lg:mt-0 mt-4 customGradientColor2 lg:px-5 px-2 xl:py-8 lg:py-6 py-4 bg-[#1A1A1A] border border-[#262626] md:w-[50%] w-[100%] lg:w-[33.33%]">
                <p className="flex items-center justify-between font-medium text-white lg:text-[20px] md:text-[18px] text-[17px]  xl:text-2xl font-manrope tracking-wide uppercase">
                  Enterprice{" "}
                  <span className="border border-[#ff0000] rounded px-1.5 md:px-3 py-0.5 md:py-1 md:text-[15px] text-[14px] xl:text-[17px]">
                    10k+
                  </span>
                </p>
                <p className="font-medium text-[#999999]  md:text-[14px] text-[12px] mt-3 lg:text-[16px] font-manrope">
                  For newcomers exploring, with limited features and image
                  Generation.
                </p>
                <div className="mt-4 font-manrope">
                  <div className="flex items-center gap-3">
                    <h1 className="lg:text-5xl md:text-4xl text-3xl xl:text-6xl font-medium  text-white ">
                      {yearly ? "$70" : "$20"}
                    </h1>
                    <div className="text-[12px] md:text-[14px] lg:text-base">
                      <h5 className="text-[#ff0000] line-through font-manrope ">
                        {yearly ? "$74" : "$24"}
                      </h5>
                      <p className="text-[#999999] font-normal ">{yearly ? "/yearly" : "/month"}</p>
                    </div>
                  </div>
                  {!yearly && (
                    <div className="flex items-center gap-3 lg:gap-5 font-medium text-white md:text-[14px] text-[12px] mt-5 lg:text-[16px] ">
                      <p className=" px-2 py-1.5 rounded bg-[#6e0e0e]  ">
                        Billed Yearly
                      </p>
                      <p className=" px-2 py-1.5 rounded bg-[#6e0e0e]  ">
                        30% off
                      </p>
                    </div>
                  )}
                  <Button
                    className={"bg-[#141414] mt-8  carouselArrowEffect w-full"}
                  >
                    Subscribe
                  </Button>
                  <div className="mt-3">
                    <p className=" md:text-[15px] text-[14px] lg:text-[17px] font-normal text-white">
                      What's included
                    </p>
                   <div className="mt-3">
                    {
                      enterprice.map((feature, idx) =>(
                        <div className="text-[12px] flex items-center gap-2 lg:text-[14px] mt-2">
                          {
                            feature.included ? <IoCheckmarkOutline className="text-green-700"/> : <RxCross2 className="text-[#ff0000]"/>
                          }
                          <p className={`${feature.included ? "text-white" : "text-[#999999]"}`}>{feature.text}</p>
                        </div>
                      ))
                    }
                   </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Subscription;
