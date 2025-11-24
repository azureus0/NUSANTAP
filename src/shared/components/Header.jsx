import React from 'react'
import { FiPhone } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { FaInstagram } from "react-icons/fa6";
import { RiTwitterXLine } from "react-icons/ri";
import { FaFacebookF } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function Header() {
  return (
    <div className="bg-[#474747] flex p-2 justify-between" >

      <div className='flex ml-40 ml font-DMsans  text-white '>
        <FiPhone className=' size-4 m-1 ' />
        <span className='ml-1'>08123456789</span>
        <HiOutlineMail className='size-4 mt-1 ml-6' />
        <span className='ml-2'>apakek@gmail.com</span>
      </div>

      <div className='flex'>
        <div className='flex gap-2 mr-25'>
          <div className='h-6 w-6 rounded-full bg-[#838282]'>
            <FaInstagram className='text-white mt-1 ml-1' />
          </div>
          <div className='h-6 w-6 rounded-full bg-[#838282]'>
            <RiTwitterXLine className='text-white mt-1 ml-1' />
          </div>
          <div className='h-6 w-6 rounded-full bg-[#838282]'>
            <FaFacebookF className='text-white mt-1 ml-1' />
          </div>
          <div className='h-6 w-6 rounded-full bg-[#838282]'>
            <FaGithub className='text-white mt-1 ml-1' />
          </div>


        </div>

      </div>


    </div>
  )
}

export default Header
