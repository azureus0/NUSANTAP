import ElderlyHousing from "../assets/icons/ElderlyHousing.svg";
import CommunityShelter from "../assets/icons/CommunityShelter.svg";
import Orphanages from "../assets/icons/Orphanages.svg";
import StreetKids from "../assets/icons/StreetKids.svg";

function WhoApply() {
  const items = [
    { icon: ElderlyHousing, label: "Elderly Housing" },
    { icon: Orphanages, label: "Orphanages" },
    { icon: StreetKids, label: "Street Kids" },
    { icon: CommunityShelter, label: "Community Shelter" }
  ];

  return (
    <section className="flex flex-col min-h-[70vh]">
      {/* Bagian atas */}
      <div className="hidden md:flex justify-center items-center py-8">
        <h1 className="text-3xl font-bold ">Who Can Apply?</h1>
      </div>

      {/* Bagian tengah */}
      <div className="bg-[#474747] w-full p-16 md:py-0">
        <h1 className="flex md:hidden text-3xl font-bold text-[#fff] justify-center items-center">Who Can Apply?</h1>
        <div className="flex flex-col md:flex-row p-10 mx-auto items-stretch justify-between md:gap-0 gap-10 max-w-[1300px]">
          {items.map((item, index) => (
            <div key={index} className="flex flex-col items-center gap-3 text-white flex-1">
              <img src={item.icon} alt={item.label} className="aspect-square w-full max-w-[160px] md:max-w-[100px]" />
              <p className="mt-2 text-center">{item.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Bagian bawah – yang menyeimbangkan */}
      <div className="flex-1" />
    </section>



  );
}

export default WhoApply;
