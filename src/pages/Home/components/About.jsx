import React from "react";
import image111 from "../assets/images/image111.png";
import { FiPhone } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { FaMapMarkerAlt } from "react-icons/fa";
import Button from "../../../shared/components/Button";

function About() {
  return (
    <section className="bg-[#F9F9F7] p-4 md:p-0 flex justify-center">

      {/* === Mobile Layout === */}
      <div className="flex flex-col items-center w-full max-w-[700px] bg-white rounded-2xl overflow-hidden lg:hidden shadow-lg">
        {/* === Image === */}
        <div
          className="w-full max-h-[285px] pb-[85%] bg-cover bg-center rounded-t-lg"
          style={{ backgroundImage: `url(${image111})` }}
        />

        {/* === Text Content + Contact Section === */}
        <div className="p-6">
          {/* === Title & Description === */}
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl sm:text-3xl font-Playfair font-medium">
              A Glimpse of Nusantap
            </h1>
            <p className="font-DMsans text-sm sm:text-base">
              Lorem ipsum dolor sit amet consectetur. Ipsum montes nullam nascetur elementum ut rhoncus.
            </p>
          </div>

          {/* === Contact Section === */}
          <div className="bg-[#474747] text-white  p-6 mt-2 mb-6 flex flex-col gap-4 rounded-xl w-full">
            <h2 className="text-xl font-DMsans">Come and connect with us</h2>
            <div className="flex flex-col gap-3">
              <div className="flex gap-2 items-center"><FiPhone /> 08124356789</div>
              <div className="flex gap-2 items-center"><HiOutlineMail /> Apakek@gmail.com</div>
              <div className="flex gap-2 items-center"><FaMapMarkerAlt /> Mana yaa</div>
            </div>
          </div>

        </div>

      </div>

      {/* === Desktop Layout === */}
      <div className="hidden lg:flex flex-row justify-center items-center gap-[84px] px-[56px] py-[120px] w-full max-w-[1300px]">
        {/* Image + Overlay Card */}
        <div className="relative w-[600px] aspect-[600/566] rounded-2xl">
          {/* Background Image */}
          <div
            className="w-full h-full rounded-2xl bg-cover bg-center flex justify-center items-end"
            style={{ backgroundImage: `url(${image111})` }}
          />

          {/* Overlay Card */}
          <div className="absolute -bottom-[6%] -right-[6%] w-[70%] aspect-[411/321] bg-[#474747] p-5 flex flex-col gap-4 text-white rounded-xl font-DMsans">
            <h1 className="text-[24px] font-bold">Come and connect with us</h1>
            <div className="flex flex-col gap-[25px]">
              <div className="flex gap-[20px] items-center"><FiPhone /> 08124356789</div>
              <div className="flex gap-[20px] items-center"><HiOutlineMail /> Apakek@gmail.com</div>
              <div className="flex gap-[20px] items-center"><FaMapMarkerAlt /> Mana yaa</div>
            </div>
          </div>
        </div>

        {/* Text Content */}
        <div className="w-[557px] flex flex-col gap-2 items-start justify-center">
          <h1 className="font-Playfair text-[55px] font-medium">A Glimpse of Nusantap</h1>
          <p className="font-DMsans font-medium">
            Nusantap is a platform that connects surplus yet edible meals with people who need them most. We believe every dish carries value and deserves to be shared, not wasted.
          </p>
          <p className="font-DMsans font-regular">
            To reduce food waste while fostering social care. With Nusantap, sharing becomes easier, more impactful, and truly meaningful.
          </p>
          <Button className="w-auto mt-6 px-[32px] py-[20px] whitespace-nowrap font-DMsansBold text-[16px] text-[#2C2F24] border-2 transition hover:bg-[#2C2F24] hover:text-white">
            More About Us
          </Button>
        </div>
      </div>
    </section>
  );
}

export default About;
