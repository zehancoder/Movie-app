import React from "react";
import { NavLink, Link } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import Container from "./Container";

function Navber() {
  return (
    <div className="fixed top-0 w-full ">
      <Container className={' mx-auto'}>
        <div className="md:px-10 px-3 lg:px-24 bg-transparent py-4">
          <nav>
            <div className="flex items-center justify-between ">
              <Link to={"/"}>
                <img src="/images/Logo.png" className="w-auto" alt="" />
              </Link>
              <div className="px-4 py-4 bg-[#0F0F0F] rounded-lg border-3 border-[#1a1a1a] font-manrope">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `links ${
                      isActive
                        ? "text-white bg-[#1a1a1a]"
                        : "text-[#BFBFBF]  bg-transparent"
                    }`
                  }
                >
                  Home
                </NavLink>

                <NavLink
                  to="/MoviesShows"
                  className={({ isActive }) =>
                    `links ${
                      isActive
                        ? "text-white bg-[#1a1a1a]"
                        : "text-[#BFBFBF]  bg-transparent"
                    }`
                  }
                >
                  Movies & Shows
                </NavLink>

                <NavLink
                  to="/Support"
                  className={({ isActive }) =>
                    `links ${
                      isActive
                        ? "text-white bg-[#1a1a1a]"
                        : "text-[#BFBFBF]  bg-transparent"
                    }`
                  }
                >
                  Support
                </NavLink>

                <NavLink
                  to="/Subscriptions"
                  className={({ isActive }) =>
                    `links ${
                      isActive
                        ? "text-white bg-[#1a1a1a]"
                        : "text-[#BFBFBF]  bg-transparent"
                    }`
                  }
                >
                  Subscriptions
                </NavLink>
              </div>
              <div className="flex items-center lg:gap-6 md:gap-4 gap-2 xl:gap-8 text-gray-100 text-xl md:text-2xl">
                <IoSearch className="cursor-pointer" />
                <IoMdNotificationsOutline className="cursor-pointer" />
              </div>
            </div>
          </nav>
        </div>
      </Container>
    </div>
  );
}

export default Navber;
