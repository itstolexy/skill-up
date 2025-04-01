/* eslint-disable @next/next/no-img-element */
import React from "react";

const PopularCoursesSection = () => {
  return (
    <div id="courses" className="mt-20 text-center mx-auto">
      <h2 className="text-center text-[#773cde] font-bold">Popular Courses</h2>
      <p className="font-bold text-lg text-black mt-6 lg:mx-auto mx-14 lg:w-[390px]">
        Access top-quality courses at unbeatable prices, taught by elite tutors
        from across the globe{" "}
      </p>
      <div className="mt-14 lg:flex lg:flex-row text-black text-left justify-center">
        <CourseCard
          image="/images/p1.svg"
          title="Mastering Digital Innovation"
          description="Dive deeper into cutting-edge technologies & methodologies to stay ahead in today's digital landscape."
          instructorImage="/images/t.svg"
          instructorName="Odusanya Omotola"
          instructorRole="Senior Software Developer"
          price="120.00"
        />
        <CourseCard
          image="/images/p2.svg"
          title="Mobile UI/UX Design"
          description="Elevate your skills in creating intuitive interfaces & compelling user experiences to drive user engagement & satisfaction."
          instructorImage="/images/e.svg"
          instructorName="Obinyere Joachim"
          instructorRole="Senior Product Designer"
          price="70.00"
          className="lg:ml-10"
        />
        <CourseCard
          image="/images/p3.svg"
          title="Digital marketing funamentals"
          description="Discover the essentials of digital marketing and elevate your online presence with our comprehensive fundamentals course."
          instructorImage="/images/s.svg"
          instructorName="Suzy Daniels"
          instructorRole="Senior Marketing Manager"
          price="50.00"
          className="lg:ml-10"
        />
      </div>
      <button className="text-center items-center justify-center rounded-lg w-36 h-8 bg-[#773cde] text-white text-xs mt-10">
        Explore all courses
      </button>
    </div>
  );
};

interface CourseCardProps {
  image: string;
  title: string;
  description: string;
  instructorImage: string;
  instructorName: string;
  instructorRole: string;
  price: string;
  className?: string;
}

const CourseCard: React.FC<CourseCardProps> = ({
  image,
  title,
  description,
  instructorImage,
  instructorName,
  instructorRole,
  price,
  className = "",
}) => {
  return (
    <div
      className={`border rounded-lg border-[#773CD2] mt-5 lg:w-[250px] mx-5 ${className}`}
    >
      <img
        className="h-auto w-full lg:w-[200px] lg:mt-4 lg:ml-4"
        src={image}
        alt={title}
      />
      <h3 className="ml-4 mt-4 text-sm font-bold">{title}</h3>
      <p className="ml-4 mt-2 text-xs font-light">4.5⭐⭐⭐⭐⭐</p>
      <p className="mx-4 mt-4 text-xs font-light">{description}</p>
      <div className="flex flex-row">
        <img
          className="flex ml-4 mt-4"
          src={instructorImage}
          alt="instructor"
          height="40px"
          width="40px"
        />
        <span className="">
          <h3 className="ml-4 mt-4 text-xs font-bold">{instructorName}</h3>
          <p className="ml-4 mt-1 text-xs font-extralight">{instructorRole}</p>
        </span>
      </div>
      <div className="flex flex-row my-4">
        <button className="flex ml-4 text-center items-center justify-center rounded-lg w-16 h-6 bg-[#773cde] text-white text-xs">
          Enroll
        </button>
        <p className="flex font-bold ml-20">${price}</p>
      </div>
    </div>
  );
};

export default PopularCoursesSection;
