import React from "react";
import Banner from "../../assets/website/orange-pattern.jpg";
import { BiSolidBellRing } from "react-icons/bi";

const BannerImg = {
    backgroundImage: `url(${Banner})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100%",
    width: "100%"
};
const Subscribe = () => {
    return (
        <div
            data-aos="zoom-in"
            className="mb-20 bg-gray-100 dark:bg-gray-800"
            style={BannerImg}
        >
            <div className="container py-10 backdrop-blur-sm">
                <div className="space-y-6 max-w-xl mx-auto">
                    <h1 className="text-2xl !text-center sm:text-left sm:text-4xl font-semibold">
                        Get Notified About New Products
                    </h1>
                    <div className="w-full flex items-center justify-center gap-3">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-96 p-3 border border-gray-300 rounded-full text-gray-900 focus:outline-2 focus:outline-primary"
                        />
                        <button className="p-3 bg-white text-gray-700 text-xl rounded-full hover:text-primary">
                            <BiSolidBellRing />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Subscribe;