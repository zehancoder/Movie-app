import React, { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  openNav,
  closeNav,
  searchDataHandle,
  searchInputDataHandle,
} from "../../redux/dataFetch";
import { IoIosArrowUp } from "react-icons/io";
import NavToggle from "./NavToggle";
import { FiSearch } from "react-icons/fi";
import { AiFillLike, AiFillSound } from "react-icons/ai";
import { FiPlus } from "react-icons/fi";
import { FaUser } from "react-icons/fa";
function Navber() {
  // search text
  const [search, setSearch] = useState("");
  // state for save handel
  const [openSaved, setOpenSaved] = useState(false);

  // searchInput showing

  const [showSearch, setShowSearch] = useState(false);
  const ShowSearchHandle = () => {
    setOpenSaved(false);
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

  // open saved account and like videos box
  const savedHandle = () => {
    setShowSearch(false);
    setOpenSaved(!openSaved);
  };

  // get user after login from redux store
  const { user, loading } = useSelector((state) => state.users);

  // all search movies data store in redux
  const [data, setData] = useState([]);
  const [loading2, setLoading2] = useState(true);
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYTA1YmQzYTY2MWMzYWQxOGIyOGRmZGRlMjc0MTZlOCIsIm5iZiI6MTc1NzUxMTMyOS41MjEsInN1YiI6IjY4YzE3ZWExY2IwMDI0MWE4YzRlNmY0YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4VgIPDknlg-LsiibDyaZ6qZldUrgsLly_zuLKEoVlYs",
    },
  };

  useEffect(() => {
    const getAllData = async () => {
      try {
        const [
          data1Res,
          data2Res,
          data3Res,
          data4Res,
          data5Res,
          data6Res,
          data7Res,
          data8Res,
          data9Res,
          data10Res,
          data11Res,
          data12Res,
          data13Res,
          data14Res,
          data15Res,
          data16Res,
          data17Res,
          data18Res,
          data19Res,
        ] = await Promise.all([
          fetch(
            "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=2",
            options
          ),
          fetch(
            "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
            options
          ),
          fetch(
            "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=3",
            options
          ),
          fetch(
            "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
            options
          ),
          fetch(
            "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=2",
            options
          ),
          fetch(
            "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=3",
            options
          ),
          fetch(
            "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
            options
          ),
          fetch(
            "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=2",
            options
          ),
          fetch(
            "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=3",
            options
          ),
          fetch(
            "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=4",
            options
          ),
          fetch(
            "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=4",
            options
          ),
          // get horror movies
          fetch(
            "https://api.themoviedb.org/3/discover/movie?api_key=1a05bd3a661c3ad18b28dfdde27416e8&with_genres=27&page=1",
            options
          ),
          fetch(
            "https://api.themoviedb.org/3/discover/movie?api_key=1a05bd3a661c3ad18b28dfdde27416e8&with_genres=27&page=2",
            options
          ),
          fetch(
            "https://api.themoviedb.org/3/discover/movie?api_key=1a05bd3a661c3ad18b28dfdde27416e8&with_genres=27&page=3",
            options
          ),
          fetch(
            "https://api.themoviedb.org/3/discover/movie?api_key=1a05bd3a661c3ad18b28dfdde27416e8&with_genres=27&page=4",
            options
          ),
          fetch(
            "https://api.themoviedb.org/3/discover/movie?api_key=1a05bd3a661c3ad18b28dfdde27416e8&with_keywords=9715&page=1",
            options
          ),
          fetch(
            "https://api.themoviedb.org/3/discover/movie?api_key=1a05bd3a661c3ad18b28dfdde27416e8&with_keywords=9715&page=2",
            options
          ),
          fetch(
            "https://api.themoviedb.org/3/discover/movie?api_key=1a05bd3a661c3ad18b28dfdde27416e8&with_keywords=9715&page=3",
            options
          ),
          fetch(
            "https://api.themoviedb.org/3/discover/movie?api_key=1a05bd3a661c3ad18b28dfdde27416e8&with_keywords=9715&page=4",
            options
          ),
        ]);

        const [
          data1,
          data2,
          data3,
          data4,
          data5,
          data6,
          data7,
          data8,
          data9,
          data10,
          data11,
          data12,
          data13,
          data14,
          data15,
          data16,
          data17,
          data18,
          data19
        ] = await Promise.all([
          data1Res.json(),
          data2Res.json(),
          data3Res.json(),
          data4Res.json(),
          data5Res.json(),
          data6Res.json(),
          data7Res.json(),
          data8Res.json(),
          data9Res.json(),
          data10Res.json(),
          data11Res.json(),
          data12Res.json(),
          data13Res.json(),
          data14Res.json(),
          data15Res.json(),
          data16Res.json(),
          data17Res.json(),
          data18Res.json(),
          data19Res.json(),
        ]);

        setData([
          ...data1.results,
          ...data2.results,
          ...data3.results,
          ...data4.results,
          ...data5.results,
          ...data6.results,
          ...data7.results,
          ...data8.results,
          ...data9.results,
          ...data10.results,
          ...data11.results,
          ...data12.results,
          ...data13.results,
          ...data14.results,
          ...data15.results,
          ...data16.results,
          ...data17.results,
          ...data18.results,
          ...data19.results,
        ]);
      } catch (error) {
        console.error("Error fetching:", error);
      } finally {
        setLoading2(false);
      }
    };

    getAllData();
  }, []);

  // get animations for showing in search and store in redux store

    useEffect(() => {
      const getAllData = async () => {
        try {
          const [
            data1Res,
            data2Res,
            data3Res,
            data4Res,
            data5Res,
            data6Res,
            data7Res,
            data8Res,
            data9Res,
            data10Res,
            data11Res,
            data12Res,
            data13Res,
            data14Res,
          ] = await Promise.all([
            fetch(
              "https://api.themoviedb.org/3/discover/movie?api_key=1a05bd3a661c3ad18b28dfdde27416e8&with_keywords=210024",
              options
            ),
            fetch(
              "https://api.themoviedb.org/3/discover/movie?api_key=1a05bd3a661c3ad18b28dfdde27416e8&with_keywords=6513",
              options
            ),
            fetch(
              "https://api.themoviedb.org/3/discover/movie?api_key=1a05bd3a661c3ad18b28dfdde27416e8&with_keywords=15284",
              options
            ),
            fetch(
              "https://api.themoviedb.org/3/discover/movie?api_key=1a05bd3a661c3ad18b28dfdde27416e8&with_keywords=178898",
              options
            ),
            fetch(
              "https://api.themoviedb.org/3/discover/movie?api_key=1a05bd3a661c3ad18b28dfdde27416e8&with_keywords=271856&page=1",
              options
            ),
            fetch(
              "https://api.themoviedb.org/3/discover/movie?api_key=1a05bd3a661c3ad18b28dfdde27416e8&with_genres=16&language=en-US&page=1",
              options
            ),
            fetch(
              "https://api.themoviedb.org/3/discover/movie?api_key=1a05bd3a661c3ad18b28dfdde27416e8&with_keywords=188770&page=1",
              options
            ),
            fetch(
              "https://api.themoviedb.org/3/discover/movie?api_key=1a05bd3a661c3ad18b28dfdde27416e8&with_keywords=257807&page=1",
              options
            ),
            fetch(
              "https://api.themoviedb.org/3/discover/movie?api_key=1a05bd3a661c3ad18b28dfdde27416e8&with_keywords=210024&page=2",
              options
            ),
            fetch(
              "https://api.themoviedb.org/3/discover/movie?api_key=1a05bd3a661c3ad18b28dfdde27416e8&with_keywords=210024&page=3",
              options
            ),
            fetch(
              "https://api.themoviedb.org/3/discover/movie?api_key=1a05bd3a661c3ad18b28dfdde27416e8&with_keywords=190098&page=1",
              options
            ),
            // get horror movies
            fetch(
              "https://api.themoviedb.org/3/discover/movie?api_key=1a05bd3a661c3ad18b28dfdde27416e8&with_keywords=15284&page=2",
              options
            ),
            fetch(
              "https://api.themoviedb.org/3/discover/movie?api_key=1a05bd3a661c3ad18b28dfdde27416e8&with_keywords=251449&page=1",
              options
            ),
            fetch(
              "https://api.themoviedb.org/3/discover/movie?api_key=1a05bd3a661c3ad18b28dfdde27416e8&with_genres=16&language=en-US&page=2",
              options
            ),
            fetch(
              "https://api.themoviedb.org/3/discover/movie?api_key=1a05bd3a661c3ad18b28dfdde27416e8&with_genres=16&language=en-US&page=3",
              options
            ),
          ]);

          const [
            data1,
            data2,
            data3,
            data4,
            data5,
            data6,
            data7,
            data8,
            data9,
            data10,
            data11,
            data12,
            data13,
            data14,
          ] = await Promise.all([
            data1Res.json(),
            data2Res.json(),
            data3Res.json(),
            data4Res.json(),
            data5Res.json(),
            data6Res.json(),
            data7Res.json(),
            data8Res.json(),
            data9Res.json(),
            data10Res.json(),
            data11Res.json(),
            data12Res.json(),
            data13Res.json(),
            data14Res.json(),
          ]);

          setData((prev) => [
            ...prev,
            ...data1.results,
            ...data2.results,
            ...data3.results,
            ...data4.results,
            ...data5.results,
            ...data6.results,
            ...data7.results,
            ...data8.results,
            ...data9.results,
            ...data10.results,
            ...data11.results,
            ...data12.results,
            ...data13.results,
            ...data14.results,
          ]);

          console.log(data1)
        } catch (error) {
          console.error("Error fetching:", error);
        } finally {
          setLoading2(false);
        }
      };

      getAllData();
    }, []);

  useEffect(() => {
    dispatch(searchDataHandle(data));
    console.log(data)
  }, [data]);
  //end

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

              <div
                className={`${
                  showSearch ? "scale-x-100" : "scale-x-0 "
                } flex bg-[#f60000b4] border-1 border-white items-center gap-2 transition duration-300 origin-right absolute overflow-hidden right-8 p-1 -bottom-14  rounded-lg`}
              >
                <input
                  type="text"
                  placeholder="Movie Name"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className={`
                   links text-[15px] outline-none    text-white font-manrope w-auto lg:w-[450px] font-normal  `}
                />
                <Link
                  to={"/search"}
                  onClick={(e) => dispatch(searchInputDataHandle(search))}
                  className="bg-white rounded-lg px-2 md:px-4 py-1 md:py-2 h-full text-lg cursor-pointer md:text-xl font-bold "
                >
                  <FiSearch />
                </Link>
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
                to={"/account/" + user.displayName}
                className="text-[15px] flex items-center gap-2 footerHoverEffect cursor-pointer"
              >
                {user.displayName}
                <FaUser className="text-lg font-medium" />
              </Link>
              <Link
                onClick={savedHandle}
                to={"/savedVideos"}
                className="text-[15px] flex items-center gap-2 footerHoverEffect cursor-pointer mt-4"
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
