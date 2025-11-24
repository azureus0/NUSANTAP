import ButtonOrange from "../../../shared/components/ButtonOrange";
import HeroBg from "../../../assets/images/BgKids-1.jpg";

function Hero() {
    return (
        <section className="w-full aspect-square sm:h-screen sm:aspect-auto relative overflow-hidden mt-[65px] md:mt-[90px]">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${HeroBg})` }}
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-[#ED580099] opacity-80 z-10" />

            {/* Content */}
            <div className="relative z-20 flex flex-col justify-center items-center h-full px-0 md:px-6">
                <div className="max-w-[900px] w-full text-center text-white flex flex-col gap-4 items-center justify-center">
                    <h1 className="text-2xl md:text-7xl  font-bold">
                        Become Our Beneficiaries
                    </h1>
                    <p className="px-4 md:px-32 text-sm md:text-md">
                        Our beneficiaries comprised from various organizations and under-privileged communities such as orphanages, elderly housing, people with disabilities, refugee communities, and street children.
                    </p>

                    {/* Center tombol */}
                    <div className="flex justify-center items-center">
                        <ButtonOrange className="px-14 md:px-52 py-2 text-sm md:text-md">Register Now</ButtonOrange>
                    </div>
                </div>
            </div>

        </section>
    );
}

export default Hero;
