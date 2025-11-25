import { FcGoogle } from "react-icons/fc";
import React, { useState } from "react";

import { FaFacebook } from "react-icons/fa";
import { IoLogoApple } from "react-icons/io5";
import Info from "../../../Login/Components/Info";
import { Link } from "react-router-dom";
import NavBar from "../../../../shared/components/NavBar";
import Header from "../../../../shared/components/Header";
import Footer from "../../../../shared/components/Footer";
import ContinueWith from "../../../Login/Components/ContinueWith";
import Send from "../../../../shared/components/Send";

function Donate() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <Header />

      <div className="flex justify-center bg-[#F9F9F7] flex-col items-center pt-[120px]">
        <div className="w-[797px] h-[2000px] flex flex-col items-center gap-[20px]">
          <div className="w-[545px] h-[185px]">
            <h1 className="text-[100px] w-[600px] flex justify-center font-Playfair">
              Donate Form
            </h1>
            <span className="flex justify-center">
              Every contribution, no matter how small, helps us serve more
              meals.
            </span>
          </div>

          <div className="h-[1397px] w-[797px] bg-[#FFFFFF] drop-shadow-2xl rounded-[10px] mt-[20px] font-DMsans flex flex-col items-center">
            <div className="w-[717px] mt-[50px] flex flex-col gap-[20px]">
              {/* Full Name */}
              <div>
                <h2 className="font-black text-[16px]">Full Name</h2>
                <input
                  placeholder="You can choose to stay anonymous"
                  className="h-[60px] w-[717px] border-2 border-[#DBDFD0] rounded-4xl px-4 text-[18px]"
                />
              </div>

              {/* Email */}
              <div>
                <h2 className="font-black text-[16px]">Email</h2>
                <input
                  type="email"
                  placeholder="Enter your Email address"
                  className="h-[60px] w-[717px] border-2 border-[#DBDFD0] rounded-4xl px-4 text-[18px]"
                />
              </div>

              {/* Phone */}
              <div>
                <h2 className="font-black text-[16px]">Phone Number</h2>
                <input
                  type="number"
                  placeholder="Enter your phone number"
                  className="h-[60px] w-[717px] border-2 border-[#DBDFD0] rounded-4xl px-4 text-[18px]"
                />
              </div>

              {/* Donate Type */}
              <div className="flex flex-col gap-[20px]">
                <h2 className="font-black text-[16px]">Donate Type</h2>

                <div className="h-[60px] w-[717px] border-2 border-[#DBDFD0] rounded-4xl px-4 flex items-center gap-[10px]">
                  <input
                    id="money"
                    type="checkbox"
                    className="w-[24px] h-[24px] rounded-[6px] border-2 border-gray-400 appearance-none 
                    checked:bg-[#7A2E11] checked:border-[#7A2E11] 
                    checked:before:content-['✓'] checked:before:text-white 
                    checked:before:flex checked:before:items-center checked:before:justify-center"
                  />
                  <label
                    htmlFor="money"
                    className="text-[16px] font-medium text-[#2C2F24]"
                  >
                    Money Donation
                  </label>
                </div>

                <div className="h-[60px] w-[717px] border-2 border-[#DBDFD0] rounded-4xl px-4 flex items-center gap-[10px]">
                  <input
                    id="funds"
                    type="checkbox"
                    className="w-[24px] h-[24px] rounded-[6px] border-2 border-gray-400 appearance-none 
                    checked:bg-[#7A2E11] checked:border-[#7A2E11] 
                    checked:before:content-['✓'] checked:before:text-white 
                    checked:before:flex checked:before:items-center checked:before:justify-center"
                  />
                  <label
                    htmlFor="funds"
                    className="text-[16px] font-medium text-[#2C2F24]"
                  >
                    Funds
                  </label>
                </div>
              </div>

              {/* Donation Detail */}
              <div className="flex flex-col gap-[20px]">
                <h2 className="font-black text-[16px]">Donation Detail</h2>
                <input
                  placeholder="Rp500,000 or 20 rice boxes for community kitchen"
                  className="h-[60px] w-[717px] border-2 border-[#DBDFD0] rounded-4xl px-4 text-[18px]"
                />

                {/* Delivery method */}
                <div className="flex flex-col gap-[20px]">
                  <h2 className="font-black text-[16px]">
                    Preferred delivery method (if food)
                  </h2>

                  <div className="h-[60px] w-[717px] border-2 border-[#DBDFD0] rounded-full px-4 flex items-center gap-[10px]">
                    <input
                      id="dropoff"
                      name="delivery"
                      type="radio"
                      className="w-[24px] h-[24px] rounded-full border-2 border-gray-400 appearance-none 
                      checked:bg-[#7A2E11] checked:border-[#7A2E11] relative 
                      before:content-[''] before:absolute before:top-1/2 before:left-1/2 
                      before:-translate-x-1/2 before:-translate-y-1/2 
                      before:w-[10px] before:h-[10px] before:rounded-full before:bg-white checked:before:block"
                    />
                    <label
                      htmlFor="dropoff"
                      className="text-[16px] font-medium text-[#2C2F24]"
                    >
                      Drop Off
                    </label>
                  </div>

                  <div className="h-[60px] w-[717px] border-2 border-[#DBDFD0] rounded-full px-4 flex items-center gap-[10px]">
                    <input
                      id="pickup"
                      name="delivery"
                      type="radio"
                      className="w-[24px] h-[24px] rounded-full border-2 border-gray-400 appearance-none 
                      checked:bg-[#7A2E11] checked:border-[#7A2E11] relative 
                      before:content-[''] before:absolute before:top-1/2 before:left-1/2 
                      before:-translate-x-1/2 before:-translate-y-1/2 
                      before:w-[10px] before:h-[10px] before:rounded-full before:bg-white checked:before:block"
                    />
                    <label
                      htmlFor="pickup"
                      className="text-[16px] font-medium text-[#2C2F24]"
                    >
                      Pick Up by Nusantap Team
                    </label>
                  </div>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-[20px]">
                  <h2 className="font-black text-[16px]">
                    Message or Dedication (Optional)
                  </h2>
                  <input
                    placeholder="Write a short message or note"
                    className="h-[60px] w-[717px] border-2 border-[#DBDFD0] rounded-4xl px-4 text-[18px]"
                  />
                </div>

                {/* Anonymity */}
                <div className="flex flex-col gap-[20px]">
                  <h2 className="font-black text-[16px]">Anonymity Option</h2>
                  <div className="h-[60px] w-[717px] border-2 border-[#DBDFD0] rounded-4xl px-4 flex items-center gap-[10px]">
                    <input
                      id="anonymous"
                      type="checkbox"
                      className="w-[24px] h-[24px] rounded-[6px] border-2 border-gray-400 appearance-none 
                      checked:bg-[#7A2E11] checked:border-[#7A2E11] 
                      checked:before:content-['✓'] checked:before:text-white 
                      checked:before:flex checked:before:items-center checked:before:justify-center"
                    />
                    <label
                      htmlFor="anonymous"
                      className="text-[16px] font-medium text-[#2C2F24]"
                    >
                      I prefer my donation to remain anonymous
                    </label>
                  </div>
                </div>
              </div>

              {/* Buttons */}
              <Send mode="donate" onClick={() => setShowModal(true)} />

              <ContinueWith />
            </div>
          </div>
        </div>
      </div>

      <Footer />

      {showModal && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50 transition-opacity duration-300">
          <div className="bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-lg text-center w-[800px] h-[252px]">
            <h2 className="text-2xl font-bold text-[#2C2F24] mb-4">
              🎉 Thank You!
            </h2>
            <p className="text-gray-700 mb-6">
              Thank you for your generosity! Your donation has been received.
              We’ll send a confirmation to your email shortly. Every meal you
              share brings hope to someone in need. 🌾
            </p>
            <button
              onClick={() => setShowModal(false)}
              className="bg-[#7A2E11] text-white px-6 py-2 rounded-full hover:bg-gray-700 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Donate;
