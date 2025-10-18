import React, { useState } from "react";
import Container from "../common/Container";
import Heading from "../common/Heading";
import ParagraphText from "../common/ParagraphText";
import Button from "../common/Button";

function Section5() {
  const [selelctplan, setPlan] = useState("Monthly");
  const plans = [
    {
      name: "Basic Plan",
      monthly: 9.99,
      yearly: 99.99,
      description:
        "Enjoy an extensive library of movies and shows, featuring a range of content, including recently released titles.",
    },
    {
      name: "Standard Plan",
      monthly: 12.99,
      yearly: 129.99,
      description:
        "Access to a wider selection of movies and shows, including most new releases and exclusive content.",
    },
    {
      name: "Premium Plan",
      monthly: 14.99,
      yearly: 149.99,
      description:
        "Access to a widest selection of movies and shows, including all new releases and Offline Viewing.",
    },
  ];

  return (
    <div className="w-[100vw] bg-[#141414] py-5 px-3 z-30 overflow-x-hidden">
      <Container className={"mx-auto"}>
        <div className="md:py-10 sm:py-8 py-6 lg:py-14">
          <div className="flex md:flex-row flex-col items-center justify-between">
            <div>
              <Heading className={"font-medium"}>
                Choose the plan that's right for you
              </Heading>
              <ParagraphText className={"md:mt-3 mt-2 lg:mt-4 max-w-[1200px]"}>
                Join StreamVibe and select from our flexible subscription
                options tailored to suit your viewing preferences. Get ready for
                non-stop entertainment!
              </ParagraphText>
            </div>
            <div className="flex md:mt-0 mt-8 p-2 bg-[#0F0F0F] gap-2 items-center rounded-lg border border-[#1F1F1F]">
              <button
                onClick={() => setPlan("Monthly")}
                className={`px-4 cursor-pointer ${
                  selelctplan == "Monthly" ? "bg-[#1F1F1F]" : "bg-transparent"
                } rounded-lg py-3 text-[14px] md:text-[16px] text-white`}
              >
                Monthly
              </button>
              <button
                onClick={() => setPlan("Yearly")}
                className={`px-4 cursor-pointer ${
                  selelctplan == "Yearly" ? "bg-[#1F1F1F]" : "bg-transparent"
                } rounded-lg py-3 text-[14px] md:text-[16px] text-white`}
              >
                Yearly
              </button>
            </div>
          </div>

          <section className=" text-white py-16 px-2 md:px-6 ">
            <div className="max-w-7xl mx-auto ">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {plans.map((plan, index) => (
                  <div
                    key={index}
                    className="bg-[#1A1A1A] -z-40 plansAnimation carouselArrowEffect cursor-pointer hover:scale-105 py-8 px-9  rounded-xl border border-[#262626] hover:border-[#ff00005d] transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      <h3 className="text-[23px] md:text-[26px] font-semibold mb-3">
                        {plan.name}
                      </h3>
                      <p className="text-[#999999] mb-6 leading-relaxed">
                        {plan.description}
                      </p>
                      <div className="text-3xl font-bold mb-8">
                        {selelctplan == "Monthly" ? plan.monthly : plan.yearly}
                        <span className="text-gray-400 text-base font-normal">
                          {selelctplan == "Monthly" ? "/month" : "/yearly"}
                        </span>
                      </div>
                    </div>

                    <div className="flex gap-4 ">
                      <Button className={"bg-[#141414] lg:text-[15px] carouselArrowEffect  lg:tracking-wide border border-[#262626]"}>
                        Start Free Trail
                      </Button>
                      <Button className={"bg-[#E50000] customBtnHoverEffect lg:text-[15px] lg:tracking-wide"}>Choose Plan</Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </Container>
    </div>
  );
}

export default Section5;
