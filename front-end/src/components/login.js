import React from "react";
import image1 from "../assets/WhatsApp Image 2023-08-27 at 00.40.27.jpg";
function login() {
  return (
    <div className="relative">
      <div className="">
      <img
            className="h-screen w-screen"
            src={image1}
            alt=""
          />
      </div>

      <div className=" absolute border border-white bg-white h-max w-max	 grid place-items-center top-20 right-20">
        <divc className="my-0">
          <h1 className="font-bold text-4xl m-2 grid place-items-center my-4 text-amber-700">
            COFEE TIME
          </h1>
        </divc>

        <div className="block flex flex-col space-y-6 m-10 w-">
          <input
            className="border border-black p-1 w-max rounded-[7px] px-3 py-2 font-sans text-base"
            type="text"
            placeholder="Email"
          />
          <input
            className=" border border-black p-1 rounded-[7px] px-3 py-2 font-sans text-base"
            type="password"
            placeholder="Password"
          />
        </div>
        <div className="flex ml-10  space-x-2 text-black items-center">
              <input
                className="rounded-[7px] py-4 w-10"
                type="checkbox"
                class="default:ring-2 ..."
              />
              <p className="text-black">
                Agree with
                <span className="underline px-1 text-black">Terms and Conditions</span>
              </p>
            </div>
            <div className="flex justify-center items-center mt-4">
              <button className="rounded-[6px] h-10 w-12 bg-orange-600">
                login
              </button>
            </div>
      </div>
    </div>
  );
}

export default login;
