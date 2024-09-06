import React from 'react';
import CourseCard from '../coursecard';

const CoursesSection = () => {
    const courses = [
      {
        imageSrc: "/images/ui.svg",
        altText: "ui",
        title: "UI/UX",
        description: "Craft seamless digital experiences with our UI/UX courses."
      },
      {
        imageSrc: "/images/mad.svg",
        altText: "mad",
        title: "Mobile App Development",
        description: "Master mobile app development & unleash your creativity on iOS & Android platforms."
      },
      {
        imageSrc: "/images/vid.svg",
        altText: "vid",
        title: "Videography",
        description: "Cutting-edge videography lessons embracing the latest development."
      },
      {
        imageSrc: "/images/ai.svg",
        altText: "ai",
        title: "AI & Machine Learning",
        description: "Unleash the power of AI & Machine learning with our expert-led courses."
      },
      {
        imageSrc: "/images/mar.svg",
        altText: "mar",
        title: "Digital Marketing",
        description: "Dominate the digital landscape with our comprehensive courses."
      },
      {
        imageSrc: "/images/iot.svg",
        altText: "iot",
        title: "Internet of Things (IoT)",
        description: "Enter the realm of IoT innovation with our cutting-edge courses."
      }
    ];
  
    return (
      <div>
        <div className="text-black mt-14 lg:flex lg:flex-row justify-center">
          {courses.slice(0, 3).map((course, index) => (
            <CourseCard
              key={index}
              imageSrc={course.imageSrc}
              altText={course.altText}
              title={course.title}
              description={course.description}
            />
          ))}
        </div>
        <div className="text-black lg:mt-10 mt-5 lg:flex lg:flex-row justify-center">
          {courses.slice(3).map((course, index) => (
            <CourseCard
              key={index}
              imageSrc={course.imageSrc}
              altText={course.altText}
              title={course.title}
              description={course.description}
            />
          ))}
        </div>
      </div>
    );
  };
  
  export default CoursesSection;
  