/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Header from "./components/header";

export default function Home() {
  return (
    <main className="mb-6">
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
              <button className="flex items-center bg-[#FFE722] w-32 h-8 mt-[74px] rounded justify-center text-black font-normal text-sm">
                Explore courses
              </button>
              <button className="flex items-center border border-black hover:bg-[#FFE722] border-solid justify-center w-32 h-8 mt-[74px] rounded ml-[20px] text-black font-normal text-sm">
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
                height={200}
                width={200}
              />
              <img
                className="flex mt-3"
                src="/images/img3.png"
                alt="image1"
                height={200}
                width={200}
              />
            </div>
            <div className="flex flex-col">
              <img
                className="flex mt-2"
                src="/images/img2.png"
                alt="image1"
                height={200}
                width={200}
              />
              <img
                className="flex mt-4"
                src="/images/img4.png"
                alt="image1"
                height={200}
                width={200}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-row ml-[140px] mt-16 justify-center mx-auto">
          <img
            src="/images/1.svg"
            className="mr-14 mb-10"
            alt="invision"
            height="15px"
            width="25px"
          />
          <img
            src="/images/2.svg"
            className="mr-14 mb-10"
            alt="apple"
            height="20px"
            width="20px"
          />
          <img
            src="/images/3.svg"
            className="mr-14 mb-10"
            alt="google"
            height="20px"
            width="45px"
          />
          <img
            src="/images/4.svg"
            className="mr-14 mb-10"
            alt="meta"
            height="20px"
            width="55px"
          />
          <img
            src="/images/5.svg"
            className="mr-14 mb-10"
            alt="logo"
            height="20px"
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
            height="20px"
            width="20px"
          />
        </div>
      </div>
      <div className="mt-10 text-center mx-auto">
        <h2 className="text-center text-[#773cde] font-bold">Top Programs</h2>
        <p className=" font-bold text-lg text-black mt-4">
          Explore our top programs to expand our career opportunities
        </p>

        <div className="text-black mt-14 flex flex-row">
          <div className="border border-[#773CD2] w-[250px] ml-[140px]">
            <img
              className="ml-4 mt-4"
              src="/images/ui.svg"
              alt="ui"
              height="16px"
              width="16px"
            />
            <span className="text-left">
              <h3 className="ml-4 mt-4 text-sm font-bold">UI/UX</h3>
              <p className="ml-4 mt-4 text-xs">
                Craft seamless digital experiences with our UI/UX courses.
              </p>
              <p className="text-[#773CDE] text-xs ml-4 my-4">
                Learn more &gt;{" "}
              </p>
            </span>
          </div>
          <div className="border border-[#773CD2] w-[250px] ml-[140px]">
            <img
              className="ml-4 mt-4"
              src="/images/mad.svg"
              alt="mad"
              height="16px"
              width="16px"
            />
            <span className="text-left">
              <h3 className="ml-4 mt-4 text-sm font-bold">
                Mobile App Devlopment
              </h3>
              <p className="ml-4 mt-4 text-xs">
                Master mobile app development & unleash your creativity on iOS &
                Android platforms
              </p>
              <p className="text-[#773CDE] text-xs ml-4 my-4">
                Learn more &gt;{" "}
              </p>
            </span>
          </div>
          <div className="border border-[#773CD2] w-[250px] ml-[140px]">
            <img
              className="ml-4 mt-4"
              src="/images/vid.svg"
              alt="vid"
              height="16px"
              width="16px"
            />
            <span className="text-left">
              <h3 className="ml-4 mt-4 text-sm font-bold">Videography</h3>
              <p className="ml-4 mt-4 text-xs">
                Cutting-edge videography lessons embracing the latest
                development
              </p>
              <p className="text-[#773CDE] text-xs ml-4 my-4">
                Learn more &gt;{" "}
              </p>
            </span>
          </div>
        </div>
        <div className="text-black mt-10 flex flex-row">
          <div className="border border-[#773CD2] w-[250px] ml-[140px]">
            <img
              className="ml-4 mt-4"
              src="/images/ai.svg"
              alt="ai"
              height="16px"
              width="16px"
            />
            <span className="text-left">
              <h3 className="ml-4 mt-4 text-sm font-bold">
                AI & Machine Learning
              </h3>
              <p className="ml-4 mt-4 text-xs">
                Unleash the power of AI & Machine learning with our expert-led
                courses
              </p>
              <p className="text-[#773CDE] text-xs ml-4 my-4">
                Learn more &gt;{" "}
              </p>
            </span>
          </div>
          <div className="border border-[#773CD2] w-[250px] ml-[140px]">
            <img
              className="ml-4 mt-4"
              src="/images/mar.svg"
              alt="mar"
              height="16px"
              width="16px"
            />
            <span className="text-left">
              <h3 className="ml-4 mt-4 text-sm font-bold">Digital Marketing</h3>
              <p className="ml-4 mt-4 text-xs">
                Dominate the digital landscape with our comprehensive courses.
              </p>
              <p className="text-[#773CDE] text-xs ml-4 my-4">
                Learn more &gt;{" "}
              </p>
            </span>
          </div>
          <div className="border border-[#773CD2] w-[250px] ml-[140px]">
            <img
              className="ml-4 mt-4"
              src="/images/iot.svg"
              alt="iot"
              height="16px"
              width="16px"
            />
            <span className="text-left">
              <h3 className="ml-4 mt-4 text-sm font-bold">
                Internet of Things (IoT)
              </h3>
              <p className="ml-4 mt-4 text-xs">
                Enter the realm of IoT innovation with our cutting-edge courses.
              </p>
              <p className="text-[#773CDE] text-xs ml-4 my-4">
                Learn more &gt;{" "}
              </p>
            </span>
          </div>
        </div>
        <button className="text-center items-center justify-center rounded-sm w-36 h-8 bg-[#773cde] text-white text-xs mt-10">
          Explore all courses
        </button>
      </div>

      {/* PAGE 3 */}

      <div className=" mt-20 text-center mx-auto">
        <h2 className="text-center text-[#773cde] font-bold">
          Popular Courses
        </h2>
        <p className=" font-bold text-lg text-black mt-6 mx-auto w-[390px]">
          Access top-quality courses at unbeatable prices, taught by elite
          tutors from across the globe{" "}
        </p>
        <div className="mt-14 flex flex-row text-black text-left">
          <div className="border border-[#773CD2] w-[250px] ml-[140px]">
            <img
              className="mx-auto mt-4"
              src="/images/p1.svg"
              alt="p1"
              height="200px"
              width="200px"
            />
            <h3 className="ml-4 mt-4 text-sm font-bold">
              Mastering Digital Innovation
            </h3>
            <p className="ml-4 mt-2 text-xs font-light">4.5⭐⭐⭐⭐⭐</p>
            <p className="ml-4 mt-4 text-xs font-light">
              Dive deeper into cutting-edge technologies & methodologies to stay
              ahead in today’s digital landscape.
            </p>
            <div className="flex flex-row">
              <img
                className="flex ml-4 mt-4"
                src="/images/t.svg"
                alt="t"
                height="40px"
                width="40px"
              />
              <span className="">
                <h3 className="ml-4 mt-4 text-xs font-bold">
                  Odusanya Omotola
                </h3>
                <p className="ml-4 mt-1 text-xs font-extralight">
                  Senior Software Developer
                </p>
              </span>
            </div>
            <div className="flex flex-row my-4">
              <button className="flex ml-4 text-center items-center justify-center rounded-sm w-16 h-6 bg-[#773cde] text-white text-xs">
                Enroll
              </button>
              <p className="flex font-bold ml-20">$120.00</p>
            </div>
          </div>
          <div className="border border-[#773CD2] w-[250px] ml-[140px]">
            <img
              className="mx-auto mt-4"
              src="/images/p2.svg"
              alt="p1"
              height="200px"
              width="200px"
            />
            <h3 className="ml-4 mt-4 text-sm font-bold">Mobile UI/UX Design</h3>
            <p className="ml-4 mt-2 text-xs font-light">4.5⭐⭐⭐⭐⭐</p>
            <p className="ml-4 mt-4 text-xs font-light">
              Elevate your skills in creating intuitive interfaces & compelling
              user experiences to drive user engagement & satisfaction.
            </p>
            <div className="flex flex-row">
              <img
                className="flex ml-4 mt-4"
                src="/images/e.svg"
                alt="e"
                height="40px"
                width="40px"
              />
              <span className="">
                <h3 className="ml-4 mt-4 text-xs font-bold">
                  Obinyere Joachim
                </h3>
                <p className="ml-4 mt-1 text-xs font-extralight">
                  Senior Product Designer
                </p>
              </span>
            </div>
            <div className="flex flex-row my-4">
              <button className="flex ml-4 text-center items-center justify-center rounded-sm w-16 h-6 bg-[#773cde] text-white text-xs">
                Enroll
              </button>
              <p className="flex font-bold ml-20">$70.00</p>
            </div>
          </div>
          <div className="border border-[#773CD2] w-[250px] ml-[140px]">
            <img
              className="mx-auto mt-4"
              src="/images/p3.svg"
              alt="p3"
              height="200px"
              width="200px"
            />
            <h3 className="ml-4 mt-4 text-sm font-bold">
              Digital marketing funamentals
            </h3>
            <p className="ml-4 mt-2 text-xs font-light">4.5⭐⭐⭐⭐⭐</p>
            <p className="ml-4 mt-4 text-xs font-light">
              Discover the essentials of digital marketing and elevate your
              online presence with our comprehensive fundamentals course.
            </p>
            <div className="flex flex-row">
              <img
                className="flex ml-4 mt-4"
                src="/images/s.svg"
                alt="t"
                height="40px"
                width="40px"
              />
              <span className="">
                <h3 className="ml-4 mt-4 text-xs font-bold">Suzy Daniels</h3>
                <p className="ml-4 mt-1 text-xs font-extralight">
                  Senior Marketing Manager
                </p>
              </span>
            </div>
            <div className="flex flex-row my-4">
              <button className="flex ml-4 text-center items-center justify-center rounded-sm w-16 h-6 bg-[#773cde] text-white text-xs">
                Enroll
              </button>
              <p className="flex font-bold ml-20">$50.00</p>
            </div>
          </div>
        </div>
        <button className="text-center items-center justify-center rounded-sm w-36 h-8 bg-[#773cde] text-white text-xs mt-10">
          Explore all courses
        </button>
      </div>
    </main>
  );
}
