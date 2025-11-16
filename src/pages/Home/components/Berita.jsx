import React, { useState } from "react";
import Button from "../../../shared/components/Button";
import CardIMG from "../../../shared/components/CardIMG";
import Anak from "../assets/images/Anak.png";
import Berita2 from "../assets/images/Berita2.png";

function Berita() {
  const [showAll, setShowAll] = useState(false);

  const news = [
    {
      title: "From Plates to Smiles",
      text: "Every meal shared through Nusantap carries more than just nutritionit carries warmth, dignity, and hope. What started as a simple act of distributing food has grown into a movement of compassion, connecting volunteers, donors, and families across Indonesia. ",
      date: "September 20, 2025",
      image: Berita2,
    },
    {
      title: "When Sharing Becomes a Habit of Care",
      text: "The spirit of togetherness thrives as communities unite to share meals with those in need.",
      date: "September 20, 2025",
      image: Anak,
    },
    {
      title: "A Simple Way to End Hunger Together",
      text: "Through collective efforts, small acts of kindness turn into impactful change for those who need it most.",
      date: "September 20, 2025",
      image: Anak,
    },
    {
      title: "Feeding Hearts, Not Just Stomachs",
      text: "Beyond just providing meals, Nusantap fosters connections between volunteers and families.",
      date: "September 20, 2025",
      image: Anak,
    },
    {
      title: "Hope Through Every Shared Meal",
      text: "Each meal represents a story of hope shared between communities across Indonesia.",
      date: "September 20, 2025",
      image: Anak,
    },
  ];

  const visibleNews = showAll ? news : news.slice(0, 3);

  return (
    <section className="bg-[#F9F9F7] flex justify-center items-center py-12 md:py-16 px-12">
      <div className="w-full max-w-[1200px]">
        {/* HEADER */}
        <div className="flex justify-between items-center">
          <h1 className="font-Playfair text-[28px] md:text-[48px] font-medium">
            News
          </h1>
          <Button className="hidden md:block px-[28px] py-[14px] whitespace-nowrap font-DMsansBold text-[15px] bg-[#7A2E11] text-[#fff] border-2 transition hover:bg-transparent hover:text-[#7A2E11] hover:border-[#7A2E11]">
            Read All News
          </Button>
        </div>

        {/* === DESKTOP GRID VIEW === */}
        <div className="hidden md:grid grid-cols-[1fr_1fr] gap-4 mt-12">
          {/* Left big card */}
          <CardIMG
            className="col-span-1 h-full"
            src={news[0].image}
            imgClassName="w-full aspect-[636/450] object-cover"
            tanggal={news[0].date}
            tanggalClassName="text-[14px] font-[500] text-[#737865]"
            title={news[0].title}
            titleClassName="text-[20px] text-[#2C2F24] font-[600]"
            text={news[0].text}
            textClassName="text-[14px] text-[#2C2F24]"
          />

          {/* Right grid (4 small cards) */}
          <div className="grid grid-cols-2 gap-3 items-stretch content-between">
            {news.slice(1, 5).map((item, index) => (
              <CardIMG
                key={index}
                className="bg-white rounded-xl flex flex-col h-full"
                src={item.image}
                imgClassName="w-full aspect-[636/450] object-cover"
                tanggal={item.date}
                tanggalClassName="text-[13px] font-[500] text-[#737865] px-1"
                title={item.title}
                titleClassName="text-[16px] text-[#2C2F24] font-[500] px-1"
                text={item.text}
                textClassName="hidden"
              />
            ))}
          </div>
        </div>

        {/* === MOBILE VIEW === */}
        <div className="flex flex-col items-center md:hidden mt-8">
          {visibleNews.map((item, index) => (
            <CardIMG
              key={index}
              className="mb-4 bg-white rounded-2xl shadow-sm max-w-[500px]"
              src={item.image}
              imgClassName="w-full h-[180px]  rounded-t-2xl object-cover"
              tanggal={item.date}
              tanggalClassName="text-[13px] font-[500] text-[#737865] mt-2 px-4"
              title={item.title}
              titleClassName="text-[16px] text-[#2C2F24] font-semibold px-4"
              text={item.text}
              textClassName="text-[13px] text-[#2C2F24] mt-1 px-4 pb-4"
            />
          ))}

          {!showAll && (
            <button
              onClick={() => setShowAll(true)}
              className="bg-[#7A2E11] text-white text-[14px] py-3 px-6 rounded-full font-medium w-full"
            >
              Read More
            </button>
          )}
        </div>
      </div>
    </section>
  );
}

export default Berita;
