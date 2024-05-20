/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */

import Header from "./components/header";import { faGoogle, faInstagram, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";

export default function Home() {
  return (
    <>
      <div className="bg-[#773CD2]">
        <Header />
        <div className="flex flex-row mt-28">
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
              <button className="flex bg-[#FFE722]  h-8 mt-[74px] rounded justify-center text-black font-normal text-base">
                Explore courses
              </button>
              <button className="flex hover:bg-[#FFE722] justify-center w-[114px] h-8 mt-[74px] rounded ml-[20px] text-black font-normal text-base">
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
        {/* <div className="flex flex-row ml-[140px] mt-28">
          <img src="/images/1.png" className="mr-4" alt="invision" height={6} width={150} />
          <img src="/images/2.png" className="mr-4" alt="apple" height="40px" width="50px" />
          <img src="/images/3.png" className="mr-4" alt="" height={50} width={100} />
          <img src="/images/4.png" className="mr-4" alt="" height={50} width={100} />
          <img src="/images/5.png" className="mr-4" alt="" height={50} width={100} />
          <img src="/images/6.png" className="mr-4" alt="" height={50} width={100} />
          <img src="/images/7.png" className="mr-4" alt="" height={50} width={100} />
        </div> */}
      </div>
    </>
  );
}
