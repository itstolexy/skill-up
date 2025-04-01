/* eslint-disable @next/next/no-img-element */
import React from "react";

const TestimonialsSection = () => {
  return (
    <>
      <div id="testimonies" className="mt-10 text-center mx-auto">
        <h2 className="text-center text-[#773cde] font-bold">Testimonies</h2>
        <p className="font-bold text-lg text-black mt-6 lg:w-[390px] w-auto mx-14 lg:mx-auto">
          Listen to the success stories straight from our vibrant community of
          current and former students.
        </p>
      </div>
      <div className="text-black">
        <div className="mx-auto lg:flex flex-row lg:justify-center mt-14">
          <TestimonialCard
            image="/images/tobi.svg"
            name="Tola Daniel"
            role="Software Developer"
            testimonial="The structured learning paths and hands-on projects have significantly boosted my confidence in coding"
          />
          <TestimonialCard
            image="/images/emily.svg"
            name="Emily Robert"
            role="Web Developer"
            testimonial="I've tried several online learning platforms, but Skill Up stands out for its practical approach to learning"
            className="lg:ml-10"
          />
          <TestimonialCard
            image="/images/alex.svg"
            name="Alex M."
            role="Data Scientist"
            testimonial="Skill Up made learning tech skills feel like a breeze! The interactive lessons and real-world examples helped me ..."
            className="lg:ml-10"
          />
        </div>
        <div className="flex justify-center items-center mt-10 mb-20">
          <button className="rounded-lg w-24 h-8 bg-white border text-[#773CDE] hover:bg-[#D5C3F7] border-[#773CDE] text-xs">
            Read all
          </button>
        </div>
      </div>
    </>
  );
};

interface TestimonialCardProps {
  image: string;
  name: string;
  role: string;
  testimonial: string;
  className?: string;
}

const TestimonialCard = ({ image, name, role, testimonial, className = "" }: TestimonialCardProps) => {
  return (
    <div className={`lg:flex flex-row border border-[#D5C3F7] lg:w-[280px] mx-5 mt-5 ${className}`}>
      <div className="mx-2 mt-2 flex flex-row">
        <img
          className="flex h-auto w-auto max-h-[40px] max-w-[40px]"
          src={image}
          alt={name}
        />
        <span className="text-left ml-2">
          <h3 className="text-sm font-bold">{name}</h3>
          <p className="mt-2 text-xs font-light">{role}</p>
          <p className="mt-2">⭐⭐⭐⭐⭐</p>
          <p className="text-xs font-light mt-2">
            &quot;{testimonial}&quot;
          </p>
          <p className="text-[#773CDE] text-xs my-2">Read more</p>
        </span>
      </div>
    </div>
  );
};

export default TestimonialsSection;