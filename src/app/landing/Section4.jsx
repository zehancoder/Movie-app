import React from "react";
import Container from "../common/Container";
import Heading from "../common/Heading";
import ParagraphText from "../common/ParagraphText";
import { useState } from "react";
import Button from "../common/Button";

function Section4() {

  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };  

  const faqs = [
  {
    id: 1,
    question: "What is StreamVibe?",
    answer:
      "StreamVibe is a streaming service that allows you to watch movies and shows on demand.",
  },
  {
    id: 2,
    question: "How much does StreamVibe cost?",
    answer:
      "StreamVibe offers flexible plans starting from $9.99 per month with access to all content.",
  },
  {
    id: 3,
    question: "What content is available on StreamVibe?",
    answer:
      "StreamVibe provides a large library of movies, TV shows, and exclusive originals.",
  },
  {
    id: 4,
    question: "How can I watch StreamVibe?",
    answer:
      "You can watch StreamVibe on smart TVs, mobile devices, laptops, and tablets.",
  },
  {
    id: 5,
    question: "How do I sign up for StreamVibe?",
    answer:
      "Simply visit the StreamVibe website, create an account, and choose your plan.",
  },
  {
    id: 6,
    question: "What is the StreamVibe free trial?",
    answer:
      "New users can enjoy a 7-day free trial before choosing a subscription plan.",
  },
  {
    id: 7,
    question: "How do I contact StreamVibe customer support?",
    answer:
      "You can reach StreamVibe support through live chat or email at support@streamvibe.com.",
  },
  {
    id: 8,
    question: "What are the StreamVibe payment methods?",
    answer:
      "We accept credit/debit cards, PayPal, and digital wallets for subscription payments.",
  },
];


  return (
    <div className="w-[100vw] bg-[#141414] py-5 px-3 overflow-x-hidden">
      <Container className={"mx-auto"}>
        <div className="md:py-10 sm:py-8 py-6 lg:py-14">
          <div className="flex md:flex-row flex-col items-center justify-center md:justify-between">
            <div className="md:w-[60%]  xl:w-[80%]">
              <Heading className={"font-medium"}>
                Frequently Asked Questions
              </Heading>
              <ParagraphText className={"md:mt-3 mt-2 lg:mt-4 max-w-[1200px]"}>
               Got questions? We've got answers! Check out our FAQ section to find answers to the most common questions about StreamVibe.
              </ParagraphText>
            </div>
            <div className="md:mt-0 mt-4">
              <Button className='bg-[#e50000] '>
                Ask a Question
            </Button>
            </div>
          </div>

          <section className=" text-white py-16 px-6">
      <div className="max-w-6xl mx-auto">


        <div className="grid lg:grid-cols-2 gap-8">
          {faqs.map((faq, index) => (
            <div

              key={faq.id}
              className="bg-transparent askQuestion carouselArrowEffect p-5 rounded-xl border-b border-[#ff00005d] transition-all duration-300"
            >
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex items-center gap-4">
                  <div className="bg-[#1f1f1f] px-4 md:px-6 py-2 md:py-4 rounded-lg text-gray-300 font-semibold">
                    {faq.id.toString().padStart(2, "0")}
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold">{faq.question}</h3>
                </div>
                <span className="text-xl md:text-3xl">{openIndex === index ? "−" : "+"}</span>
              </div>

              {openIndex === index && (
                <p className="text-gray-400 mt-3 ml-14 transition-all duration-300">
                  {faq.answer}
                </p>
              )}
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

export default Section4;
