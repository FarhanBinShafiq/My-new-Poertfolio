import React from 'react';

const Education = () => {
    return (
        <div className="bg-[#343a40]  min-h-screen  max-h-fit shadow-xl grid sm:grid-cols-1  md:grid-cols-1  lg:grid-cols-3 pl-20 pr-20 gap-6">


            <div></div>


            <div>
                <section >
                <h1 className="text-3xl text-blue-400 font-bold   uppercase">Education</h1>
                    <div class="container px-5 py-16 mx-auto flex flex-wrap">
                 
                        <div class="flex relative pt-10 pb-20 sm:items-center mx-auto">
                            <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
                                <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
                            </div>
                            <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">1</div>
                            <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                                <div class="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-12 h-12" viewBox="0 0 24 24">
                                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                                    </svg>
                                </div>
                                <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                                    <h2 class="font-medium title-font text-white mb-1 text-xl">North South University</h2>
                                    <p class="capitalize text-blue-400">Bachelor of Science in Computer Science and Engineering</p>
                                </div>
                            </div>
                        </div>
 

                        <div class="flex relative pb-10 sm:items-center   mx-auto">
                            <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
                                <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
                            </div>
                            <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">2</div>
                            <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                                <div class="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-12 h-12" viewBox="0 0 24 24">
                                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                                    </svg>
                                </div>
                                <div class=" sm:pl-6 mt-6 sm:mt-0">
                                    <h2 class="font-medium title-font text-white mb-1 text-2xl uppercase">cambrian school &  Collegeg</h2>
                                    <p class="capitalized text-blue-400">Higher Secondary School Certificate</p>
                                </div>
                            </div>
                        </div>
                        <div class="flex relative pb-10 sm:items-center  mx-auto">
                            <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
                                <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
                            </div>
                            <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">3</div>
                            <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                                <div class="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-12 h-12" viewBox="0 0 24 24">
                                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                                    </svg>
                                </div>
                                <div class=" sm:pl-6 mt-6 sm:mt-0">
                                    <h2 class="font-medium title-font text-white mb-1 text-2xl uppercase">Siraj Uddin sarker Vidyaniketon &  Collegeg</h2>
                                    <p class="capitalized text-blue-400">Secondary School Certificate</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>


            <div></div>

        </div>
    );
};

export default Education;