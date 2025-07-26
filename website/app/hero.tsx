export function Hero() {

    return (
        <section
            className={"mx-auto flex w-full max-w-7xl flex-col items-center justify-center gap-14 overflow-hidden px-0.5 pb-12 pt-8 max-lg:px-4 lg:gap-16 lg:pb-24 lg:pt-14"}>

            <div className="hero-content text-center">
                <div className="max-w-lg">
                    <h1
                        className="font-title text-center text-[clamp(1.5rem,3.5vw,4rem)] leading-[1.1] [word-break:auto-phrase]"
                    >
                        <div className="font-black text-center">
                            Hide ESN job offers
                        </div>
                    </h1>
                    <div className="h-4"></div>
                    <p
                        className="text-base-content/70 font-title py-4 font-light [text-wrap:balance] md:text-lg xl:text-2xl"
                    >
                       {/* A cleaner job search — without ESNs in the way.*/}
                    </p>
                    <p className="text-lg md:text-xl xl:text-2xl text-base-content/70 font-title py-4 font-normal [text-wrap:balance]">
                        Skip the ESN noise. Clean your job search with a dev-made extension that filters out IT consultancies.
                    </p>

                    <div className={"mx-2 flex w-full items-center justify-center"}>
                        <div className={"flex flex-wrap gap-2"}>
                            <button className="btn btn-primary btn-wide">Try it Now</button>
                            <button className="btn btn-neutral btn-wide">Watch Demo 🎥</button>
                        </div>
                    </div>

                    <div className={"my-8 "}>
                        <div className="text-base-secondary text-base">
                            Used and loved by <span className="font-medium text-base-content">5,000+</span> professionals
                        </div>
                        <div className={"flex justify-center"}>
                            <div className="avatar-group -space-x-6">
                                <div className="avatar">
                                    <div className="w-12">
                                        <img src="https://img.daisyui.com/images/profile/demo/batperson@192.webp"/>
                                    </div>
                                </div>
                                <div className="avatar">
                                    <div className="w-12">
                                        <img src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp"/>
                                    </div>
                                </div>
                                <div className="avatar">
                                    <div className="w-12">
                                        <img src="https://img.daisyui.com/images/profile/demo/averagebulk@192.webp"/>
                                    </div>
                                </div>
                                <div className="avatar">
                                    <div className="w-12">
                                        <img src="https://img.daisyui.com/images/profile/demo/wonderperson@192.webp"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="max-w-lg">


                </div>
            </div>
        </section>
    )
}

