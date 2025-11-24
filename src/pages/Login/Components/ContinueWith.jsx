import React from 'react'
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { IoLogoApple } from "react-icons/io5";
function ContinueWith() {
  return (
    <div className="w-[717px]  mt-[10px] flex flex-col items-center">
              <span>Or Continue with</span>
              <div className="flex gap-[20px] mt-[10px]">
                <button>
                  <FaFacebook className="text-[35px]" />
                </button>
                <button>
                  <IoLogoApple className="text-[35px]" />
                </button>
                <button>
                  <FcGoogle className="text-[35px]" />
                </button>
              </div>
            </div>
  )
}

export default ContinueWith