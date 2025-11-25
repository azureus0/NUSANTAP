import React from 'react'

function Info() {
  return (
         <div className="h-[600px]  bg-[#F9F9F7] justify-center flex items-end font-DMsans">
            <div className="h-[134px] w-[769px] flex justify-between mb-[50px]">

                <div className="h-[80px] w-[300px] flex flex-col justify-between">
                  <h3 className="text-[26px] font-bold">Call us</h3>
                  <span className="text-[24px] font-bold text-[#AD343E]">+62 8132 9008 214</span>
                </div>
                <div className="h-[106px] w-[187px] flex flex-col justify-between">
                  <h3 className="text-[26px] font-bold">Hours</h3>
                  <span className="text-[18px] font-[400px]">Mon-Fri: 11am - 8pm Sat, Sun: 9am - 10pm</span>
                </div>
                <div className="h-[134px] w-[209px] flex flex-col justify-between">
                  <h3 className="text-[26px] font-bold">Our Location:</h3>
                  <span className="text-[18px] font-[400px] ">Jl. SWK, Condongcatur, Depok, Sleman, Yogyakarta</span>
                </div>


            </div>
      </div>
  )
}

export default Info