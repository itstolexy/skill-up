/* eslint-disable @next/next/no-img-element */
import React from "react";

const WhyChooseUsSection = () => {
  return (
    <div id="about" className="mt-14 text-center mx-auto text-black">
      <h2 className="text-center text-[#773cde] font-bold">Why Choose Us?</h2>
      <p className="font-bold text-lg text-black mt-5 mx-14 lg:mx-auto lg:w-[390px] w-auto">
        From cutting-edge courses to expert-led instructions, empower yourself
        at <span className="text-[#773CD2]">Skill Up</span>
      </p>
      <div className="lg:flex lg:flex-row lg:justify-center">
        <div className="mx-5">
          <FeatureItem
            icon="/images/expert.svg"
            title="Expert Instructors"
            description="Learn from industry professionals and leading experts wth hands-on experience in the latest technologies and trends"
          />
          <FeatureItem
            icon="/images/drivers.svg"
            title="Divers Course Catalog"
            description="Explore a wide range of courses covering everything from programming languages and software development to cybersecurity, etc."
          />
          <FeatureItem
            icon="/images/career.svg"
            title="Career Advancement Support"
            description="Access career resources, job placement assistance, and networking opportunities to help you succeed in your tech careerjourney"
          />
        </div>

        <div className="mx-5 lg:mx-10">
          <FeatureItem
            icon="/images/flexible.svg"
            title="Flexible Learning Options"
            description="From self-paced courses, live online classes, and personalized learning paths to fit your schedule and learning preferences"
          />
          <FeatureItem
            icon="/images/interactive.svg"
            title="Interactive Learning"
            description="Engage with interactive lessons, practical exercises. and real-world projects to reinforce your understanding and skills"
          />
          <FeatureItem
            icon="/images/online.svg"
            title="Online Community"
            description="Learn from industry professionals and leading experts wth hands-on experience in the latest technologies and trends"
          />
        </div>

        <div className="mt-10 mx-auto lg:mx-10 h-auto max-h-[380px] max-w-[380px]">
          <img className="lg:mx-auto" src="/images/choose.svg" alt="ui" />
        </div>
      </div>
      <button className="text-center items-center justify-center rounded-lg w-36 h-8 bg-[#773cde] text-white text-xs mb-10 mt-10">
        Get Started
      </button>
    </div>
  );
};

interface FeatureItemProps {
  icon: string;
  title: string;
  description: string;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ icon, title, description }) => {
  return (
    <div className="flex flex-row">
      <img className="" src={icon} alt={title} width="16px" />
      <span className="text-left mt-14 ml-2">
        <h3 className="text-sm font-bold lg:mt-0">{title}</h3>
        <p className="mt-2 text-xs lg:w-64">{description}</p>
      </span>
    </div>
  );
};

export default WhyChooseUsSection;
