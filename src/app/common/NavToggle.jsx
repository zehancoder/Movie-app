import React, { useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import { useState } from "react";
import { MdClose } from "react-icons/md";
import { useDispatch } from "react-redux";
import { IoMdNotificationsOutline } from "react-icons/io";
import { openNav, closeNav } from "../../redux/dataFetch";

function NavToggle() {
  const dispatch = useDispatch();
  // search box handleing
  const [showSearch, setShowSearch] = useState(false);
  const ShowSearchHandle = () => {
    setShowSearch(!showSearch);
  };
  // end
  const toggleData = useSelector((state) => state.toggleNav);

  toggleData
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflowY = "auto");

  return (
    <div className=" h-full w-full  ">
      <div className="h-full w-full">
        <div className="px-4 py-12 flex flex-col h-full z-50 text-center bg-[#0F0F0F] rounded-lg border-3 border-[#1a1a1a]  font-manrope ">
          <NavLink
            onClick={() => dispatch(closeNav())}
            to="/"
            className={({ isActive }) =>
              `links  ${
                isActive
                  ? "text-white bg-[#1a1a1a]"
                  : "text-[#BFBFBF]  bg-transparent"
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            onClick={() => dispatch(closeNav())}
            to="/MoviesShows"
            className={({ isActive }) =>
              `links  ${
                isActive
                  ? "text-white bg-[#1a1a1a]"
                  : "text-[#BFBFBF]  bg-transparent"
              }`
            }
          >
            Movies & Shows
          </NavLink>

          <NavLink
          onClick={() => dispatch(closeNav())}
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
            onClick={() => dispatch(closeNav())}
            to="/Support"
            className={({ isActive }) =>
              `links  ${
                isActive
                  ? "text-white bg-[#1a1a1a]"
                  : "text-[#BFBFBF]  bg-transparent"
              }`
            }
          >
            Support
          </NavLink>

          <NavLink
            onClick={() => dispatch(closeNav())}
            to="/Subscriptions"
            className={({ isActive }) =>
              `links  ${
                isActive
                  ? "text-white bg-[#1a1a1a]"
                  : "text-[#BFBFBF]  bg-transparent"
              }`
            }
          >
            Subscriptions
          </NavLink>

          <div className="flex justify-center mt-6 items-center lg:gap-6 md:gap-4 gap-2 xl:gap-8 text-gray-100 text-xl md:text-2xl">
            <IoSearch className="cursor-pointer" onClick={ShowSearchHandle} />

            <IoMdNotificationsOutline className="cursor-pointer" />
          </div>
        </div>
      </div>
      <MdClose
        onClick={() => dispatch(closeNav())}
        className={`absolute cursor-pointer top-4 text-white transition  text-2xl right-4 transform duration-300 ${
          toggleData ? "translate-x-0" : "translate-x-[100%]"
        }`}
      />
    </div>
  );
}

export default NavToggle;
