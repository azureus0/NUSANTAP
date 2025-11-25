import React from "react";
import CardNews from "../../../shared/components/CardNews";
import ImgArticles from "../assets/images/ImgArticles.jpg";

function Articles() {
    const newsData = [
        {
            image: ImgArticles,
            date: "September 20, 2025",
            title: "When Sharing Becomes a Habit of Care",
            excerpt: "Every meal shared through Nusantap carries more than just nutrition..."
        },
        {
            image: ImgArticles,
            date: "September 20, 2025",
            title: "Feeding Hearts, Not Just Stomachs",
            excerpt: "What started as simple distribution has grown into a movement..."
        },
        {
            image: ImgArticles,
            date: "September 20, 2025",
            title: "Nusantap: A Simple Way to End Hunger Together",
            excerpt: "Connecting volunteers, donors, and families across Indonesia..."
        },
        {
            image: ImgArticles,
            date: "September 20, 2025",
            title: "Small Actions, Big Impact: The Power of Giving",
            excerpt: "Even a single portion can change someone’s day for the better..."
        },
        {
            image: ImgArticles,
            date: "September 20, 2025",
            title: "How Food Can Build Stronger Communities",
            excerpt: "Food has always been a symbol of unity, especially in Nusantara..."
        },
        {
            image: ImgArticles,
            date: "September 20, 2025",
            title: "Creating Sustainable Solutions Against Hunger",
            excerpt: "Through consistent efforts, Nusantap aims to provide long-term support..."
        },
        {
            image: ImgArticles,
            date: "September 20, 2025",
            title: "Spreading Hope Through Every Meal",
            excerpt: "Each contribution holds the potential to uplift lives..."
        },
        {
            image: ImgArticles,
            date: "September 20, 2025",
            title: "The Story Behind Our Movement to End Hunger",
            excerpt: "It started with a simple mission and grew into a nationwide effort..."
        },
    ];

    return (
        <section className="mt-[70px] md:mt-[110px] px-4 md:px-8 md:py-20">
            <div className="max-w-[1200px] mx-auto">
                <h1 className="text-3xl md:text-5xl lg:text-6xl text-center mb-6 font-semibold md:font-normal font-Playfair">
                    Our Blog & Articles
                </h1>
                <p className="text-center text-[#667085] max-w-[650px] mx-auto mb-10">
                    We consider all the drivers of change gives you the components you need
                    to change to create a truly happens.
                </p>

                {/* Grid Card News */}
                <div
                    className="
                        grid
                        grid-cols-[repeat(auto-fit,minmax(250px,1fr))]
                        gap-6
                        justify-items-center
                    "
                >
                    {newsData.map((item, index) => (
                        <CardNews
                            key={index}
                            type="small"
                            image={item.image}
                            date={item.date}
                            title={item.title}
                            excerpt={item.excerpt}
                        />
                    ))}
                </div>
                <button
                    // onClick={() => setShowAll(true)}
                    className="block md:hidden bg-[#7A2E11] text-white text-[14px] py-3 px-6 rounded-full font-medium w-full my-4"
                >
                    Read More
                </button>
            </div>
        </section>
    );
}

export default Articles;
