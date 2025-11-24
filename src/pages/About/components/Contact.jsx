import React from "react";
import image111 from "../assets/imageAboutHero.png";
import { FiPhone } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { FaMapMarkerAlt } from "react-icons/fa";
import Button from "../../../shared/components/Button";

function Hero() {
    return (
        <section className="flex justify-center">
            <div className="flex flex-col items-center w-full max-w-[700px]  rounded-2xl overflow-hidden lg:hidden m-12">
                {/* === Contact Section === */}
                <div className="bg-[#474747] text-white px-4 py-10 flex flex-col gap-4 rounded-xl w-full">
                    <h2 className="font-DMsans text-lg font-bold">Come and connect with us</h2>
                    <div className="flex flex-col gap-3">
                        <div className="flex gap-3 items-center"><FiPhone />083129041912</div>
                        <div className="flex gap-3 items-center"><HiOutlineMail />nusantap@gmail.com</div>
                        <div className="flex gap-3 items-center"><FaMapMarkerAlt />Jl. SWK, Condongcatur, Depok, Sleman, Yogyakarta</div>
                    </div>
                    <div className="w-auto text-left">
                        <button className="bg-[#7A2C00] text-white py-1 px-12 rounded-full font-medium inline-block">
                            Contact Us
                        </button>
                    </div>


                </div>
            </div>
        </section>
    );
}

export default Hero;
