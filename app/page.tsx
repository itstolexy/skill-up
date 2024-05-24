/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Header from "./components/header";

export default function Home() {
  return (
    <main className="mb-6">
      {/* PAGE 1 */}

      <div className="bg-[#773CD2]">
        <Header />
        <div className="flex flex-row mt-20">
          <div className="text-white mx-auto">
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
        <div className="flex flex-row mt-16 justify-center mx-auto">
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

      {/* PAGE 2 */}

      <div className="mt-10 text-center mx-auto">
        <h2 className="text-center text-[#773cde] font-bold">Top Programs</h2>
        <p className=" font-bold text-lg text-black mt-6">
          Explore our top programs to expand our career opportunities
        </p>

        <div className="text-black mt-14 flex flex-row">
          <div className="border border-[#773CD2] w-[250px] mx-auto">
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
          <div className="border border-[#773CD2] w-[250px] mx-auto">
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
          <div className="border border-[#773CD2] w-[250px] mx-auto">
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
          <div className="border border-[#773CD2] w-[250px] mx-auto">
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
          <div className="border border-[#773CD2] w-[250px] mx-auto">
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
          <div className="border border-[#773CD2] w-[250px] mx-auto">
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
          <div className="border border-[#773CD2] w-[250px] mx-auto">
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
              <button className="flex ml-4 text-center items-center justify-center rounded-sm w-16 h-6 bg-[#773cde] text-white text-xs">
                Enroll
              </button>
              <p className="flex font-bold ml-20">$120.00</p>
            </div>
          </div>
          <div className="border border-[#773CD2] w-[250px] mx-auto">
            <img
              className="mx-auto mt-4"
              src="/images/p2.svg"
              alt="p1"
              height="200px"
              width="200px"
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
              <button className="flex ml-4 text-center items-center justify-center rounded-sm w-16 h-6 bg-[#773cde] text-white text-xs">
                Enroll
              </button>
              <p className="flex font-bold ml-20">$70.00</p>
            </div>
          </div>
          <div className="border border-[#773CD2] w-[250px] mx-auto">
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

      {/* PAGE 4 */}

      <div className=" mt-20 text-center mx-auto text-black">
        <h2 className="text-center text-[#773cde] font-bold">Why Choose Us?</h2>
        <p className=" font-bold text-lg text-black mt-6 mx-auto w-[390px]">
          From cutting-edge courses to expert-led instructions, empower yourself
          at <span className="text-[#773CD2]">Skill Up</span>
        </p>
        <div className="flex flex-row mt-6">
          <div className="mx-auto">
            <div className="mx-auto flex flex-row">
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
            <div className="mx-auto flex flex-row">
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
            <div className="mx-auto flex flex-row">
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
            <div className="flex flex-row">
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
            <div className="flex flex-row">
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
            <div className="flex flex-row">
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

          <div className="mt-10 mx-auto">
            <img
              className=""
              src="/images/choose.svg"
              alt="ui"
              height="380px"
              width="380px"
            />
          </div>
        </div>
        <button className="text-center items-center justify-center rounded-sm w-36 h-8 bg-[#773cde] text-white text-xs mb-10 mt-10">
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
        <div className="flex flex-row">
          <div className="border border-[#FFE722] text-black bg-white rounded-sm mx-auto w-[200px] mt-14">
            <img
              className=""
              src="/images/suzan.svg"
              alt="p3"
              height="200px"
              width="200px"
            />
            <h3 className="ml-4 mt-4 text-sm font-bold">Suzy Daniels</h3>
            <p className="ml-4 mt-2 text-xs font-light">
              Senior Marketing Manager
            </p>
            <p className="mx-4 mt-2 text-xs font-light">Years of Exp. 10</p>
            <img
              className=""
              src="/images/facebook.svg"
              alt="p3"
              height="24px"
              width="24px"
            />
          </div>
          <div className="border border-[#FFE722] text-black bg-white rounded-sm mx-auto w-[200px] mt-14">
            <img
              className=""
              src="/images/james.svg"
              alt="p3"
              height="200px"
              width="200px"
            />
            <h3 className="ml-4 mt-4 text-sm font-bold">James W. M</h3>
            <p className="ml-4 mt-2 text-xs font-light">
              Senior Marketing Manager
            </p>
            <p className="mx-4 mt-2 text-xs font-light">Years of Exp. 10</p>
            <img
              className=""
              src="/images/facebook.svg"
              alt="p3"
              height="24px"
              width="24px"
            />
          </div>
          <div className="border border-[#FFE722] text-black bg-white rounded-sm mx-auto w-[200px] mt-14">
            <img
              className=""
              src="/images/robert.svg"
              alt="p3"
              height="200px"
              width="200px"
            />
            <h3 className="ml-4 mt-4 text-sm font-bold">Robert Fox</h3>
            <p className="ml-4 mt-2 text-xs font-light">Software Developer</p>
            <p className="mx-4 mt-2 text-xs font-light">Years of Exp. 15</p>
            <img
              className=""
              src="/images/facebook.svg"
              alt="p3"
              height="24px"
              width="24px"
            />
          </div>
          <div className="border border-[#FFE722] text-black bg-white rounded-sm mx-auto w-[200px] mt-14">
            <img
              className=""
              src="/images/bolanle.svg"
              alt="p3"
              height="200px"
              width="200px"
            />
            <h3 className="ml-4 mt-4 text-sm font-bold">Bolanle Adams</h3>
            <p className="ml-4 mt-2 text-xs font-light">Senior UX Strategist</p>
            <p className="mx-4 mt-2 text-xs font-light">Years of Exp. 5</p>
            <img
              className=""
              src="/images/facebook.svg"
              alt="p3"
              height="24px"
              width="24px"
            />
          </div>
        </div>
        <div className="flex justify-center items-center mt-14">
          <button className="rounded-sm w-36 h-8 bg-[#FFE722] text-black text-xs mb-10">
            See all instructors
          </button>
        </div>
      </div>

      {/* PAGE 6 */}

      <div className="mt-10 text-center mx-auto">
        <h2 className="text-center text-[#773cde] font-bold">Testimonies</h2>
        <p className=" font-bold text-lg text-black mt-6 w-[390px] mx-auto">
          Listen to the success stories straight from our vibrant community of
          current and former students.
        </p>
      </div>
      <div className=" text-black">
        <div className="mx-auto flex flex-row mt-14">
          <div className="mx-auto flex flex-row border border-[#D5C3F7] w-[280px]">
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
          <div className="mx-auto flex flex-row border border-[#D5C3F7] w-[280px]">
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
          <div className="mx-auto flex flex-row border border-[#D5C3F7] w-[280px]">
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
          <button className="rounded-sm w-24 h-8 bg-white border text-[#773CDE] hover:bg-[#D5C3F7] border-[#773CDE] text-xs">
            Read all
          </button>
        </div>

        {/* PAGE 7 */}

        <div className="bg-[#773CDE] text-white">
          <div className="flex flex-row">
            <div className="my-16 mx-auto">
              <h3 className="text-lg font-bold">
                Ready to join us and elevate your career to new heights?
              </h3>
              <div className="flex flex-row ml-28">
                <button className="flex items-center bg-[#FFE722] w-32 h-8 mt-[74px] rounded justify-center text-black font-normal text-sm">
                  Get Started
                </button>
                <button className="flex items-center border border-white hover:bg-[#FFE722] border-solid justify-center w-32 h-8 mt-[74px] rounded ml-[20px] font-normal text-sm">
                  Contact Us
                </button>
              </div>
            </div>

            <div className="mx-auto my-10 ">
              <img
                className="flex h-auto w-auto max-h-[260px] max-w-[270px]"
                src="/images/ready.svg"
                alt="ready"
              />
            </div>
          </div>
        </div>
      </div>

      {/* PAGE 8 */}

      <div className=" mt-20 text-center mx-auto text-black">
        <h2 className="text-center text-[#773cde] font-bold">Blog</h2>
        <p className=" font-bold text-lg text-black mt-6 mx-auto w-[390px]">
          Stay ahead of the curve. Great insights, tips and tutorials from our
          blog
        </p>
      </div>

      <div className="mt-14 flex flex-row text-black text-left">
        <div className="border border-[#804bf5] w-[250px] mx-auto">
          <img
            className="mx-auto mt-4 h-auto w-auto max-h-[200px] max-w-[200px]"
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
        <div className="border border-[#804bf5] w-[250px] mx-auto">
          <img
            className="mx-auto mt-4 h-auto w-auto max-h-[200px] max-w-[200px]"
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
        <div className="border border-[#804bf5] w-[250px] mx-auto">
          <img
            className="mx-auto mt-4 h-auto w-auto max-h-[200px] max-w-[200px]"
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
        <button className="rounded-sm w-36 h-8 bg-[#773cde] text-white text-xs mb-10">
          Explore all articles
        </button>
      </div>
    </main>
  );
}
