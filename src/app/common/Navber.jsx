import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import Container from "./Container";

function Navber() {
  // searchInput showing
  const [showSearch, setShowSearch] = useState(false);
  const ShowSearchHandle = () => {
    setShowSearch(!showSearch);
  };

  return (
    <div className="fixed top-0 left-0 w-screen z-20 ">
      <div className=" mx-auto overflow-x-hidden max-w-[1850px] ">
        <div className="md:px-10 px-3 lg:px-24 bg-transparent py-4">
          <nav>
            <div className="flex items-center justify-between ">
              <Link to={"/"}>
                <img src="/images/Logo.png" className="w-auto" alt="" />
              </Link>
              <div className="px-4 py-4 bg-[#0F0F0F] rounded-lg border-3 border-[#1a1a1a] font-manrope lg:flex  hidden">
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
                <IoSearch
                  className="cursor-pointer"
                  onClick={ShowSearchHandle}
                />

                <IoMdNotificationsOutline className="cursor-pointer" />
              </div>
            </div>
          </nav>

          <div className="flex items-center justify-end w-full">
            <input
              type="text"
              placeholder="Movie Name"
              className={`${
                showSearch ? setTimeout(() => "scale-100", 1000) : "scale-x-0 "
              } links text-[15px] outline-none border-1 border-[#e50000] rounded-lg mt-2 text-white font-manrope w-auto lg:w-[450px] font-normal transition duration-300 origin-right `}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navber;
