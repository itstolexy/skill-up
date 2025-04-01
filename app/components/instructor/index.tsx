/* eslint-disable @next/next/no-img-element */
import React from "react";

const InstructorsSection = () => {
  return (
    <>
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
        <InstructorCard
          image="/images/suzan.svg"
          name="Suzy Daniels"
          role="Senior Marketing Manager"
          experience="10"
        />
        <InstructorCard
          image="/images/james.svg"
          name="James W. M"
          role="Senior Marketing Manager"
          experience="10"
        />
        <InstructorCard
          image="/images/robert.svg"
          name="Robert Fox"
          role="Software Developer"
          experience="15"
        />
        <InstructorCard
          image="/images/bolanle.svg"
          name="Bolanle Adams"
          role="Senior UX Strategist"
          experience="5"
        />
      </div>
      <div className="flex justify-center items-center mt-14">
        <button className="rounded-lg w-36 h-8 bg-[#FFE722] text-black text-xs mb-10">
          See all instructors
        </button>
      </div>
    </>
  );
};

interface InstructorCardProps {
  image: string;
  name: string;
  role: string;
  experience: string;
}

const InstructorCard = ({ image, name, role, experience }: InstructorCardProps) => {
  return (
    <div className="border border-[#FFE722] rounded-lg text-black bg-white mx-5 lg:mx-auto lg:w-[200px] mt-14">
      <img className="h-auto w-full lg:w-[200px]" src={image} alt={name} />
      <h3 className="ml-4 mt-4 text-sm font-bold">{name}</h3>
      <p className="ml-4 mt-2 text-xs font-light">{role}</p>
      <p className="mx-4 mt-2 text-xs font-light">Years of Exp. {experience}</p>
      <div className="flex flex-row my-2 justify-end mr-4">
        <img className="w-5 h-5" src="/images/f.svg" alt="facebook" />
        <img className="ml-2 w-5 h-5" src="/images/tw.svg" alt="twitter" />
        <img className="ml-2 w-5 h-5" src="/images/l.svg" alt="linkedin" />
      </div>
    </div>
  );
};

export default InstructorsSection;