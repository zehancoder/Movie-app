import React from "react";
import { useSelector } from "react-redux";
import Button from "../../common/Button";
import { Logout } from "../../../firebase/firebase";

function Account() {
  const { user } = useSelector((state) => state.users);
  return (
    <div className="md:h-[800px] relative lg:px-12 font-manrope lg:py-12 md:px-8 md:py-8 sm2:py-6 py-3 sm2:px-4 px-2 sm2:h-[600px] h-[500px] lg:h-[900px] w-screen">
      <div className="h-24"></div>
      <div>
        <h1 className="text-white font-bold lg:text-3xl">My Profile</h1>
        <div className=" absolute text-white rounded-lg shadow-2xl sm2:text-[15px] text-[13px] lg:text-[17px] font-medium md:w-[70%] sm2:w-[80%] w-[90%] lg:w-[60%] top-[45%] md:top-[40%] lg:top-[35%] border border-[#1F1F1F] lg:px-8 md:px-6 sm2:px-4 px-1.5 lg:py-8 md:py-6 py-4 transform -translate-y-[30%] left-[50%] -translate-x-[50%]">
          <div className="flex items-center justify-between">
            <div>
              <p className="">Name: {user.displayName}</p>
              <p className="md:mt-6 sm2:mt-4 mt-3">Email: {user.email}</p>
              <p className="md:mt-6 sm2:mt-4 mt-3">Uid: {user.uid}</p>
            </div>
            <div>
              <img
                className="h-16 w-16    rounded-lg"
                src={user.photoURL}
                alt=""
              />
            </div>
          </div>
          <div className="flex items-center justify-center" onClick={() => Logout()}>
            <Button className={"bg-[#f60000] mt-8"}>Logout</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Account;
