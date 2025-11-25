import React, { useState } from "react";
import Card from "../../../shared/components/Card";
import image from "../../../assets/images/Image.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "./Testimoni.css";
import "swiper/css";
import "swiper/css/pagination";

function Testimoni() {
  const testimonials = [
    {
      title: "Meals That Matter",
      text: "Nusantap helps us get fresh and healthy food every week.",
      name: "Aulia",
      location: "Yogyakarta",
      image: image,
    },
    {
      title: "A Small Act, Big Change",
      text: "It’s amazing how one meal can bring so much joy to others.",
      name: "Rafi",
      location: "Yogyakarta",
      image: image,
    },
    {
      title: "Nutrition with Kindness",
      text: "Thanks to Nusantap, our community feels more connected and cared for.",
      name: "Sinta",
      location: "Yogyakarta",
      image: image,
    },
    {
      title: "Together We Grow",
      text: "Through sharing meals, we’re also sharing hope and kindness.",
      name: "Dina",
      location: "Yogyakarta",
      image: image,
    },
    {
      title: "Kindness Beyond Meals",
      text: "Every act of giving food brings comfort and hope to someone’s day.",
      name: "Farhan",
      location: "Surabaya",
      image: image,
    },
    {
      title: "Sharing is Caring",
      text: "The joy of sharing a meal reminds us that we’re all connected.",
      name: "Lina",
      location: "Bandung",
      image: image,
    },
    {
      title: "Hope on Every Plate",
      text: "One plate of food can mean the world to someone in need.",
      name: "Budi",
      location: "Jakarta",
      image: image,
    },
    {
      title: "Meals of Love",
      text: "Food made with love nourishes not only the body but also the soul.",
      name: "Maya",
      location: "Bali",
      image: image,
    },
  ];

  const [showAll, setShowAll] = useState(false);
  const visibleTestimonials = showAll ? testimonials : testimonials.slice(0, 3);

  return (
    <div className="my-[98px] flex flex-col items-center">
      <h1 className="text-center font-Playfair text-[32px] md:text-[55px] font-medium">
        What They Say
      </h1>

      {/* === DESKTOP VIEW (Swiper) === */}
      <div className="hidden md:block w-full">
        <Swiper
          modules={[Autoplay, Pagination]}
          centeredSlides={false}
          centeredSlidesBounds={true}
          slidesPerView={"auto"}
          spaceBetween={24}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          className="my-slider-home mt-10 w-full max-w-[1500px] px-[140px] pb-12"
          breakpoints={{
            768: { slidesPerView: "auto", centeredSlides: true },
          }}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide
              key={index}
              className="!w-[416px] transition-transform duration-300"
            >
              <Card className="border-0 shadow-none bg-[#F9F9F7] w-[416px] h-[408px] flex justify-center items-center font-DMsans mx-auto">
                <div className="w-[346px] h-[300px]">
                  <h1 className="text-[#ED5700] text-[24px] font-bold">
                    “{item.title}”
                  </h1>
                  <p className="mt-4">{item.text}</p>
                  <hr className="text-[#DBDFD0] border-[1px] my-4" />
                  <div className="flex gap-[20px]">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-[70px] h-[70px] rounded-full"
                    />
                    <div className="mt-2">
                      <h6 className="font-bold text-[16px]">{item.name}</h6>
                      <p>{item.location}</p>
                    </div>
                  </div>
                </div>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* === MOBILE VIEW (List + Read More) === */}
      <div className="block md:hidden w-full px-6 mt-10">
        {visibleTestimonials.map((item, index) => (
          <Card
            key={index}
            className="border-0 shadow-none bg-[#F9F9F7] mb-3 w-full flex justify-center items-center font-DMsans rounded-2xl p-6"
          >
            <div>
              <h1 className="text-[#ED5700] text-[20px] font-bold">
                “{item.title}”
              </h1>
              <p className="mt-3">{item.text}</p>
              <hr className="text-[#DBDFD0] border-[1px] my-4" />
              <div className="flex gap-[16px]">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-[60px] h-[60px] rounded-full"
                />
                <div className="mt-2">
                  <h6 className="font-bold text-[15px]">{item.name}</h6>
                  <p>{item.location}</p>
                </div>
              </div>
            </div>
          </Card>
        ))}

        {/* Tombol Read More */}
        {!showAll && (
          <button
            onClick={() => setShowAll(true)}
            className="bg-[#7A2C00] text-white text-[14px] py-2 px-6 rounded-full font-medium w-full"
          >
            Read More
          </button>
        )}
      </div>
    </div>
  );
}

export default Testimoni;
