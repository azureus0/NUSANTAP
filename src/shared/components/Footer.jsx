import React from 'react'
import Nusantap from '../../assets/logo/Nusantap1.png';
import Anime1 from '../../assets/images/Anime1.png'
import Anime2 from '../../assets/images/Anime2.png'
import Anime3 from '../../assets/images/Anime3.png'
import Anime4 from '../../assets/images/Anime4.png'
import Logo from '../../assets/logo/logo.png'
import { FiPhone } from "react-icons/fi";
import Card from './Card';
import { FaInstagram } from "react-icons/fa6";
import { RiTwitterXLine } from "react-icons/ri";
import { FaFacebookF } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <div className='flex bg-[#474747] h-[778px] justify-center items-center'>
      <div className='w-[1296px] h-[573px] flex flex-col justify-between'>
        <div className=' flex justify-between'>
          <div className=' flex flex-col justify-between w-[293px] h-[246px]'>
            <div className='flex gap-3 items-center'>
              <img src={Logo} alt="Logo" className="w-[43px] h-[55px]" />
              <img src={Nusantap} alt="Nusantap Logo" className="h-[43px] mt-2" />
            </div>
            <div className='font-DMsans text-[#ADB29E]'>
              <p>Lorem ipsum dolor sit amet consectetur. Congue penatibus luctus rutrum in pharetra ut massa. Sed sed tellus amet ut massa nisl morbi.</p>
            </div>
            <div className='font-DMsans text-white flex'>
              <div className='flex gap-2 mr-25'>
                <div className='h-6 w-6 rounded-full bg-[#7A2E11]'>
                  <FaInstagram className='text-white mt-1 ml-1' />
                </div>
                <div className='h-6 w-6 rounded-full bg-[#7A2E11]'>
                  <RiTwitterXLine className='text-white mt-1 ml-1' />
                </div>
                <div className='h-6 w-6 rounded-full bg-[#7A2E11]'>
                  <FaFacebookF className='text-white mt-1 ml-1' />
                </div>
                <div className='h-6 w-6 rounded-full bg-[#7A2E11]'>
                  <FaGithub className='text-white mt-1 ml-1' />
                </div>
              </div>
            </div>

          </div>
          <div className='flex  justify-between  w-[330px] h-[352px]'>
            <div className='font-DMsans'>
              <h6 className='text-[16px] font-[700px] font-DMsansBold  text-white'>Pages</h6>

              <div className='mt-10 flex flex-col gap-[20px] text-[#DBDFD0]'>
                <h5 className='text-[16px]'>Home</h5>
                <h5 className='text-[16px]'>About</h5>
                <h5 className='text-[16px]'>Menu</h5>
                <h5 className='text-[16px]'>Pricing</h5>
                <h5 className='text-[16px]'>Blog</h5>
                <h5 className='text-[16px]'>Contact</h5>
                <h5 className='text-[16px]'>Delivery</h5>
              </div>
            </div>

            <div className='font-DMsans'>
              <h6 className='text-[16px] font-[700px] font-DMsansBold text-white'>Utility Pages</h6>

              <div className='mt-10 flex flex-col gap-[20px] text-[#DBDFD0]'>
                <h5 className='text-[16px]'>Start Here</h5>
                <h5 className='text-[16px]'>Styleguide</h5>
                <h5 className='text-[16px]'>404 Not Found</h5>
                <h5 className='text-[16px]'>Password Protected</h5>
                <h5 className='text-[16px]'>Licenses</h5>
                <h5 className='text-[16px]'>Changelog</h5>
                <h5 className='text-[16px]'>Viewmore</h5>
              </div>

            </div>
          </div>
          <div className='w-[403px] h-[419px] flex flex-col justify-between font-DMsansBold '>
            <div>
              <h6 className='text-[16px] font-[700px]   text-white'>Follow Us On Instagram</h6>
            </div>
            <div className='flex flex-col h-[355px] gap-3'>
              <div className='flex gap-3'>
                <Card className="w-[194px] bg-cover bg-center border-0 h-[170px] "
                  style={{ backgroundImage: ` url(${Anime1})` }}>
                </Card>
                <Card className="w-[194px] bg-cover bg-center border-0 h-[170px] "
                  style={{ backgroundImage: ` url(${Anime3})` }}>
                </Card>
              </div>
              <div className='flex gap-3'>
                <Card className="w-[194px] bg-cover bg-center border-0 h-[170px] "
                  style={{ backgroundImage: ` url(${Anime4})` }}>
                </Card>
                <Card className="w-[194px] bg-cover bg-center border-0 h-[170px] "
                  style={{ backgroundImage: ` url(${Anime2})` }}>
                </Card>
              </div>
            </div>

          </div>
        </div>

        <div>


        </div>

        <div className='font-DMsans text-[#ADB29E] text-center'>
          <p>Copyright © 2025 Hashtag Developer. All Rights Reserved</p>
        </div>
      </div>

    </div>
  )
}
