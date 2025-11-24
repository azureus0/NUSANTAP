import React from "react";
import Card from "../../../shared/components/Card";
import image111 from "../assets/images/image111.png";
import { FiPhone } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { FaMapMarkerAlt } from "react-icons/fa";
import Button from "../../../shared/components/Button";

function About() {
  return (
    <div className="mt-[500px] flex justify-center bg-[#F9F9F7] gap-[190px]">
      <div className=" flex h-[856px] bg-[#F9F9F7]">
        <div className="h-[649px] w-[615px]  mt-[60px] relative ">
          <div
            className="flex justify-end items-end h-[599px] w-[566px] rounded-[12px] ml-1 bg-cover bg-center"
            style={{ backgroundImage: ` url(${image111})` }}
          >
            <Card className=" font-DMsans absolute bottom-[-50px] right-[-50px] border-0 z-10 h-[321px] w-[411px] bg-[#474747]">
              <div className="m-5">
                <h1 className="text-[24px] text-white font-bold">
                  COME AND VISIT US
                </h1>
                <div className="flex flex-col gap-[25px]">
                  <div className="flex mt-[45px] text-white gap-[20px]">
                    <FiPhone className="mt-[3px]" /> 08124356789
                  </div>
                  <div className="flex  text-white gap-[20px]">
                    <HiOutlineMail className="mt-[3px]" /> Apakek@gmail.com
                  </div>
                  <div className="flex  text-white gap-[20px]">
                    <FaMapMarkerAlt className="mt-[3px]" /> Mana yaa
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>

      <div className="">
        <div className="w-[557px] h-[522px] mt-[160px] ">
          <h1 className="font-Playfair text-[55px] font-medium">
            Kenapa Nusantap? (ngmngin value lah pkknya)
          </h1>
          <p className="font-DMsans">
            Lorem ipsum dolor sit amet consectetur. Ipsum montes nullam nascetur
            elementum ut rhoncus. Eget pellentesque sed venenatis amet molestie
            habitant fringilla semper feugiat. Nunc malesuada lacus morbi leo
            elementum augue volutpat risus sagittis. Fermentum fermentum mauris
            ultrices amet vivamus blandit.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur. Vulputate varius facilisi
            massa ultricies. Vitae cursus etiam lacinia aliquam nisl non.
          </p>

          <div>
            <Button className="px-[32px] py-[20px] whitespace-nowrap font-DMsansBold text-[16px] text-[#2C2F24] border-2 transition hover:bg-[#2C2F24] hover:text-[#FFFFFF]">
              More About Us
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
