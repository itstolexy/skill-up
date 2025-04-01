/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="lg:flex lg:flex-row mt-20">
      <div className="text-white lg:mx-auto mx-5">
        <h1 className="font-bold text-2xl lg:w-[400px]">
          Unlock Your Potential with{" "}
          <span className="text-[#FFE722]">Cutting-Edge Tech Skills </span> and
          access global opportunities
        </h1>
        <p className="font-normal text-sm mt-10 lg:w-[400px]">
          Empower your future with our comprehensive tech skill learning
          platform. From programming languages to data science, web and app
          design to cloud computing, we&#39;ve got you covered. Dive into
          hands-on projects, guided tutorials, and personalized learning paths
          curated by industry experts. Start your journey today and transform
          into the tech leader you&#39;re meant to be.
        </p>
        <div className="lg:flex flex-row">
          <Link href="#courses">
            <button className="flex items-center bg-[#FFE722] lg:w-32 w-full h-8 lg:mt-[74px] mt-10 rounded justify-center text-black font-normal text-sm sm:mx-auto">
              Explore courses
            </button>
          </Link>
          <button className="flex items-center border border-black hover:bg-[#FFE722] border-solid sm:mx-auto justify-center w-full lg:w-32 h-8 mt-5 mb-5 lg:mt-[74px] rounded lg:ml-[20px] text-black font-normal text-sm sm:mt-10">
            Watch Video
          </button>
        </div>
      </div>
      <div className="flex flex-row lg:mr-auto mx-5">
        <div className="flex flex-col mx-auto lg:ml-[125px]">
          <div className="border-2 border-[#FFE722] rounded-lg">
            <img
              className="flex lg:h-[200px] lg:w-[200px] w-[170px]"
              src="/images/img1.png"
              alt="image1"
            />
          </div>
          <div className="border-2 border-[#FFE722] rounded-lg mt-3">
            <img
              className="flex lg:h-[200px] lg:w-[200px] w-[170px]"
              src="/images/img3.png"
              alt="image3"
            />
          </div>
        </div>
        <div className="flex flex-col ml-5 mr-auto lg:ml-[10px]">
          <div className="border-2 border-[#FFE722] rounded-lg">
            <img
              className="flex lg:h-[200px] lg:w-[200px] w-[170px]"
              src="/images/img2.png"
              alt="image2"
            />
          </div>
          <div className="border-2 border-[#FFE722] rounded-lg mt-3">
            <img
              className="flex lg:h-[200px] lg:w-[200px] w-[170px]"
              src="/images/img4.png"
              alt="image4"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
