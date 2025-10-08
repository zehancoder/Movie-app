import "./App.css";
import Navber from "./app/common/Navber";
import RoutesApp from "./app/routes/Routes";
import Animation from "./GSAPanimation/Animation";
import { useState } from "react";
import { useEffect } from "react";

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

  return (
    <>
      {/* // 🔄 Loader Section */}
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
        <>
          <Animation /> 
          <Navber />
          <RoutesApp />
        </>
      )}
    </>
  );
}

export default App;
