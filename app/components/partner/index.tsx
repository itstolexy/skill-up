/* eslint-disable @next/next/no-img-element */
import React from "react";

const PartnersSection = () => {
  return (
    <div
      id="slide"
      className="flex flex-col lg:flex-row lg:mt-20 mt-10 mx-auto"
    >
      <div className="flex flex-row">
        <img
          src="/images/1.svg"
          className="mr-14 mb-10"
          alt="invision"
          height="10px"
          width="10px"
        />
        <img
          src="/images/2.svg"
          className="mr-14 mb-10"
          alt="apple"
          height="10px"
          width="10px"
        />
        <img
          src="/images/3.svg"
          className="mr-14 mb-10"
          alt="google"
          height="30px"
          width="45px"
        />
        <img
          src="/images/4.svg"
          className="mr-14 mb-10"
          alt="meta"
          height="20px"
          width="55px"
        />
      </div>
      <div className="flex flex-row">
        <img
          src="/images/5.svg"
          className="mr-14 mb-10"
          alt="microsoft"
          height="40px"
          width="55px"
        />
        <img
          src="/images/6.svg"
          className="mr-14 mb-10"
          alt="ibm"
          height="20px"
          width="25px"
        />
        <img
          src="/images/7.svg"
          className="mr-14 mb-10"
          alt="logo"
          height="10px"
          width="10px"
        />
      </div>
    </div>
  );
};

export default PartnersSection;
