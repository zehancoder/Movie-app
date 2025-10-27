import React, { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { openNav, closeNav } from "../../redux/dataFetch";
import { IoIosArrowUp } from "react-icons/io";
import NavToggle from "./NavToggle";
import { AiFillLike, AiFillSound } from "react-icons/ai";
import { FiPlus } from "react-icons/fi";
function Navber() {
  // searchInput showing
  const [showSearch, setShowSearch] = useState(false);
  const ShowSearchHandle = () => {
    setShowSearch(!showSearch);
  };

  window.addEventListener("scroll", (e) => {
    if (window.scrollY > 0) {
      document.querySelector(".navMain").style.backgroundColor = "#141414";
    } else if (window.scrollY < 1) {
      document.querySelector(".navMain").style.backgroundColor = "transparent";
    }
  });

  // handle toggle navber
  const dispatch = useDispatch();
  const navData = useSelector((state) => state.toggleNav);

  const [openSaved, setOpenSaved] = useState(false);
  const savedHandle = () => {
    setOpenSaved(!openSaved);
  };

  return (
    <div className=" ">
      <div
        className={` z-50 transition duration-300 fixed h-screen w-screen left-0 top-0 transform ${
          navData ? "translate-x-0" : "translate-x-[120%]"
        }`}
      >
        <NavToggle />
      </div>
      {!navData && (
        <div className=" fixed top-0 left-0 w-screen z-50 navMain">
          <div className=" mx-auto overflow-x-hidden max-w-[1850px] ">
            <div className="md:px-10 px-3 lg:px-12 xl:px-20  py-4 ">
              <nav>
                <div className="flex items-center justify-between ">
                  <Link to={"/"} id="logo">
                    <img
                      src="/images/Logo.png"
                      className="w-36 sm2:w-44 md:w-auto"
                      alt=""
                    />
                  </Link>
                  <div className="px-4 py-4 z-50 bg-[#0F0F0F] rounded-lg border-3 border-[#1a1a1a] font-manrope lg:flex  hidden">
                    <NavLink
                      to="/"
                      className={({ isActive }) =>
                        `links animate ${
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
                        `links animate ${
                          isActive
                            ? "text-white bg-[#1a1a1a]"
                            : "text-[#BFBFBF]  bg-transparent"
                        }`
                      }
                    >
                      Movies & Shows
                    </NavLink>

                    <NavLink
                      to="/Animations"
                      className={({ isActive }) =>
                        `links animate ${
                          isActive
                            ? "text-white bg-[#1a1a1a]"
                            : "text-[#BFBFBF]  bg-transparent"
                        }`
                      }
                    >
                      Animations
                    </NavLink>

                    <NavLink
                      to="/Support"
                      className={({ isActive }) =>
                        `links animate ${
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
                        `links animate ${
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
                      id="search"
                      className="cursor-pointer search lg:flex hidden"
                      onClick={ShowSearchHandle}
                    />

                    <IoMdNotificationsOutline
                      id="notifications"
                      className="cursor-pointer notifications lg:flex hidden"
                    />
                    <div
                      className={`lg:static absolute sm2:right-13 right-12 md:right-20 transition duration-300 ${
                        openSaved ? "rotate-180" : "rotate-0"
                      }`}
                    >
                      <IoIosArrowUp
                        id="arrow"
                        className={`cursor-pointer   notifications`}
                        onClick={savedHandle}
                      />
                    </div>
                  </div>

                  {/* menu bar added */}
                  <div
                    id="menuBar"
                    className="cursor-pointer lg:hidden block "
                    onClick={() => dispatch(openNav())}
                  >
                    <div className="h-0.5 w-5 bg-white "></div>
                    <div className="h-0.5 w-5 bg-white mt-1 "></div>
                    <div className="h-0.5 w-5 bg-white mt-1 "></div>
                  </div>
                </div>
              </nav>

              <div className="absolute right-8 -bottom-14">
                <input
                  type="text"
                  placeholder="Movie Name"
                  className={`${
                    showSearch ? "scale-x-100" : "scale-x-0 "
                  } links text-[15px] outline-none border-1 border-[#e50000] rounded-lg mt-2 text-white font-manrope w-auto lg:w-[450px] font-normal transition duration-300 origin-right `}
                />
              </div>
            </div>
          </div>

          {/* seeing like videos and saved videos */}
          <div
            className={`sm:right-16 right-12 lg:top-auto sm:-bottom-32 -bottom-[85px] md:px-6 sm:px-4 px-3 lg:px-8 md:py-4 py-2 lg:py-6  rounded-lg transform transition  border-[#1a1a1a] duration-300 ${
              openSaved
                ? "translate-x-5 bg-[#e50000b9] border opacity-100"
                : "border-none translate-x-[200%] bg-transparent opacity-0"
            } absolute lg:right-24 xl:right-36 z-30 `}
          >
            <div className="  text-white font-manrope text-lg items-center ">
              <Link
                onClick={savedHandle}
                to={"/savedVideos"}
                className="text-[15px] flex items-center gap-2 footerHoverEffect cursor-pointer"
              >
                Saved Videos
                <FiPlus className="text-lg font-medium" />
              </Link>
              <Link
                to={"/likeVideos"}
                className="text-[15px] flex items-center gap-2 footerHoverEffect cursor-pointer mt-4"
                onClick={savedHandle}
              >
                Liked Videos
                <AiFillLike className="text-lg font-medium" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navber;
