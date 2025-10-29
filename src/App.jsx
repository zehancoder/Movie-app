import "./App.css";
import Navber from "./app/common/Navber";
import RoutesApp from "./app/routes/Routes";
import Animation from "./GSAPanimation/Animation";
import { useState } from "react";
import { useEffect } from "react";
import Footer from "./app/common/Footer";
import PlaylistBox from "./app/common/PlaylistBox";
import { useSelector } from "react-redux";
import SignUpandLogin from "./app/pages/Login/LoginSignUp";
function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const checkIfLoaded = () => {
      if (document.readyState === "complete") {
        setIsLoaded(true);
      }
    };

    checkIfLoaded();
    document.addEventListener("readystatechange", checkIfLoaded);

    return () => {
      document.removeEventListener("readystatechange", checkIfLoaded);
    };
  }, []);

  const { user, loading } = useSelector((state) => state.users);
  console.log(user);

  return (
    <>
      {/* // 🔄 Loader Section */}

      {user === null ? (
        <div className="w-screen h-screen customBg py-12 px-12">
          <h1 className="text-3xl w-fit capitalize font-medium  relative text-white font-manrope">
            Please Login before diving into the website.
            <img src="/icons/arrow.gif" className=" absolute -right-72 lg:block hidden h-72" alt="" />
          </h1>
          <SignUpandLogin />
        </div>
      ) : (
        <div>
          {!isLoaded ? (
            <div
              className={` flex items-center justify-center min-h-screen w-screen h-screen bg-black 
        }`}
            >
              <div className="text-center">
                <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
                <p className="mt-4 text-white font-medium">Loading...</p>
              </div>
            </div>
          ) : (
            <div className="overflow-x-hidden " id="show">
              <PlaylistBox />
              <Animation />
              <Navber />
              <RoutesApp />
              <Footer />
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default App;
