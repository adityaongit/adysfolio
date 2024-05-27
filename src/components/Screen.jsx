import React from "react";

const Screen = ({ src }) => {
    return (
        <div className="flex justify-center border-2 border-slate-200 rounded-xl">
            <div className="w-full  transition rounded-lg shadow-xl hover:shadow-2xl">
                {/* Browser UI */}
                <div className="flex items-center justify-between px-4 py-2 bg-gray-100 rounded-t-lg">
                    {/* Dots */}
                    <div className="flex w-12 space-x-1">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>{" "}
                        {/* Red dot */}
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>{" "}
                        {/* Yellow dot */}
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>{" "}
                        {/* Green dot */}
                    </div>
                    {/* Address bar */}
                    <div className="flex-grow min-w-0 mx-2 bg-white rounded-md md:mx-4">
                        <input
                            type="text"
                            className="w-full h-6 bg-gray-300 rounded-md text-center"
                            placeholder=""
                        />
                    </div>
                    {/* Arrow */}
                    <div className="mr-2">
                        <span className="w-4 h-4 text-gray-500">
                            {/* You can replace the svg content with an arrow icon */}
                            <svg
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                className="w-4 h-4"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                                ></path>
                            </svg>
                        </span>
                    </div>
                </div>
                {/* Browser Screen */}
                <div className="relative overflow-hidden bg-white rounded-b-lg">
                    {/* Content */}
                    <img
                        className="sm:h-32 w-full md:h-64 overflow-hidden items-center mx-auto"
                        src={src}
                        alt=""
                    />
                    {/* <Image src={src} width={500} height={300} /> */}
                </div>
            </div>
        </div>
    );
};

export default Screen;
