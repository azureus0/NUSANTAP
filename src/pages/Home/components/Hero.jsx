import React from "react";
import Button from "../../../shared/components/Button";
import Card from "../../../shared/components/Card";
import HeroImage from "../assets/images/HeroImage.png";

function Hero() {
  return (
    <div
      className="w-full h-[1384px] bg-cover bg-center relative flex flex-col items-center"
      style={{ backgroundImage: `url(${HeroImage})` }}
    >
      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.9)_0%,rgba(255,255,255,0)_70%)]" />

      {/* Hero text */}
      <h1 className="pt-[300px] relative z-[1] text-[#2C2F24] text-8xl font-normal font-Playfair text-center">
        <div>Makanan Lebih</div>
        <div>Bermakna, Kurangi</div>
        <div>Sisa, Bantu Sesama</div>
      </h1>

      {/* Subtext */}
      <div className="text-center relative z-[1] mt-4">
        <p className="font-DMsans text-[20px]">
          Menghubungkan makanan berlebih dengan yang membutuhkan. Hemat,
          sehat, dan berdaya bersama.
        </p>
      </div>

      {/* Buttons */}
      <div className="mt-13 relative z-[1] flex justify-center gap-3">
        <Button className="px-[32px] py-[20px] whitespace-nowrap font-DMsansBold text-[16px] text-[#7A2E11] border-2 transition hover:bg-[#7A2E11] hover:text-white">
          Donate Now
        </Button>
        <Button className="px-[32px] py-[20px] whitespace-nowrap font-DMsansBold text-[16px] text-[#2C2F24] border-2 transition hover:bg-[#2C2F24] hover:text-white">
          Contact Us
        </Button>
      </div>

      {/* Stats cards */}
      <div className="mt-[400px] flex justify-center gap-[24px] font-DMsans text-[#2C2F24] relative z-[1]">
        <Card className="bg-white justify-center text-center w-[362px] h-[362px]">
          <h1 className="text-[96px] font-bold">200</h1>
          <p className="text-[24px]">Donasi Makanan</p>
        </Card>

        <Card className="bg-white justify-center text-center w-[362px] h-[362px]">
          <h1 className="text-[96px] font-bold">123,456</h1>
          <p className="text-[24px]">Orang Terdampak</p>
        </Card>

        <Card className="bg-white justify-center text-center w-[362px] h-[362px]">
          <h1 className="text-[96px] font-bold">1,234</h1>
          <p className="text-[24px]">Ton Makanan Terselamatkan</p>
        </Card>
      </div>
    </div>
  );
}

export default Hero;
