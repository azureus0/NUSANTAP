import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { IoLogoApple } from "react-icons/io5";
import Info from "./Info";
import { Link } from "react-router-dom";
import NavBar from "../../../shared/components/NavBar";
import Header from "../../../shared/components/Header";
import Footer from "../../../shared/components/Footer";
import ContinueWith from "./ContinueWith";
import Send from "../../../shared/components/Send";

function SignUp() {
  return (
    <div>
      <Header />
      <div className="flex justify-center bg-[#F9F9F7] flex-col items-center pt-[120px]">
        <div className="w-[797px] h-[1086px] flex flex-col items-center gap-1">
          <div className=" w-[545px] h-[185px]">
            <h1 className="text-[100px] flex justify-center font-Playfair">
              Sign Up
            </h1>
            <span className="flex justify-center">
              If you Already have an account
            </span>
            <div className="flex justify-center">
              <span className="">You can</span>
              <Link to="/Login">
                <a className="text-[#C74819] ml-[10px]">Login Here!</a>
              </Link>
            </div>
          </div>
          <div className="h-[687px] w-[797px] border-[px] bg-[#FFFFFF] drop-shadow-2xl  rounded-[10px] mt-[59px] font-DMsans flex flex-col items-center">
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
              </div>
              <div>
                <h2 className="font-black text=[16px]">
                  Confirm Your Password
                </h2>
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
              </div>
              <Send></Send>
              <ContinueWith></ContinueWith>
            </div>

          </div>

        </div>

        <Info />
      </div>
      <Footer></Footer>

    </div>
  );
}

export default SignUp;
