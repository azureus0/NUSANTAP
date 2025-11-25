import React from "react";
import Button from "../../../shared/components/Button";
import HeroImage from "../assets/images/HeroImage.png";
import { Link } from "react-router-dom";

function Hero() {
  // === Handler Function: Teleport ke atas ===
  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // Langsung pindah (teleport)
    });
  };

  return (
    <section
      className="relative w-full flex flex-col items-center justify-center 
             bg-cover bg-center bg-no-repeat 
             mt-[60px] lg:mt-[80px] 
             h-[50vh] md:h-[min(150vh,1235px)] overflow-hidden"
      style={{
        backgroundImage: `url(${HeroImage})`,
      }}
    >
      {/* === Hero Content Wrapper === */}
      <div className="relative z-10 max-w-[965px] mx-4 md:mx-80 text-center flex flex-col items-center justify-center transform -translate-y-[0px] md:-translate-y-[70px]">
        {/* === Radial Glow Overlay === */}
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
          w-[400px] h-[400px] md:w-[750px] md:h-[750px]
          rounded-full pointer-events-none
          bg-[radial-gradient(circle,rgba(255,255,255,0.9)_30%,rgba(255,255,255,0.4)_80%,rgba(255,255,255,0)_100%)]
          blur-[50px] opacity-90"
        />

        {/* === Hero Content === */}
        <h2 className="relative text-[#2C2F24] font-Playfair leading-none text-3xl md:text-8xl px-2.5">
          More Meaningful Meals, Less Waste, Help Others
        </h2>

        <p className="relative mt-3 text-[#2C2F24] font-DMsans text-[12px] md:text-[20px] max-w-[537px] mx-auto">
          Connecting surplus food with those in need.
          <br />
          Save money, stay healthy, and empower together.
        </p>

        {/* === Buttons === */}
        <div className="relative mt-3 flex flex-col sm:flex-row justify-center gap-3 font-DMsans w-full px-10">

          <Link to="/Donate" onClick={handleScrollTop}>
            <Button className="w-full py-1.5 md:py-4 md:px-6 font-bold text-[16px] text-[#7A2E11] border-2 border-[#7A2E11] transition hover:bg-[#7A2E11] hover:text-white whitespace-nowrap">
              Donate Now
            </Button>
          </Link>

          <Link to="/contact" onClick={handleScrollTop}>
            <Button className="w-full sm:w-auto py-1.5 md:py-4 md:px-6 font-bold text-[16px] text-[#2C2F24] border-2 border-[#2C2F24] transition hover:bg-[#2C2F24] hover:text-white whitespace-nowrap">
              Contact Us
            </Button>
          </Link>

        </div>
      </div>
    </section>
  );
}

export default Hero;