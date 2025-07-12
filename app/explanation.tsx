"use client"
import SpotlightCard from "@/app/SpotlightCard";
import {ArrowRight, Filter, Globe, ShieldX} from "lucide-react";
import CountUp from "@/app/CountUp";
import React from "react";

const data = [
    {
        image: "/Chrome.png",
        title: "1. Install the Extension",
        description: "Add extension to your browser (Chrome or Firefox), it's super easy.",
    },
    {
        image: "/linkedin.jpg",
        title: "2. Search for job",
        description: "Open your favorite job search website.",
    },
    {
        image: "/great.png",
        title: "3. Found your dream job",
        description: "NoESN extension filter job offers, and help you to find your dream job.",
    }
];

export function Explanation() {

    const [withExtension, setWithExtension] = React.useState<boolean>(false);

    function handleToggleExtension(event: React.ChangeEvent<HTMLInputElement>) {
        if (event.target.checked) {
            setWithExtension(true);
        } else {
            setWithExtension(false);
        }
    }

    return (
        <>

            <section
                className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center gap-2 overflow-hidden px-0.5 pb-2 pt-8 max-lg:px-4 lg:gap-2 lg:pb-24 lg:pt-14">
                <div className="mx-auto w-72 text-start ">
                    <span className="text-base-content/70 inline-block -translate-y-2 -rotate-12">
                      Click
                    </span>
                    <svg
                        className="text-base-content/20 inline-block h-8 w-20 rtl:[transform:rotateY(180deg)]"
                        viewBox="0 0 45 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M1 1.50244C23.4 -1.69756 38.3333 11.1691 43 18.0024M43 18.0024L38 17.0024M43 18.0024V13.0024"
                            stroke="currentColor"
                        >
                        </path>
                    </svg>
                </div>
                <div className="flex justify-center pb-2">
                    <label className="flex cursor-pointer items-center gap-3">
                        Without NoESN Extension
                        <div className="relative">
                            <input
                                name="tailwind-va-daisyui"
                                type="checkbox"
                                className="toggle toggle-xl toggle-primary relative z-2"
                                checked={withExtension}
                                onChange={(e) => handleToggleExtension(e)}
                            />
                        </div>
                        With Extension (enabled)
                    </label>
                </div>

                <div className="flex flex-col items-center gap-6 xl:flex-row">
                    {withExtension ? (
                        <img className={"rounded-lg shadow-xl dark:shadow-gray-80"} src="/No-ESN-Linkeding.png"
                             alt="with ext"/>
                    ) : (

                        <img className={"rounded-lg shadow-xl dark:shadow-gray-800"} src="/ESN-linkeding.png"
                             alt="with ext"/>
                    )}
                </div>


            </section>
            <section
                className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center gap-14 overflow-hidden px-0.5 pb-12 pt-8 max-lg:px-4 lg:gap-16 lg:pb-24 lg:pt-14">
                <div
                    className="text-base-content/70 font-title relative z-2 py-4 font-light md:text-3xl"
                >
                    Skip the noise in 3 steps
                </div>

                <div className="flex flex-wrap justify-center gap-6 items-center">
                    {data.map((card, index) => (
                        <div key={card.title} className="flex items-center gap-4">
                            <SpotlightCard
                                className="custom-spotlight-card w-[360px] h-[400px] flex flex-col items-center justify-start gap-4 p-4"
                                spotlightColor="rgba(0, 229, 255, 0.2)"
                            >
                                <div className="w-full h-[200px] flex items-center justify-center">
                                    <img
                                        className="rounded-2xl object-cover w-full h-full"
                                        src={card.image}
                                        alt={card.title}
                                    />
                                </div>
                                <h3 className="text-lg font-semibold text-center">{card.title}</h3>
                                <p className="text-sm text-center text-gray-600">{card.description}</p>
                            </SpotlightCard>

                            {index < data.length - 1 && (
                                <ArrowRight className="w-6 h-6 text-gray-500"/>
                            )}
                        </div>
                    ))}
                </div>
            </section>
            <section
                className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center gap-14 overflow-hidden px-0.5 pb-12 pt-8 max-lg:px-4 lg:gap-16 lg:pb-24 lg:pt-14">

                <div className="text-2xl font-semibold text-center">

                </div>
                <div
                    className="text-base-content/70 font-title relative z-2 py-4 font-light md:text-3xl"
                >
                    ESN Filtering by the Numbers
                </div>

                <div className="stats shadow">

                    <div className="stat">
                        <div className="stat-figure text-primary">
                            <ShieldX className="h-8 w-8"/>
                        </div>
                        <div className="stat-title">ESNs Hidden</div>
                        <div className="stat-value text-primary">
                            <CountUp
                                from={0}
                                to={3200}
                                separator=","
                                direction="up"
                                duration={1}
                                className="count-up-text"
                            />+
                        </div>
                        <div className="stat-desc">Across major job boards</div>
                    </div>

                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <Globe className="h-8 w-8"/>
                        </div>
                        <div className="stat-title">Platforms Filtered</div>
                        <div className="stat-value text-secondary">
                            <CountUp
                                from={0}
                                to={7}
                                separator=","
                                direction="up"
                                duration={0.8}
                                className="count-up-text"
                            />
                        </div>
                        <div className="stat-desc">LinkedIn, Indeed, WTTJ, and more</div>
                    </div>

                    <div className="stat">
                        <div className="stat-figure text-accent">
                            <Filter className="h-8 w-8"/>
                        </div>
                        <div className="stat-title">Irrelevant Offers Removed</div>
                        <div className="stat-value text-accent">
                            <CountUp
                                from={35}
                                to={42}
                                separator=","
                                direction="up"
                                duration={0.8}
                                className="count-up-text"
                            />%
                        </div>
                        <div className="stat-desc">On average, per job search</div>
                    </div>

                </div>

            </section>
        </>
    );
}
