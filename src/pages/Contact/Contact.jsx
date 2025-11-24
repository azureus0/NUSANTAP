import React, { useState } from "react";
import NavBar from "../../shared/components/NavBar";
import Header from "../../shared/components/Header";
import Footer from "../../shared/components/Footer";
import Send from "../../shared/components/Send";
import Info from "../Login/Components/Info";

import ContinueWith from "../Login/Components/ContinueWith";
function Contact() {
 const [showModal, setShowModal] = useState(false);
    
  return (
    
    <div className=" ">
      <Header></Header>
      <NavBar></NavBar>
      
      <div className="flex justify-center bg-[#F9F9F7]">
        <div className="w-[797px] h-[1000px] flex flex-col items-center gap-[20px]">
          <div className="w-[545px] h-[185px]">
            <h1 className="text-[100px] w-[600px] flex justify-center font-Playfair">
              Contact Us
            </h1>
            <span className="flex text-center">
              We consider all the drivers of change gives you the components you
              need to change to create a truly happens.
            </span>
          </div>
          <div className="h-[687px] w-[797px] border-[px] bg-[#FFFFFF] drop-shadow-2xl  rounded-[15px] mt-[59px] font-DMsans flex flex-col items-center">
            <div className="h-[328px] w-[717px] mt-[50px] flex flex-col gap-[30px]">
              <div className="flex gap-[10px]">
                <div>
                  <h2 className="font-black text=[16px]">Name</h2>
                  <input
                    type="Text"
                    placeholder="Enter Your Name"
                    className="h-[60px] w-[350px] border-2 border-[#DBDFD0] rounded-4xl px-4 text-[18px] "
                  />
                </div>
                <div>
                  <h2 className="font-black text=[16px]">Email</h2>
                  <input
                    type="email"
                    placeholder="Enter your Email address"
                    className="h-[60px] w-[350px] border-2 border-[#DBDFD0] rounded-4xl px-4 text-[18px] "
                  />
                </div>
              </div>
              <div>
                <h2 className="font-black text=[16px]">Subject</h2>
                <div className="relative">
                  <input
                    type="Text"
                    placeholder="Write a Subject"
                    className="h-[60px] w-[717px] border-2 border-[#DBDFD0] rounded-4xl px-4 text-[18px] "
                  />
                </div>
              </div>
              <div>
                <h2 className="font-black text=[16px]">Message</h2>
                <div className="relative">
                  <textarea
                    placeholder="Write Your Message"
                    className="h-[236px] w-[717px] border-2 border-[#DBDFD0] rounded-4xl px-4 pt-4 text-[18px] resize-none"
                  ></textarea>
                </div>
              </div>
            <Send mode="Contact" onClick={() => setShowModal(true)} />            </div>
          </div>
        </div>
        
      </div>
      <Info></Info>
      <Footer></Footer>
{showModal && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50 transition-opacity duration-300">
          <div className="bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-lg text-center w-[800px] h-[252px]">
            <h2 className="text-2xl font-bold text-[#2C2F24] mb-4">
              🎉 Thank You!
            </h2>
            <p className="text-gray-700 mb-6">
             Thank you for reaching out! We’ve received your message and will get back to you via email soon. Together, we can share kindness and meals that matter. 🍱💛
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

export default Contact;
