import "./App.css";
import Navber from "./app/common/Navber";
import RoutesApp from "./app/routes/Routes";
import Animation from "./GSAPanimation/Animation";
import { useRef, useState } from "react";
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

  const text = "Please Login before diving into the website.";
  const [autoText, setAutoText] = useState("");
  const indexRef = useRef(0); 

  let interval;
  useEffect(() => {
    interval = setInterval(() => {
      setAutoText((prev) => {
        if (indexRef.current < text.length) {
          const updatedText = text.slice(0, indexRef.current + 1);
          indexRef.current += 1;
          return updatedText;
        } else {
          indexRef.current = 0;
          return "";
        }
      });
    }, 150); 

    return () => clearInterval(interval);
  }, [text]);


  return (
    <>
      {/* // 🔄 Loader Section */}

      {user === null ? (
        <div className="w-screen h-[800px] lg:h-screen customBg md:py-8 sm2:py-6 py-4 lg:py-12 md:px-8 sm2:px-6 px-4 lg:px-12">
          <div className="flex items-center gap-2">
            <h1 className="font-bold md:text-2xl text-xl lg:text-3xl w-fit capitalize  relative text-white font-manrope">
              {autoText}
            </h1>
            <div className="h-4 md:h-5 lg:h-7 w-1.5 md:w-2 bg-[#f60000]"></div>
          </div>
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
