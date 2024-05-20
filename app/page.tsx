/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */

export default function Home() {
  return (
    <main className="">
      <div className="bg-[#773CD2] flex flex-row">
        <div className="text-white ml-[140px]">
          <h1 className="flex font-bold text-5xl w-[628px]">
            Unlock Your Potential with Cutting-Edge Tech Skills and access
            global opportunities
          </h1>
          <p className="font-normal text-sm mt-10 w-[628px]">
            Empower your future with our comprehensive tech skill learning
            platform. From programming languages to data science, web and app
            design to cloud computing, we've got you covered. Dive into hands-on
            projects, guided tutorials, and personalized learning paths curated
            by industry experts. Start your journey today and transform into the
            tech leader you're meant to be.
          </p>
          <div className="flex flex-row">
            <button className="flex bg-[#FFE722] w-[114px] h-12 mt-[74px] rounded-none justify-center text-black font-normal text-base">
              Explore courses
            </button>
            <button className="flex hover:bg-[#FFE722] justify-center w-[114px] h-12 mt-[74px] rounded-none ml-[20px] text-black font-normal text-base">
              Watch Video
            </button>
          </div>
        </div>

        <div className="flex">
          <img
          className=""
            src="/images/img1.png"
            alt="image1"
            height="309px"
            width="309px"
          />
          <img
          className=""
            src="/images/img2.png"
            alt="image1"
            height="309px"
            width="309px"
          />
          <img
          className=""
            src="/images/img3.png"
            alt="image1"
            height="309px"
            width="309px"
          />
          <img
          className=""
            src="/images/img4.png"
            alt="image1"
            height="309px"
            width="309px"
          />
        </div>
      </div>
    </main>
  );
}
