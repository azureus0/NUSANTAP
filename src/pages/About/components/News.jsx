import React from "react";
import ImgNews from "../assets/img/AnnualReport.jpg";

function News() {
    return (
        <section className="bg-[#F9F9F7]">
            <div className="flex flex-col gap-4 max-w-[450px] mx-auto p-4 ">
                {/* card 1 */}
                <div className="flex bg-white rounded-2xl overflow-hidden drop-shadow-xl aspect-square">
                    {/* LEFT CONTENT */}
                    <div className="w-[45%] p-4 flex flex-col justify-center">
                        <div className="flex-1"></div>
                        <div className="flex-1 justify-center">
                            <p className="text-sm text-gray-500 leading-tight font-medium">
                                September 20, 2024
                            </p>
                            <h3 className="font-DMsans text-lg font-bold mt-3 leading-snug">
                                Annual<br />Report 2024
                            </h3>
                        </div>

                    </div>
                    {/* RIGHT IMAGE */}
                    <div className="w-[55%] aspect-square overflow-hidden">
                        <img
                            src={ImgNews}
                            alt="news thumbnail"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                {/* card 2 */}
                <div className="flex bg-white rounded-2xl overflow-hidden shadow-2xl aspect-square">
                    {/* LEFT CONTENT */}
                    <div className="w-[45%] p-4 flex flex-col justify-center">
                        <div className="flex-1"></div>
                        <div className="flex-1 justify-center">
                            <p className="text-sm text-gray-500 leading-tight">
                                September 20, 2024
                            </p>
                            <h3 className="font-DMsans text-lg font-semibold mt-3 leading-snug">
                                Annual<br />Report 2024
                            </h3>
                        </div>

                    </div>
                    {/* RIGHT IMAGE */}
                    <div className="w-[55%] aspect-square overflow-hidden">
                        <img
                            src={ImgNews}
                            alt="news thumbnail"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                <button className="bg-[#7A2E11] text-[#fff] text-md py-2 px-6 rounded-full font-medium w-full border-2 border-transparent transition-all duration-300 hover:bg-transparent hover:text-[#7A2E11] hover:border-[#7A2E11]">
                    Read More
                </button>
            </div>



        </section>
    );
}

export default News;
