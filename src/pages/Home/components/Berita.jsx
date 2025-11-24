import React from 'react';
import Button from '../../../shared/components/Button';
import CardIMG from '../../../shared/components/CardIMG';
import Anak from '../assets/images/Anak.png';

function Berita() {
  return (
    <div className='h-[1149px] bg-[#F9F9F7] flex justify-center items-center ' >
      <div className='h-[860px] w-[1296px] mt-[120px] '>
        <div className='flex justify-between'>
          <div >
            <h1 className='font-Playfair text-[55px] font-medium'>Berita & Artikel Terbaru</h1>
          </div>

          <div>
            <Button className="px-[32px] py-[20px] whitespace-nowrap font-DMsansBold text-[16px] bg-[#7A2E11] text-[#FFFFFF] border-2 transition hover:bg-transparent hover:text-[#7A2E11]">
              Read All News
            </Button>
          </div>
        </div>

        <div className='mt-[64px] flex gap-4' >
          <div>
            <CardIMG
              className="w-[636px] h-[732px]"                 // atur container card
              src={Anak}
              imgClassName="w-full h-[456px]"
              tanggal="September 20 ,2025"
              tanggalClassName="text-[16px] font-[500] text-[#737865]"
              title="Judul Berita"
              titleClassName="text-[20px] text-[#2C2F24] font-[500px] " // atur style judul
              text="Lorem ipsum dolor sit amet consectetur of a adipiscing elitilmim semper adipiscing massa gravida nisi cras enim quis nibholm varius amet gravida ut facilisis neque egestas."
              textClassName="text-[16px] font-[400px] text-[#2C2F24] "  // atur style isi text
            />
          </div>

          <div>
            <div className='flex flex-col justify-between h-[732px] '>

              <CardIMG
                className="w-[306px] h-[354px]"                 // atur container card
                src={Anak}
                imgClassName="w-full h-[200px]"
                tanggal="September 20 ,2025"
                tanggalClassName="text-[16px] font-[500] text-[#737865]"
                title="Judul Berita"
                titleClassName="text-[20px] text-[#2C2F24] font-[500px] " // atur style judul

              />
              <CardIMG
                className="w-[306px] h-[354px]"                 // atur container card
                src={Anak}
                imgClassName="w-full h-[200px]"
                tanggal="September 20 ,2025"
                tanggalClassName="text-[16px] font-[500] text-[#737865]"
                title="Judul Berita"
                titleClassName="text-[20px] text-[#2C2F24] font-[500px] " // atur style judul

              />
            </div>



          </div>

          <div>
            <div className='flex flex-col justify-between h-[732px] '>

              <CardIMG
                className="w-[306px] h-[354px]"                 // atur container card
                src={Anak}
                imgClassName="w-full h-[200px]"
                tanggal="September 20 ,2025"
                tanggalClassName="text-[16px] font-[500] text-[#737865]"
                title="Judul Berita"
                titleClassName="text-[20px] text-[#2C2F24] font-[500px] " // atur style judul

              />
              <CardIMG
                className="w-[306px] h-[354px]"                 // atur container card
                src={Anak}
                imgClassName="w-full h-[200px]"
                tanggal="September 20 ,2025"
                tanggalClassName="text-[16px] font-[500] text-[#737865]"
                title="Judul Berita"
                titleClassName="text-[20px] text-[#2C2F24] font-[500px] " // atur style judul

              />
            </div>



          </div>
        </div>
      </div>
    </div>
  )
}

export default Berita
