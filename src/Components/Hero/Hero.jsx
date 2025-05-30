import React from "react";
import Lottie from "lottie-react";
import animationData from "../../animation/nnimation.json";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="py-50 px-4 max-w-7xl mx-auto text-gray-100 flex flex-col-reverse md:flex-row items-center gap-10">
      <div className="space-y-6 text-center md:text-left md:w-1/2">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-400">
          Courses – Learn Programming, Marketing & Graphic Design
        </h1>
        <p className="text-base sm:text-lg text-gray-400 leading-relaxed">
          Cursose is your go-to online platform for mastering programming, digital marketing, and graphic design. 
          Gain practical skills through expert-led courses, real-world projects, and flexible learning — anytime, anywhere. 
          Upgrade your future with in-demand knowledge today!
        </p>
        <Link href='/courses'>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition duration-300">
            Get Started
          </button>
        </Link>
      </div>

      <div className="w-full md:w-1/2 flex justify-center">
        <Lottie className="w-64 sm:w-80 md:w-96" animationData={animationData} loop={true} />
      </div>
    </div>
  );
};

export default Hero;
