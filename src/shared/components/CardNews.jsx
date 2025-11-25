export default function CardNews({ type = "small", image, date, title, excerpt }) {
    const isLarge = type === "large";

    return (
        <div
            className="
                w-full rounded-xl overflow-hidden shadow-md bg-white 
                flex flex-col transition-all duration-300 hover:shadow-lg
            "
        >
            <div
                className="w-full bg-cover bg-center aspect-[4/3]"
                style={{ backgroundImage: `url(${image})` }}
            />

            <div className="p-4 flex flex-col gap-2">
                <span className="text-sm text-[#6B6B6B]">{date}</span>
                <h3 className={`font-DMsans font-semibold ${isLarge ? "text-xl" : "text-lg"} line-clamp-2`}>
                    {title}
                </h3>
                {isLarge && (
                    <p className="text-sm text-[#474747] leading-relaxed line-clamp-3">
                        {excerpt}
                    </p>
                )}
            </div>
        </div>
    );
}
