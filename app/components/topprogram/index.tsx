import React from "react";
import CoursesSection from "../coursesection";

const TopProgramsSection = () => {
  return (
    <section className="mt-10 text-center mx-auto">
      <h2 className="text-center text-[#773cde] font-bold">Top Programs</h2>
      <p className="font-bold text-lg text-black mt-6 mx-20">
        Explore our top programs to expand our career opportunities
      </p>
      <CoursesSection />
      <button className="text-center items-center justify-center rounded-lg w-36 h-8 bg-[#773cde] text-white text-xs mt-10">
        Explore all courses
      </button>
    </section>
  );
};

export default TopProgramsSection;
