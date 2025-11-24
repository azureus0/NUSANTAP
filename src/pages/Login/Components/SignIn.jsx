import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { IoLogoApple } from "react-icons/io5";
import Info from "./Info";
import { Link } from "react-router-dom";
import NavBar from "../../../shared/components/NavBar";
import Footer from "../../../shared/components/Footer";
import Header from "../../../shared/components/Header";
import ContinueWith from "./ContinueWith";
import Send from "../../../shared/components/Send";
function SignIn() {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="flex justify-center bg-[#F9F9F7] flex-col items-center">
      <div className="w-[797px] h-[786px] flex flex-col items-center gap-1">
        <div className=" w-[545px] h-[185px]">
          <h1 className="text-[100px] flex justify-center font-Playfair">
            Sign In
          </h1>
          <span className="flex justify-center">
            If you don’t have an account register
          </span>
          <div className="flex justify-center">
            <span className="">You can</span>
            <Link to="/SignUp">
              <a className="text-[#C74819] ml-[10px]">Register Here!</a>
            </Link>
          </div>
        </div>

        <div className="h-[538px] w-[797px] border-[px] bg-[#FFFFFF] drop-shadow-2xl  rounded-[10px] mt-[59px] font-DMsans flex flex-col items-center">
          <div className="h-[328px] w-[717px] mt-[50px] flex flex-col gap-[30px]">
            <div>
              <h2 className="font-black text=[16px]">Email</h2>
              <div>
                <input
                  type="email"
                  placeholder="Enter your Email address"
                  className="h-[60px] w-[717px] border-2 border-[#DBDFD0] rounded-4xl px-4 text-[18px] "
                />
              </div>
            </div>

            <div>
              <h2 className="font-black text=[16px]">Password</h2>
              <div className="relative">
                <input
                  type="Password"
                  placeholder="Password"
                  className="h-[60px] w-[717px] border-2 border-[#DBDFD0] rounded-4xl px-4 text-[18px] "
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
                ></button>
              </div>
              <span className="flex justify-end font-bold mt-2">
                Forgot Password?
              </span>
            </div>
           <Send></Send>
            
          </div>
          <ContinueWith></ContinueWith>
        </div>
      </div>

      <Info />
    </div>
  );
}

export default SignIn;
