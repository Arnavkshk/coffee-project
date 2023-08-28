import React from "react";
import image1 from "../assets/WhatsApp Image 2023-08-27 at 00.40.27.jpg";
function login() {
  return (
    <div className="relative">
      {/* <div className="">
      <img
            className="h-screen w-screen"
            src={image1}
            alt=""
          />
      </div> */}

     
        <div className=" border border-black h w-fit grid place-items-center top-0">
          <div>
            <h1 className="drop-shadow-2xl w-1/3 h-2/3 ">COFEE TIME</h1>
          </div>

          <div className="credentials ">
            <input type="email" name="" id="" placeholder="Enter your Email" />
            <input type="password" name="" id="" placeholder="Password" />
          </div>

          <div>
            <button type="submit">LogIN</button>
          </div>
        </div>
     
    </div>
  );
}

export default login;
