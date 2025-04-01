/* eslint-disable @next/next/no-img-element */
import React from "react";

const CallToActionSection = () => {
  return (
    <div className="lg:flex lg:flex-row">
      <div className="lg:my-16 lg:mx-auto mx-20">
        <h3 className="text-lg font-bold lg:pt-0 pt-5">
          Ready to join us and elevate your career to new heights?
        </h3>
        <div className="flex flex-row lg:ml-28 mx-auto justify-center">
          <button className="flex items-center bg-[#FFE722] w-32 h-8 mt-[74px] rounded justify-center text-black font-normal text-sm">
            Get Started
          </button>
          <button className="flex items-center border border-white hover:bg-[#FFE722] border-solid justify-center w-32 h-8 mt-[74px] rounded ml-[20px] font-normal text-sm">
            Contact Us
          </button>
        </div>
      </div>

      <div className="lg:mx-auto mx-5 my-10 flex justify-center">
        <img
          className="flex h-auto justify-center w-auto lg:max-h-[260px] lg:max-w-[270px]"
          src="/images/ready.svg"
          alt="ready"
        />
      </div>
    </div>
  );
};

export default CallToActionSection;
