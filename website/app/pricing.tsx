import React from "react";

export function Pricing() {
    return (
        <section className="mx-auto flex flex-col w-full max-w-7xl items-center justify-center gap-14 overflow-hidden px-0.5 pb-12 pt-8 max-lg:px-4 lg:gap-16 lg:pb-24 lg:pt-14">

        <div className={"flex basis-full"}>
             <p className="text-base-content/70 font-title py-4 font-light md:text-2xl">
                 Remove ESN job noise and found only job that realy matter
             </p>
         </div>


            <div className={"flex gap-2"}>
                <div className="card w-96 bg-base-100 shadow-sm">
                    <div className="card-body">
                        <span className="badge badge-xs badge-warning invisible">Basic</span>
                        <div className="flex justify-between">
                            <h2 className="text-3xl font-bold">Basic</h2>
                            <span className="text-xl">$29/mo</span>
                        </div>
                        <ul className="mt-6 flex flex-col gap-2 text-xs">
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg"
                                     className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24"
                                     stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                          d="M5 13l4 4L19 7"/>
                                </svg>
                                <span>High-resolution image generation</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg"
                                     className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24"
                                     stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                          d="M5 13l4 4L19 7"/>
                                </svg>
                                <span>Customizable style templates</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg"
                                     className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24"
                                     stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                          d="M5 13l4 4L19 7"/>
                                </svg>
                                <span>Batch processing capabilities</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg"
                                     className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24"
                                     stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                          d="M5 13l4 4L19 7"/>
                                </svg>
                                <span>AI-driven image enhancements</span>
                            </li>
                            <li className="opacity-50">
                                <svg xmlns="http://www.w3.org/2000/svg"
                                     className="size-4 me-2 inline-block text-base-content/50" fill="none"
                                     viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                          d="M5 13l4 4L19 7"/>
                                </svg>
                                <span className="line-through">Seamless cloud integration</span>
                            </li>
                            <li className="opacity-50">
                                <svg xmlns="http://www.w3.org/2000/svg"
                                     className="size-4 me-2 inline-block text-base-content/50" fill="none"
                                     viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                          d="M5 13l4 4L19 7"/>
                                </svg>
                                <span className="line-through">Real-time collaboration tools</span>
                            </li>
                        </ul>
                        <div className="mt-6">
                            <button className="btn btn-primary btn-block">Subscribe</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-sm">
                    <div className="card-body">
                        <span className="badge badge-xs badge-warning">Most Popular</span>
                        <div className="flex justify-between">
                            <h2 className="text-3xl font-bold">Premium</h2>
                            <span className="text-xl">$29/mo</span>
                        </div>
                        <ul className="mt-6 flex flex-col gap-2 text-xs">
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg"
                                     className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24"
                                     stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                          d="M5 13l4 4L19 7"/>
                                </svg>
                                <span>High-resolution image generation</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg"
                                     className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24"
                                     stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                          d="M5 13l4 4L19 7"/>
                                </svg>
                                <span>Customizable style templates</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg"
                                     className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24"
                                     stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                          d="M5 13l4 4L19 7"/>
                                </svg>
                                <span>Batch processing capabilities</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg"
                                     className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24"
                                     stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                          d="M5 13l4 4L19 7"/>
                                </svg>
                                <span>AI-driven image enhancements</span>
                            </li>
                            <li className="opacity-50">
                                <svg xmlns="http://www.w3.org/2000/svg"
                                     className="size-4 me-2 inline-block text-base-content/50" fill="none"
                                     viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                          d="M5 13l4 4L19 7"/>
                                </svg>
                                <span className="line-through">Seamless cloud integration</span>
                            </li>
                            <li className="opacity-50">
                                <svg xmlns="http://www.w3.org/2000/svg"
                                     className="size-4 me-2 inline-block text-base-content/50" fill="none"
                                     viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                          d="M5 13l4 4L19 7"/>
                                </svg>
                                <span className="line-through">Real-time collaboration tools</span>
                            </li>
                        </ul>
                        <div className="mt-6">
                            <button className="btn btn-primary btn-block">Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
