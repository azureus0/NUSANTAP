import React, { useState } from "react";
import image111 from "../assets/imageAboutHero.png";
import { FiPhone } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { FaMapMarkerAlt } from "react-icons/fa";
import HeroImg1 from "../assets/img/HeroImg1.jpg";
import HeroImg2 from "../assets/img/HeroImg2.jpg";
import HeroImg3 from "../assets/img/HeroImg3.jpg";
import HeroImg4 from "../assets/img/HeroImg4.jpg";

function Hero() {
  const [showAll, setShowAll] = useState(false);

  let instagramImages = [HeroImg1, HeroImg2, HeroImg3, HeroImg4];
  if (instagramImages.length < 4) {
    while (instagramImages.length < 4) instagramImages.push(null);
  }

  return (
    <section className="bg-[#F9F9F7] p-0 flex justify-center">
      {/* === Mobile Layout === */}
      <div className="flex flex-col items-center w-full bg-[#474747] overflow-hidden lg:hidden ">
        {/* Instagram Images */}
        <div className="flex flex-col w-full mt-[65px]">
          <div className="grid grid-cols-2">
            {instagramImages.map((img, idx) => (
              <div key={idx} className="relative w-full aspect-[2/1]">
                {img && (
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${img})` }}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* === Text Content === */}
        <div className="p-6">
          <div className="flex flex-col gap-2 items-start">
            <h1 className="text-xl sm:text-3xl font-Playfair font-bold text-[#FFFFFF]">
              We provide healthy food for all.
            </h1>
            <p className="text-sm sm:text-base text-[#FFFFFF]">
              Nusantap is a platform that connects surplus yet edible meals with
              people who need them most. We believe every dish carries value and
              deserves to be shared, not wasted.
            </p>
            <p className="text-sm sm:text-base text-[#FFFFFF]">
              At place, we believe that dining is not just about food, but also
              about the overall experience. Our staff, renowned for their warmth
              and dedication, strives to make every visit an unforgettable
              event.
            </p>
            <button className="bg-[#7A2E11] text-white text-sm py-1.5 px-8 rounded-full font-medium">
              Read More
            </button>
          </div>

        </div>
      </div>

      {/* === Desktop Layout === */}
      <div className="hidden lg:flex flex-row justify-center items-center gap-[84px] px-[100px] py-[120px] w-full max-w-[1200px] mt-[100px]">
        {/* Image + Overlay Card */}
        <div className="relative w-[600px] aspect-[600/566] rounded-2xl">
          {/* Background Image */}
          <div
            className="w-full h-full rounded-2xl bg-cover bg-center flex justify-center items-end"
            style={{ backgroundImage: `url(${image111})` }}
          />

          {/* Overlay Card */}
          <div className="absolute -bottom-[6%] -right-[6%] w-[70%] aspect-[411/321] bg-[#474747] p-4 flex flex-col gap-4 text-white rounded-xl">
            <h3 className="text-xl font-DMsans font-bold">Come and connect with us</h3>
            <div className="flex flex-col gap-[25px] text-md">
              <div className="flex gap-[20px] items-center">
                <FiPhone />
                083129041912
              </div>
              <div className="flex gap-[20px] items-center">
                <HiOutlineMail />
                nusantap@gmail.com
              </div>
              <div className="flex gap-[20px] items-start">
                <FaMapMarkerAlt />
                Jl. SWK, Condongcatur, Depok, Sleman, Yogyakarta
              </div>
            </div>
          </div>
        </div>

        {/* Text Content */}
        <div className="w-[557px] flex flex-col gap-2 items-start justify-center">
          <h2 className="text-[55px] font-medium">
            We provide healthy food for all.
          </h2>
          <p className=" text-[18px] font-medium">
            Nusantap is a platform that connects surplus yet edible meals with
            people who need them most. We believe every dish carries value and
            deserves to be shared, not wasted.
          </p>
          <p className="text-[16px] font-regular">
            At place, we believe that dining is not just about food, but also
            about the overall experience. Our staff, renowned for their warmth
            and dedication, strives to make every visit an unforgettable event.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
