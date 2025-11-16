import imageAboutHero from '../assets/imageAboutHero.png';

function Hero() {
    return (
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-[90px] py-20 px-6 md:px-[152px]">
            <div className="relative w-[649px] h-[616px]">
                <div className="absolute top-0 left-0 flex bg-blue-100 rounded-xl overflow-hidden w-[599px] h-[566px]">
                    <img
                        className="object-cover w-[599px] h-[566px]"
                        alt="Image"
                        src={imageAboutHero}
                    />
                </div>
                <div className="absolute top-[295px] left-[238px] w-[411px] h-[321px] flex bg-[#474747] rounded-xl">
                    <div className="mt-[50px] w-[311px] h-[221px] ml-[50px] gap-[45px] inline-flex relative flex-col items-start">
                        <p className="relative w-fit mt-[-1.00px] font-headline-h3 font-[number:var(--headline-h3-font-weight)] text-neutral-01 text-[length:var(--headline-h3-font-size)] tracking-[var(--headline-h3-letter-spacing)] leading-[var(--headline-h3-line-height)] whitespace-nowrap [font-style:var(--headline-h3-font-style)]">
                            Come and connect with us
                        </p>
                        <div className="flex-col gap-[25px] inline-flex items-start relative flex-[0_0_auto]">
                            <div className="gap-5 inline-flex items-start relative flex-[0_0_auto]">
                                {/* <Phone className="!relative !w-6 !h-6" color="white" /> */}
                                <div className="relative w-fit mt-[-1.00px] font-body-16px-regular font-[number:var(--body-16px-regular-font-weight)] text-neutral-02 text-[length:var(--body-16px-regular-font-size)] tracking-[var(--body-16px-regular-letter-spacing)] leading-[var(--body-16px-regular-line-height)] whitespace-nowrap [font-style:var(--body-16px-regular-font-style)]">
                                    083129041912
                                </div>
                            </div>
                            <div className="gap-5 inline-flex items-start relative flex-[0_0_auto]">
                                {/* <Mail className="!relative !w-6 !h-6" color="white" /> */}
                                <div className="relative w-fit mt-[-1.00px] font-body-16px-regular font-[number:var(--body-16px-regular-font-weight)] text-neutral-02 text-[length:var(--body-16px-regular-font-size)] tracking-[var(--body-16px-regular-letter-spacing)] leading-[var(--body-16px-regular-line-height)] whitespace-nowrap [font-style:var(--body-16px-regular-font-style)]">
                                    nusantap@gmail.com
                                </div>
                            </div>
                            <div className="gap-5 inline-flex items-start relative flex-[0_0_auto]">
                                {/* <LocationMarker className="!relative !w-6 !h-6" color="white" /> */}
                                <p className="relative w-[267px] mt-[-1.00px] font-body-16px-regular font-[number:var(--body-16px-regular-font-weight)] text-neutral-02 text-[length:var(--body-16px-regular-font-size)] tracking-[var(--body-16px-regular-letter-spacing)] leading-[var(--body-16px-regular-line-height)] [font-style:var(--body-16px-regular-font-style)]">
                                    Jl. SWK, Condongcatur, Depok, Sleman, Yogyakarta
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="gap-10 flex-[0_0_auto] inline-flex relative flex-col items-start">
                <div className="inline-flex flex-col items-start gap-6 relative flex-[0_0_auto]">
                    <p className="font-Playfair font-medium text-[55px] leading-[65px] relative w-[557px] mt-[-1.00px] ">
                        We provide healthy food for all.
                    </p>
                    <p className="">
                        Nusantap is a platform that connects surplus yet edible meals with
                        people who need them most. We believe every dish carries value and
                        deserves to be shared, not wasted.
                    </p>
                    <p className="">
                        At place, we believe that dining is not just about food, but also
                        about the overall experience. Our staff, renowned for their warmth
                        and dedication, strives to make every visit an unforgettable event.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Hero;