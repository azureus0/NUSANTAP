import React from 'react'
import Card from '../../../shared/components/Card';
import image from '../../../assets/images/Image.png';

function Services() {
  return (
    <div className='mt-[200px] h-[868px]'>
      <div>
        <h1 className='text-center font-Playfair text-[55px] font-medium'>APA KATA MEREKA</h1>
      </div>

      <div className='flex mt-10 justify-center gap-[24px]'>

        <div >
          <Card className="border-0 shadow-none bg-[#F9F9F7] w-[416px] h-[408px] flex justify-center items-center font-DMsans">
            <div className='w-[346px] h-[300px] '>
              <h1 className='text-[#AD343E] text-[24px] font-bold'>"Judul"</h1>
              <br></br>
              <p>Lorem ipsum dolor sit amet consectetur. In purus nisl lorem commodo ac in ornare enim. Vitae amet id felis commodo sem morbi pellentesque vitae odio.</p>
              <br></br>
              <hr className='text-[#DBDFD0] border-[1px]'></hr>
              <br></br>
              <div className='flex gap-[20px]'>
                <img src={image} alt="" className='w-[70px] h-[70px] rounded-full' />
                <div className='gap-3 mt-2'>
                  <h6 className='font-bold text-[16px]'>Anno</h6>
                  <p>Where</p>
                </div>
              </div>
            </div>

          </Card>
        </div>

        <div >
          <Card className="border-0 shadow-none bg-[#F9F9F7] w-[416px] h-[408px] flex justify-center items-center font-DMsans">
            <div className='w-[346px] h-[300px] '>
              <h1 className='text-[#AD343E] text-[24px] font-bold'>"Judul"</h1>
              <br></br>
              <p>Lorem ipsum dolor sit amet consectetur. In purus nisl lorem commodo ac in ornare enim. Vitae amet id felis commodo sem morbi pellentesque vitae odio.</p>
              <br></br>
              <hr className='text-[#DBDFD0] border-[1px]'></hr>
              <br></br>
              <div className='flex gap-[20px]'>
                <img src={image} alt="" className='w-[70px] h-[70px] rounded-full' />
                <div className='gap-3 mt-2'>
                  <h6 className='font-bold text-[16px]'>Akbar</h6>
                  <p>Where</p>
                </div>
              </div>
            </div>

          </Card>
        </div>

        <div >
          <Card className="border-0 shadow-none bg-[#F9F9F7] w-[416px] h-[408px] flex justify-center items-center font-DMsans">
            <div className='w-[346px] h-[300px] '>
              <h1 className='text-[#AD343E] text-[24px] font-bold'>"Judul"</h1>
              <br></br>
              <p>Lorem ipsum dolor sit amet consectetur. In purus nisl lorem commodo ac in ornare enim. Vitae amet id felis commodo sem morbi pellentesque vitae odio.</p>
              <br></br>
              <hr className='text-[#DBDFD0] border-[1px]'></hr>
              <br></br>
              <div className='flex gap-[20px]'>
                <img src={image} alt="" className='w-[70px] h-[70px] rounded-full' />
                <div className='gap-3 mt-2'>
                  <h6 className='font-bold text-[16px]'>Adi</h6>
                  <p>Where</p>
                </div>
              </div>
            </div>

          </Card>
        </div>
      </div>

    </div>
  )
}

export default Services
