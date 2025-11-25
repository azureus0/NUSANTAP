import React from 'react';
import LogoNusantap from '../../assets/logo/LogoNusantapFullPutih.png';
import LogoNusantapColor from '../../assets/logo/LogoNusantapFullColor.png';
import Anime1 from '../../assets/images/Anime1.png';
import Anime2 from '../../assets/images/Anime2.png';
import Anime3 from '../../assets/images/Anime3.png';
import Anime4 from '../../assets/images/Anime4.png';
import { FaInstagram } from "react-icons/fa6";
import { RiTwitterXLine } from "react-icons/ri";
import { FaFacebookF, FaGithub } from "react-icons/fa";

export default function Footer() {
    const socialIcons = [
        { icon: FaInstagram, label: "Instagram" },
        { icon: RiTwitterXLine, label: "Twitter" },
        { icon: FaFacebookF, label: "Facebook" },
        { icon: FaGithub, label: "Github" },
    ];

    const pages = ['Sign In', 'Home', 'About', 'Beneficiaries', 'Contact Us', 'Report', 'News'];
    const utilityPages = ['A Blessing  to Share', 'Nusantap Kitchen', 'Nusantap Farm', 'Lunch Sharing', 'Emergency Food Relief'];

    let instagramImages = [Anime1, Anime3, Anime4, Anime2];
    if (instagramImages.length < 4) {
        while (instagramImages.length < 4) instagramImages.push(null);
    }

    return (
        <div className="bg-[#D9D9D9] text-white py-10 px-5 md:px-10 lg:px-20 font-DMsans">
            <div className="max-w-[1350px] mx-auto flex flex-col md:flex-row md:justify-between gap-10 lg:gap-20">

                {/* Left Section */}
                <div className="flex flex-col gap-3 flex-1 md:flex-[0.3] md:max-w-[360px]">
                    <div className="flex items-center gap-3">
                        <img
                            src={LogoNusantapColor}
                            alt="Nusantap Logo"
                            className="h-6 md:h-10 "
                        />
                    </div>

                    <p className="text-[#414536] text-sm md:text-base">
                        Lorem ipsum dolor sit amet consectetur. Congue penatibus luctus rutrum in pharetra ut massa. Sed sed tellus amet ut massa nisl morbi.
                    </p>
                    <div className="flex gap-3 mt-2">
                        {socialIcons.map(({ icon: Icon, label }, idx) => (
                            <div
                                key={idx}
                                aria-label={label}
                                className="h-8 w-8 rounded-full bg-[#C74819] flex items-center justify-center"
                            >
                                <Icon className="text-white" />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Middle Sections (Desktop only) */}
                <div className="hidden md:flex flex-row justify-between flex-[0.4] md:max-w-[360px]">
                    <div className="flex flex-col gap-4">
                        <h6 className="text-white font-bold text-[16px]">Pages</h6>
                        <div className="flex flex-col gap-2 text-[#DBDFD0]">
                            {pages.map((page, idx) => <span key={idx}>{page}</span>)}
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h6 className="text-white font-bold text-[16px]">Utility Pages</h6>
                        <div className="flex flex-col gap-2 text-[#DBDFD0]">
                            {utilityPages.map((page, idx) => <span key={idx}>{page}</span>)}
                        </div>
                    </div>
                </div>

                {/* Instagram Images */}
                <div className="flex flex-col gap-4 flex-1 md:flex-[0.3] md:max-w-[360px]">
                    <h6 className="text-[#2C2F24] font-DMsans font-bold text-[16px]">Follow Us On Instagram</h6>
                    <div className="grid grid-cols-2 gap-3">
                        {instagramImages.map((img, idx) => (
                            <div
                                key={idx}
                                className="relative w-full pb-[100%] rounded-[12px] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] overflow-hidden bg-gray-800"
                            >
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
            </div>

            {/* Bottom separator (mobile only) */}
            <div className="border-t border-[#414536] my-6 md:hidden w-2/3 mx-auto" />

            {/* Bottom Copyright */}
            <div className="text-[#2C2F24] text-left text-sm md:text-base">
                Copyright © 2025 Hashtag Developer. All Rights Reserved
            </div>
        </div>
    );
}
