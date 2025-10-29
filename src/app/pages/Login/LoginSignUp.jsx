import React, { useEffect, useState } from "react";
import { FaUserLarge } from "react-icons/fa6";
import { IoMailSharp } from "react-icons/io5";
import { FaLock } from "react-icons/fa";
import { onAuthStateChanged } from "firebase/auth";
import {
  signUp,
  Login,
  auth,
  Logout,
  signUpLoginWithGoogle,
} from "../../../firebase/firebase";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { cleanUser, userImport } from "../../../redux/dataFetch";
import { nanoid } from "@reduxjs/toolkit";

function SignUpandLogin() {
  const dispatch = useDispatch();
  const [signUpMsg, setSignUpMsg] = useState("");

  const [messeges, setMesseges] = useState(false);
  const [eye, setEye] = useState(false);

  const [signState, setsignState] = useState("Sign Up");
  const [userName, setuserName] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (signState == "Sign Up") {
      await signUp(userName, email, password, setSignUpMsg);
    } else {
      await Login(email, password, setSignUpMsg);
    }
    setTimeout(() => {
      setMesseges(true);
    }, 200);
  };

  const logoutHandle = () => {
    Logout()
  };

  useEffect(() => {
    setTimeout(() => {
      setMesseges(false);
    }, 2000);
  }, [handleSubmit]);

  const googleAuthHandle = () => {
    signUpLoginWithGoogle(setSignUpMsg);
  };

  const startTime = () => {
    const timeOut = setTimeout(() => {
      clearTimeout(timeOut)
      setMesseges(false);
    }, 2500);
    clearTimeout(timeOut);
  };

  useEffect(() => {
    signUpMsg == "Google Authentication Success"
      ? setMesseges(true)
      : setMesseges(false);
    signUpMsg == "Google Authentication Success" && startTime();
  }, [signUpMsg]);

  // import user in redux store after login
  useEffect(() => {

      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        if (currentUser) {
          dispatch(
            userImport({
              uid: currentUser.uid,
              email: currentUser.email,
              displayName: currentUser.displayName,
              photoURL: currentUser.photoURL,
            })
          );
        } else {
          dispatch(cleanUser());
        }
      });

      return () => unsubscribe();
    

    // signUpMsg == "Successfuly SignUP" ||
    // signUpMsg == "Successfuly Login" ||
    // signUpMsg == "Google Authentication Success"
    //   ? dispatch(userImport({name: userName === "" && email.slice(0, 5), email: email, id: userName.slice(0, 3) + password.slice(0, 3)}))
    //   : "";
  }, [dispatch]);

  const { user, loading } = useSelector((state) => state.users);


  // onAuthStateChanged(auth, (currentUser) => {
  //   console.log(currentUser)
  // })

  return (
    <>
      {
        <div
          className={`absolute left-0 bottom-28 transition duration-300 transform ${
            messeges ? "-translate-x-0" : "-translate-x-[350px]"
          }`}
        >
          <div className="py-2 px-8 border border-[#10a6c4f5] rounded-lg text-center inputCustomShadow  text-[#10a6c4f5]">
            <p className="text-center font-medium text-lg">{signUpMsg}!</p>
          </div>
        </div>
      }

      <div className="absolute lg:top-[43%] top-[34%] sm2:top-[40%] xl:top-[45%] left-[50%] transform -translate-x-[50%] -translate-y-[35%] ">
    {/* {user && <div
      // className={`${
      //   signUpMsg == "Successfuly SignUP" ||
      //   signUpMsg == "Successfuly Login" ||
      //   signUpMsg == "Google Authentication Success"
      //     ? "block"
      //     : "hidden"
      // }`}
    >
      <div className="w-full text-center mt-6">
        <button
          onClick={logoutHandle}
          className="uppercase font-bold cursor-pointer text-[14px] tracking-wider  text-white customBg px-4 py-2.5 inputCustomShadow rounded-4xl"
        >
          Logout Here
        </button>
        <p>{user.email}</p>
      </div>
    </div>} */}

        <div
          className={`${
            user !== null
              ? "hidden"
              : "block"
          }`}
        >
          <h1 className="md:text-2xl  text-[22px]  lg:text-3xl text-center font-bold uppercase text-white md:mb-8 sm2:mb-6 mb-4 lg:mb-12 tracking-wider">
            {signState}
          </h1>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit(e);
            }}
            className=" h-[410px] md:h-[470px] w-[340px] sm2:w-[370px]  md:w-[750px] rounded-3xl overflow-hidden bg-gray-200 customShadow"
          >
            <div className="flex h-full w-full items-center justify-between ">
              <div
                className={`w-full md:w-[60%] h-full md:px-8 sm2:px-6 px-4 lg:px-12 md:py-6 py-4 lg:py-8 flex justify-between flex-col `}
              >
                <h1 className=" md:text-xl text-[20px] lg:text-2xl text-center md:mb-3 mb-0 lg:mb-5 font-bold text-gray-500 tracking-wide">
                  Hello Friend's!
                </h1>
                <div className="text-[#10a6c4f5]">
                  {signState == "Sign Up" ? (
                    <div
                      className={`flex mt-2 justify-between items-center  px-3 rounded-full w-full  inputCustomShadow  ${
                        signState == "Sign Up" ? "block" : "hidden"
                      }`}
                    >
                      <FaUserLarge className="text-[15px]  font-medium " />
                      <input
                        name="username"
                        value={userName}
                        onChange={(e) => setuserName(e.target.value)}
                        required
                        type="text"
                        className={`w-[91%] py-[10px]  outline-none font-medium text-[15px] `}
                        placeholder="Name"
                      />
                    </div>
                  ) : (
                    <></>
                  )}
                  <div className="flex mt-4 justify-between items-center px-3 rounded-full w-full  inputCustomShadow ">
                    <IoMailSharp className="text-[15px]   font-medium " />
                    <input
                      value={email}
                      name="email"
                      onChange={(e) => setemail(e.target.value)}
                      required
                      type="email"
                      className="w-[91%] py-[10px]  outline-none font-medium text-[15px]"
                      placeholder="E-mail"
                    />
                  </div>
                  <div className="flex mt-4 justify-between items-center px-3 rounded-full w-full  inputCustomShadow ">
                    <FaLock className="text-[15px]  font-medium " />
                    <input
                      value={password}
                      name="password"
                      onChange={(e) => setpassword(e.target.value)}
                      required
                      type={eye ? "text" : "password"}
                      className="w-[91%] pl-3 py-[10px]  outline-none font-medium text-[15px]"
                      placeholder="Password"
                    />
                    <FaEye
                      onClick={() => setEye(false)}
                      className={`cursor-pointer ${eye ? "block" : "hidden"}`}
                    />
                    <FaEyeSlash
                      onClick={() => setEye(true)}
                      className={`cursor-pointer ${eye ? "hidden" : "block"}`}
                    />
                  </div>
                </div>
                <div className="mt-0 md:mt-3">
                  <label className="flex items-center space-x-2 cursor-pointer mx-auto w-fit font-normal  text-[14px]">
                    <input type="checkbox" className="hidden peer " />
                    <span className="w-[15px] h-[15px] flex items-center justify-center rounded-full border border-[#4faefb] peer-checked:bg-[#4faefb] text-white text-[13px] ">
                      ✓
                    </span>
                    <span className="text-gray-500 ">
                      Accept <span className="text-[#4faefb]">Tearms</span> and{" "}
                      <span className="text-[#4faefb]">Conditions</span>
                    </span>
                  </label>
                </div>

                <div className="w-full text-center md:mt-4 mt-0 lg:mt-6">
                  <button className="uppercase font-bold cursor-pointer text-[14px] tracking-wider  text-white customBg px-4 py-2.5 inputCustomShadow rounded-4xl">
                    {signState == "Sign Up" ? "Create Account" : "Sign In"}
                  </button>
                </div>

                <div>
                  <p className="text-[14px] font-normal text-gray-500 text-center md:mt-3">
                    {signState == "Sign Up"
                      ? "Already have an account?"
                      : "Create New account"}
                    <span
                      className="text-[#4faefb] cursor-pointer"
                      onClick={() =>
                        setsignState(
                          signState == "Sign Up" ? "Sign In" : "Sign Up"
                        )
                      }
                    >
                      {" "}
                      {signState == "Sign In" ? "Sign Up" : "Sign In"}{" "}
                    </span>
                  </p>
                </div>

                <div>
                  <div>
                    <p className="text-[14px] font-normal text-gray-500 text-center md:mt-3">
                      Or, {signState} With
                    </p>
                    <div className="flex items-center gap-6 mt-2 justify-center">
                      <div
                        onClick={googleAuthHandle}
                        className="flex items-center gap-2  cursor-pointer"
                      >
                        <img className="h-5 w-5" src="/google.svg" alt="" />
                        <p className="text-[14px] font-normal text-gray-500 text-center ">
                          Google
                        </p>
                      </div>
                      <div className="flex items-center gap-2  cursor-pointer">
                        <img className="h-5 w-5" src="/facebook.svg" alt="" />
                        <p className="text-[14px] font-normal text-gray-500 text-center ">
                          Facebook
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[40%] px-12 h-full customBg hidden md:flex items-center justify-center">
                <div className="text-center text-white">
                  <h1 className="text-xl mb-3 font-bold text-white tracking-wide">
                    Glad to see you!
                  </h1>
                  <p className="text-[15px] leading-4 font-medium mb-5">
                    Create your account and join us today – it only takes a
                    minute!
                  </p>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default SignUpandLogin;
