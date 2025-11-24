import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import ImgSlider1 from "../assets/images/ImgSlider1.jpg";
import ImgSlider2 from "../assets/images/ImgSlider2.jpg";
import ImgSlider3 from "../assets/images/ImgSlider3.jpg";
import "./Testimoni.css";

function Testimoni() {
    const testimonials = [
        {
            quote:
                "We get additional nutrition from food and milk that Nusantap delivers. Thank you Nusantap and partners who contributed to Nusantap.",
            source: "– Orphanage",
            image: ImgSlider3,
        },
        {
            quote:
                "Because Nusantap, our children are very happy.",
            source: "– Orphanage",
            image: ImgSlider1,
        },
        {
            quote:
                "Because Nusantap, our children are very happy.",
            source: "– Orphanage",
            image: ImgSlider2,
        },
    ];

    return (
        <section className="bg-[#F9F9F7]">
            <div className="w-full mx-auto p-10 md:py-12 max-w-[1200px] ">
                <div className="">
                    <Swiper
                        modules={[Autoplay, Pagination]}
                        slidesPerView={1}
                        spaceBetween={4}
                        loop={true}
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 3000, disableOnInteraction: true }}
                        className="my-slider-beneficiaries w-full pb-6"
                    >
                        {testimonials.map((item, index) => (
                            <SwiperSlide key={index}>
                                <div className="relative w-full flex justify-center items-center">
                                    {/* Card dengan background */}
                                    <div
                                        className="w-full aspect-square md:aspect-[18/10] max-w-[1000px] rounded-2xl overflow-hidden relative"
                                        style={{
                                            backgroundImage: `url(${item.image})`,
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center',
                                        }}
                                    >
                                        {/* Overlay hitam 30% */}
                                        <div className="absolute inset-0 bg-[#2C2F24B2]/70 md:bg-black/50 z-10"></div>

                                        {/* Text Mobile - full center */}
                                        <div className="absolute inset-0 flex flex-col justify-start items-center px-10 py-14 z-20 md:hidden">
                                            <div className="text-left">
                                                <h2 className="text-3xl text-white font-bold pb-6 font-Playfair">what they say</h2>
                                                <blockquote className="text-sm text-white font-bold">
                                                    "{item.quote}"
                                                </blockquote>
                                                <p className="text-sm text-white">{item.source}</p>
                                            </div>
                                        </div>

                                        {/* Text Desktop - kanan bawah */}
                                        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 p-4 z-20 hidden md:block">
                                            <div className="text-left">
                                                <h2 className="text-4xl text-white font-medium font-Playfair">what they say</h2>
                                                <blockquote className="text-sm text-white font-bold">
                                                    "{item.quote}"
                                                </blockquote>
                                                <p className="text-sm text-white">{item.source}</p>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </SwiperSlide>

                        ))}
                    </Swiper>

                </div>
            </div>
        </section>

    );
}

export default Testimoni;
