import Image from "next/image";
import React from "react";

export const Header: React.FC = () => {
  return (
    <div className="ml-[140px] gap-4 relative">
      <div className="flex flex-row cursor-pointer">
        <div className="flex flex-row mt-8">
          <Image
            className="flex"
            src="/images/vector.png"
            alt="Castle-Lite"
            width={30}
            height={30}
          />
          <h1 className="flex text-white text-2xl font-bold ml-2">Skill.Up</h1>
        </div>

        <div className="flex text-white text-sm mt-12 justify-end mx-auto mr-[140px]">
          <p className="mr-4">Home</p>
          <p className="mr-4">About Us</p>
          <p className="mr-4">Courses</p>
          <p className="mr-4">Testimonies</p>
          <p className="mr-4">Blog</p>
          <p>Home</p>
          <button className="ml-4 items-center flex bg-[#FFE722] h-6 w-20 rounded justify-center text-black font-normal text-center">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
