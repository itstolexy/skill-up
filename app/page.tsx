/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Header from "./components/header";

export default function Home() {
  return (
    <>
      <div className="bg-[#773CD2]">
        <Header />
        <div className="flex flex-row mt-20">
          <div className="text-white ml-[140px]">
            <h1 className="flex font-bold text-2xl w-[400px]">
              Unlock Your Potential with Cutting-Edge Tech Skills and access
              global opportunities
            </h1>
            <p className="font-normal text-sm mt-10 w-[400px]">
              Empower your future with our comprehensive tech skill learning
              platform. From programming languages to data science, web and app
              design to cloud computing, we've got you covered. Dive into
              hands-on projects, guided tutorials, and personalized learning
              paths curated by industry experts. Start your journey today and
              transform into the tech leader you're meant to be.
            </p>
            <div className="flex flex-row">
              <button className="flex items-center bg-[#FFE722]  h-8 mt-[74px] rounded justify-center text-black font-normal text-sm">
                Explore courses
              </button>
              <button className="flex items-center bg-[#FFE722] justify-center w-[114px] h-8 mt-[74px] rounded ml-[20px] text-black font-normal text-sm">
                Watch Video
              </button>
            </div>
          </div>
          <div className="flex mx-auto">
            <div className="flex flex-col ml-[125px]">
              <img
                className="flex mr-7"
                src="/images/img1.png"
                alt="image1"
                height={150}
                width={150}
              />
              <img
                className="flex mt-3"
                src="/images/img3.png"
                alt="image1"
                height={150}
                width={150}
              />
            </div>
            <div className="flex flex-col">
              <img
                className="flex mt-2"
                src="/images/img2.png"
                alt="image1"
                height={150}
                width={150}
              />
              <img
                className="flex mt-4"
                src="/images/img4.png"
                alt="image1"
                height={150}
                width={150}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-row ml-[140px] mt-16 justify-center mx-auto mb-auto">
          <img
            src="/images/1.svg"
            className="mr-14"
            alt="invision"
            height="15px"
            width="25px"
          />
          <img
            src="/images/2.svg"
            className="mr-14"
            alt="apple"
            height="20px"
            width="20px"
          />
          <img
            src="/images/3.svg"
            className="mr-14"
            alt="google"
            height="20px"
            width="45px"
          />
          <img
            src="/images/4.svg"
            className="mr-14"
            alt="meta"
            height="20px"
            width="55px"
          />
          <img
            src="/images/5.svg"
            className="mr-14"
            alt="logo"
            height="20px"
            width="55px"
          />
          <img
            src="/images/6.svg"
            className="mr-14"
            alt="ibm"
            height="20px"
            width="25px"
          />
          <img
            src="/images/7.svg"
            className="mr-14"
            alt="logo"
            height="20px"
            width="20px"
          />
        </div>
      </div>
    </>
  );
}
