/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Header from "./components/header";
import Footer from "./components/footer";
import Link from "next/link";

export default function Home() {
  return (
    <main className="">
      {/* PAGE 1 */}

      <div className="bg-[#773CD2]">
        <Header />
        <div className="lg:flex lg:flex-row mt-20">
          <div className="text-white lg:mx-auto mx-5">
            <h1 className="font-bold text-2xl lg:w-[400px]">
              Unlock Your Potential with{" "}
              <span className="text-[#FFE722]">Cutting-Edge Tech Skills </span>{" "}
              and access global opportunities
            </h1>
            <p className="font-normal text-sm mt-10 lg:w-[400px]">
              Empower your future with our comprehensive tech skill learning
              platform. From programming languages to data science, web and app
              design to cloud computing, we've got you covered. Dive into
              hands-on projects, guided tutorials, and personalized learning
              paths curated by industry experts. Start your journey today and
              transform into the tech leader you're meant to be.
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
              <div className=" border-2 border-[#FFE722] rounded-lg">
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
              <div className=" border-2 border-[#FFE722] rounded-lg">
                <img
                  className="flex lg:h-[200px] lg:w-[200px] w-[170px]"
                  src="/images/img2.png"
                  alt="image2"
                />
              </div>
              <div className=" border-2 border-[#FFE722] rounded-lg mt-3">
                <img
                  className="flex lg:h-[200px] lg:w-[200px] w-[170px]"
                  src="/images/img4.png"
                  alt="image4"
                />
              </div>
            </div>
          </div>
        </div>
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
      </div>

      {/* PAGE 2 */}

      <div className="mt-10 text-center mx-auto">
        <h2 className="text-center text-[#773cde] font-bold">Top Programs</h2>
        <p className=" font-bold text-lg text-black mt-6 mx-20">
          Explore our top programs to expand our career opportunities
        </p>

        <div className="text-black mt-14 lg:flex lg:flex-row justify-center">
          <div className="border border-[#773CD2] mt-5 lg:w-[250px] mx-5">
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
          <div className="border border-[#773CD2] lg:w-[250px] mt-5 lg:ml-10 mx-5">
            <img
              className="ml-2 mt-4"
              src="/images/mad.svg"
              alt="mad"
              height="16px"
              width="16px"
            />
            <span className="text-left">
              <h3 className="ml-2 mt-4 text-sm font-bold">
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
          <div className="border border-[#773CD2] mt-5 lg:w-[250px] mx-5 lg:ml-10">
            <img
              className="ml-2 mt-4"
              src="/images/vid.svg"
              alt="vid"
              height="16px"
              width="16px"
            />
            <span className="text-left">
              <h3 className="ml-4 lg:mt-4 mt-5 text-sm font-bold">
                Videography
              </h3>
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
        <div className="text-black lg:mt-10 mt-5 lg:flex lg:flex-row justify-center">
          <div className="border border-[#773CD2] mt-5 lg:w-[250px] mx-5">
            <img
              className="ml-4 mt-4"
              src="/images/ai.svg"
              alt="ai"
              height="16px"
              width="16px"
            />
            <span className="text-left">
              <h3 className="ml-4 mt-5 text-sm font-bold">
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
          <div className="border border-[#773CD2] lg:w-[250px] lg:ml-10 mx-5 mt-5">
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
          <div className="border border-[#773CD2] lg:w-[250px] mt-5 mx-5 lg:ml-10">
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
        <button className="text-center items-center justify-center rounded-lg w-36 h-8 bg-[#773cde] text-white text-xs mt-10">
          Explore all courses
        </button>
      </div>

      {/* PAGE 3 */}

      <div id="courses" className=" mt-20 text-center mx-auto">
        <h2 className="text-center text-[#773cde] font-bold">
          Popular Courses
        </h2>
        <p className=" font-bold text-lg text-black mt-6 lg:mx-auto mx-14 lg:w-[390px]">
          Access top-quality courses at unbeatable prices, taught by elite
          tutors from across the globe{" "}
        </p>
        <div className="mt-14 lg:flex lg:flex-row text-black text-left justify-center">
          <div className="border rounded-lg border-[#773CD2] mt-5 lg:w-[250px] lg:mr-5 mx-5">
            <img
              className="h-auto w-full lg:w-[200px] lg:mt-4 lg:ml-4"
              src="/images/p1.svg"
              alt="p1"
            />
            <h3 className="ml-4 mt-4 text-sm font-bold">
              Mastering Digital Innovation
            </h3>
            <p className="ml-4 mt-2 text-xs font-light">4.5⭐⭐⭐⭐⭐</p>
            <p className="mx-4 mt-4 text-xs font-light">
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
              <button className="flex ml-4 text-center items-center justify-center rounded-lg w-16 h-6 bg-[#773cde] text-white text-xs">
                Enroll
              </button>
              <p className="flex font-bold ml-20">$120.00</p>
            </div>
          </div>
          <div className="border rounded-lg border-[#773CD2] lg:w-[250px] lg:ml-10 mx-5 mt-5">
            <img
              className="h-auto w-full lg:w-[200px] lg:mt-4 lg:ml-4"
              src="/images/p2.svg"
              alt="p1"
            />
            <h3 className="ml-4 mt-4 text-sm font-bold">Mobile UI/UX Design</h3>
            <p className="ml-4 mt-2 text-xs font-light">4.5⭐⭐⭐⭐⭐</p>
            <p className="mx-4 mt-4 text-xs font-light">
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
              <button className="flex ml-4 text-center items-center justify-center rounded-lg w-16 h-6 bg-[#773cde] text-white text-xs">
                Enroll
              </button>
              <p className="flex font-bold ml-20">$70.00</p>
            </div>
          </div>
          <div className="border rounded-lg border-[#773CD2] lg:w-[250px] lg:ml-10 mx-5 mt-5">
            <img
              className="h-auto w-full lg:w-[200px] lg:mt-4 lg:ml-4"
              src="/images/p3.svg"
              alt="p3"
              height="200px"
              width="200px"
            />
            <h3 className="ml-4 mt-4 text-sm font-bold">
              Digital marketing funamentals
            </h3>
            <p className="ml-4 mt-2 text-xs font-light">4.5⭐⭐⭐⭐⭐</p>
            <p className="mx-4 mt-4 text-xs font-light">
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
              <button className="flex ml-4 text-center items-center justify-center rounded-lg w-16 h-6 bg-[#773cde] text-white text-xs">
                Enroll
              </button>
              <p className="flex font-bold ml-20">$50.00</p>
            </div>
          </div>
        </div>
        <button className="text-center items-center justify-center rounded-lg w-36 h-8 bg-[#773cde] text-white text-xs mt-10">
          Explore all courses
        </button>
      </div>

      {/* PAGE 4 */}

      <div id="about" className=" mt-14 text-center mx-auto text-black">
        <h2 className="text-center text-[#773cde] font-bold">Why Choose Us?</h2>
        <p className="font-bold text-lg text-black mt-5 mx-auto w-[390px]">
          From cutting-edge courses to expert-led instructions, empower yourself
          at <span className="text-[#773CD2]">Skill Up</span>
        </p>
        <div className="lg:flex lg:flex-row">
          <div className="mx-auto">
            <div className="lg:mx-auto flex flex-row justify-center">
              <img
                className=""
                src="/images/expert.svg"
                alt="ui"
                height="16px"
                width="16px"
              />
              <span className="text-left mt-14 ml-2">
                <h3 className="text-sm font-bold">Expert Instructors</h3>
                <p className="mt-2 text-xs w-64">
                  Learn from industry professionals and leading experts wth
                  hands-on experience in the latest technologies and trends
                </p>
              </span>
            </div>
            <div className="mx-auto flex flex-row justify-center">
              <img
                className=""
                src="/images/drivers.svg"
                alt="ui"
                height="16px"
                width="16px"
              />
              <span className="text-left mt-14 ml-2">
                <h3 className="text-sm font-bold">Divers Course Catalog</h3>
                <p className="mt-2 text-xs w-64">
                  Explore a wide range of courses covering everything from
                  programming languages and software development to
                  cybersecurity, etc.
                </p>
              </span>
            </div>
            <div className="mx-auto flex flex-row justify-center">
              <img
                className=""
                src="/images/career.svg"
                alt="ui"
                height="16px"
                width="16px"
              />
              <span className="text-left mt-14 ml-2">
                <h3 className="text-sm font-bold">
                  Career Advancement Support
                </h3>
                <p className="mt-2 text-xs w-64">
                  Access career resources, job placement assistance, and
                  networking opportunities to help you succeed in your tech
                  careerjourney
                </p>
              </span>
            </div>
          </div>

          {/* row */}

          <div className="mx-auto">
            <div className="flex flex-row justify-center">
              <img
                className=""
                src="/images/flexible.svg"
                alt="ui"
                height="16px"
                width="16px"
              />
              <span className="text-left mt-14 ml-2">
                <h3 className="text-sm font-bold">Flexible Learning Options</h3>
                <p className="mt-2 text-xs w-64">
                  From self-paced courses, live online classes, and personalized
                  learning paths to fit your schedule and learning preferences
                </p>
              </span>
            </div>
            <div className="flex flex-row justify-center">
              <img
                className=""
                src="/images/interactive.svg"
                alt="ui"
                height="16px"
                width="16px"
              />
              <span className="text-left mt-14 ml-2">
                <h3 className="text-sm font-bold">Interactive Learning</h3>
                <p className="mt-2 text-xs w-64">
                  Engage with interactive lessons, practical exercises. and
                  real-world projects to reinforce your understanding and skills
                </p>
              </span>
            </div>
            <div className="flex flex-row justify-center">
              <img
                className=""
                src="/images/online.svg"
                alt="ui"
                height="16px"
                width="16px"
              />
              <span className="text-left mt-14 ml-2">
                <h3 className="text-sm font-bold">Online Community</h3>
                <p className="mt-2 text-xs w-64">
                  Learn from industry professionals and leading experts wth
                  hands-on experience in the latest technologies and trends
                </p>
              </span>
            </div>
          </div>

          <div className="mt-10 mx-auto h-auto max-h-[380px] max-w-[380px]">
            <img className="lg:mx-auto" src="/images/choose.svg" alt="ui" />
          </div>
        </div>
        <button className="text-center items-center justify-center rounded-lg w-36 h-8 bg-[#773cde] text-white text-xs mb-10 mt-10">
          Get Started
        </button>
      </div>

      {/* PAGE 5 */}

      <div className="bg-[#773CD2]">
        <div className="mt-5">
          <div className="text-center text-white">
            <h2 className="text-center font-bold text-sm pt-7">
              Our Instructors
            </h2>
            <p className="mt-6 font-bold text-base">
              Meet our Team of Expert Instructors
            </p>
          </div>
        </div>
        <div className="lg:flex flex-row">
          <div className="border border-[#FFE722] rounded-lg text-black bg-white mx-5 lg:mx-auto lg:w-[200px] mt-14">
            <img
              className="h-auto w-full lg:w-[200px]"
              src="/images/suzan.svg"
              alt="p3"
            />
            <h3 className="ml-4 mt-4 text-sm font-bold">Suzy Daniels</h3>
            <p className="ml-4 mt-2 text-xs font-light">
              Senior Marketing Manager
            </p>
            <p className="mx-4 mt-2 text-xs font-light">Years of Exp. 10</p>
            <div className="flex flex-row my-2 justify-end mr-4">
              <img className="w-5 h-5" src="/images/f.svg" alt="facebook" />
              <img
                className="ml-2 w-5 h-5"
                src="/images/tw.svg"
                alt="twitter"
              />
              <img
                className="ml-2 w-5 h-5"
                src="/images/l.svg"
                alt="linkedin"
              />
            </div>
          </div>
          <div className="border border-[#FFE722] text-black bg-white rounded-lg mx-5 lg:mx-auto lg:w-[200px] mt-14">
            <img
              className="h-auto w-full lg:w-[200px]"
              src="/images/james.svg"
              alt="p3"
            />
            <h3 className="ml-4 mt-4 text-sm font-bold">James W. M</h3>
            <p className="ml-4 mt-2 text-xs font-light">
              Senior Marketing Manager
            </p>
            <p className="mx-4 mt-2 text-xs font-light">Years of Exp. 10</p>
            <div className="flex flex-row my-2 justify-end mr-4">
              <img className="w-5 h-5" src="/images/f.svg" alt="facebook" />
              <img
                className="ml-2 w-5 h-5"
                src="/images/tw.svg"
                alt="twitter"
              />
              <img
                className="ml-2 w-5 h-5"
                src="/images/l.svg"
                alt="linkedin"
              />
            </div>
          </div>
          <div className="border border-[#FFE722] text-black bg-white rounded-lg lg:mx-auto mx-5 lg:w-[200px] mt-14">
            <img
              className="h-auto w-full lg:w-[200px]"
              src="/images/robert.svg"
              alt="p3"
            />
            <h3 className="ml-4 mt-4 text-sm font-bold">Robert Fox</h3>
            <p className="ml-4 mt-2 text-xs font-light">Software Developer</p>
            <p className="mx-4 mt-2 text-xs font-light">Years of Exp. 15</p>
            <div className="flex flex-row my-2 justify-end mr-4">
              <img className="w-5 h-5" src="/images/f.svg" alt="facebook" />
              <img
                className="ml-2 w-5 h-5"
                src="/images/tw.svg"
                alt="twitter"
              />
              <img
                className="ml-2 w-5 h-5"
                src="/images/l.svg"
                alt="linkedin"
              />
            </div>
          </div>
          <div className="border border-[#FFE722] text-black bg-white rounded-lg lg:mx-auto mx-5 lg:w-[200px] mt-14">
            <img
              className="h-auto w-full lg:w-[200px]"
              src="/images/bolanle.svg"
              alt="p3"
            />
            <h3 className="ml-4 mt-4 text-sm font-bold">Bolanle Adams</h3>
            <p className="ml-4 mt-2 text-xs font-light">Senior UX Strategist</p>
            <p className="mx-4 mt-2 text-xs font-light">Years of Exp. 5</p>
            <div className="flex flex-row my-2 justify-end mr-4">
              <img className="w-5 h-5" src="/images/f.svg" alt="facebook" />
              <img
                className="ml-2 w-5 h-5"
                src="/images/tw.svg"
                alt="twitter"
              />
              <img
                className="ml-2 w-5 h-5"
                src="/images/l.svg"
                alt="linkedin"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center mt-14">
          <button className="rounded-lg w-36 h-8 bg-[#FFE722] text-black text-xs mb-10">
            See all instructors
          </button>
        </div>
      </div>

      {/* PAGE 6 */}

      <div id="testimonies" className="mt-10 text-center mx-auto">
        <h2 className="text-center text-[#773cde] font-bold">Testimonies</h2>
        <p className=" font-bold text-lg text-black mt-6 lg:w-[390px] lg:mx-auto mx-20">
          Listen to the success stories straight from our vibrant community of
          current and former students.
        </p>
      </div>
      <div className=" text-black">
        <div className="mx-auto lg:flex flex-row lg:justify-center mt-14">
          <div className="lg:flex flex-row border border-[#D5C3F7] lg:w-[280px] mx-5 mt-5">
            <div className="mx-2 mt-2 flex flex-row">
              <img
                className="flex h-auto w-auto max-h-[40px] max-w-[40px]"
                src="/images/tobi.svg"
                alt="tobi"
              />
              <span className="text-left ml-2">
                <h3 className="text-sm font-bold">Tola Daniel</h3>
                <p className="mt-2 text-xs font-light">Software Developer</p>
                <p className="mt-2">⭐⭐⭐⭐⭐</p>
                <p className="text-xs font-light mt-2">
                  “ The structured learning paths and hands-on projects have
                  significantly boosted my confidence in coding”.
                </p>
                <p className="text-[#773CDE] text-xs my-2">Read more</p>
              </span>
            </div>
          </div>
          <div className="flex flex-row border mt-5 border-[#D5C3F7] mx-5 lg:ml-10 lg:w-[280px]">
            <div className="mx-2 mt-2 flex flex-row">
              <img
                className="flex h-auto w-auto max-h-[40px] max-w-[40px]"
                src="/images/emily.svg"
                alt="emily"
              />
              <span className="text-left ml-2">
                <h3 className="text-sm font-bold">Emily Robert</h3>
                <p className="mt-2 text-xs font-light">Web Developer</p>
                <p className="mt-2">⭐⭐⭐⭐⭐</p>
                <p className="text-xs font-light mt-2">
                  "I've tried several online learning platforms, but Skill Up
                  stands out for its practical approach to learning”.
                </p>
                <p className="text-[#773CDE] text-xs my-2">Read more</p>
              </span>
            </div>
          </div>
          <div className="lg:ml-10 mx-5 flex flex-row border border-[#D5C3F7] mt-5 lg:w-[280px]">
            <div className="mx-2 mt-2 flex flex-row">
              <img
                className="flex h-auto w-auto max-h-[40px] max-w-[40px]"
                src="/images/alex.svg"
                alt="alex"
              />
              <span className="text-left ml-2">
                <h3 className="text-sm font-bold">Alex M.</h3>
                <p className="mt-2 text-xs font-light">Data Scientist</p>
                <p className="mt-2">⭐⭐⭐⭐⭐</p>
                <p className="text-xs font-light mt-2">
                  "Skill Up made learning tech skills feel like a breeze! The
                  interactive lessons and real-world examples helped me ...”
                </p>
                <p className="text-[#773CDE] text-xs my-2">Read more</p>
              </span>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center mt-10 mb-20">
          <button className="rounded-lg w-24 h-8 bg-white border text-[#773CDE] hover:bg-[#D5C3F7] border-[#773CDE] text-xs">
            Read all
          </button>
        </div>

        {/* PAGE 7 */}

        <div className="bg-[#773CDE] text-white">
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
        </div>
      </div>

      {/* PAGE 8 */}

      <div id="blog" className="mt-20 text-center mx-auto text-black">
        <h2 className="text-center text-[#773cde] font-bold">Blog</h2>
        <p className="font-bold text-lg text-black mt-6 lg:mx-auto mx-14 lg:w-[390px]">
          Stay ahead of the curve. Great insights, tips and tutorials from our
          blog
        </p>
      </div>

      <div className="mt-14 lg:flex lg:flex-row text-black text-left justify-center">
        <div className="border rounded-lg border-[#804bf5] lg:w-[250px] mx-5 mt-5">
          <img
            className="lg:mx-auto lg:mt-4 w-full lg:max-h-[200px] lg:max-w-[200px] lg:ml-4"
            src="/images/demy.svg"
            alt="demy"
          />
          <p className="ml-4 mt-2 border text-center border-[#773cde] text-[#773cde] text-xs font-light w-[140px]">
            Blockchain Technology
          </p>
          <h3 className="ml-4 mt-4 text-sm font-bold">
            Demystifying Blockchain: understanding its importance beyond
            cryptocurrency
          </h3>
          <p className="mx-4 mt-4 text-xs font-light">
            Discover how no-code development platforms are democratizing app
            creation and ....
          </p>
          <p className="text-[#773CDE] text-xs ml-4 my-4">Learn more &gt; </p>
        </div>
        <div className="border rounded-lg border-[#804bf5] lg:w-[250px] lg:ml-10 mx-5 mt-5">
          <img
            className="lg:mx-auto lg:mt-4 w-full lg:max-h-[200px] lg:max-w-[200px] lg:ml-4"
            src="/images/fro.svg"
            alt="fro"
          />
          <p className="ml-4 mt-2 border text-center border-[#773cde] text-[#773cde] text-xs font-light w-[140px]">
            Artificial Intelligence
          </p>
          <h3 className="ml-4 mt-4 text-sm font-bold">
            From AI to XR : Exploring emerging technologies shaping the future
            of tech
          </h3>
          <p className="mx-4 mt-4 text-xs font-light">
            Dive into the forefront of innovation with our exploration of AI,
            XR, and other cutting-edge technologies defining the future
            landscape
          </p>
          <p className="text-[#773CDE] text-xs ml-4 my-4">Learn more &gt; </p>
        </div>
        <div className="border rounded-lg border-[#804bf5] lg:w-[250px] lg:ml-10 mx-5 mt-5">
          <img
            className="lg:mx-auto lg:mt-4 w-full lg:max-h-[200px] lg:max-w-[200px] lg:ml-4"
            src="/images/emerge.svg"
            alt="emerge"
          />
          <p className="ml-4 mt-2 border text-center border-[#773cde] text-[#773cde] text-xs font-light w-[140px]">
            Product Design
          </p>
          <h3 className="ml-4 mt-4 text-sm font-bold">
            Emerging Design Trends in 2004: Discover the latest design frontiers
            shaping 2024 and beyond
          </h3>
          <p className="mx-4 mt-4 text-xs font-light">
            Explore innovative concepts, dynamic interfaces, and immersive
            experiences defiing..
          </p>
          <p className="text-[#773CDE] text-xs ml-4 my-4">Learn more &gt; </p>
        </div>
      </div>
      <div className="flex justify-center items-center mt-14">
        <button className="rounded-lg w-36 h-8 bg-[#773cde] text-white text-xs mb-10">
          Explore all articles
        </button>
      </div>
      <Footer />
    </main>
  );
}
