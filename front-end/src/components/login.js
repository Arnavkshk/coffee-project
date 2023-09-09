import React from "react";
import image1 from "../assets/WhatsApp Image 2023-08-27 at 00.40.27.jpg";
import google from "../assets/google logo.jpg";
import facebook from "../assets/Group (1).jpg";
function login() {
  return (
    <div className="relative">
      <div className="">
        <img className="h-screen w-screen" src={image1} alt="" />
      </div>

      <div className=" absolute border border-white rounded-lg bg-white h-max w-max	 grid place-items-center top-20 right-20">
        <divc className="my-0">
          <h1 className="font-bold text-4xl m-2 grid place-items-center my-2 text-amber-700">
            COFEE TIME
          </h1>
        </divc>

        <div className="block flex flex-col space-y-6 m-6 w-64">
          <input
            className="border border-black p-1  rounded-[7px] px-3 py-2 font-sans text-base"
            type="text"
            placeholder="Email"
          />
          <input
            className=" border border-black p-1 rounded-[7px] px-3 py-2 font-sans text-base"
            type="password"
            placeholder="Password"
          />
          <p className="text-xs my-1 pl-40 ">Forget Password?</p>
        </div>

        <div className="flex justify-center items-center mt-3 my-2">
          <button className="rounded-[6px] h-10 w-60 bg-amber-700 font-bold text-green-900">
            Login
          </button>
        </div>
        <div className="flex my-4 relative justify-center items-center h-4 w-full">
          <div className="border-1 border-black w-24"></div>
          <p className="text-sm absolute z-10"><span className="bg-white text-xs">Or Sign up with</span></p>
          <div className="border-1 border-black w-24"></div>
        </div>
        <div className=" flex justify-center items-center space-x-4">
          <div className="border-2 border-white flex justify-center items-center shadow-md h-12 w-20 m-2">
            <img
              className=" h-8 w-8 border-2 rounded-lg border-white "
              src={google}
              alt=""
              srcset=""
            />
          </div>
          <div className="border-2 border-white flex justify-center items-center h-12 w-20 shadow-md m-2">
            <img
              className="h-8 w-8 border-2 rounded-lg border-white"
              src={facebook}
              alt=""
              srcset=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default login;
