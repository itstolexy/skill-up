import React from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import BlogSection from "./components/blog";
import CallToActionSection from "./components/calltoaction";
import HeroSection from "./components/hero";
import InstructorsSection from "./components/instructor";
import PartnersSection from "./components/partner";
import PopularCoursesSection from "./components/popularCourses";
import TestimonialsSection from "./components/testimonies";
import TopProgramsSection from "./components/topprogram";
import WhyChooseUsSection from "./components/whychoose";

export default function Home() {
  return (
    <main className="overflow-y-hidden">
      <div className="bg-[#773CD2]">
        <Header />
        <HeroSection />
        <PartnersSection />
      </div>

      <TopProgramsSection />
      <PopularCoursesSection />
      <WhyChooseUsSection />

      <div className="bg-[#773CD2]">
        <InstructorsSection />
      </div>

      <TestimonialsSection />

      <div className="bg-[#773CDE] text-white">
        <CallToActionSection />
      </div>

      <BlogSection />
      <Footer />
    </main>
  );
}
