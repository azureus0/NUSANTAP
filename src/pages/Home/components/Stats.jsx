import Card from "../../../shared/components/Card";

function Stats() {
    const stats = [
        { number: "200", label: "Food Donors" },
        { number: "123,456", label: "People Impacted" },
        { number: "1,234", label: "Tons of Food Rescued" },
    ];

    return (
        <section className="relative w-full font-DMsans text-[#2C2F24] flex flex-col items-center">
            {/* Wrapper agar card bisa overlap */}
            <div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-full flex flex-col items-center
                   -translate-y-[10%] lg:-translate-y-1/2 px-17 sm:px-20 md:px-32"
            >
                {/* === Mobile & Tablet: Single Combined Card === */}
                <Card className="bg-white text-center pt-6 sm:p-8 flex flex-col gap-4 lg:hidden
                         drop-shadow-md rounded-2xl w-full max-w-[700px]">
                    {stats.map((item, i) => (
                        <div key={i} className="flex flex-col justify-center items-center">
                            <h1 className="text-3xl sm:text-4xl font-bold">{item.number}</h1>
                            <p className="text-base sm:text-lg">{item.label}</p>
                        </div>
                    ))}
                </Card>

                {/* === Desktop (lg+): 3 Separate Square Cards === */}
                <div className="hidden lg:grid lg:grid-cols-3 gap-6 max-w-[1134px] w-full">
                    {stats.map((item, i) => (
                        <Card
                            key={i}
                            className="bg-white aspect-square flex flex-col justify-center items-center
                         rounded-2xl drop-shadow-md px-6 sm:px-10"
                        >
                            <h1
                                className="font-DMsans font-bold leading-none text-center"
                                style={{
                                    fontSize: "clamp(3rem, 6vw, 6rem)",
                                }}
                            >
                                {item.number}
                            </h1>
                            <p
                                className="text-center mt-2"
                                style={{
                                    fontSize: "clamp(1rem, 2vw, 1.25rem)",
                                }}
                            >
                                {item.label}
                            </p>
                        </Card>
                    ))}
                </div>
            </div>

            {/* Spacer bawah agar section cukup tinggi & tidak ketiban */}
            <div className="pb-[380px] lg:pb-[380px]" />
        </section>
    );
}

export default Stats;
