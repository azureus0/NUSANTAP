import InformationSection from "../assets/InformationSection.png";

function Info() {
    const infoCards = [
        {
            title: "200+",
            desc: "Meals Rescued Monthly",
        },
        {
            title: "2025",
            desc: "Founded",
        },
        {
            title: "10+",
            desc: "Partner Restaurants",
        },
        {
            title: "100%",
            desc: "Shared with Community",
        },
    ];

    return (
        <section className="bg-[#F9F9F7] hidden lg:flex ">
            <div className="flex flex-row justify-center items-center gap-20 p-30 w-full max-w-[1300px] mx-auto">
                {/* Text Content */}
                <div className="flex-1 flex flex-col gap-6 items-start justify-center h-full">
                    <div>
                        <h1 className="font-Playfair text-5xl font-medium leading-tight">
                            A little information about Nusantap
                        </h1>
                        <p className="font-DMsans font-normal mt-4 text-md">
                            At Nusantap, we believe that food is not just about eating, but
                            also about sharing. We exist to give a second chance for meals
                            that are still good, turning them into meaningful support for
                            those who need it most. Together, we strive to reduce waste and
                            spread kindness in every portion.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-3 w-full">
                        {infoCards.map((card, idx) => (
                            <div
                                key={idx}
                                className="relative w-full aspect-[3/2] rounded-[12px] bg-white overflow-hidden border-2 border-[#DBDFD0]"
                            >
                                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                                    <h2 className="font-Playfair font-medium text-[55px]">
                                        {card.title}
                                    </h2>
                                    <p className="font-DMsans text-[14px] text-[#474747]">
                                        {card.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Image Content */}
                <div className="flex-1 relative h-full">
                    <div
                        className="w-full h-full rounded-2xl bg-cover bg-center"
                        style={{ backgroundImage: `url(${InformationSection})` }}
                    />
                </div>
            </div>
        </section>
    );
}

export default Info;
