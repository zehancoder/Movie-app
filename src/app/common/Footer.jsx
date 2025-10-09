import React from "react";
import Container from "./Container";
import footerData from "../../data/footer.json";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <div className="bg-[#0F0F0F] py-4 w-full ">
      <Container className={"mx-auto"}>
        <div className="md:py-8 py-5 lg:py-14 px-5  ">
          <div>
            <div className="grid md:grid-cols-4 grid-cols-3 justify-between items-center gap-4 lg:grid-cols-6">
              {footerData.footer.map(({ title, links , path}) => {
                return (
                  <div className="h-40 lg:mt-0 mt-4">
                    <h3 className="text-lg md:text-xl text-white font-medium">
                      {title}
                    </h3>
                    {links.map((link) => {
                      return (
                        <div className="text-[12px] md:text-[14px] mt-5 font-normal text-[#999999] ">
                          <Link to={path} className="list-none footerHoverEffect mt-3 cursor-pointer ">{link}</Link>
                        </div>
                      );
                    })}
                  </div>
                );
              })}
              <div className="h-40 lg:mt-0 mt-4">
                    <h3 className="text-lg md:text-xl text-white font-medium">
                      Contact With Us
                    </h3>
                    <div className="flex items-center gap-4 mt-5">
                      <Link to={'https://www.facebook.com/junaed.hasan.10048/'} className="px-3 carouselArrowEffect  cursor-pointer py-3 rounded-lg bg-[#1A1A1A]">
                        <img className="w-5" src="/icons/Icon.png" alt="" />
                      </Link>
                      <Link to={'https://x.com/JhZehan40420'} className="px-3 carouselArrowEffect cursor-pointer  py-3 rounded-lg bg-[#1A1A1A]">
                        <img className="w-5" src="/icons/Icon (1).png" alt="" />
                      </Link>
                      <Link to={'https://www.linkedin.com/in/jonaeed-hossen-a92a62330/'} className="px-3 carouselArrowEffect cursor-pointer  py-3 rounded-lg bg-[#1A1A1A]">
                        <img className="w-5" src="/icons/Icon (2).png" alt="" />
                      </Link>
                    </div>
                  </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Footer;
