import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Header: React.FC = () => {
  return (
    <div className="lg:ml-[90px] ml-5 gap-4 relative">
      <div className="flex flex-row cursor-pointer">
        <Link href="/">
          <div className="flex flex-row mt-8">
            <Image
              className="flex"
              src="/images/vector.png"
              alt="Castle-Lite"
              width={30}
              height={30}
            />
            <h1 className="flex text-white text-2xl font-bold ml-2">
              Skill.Up
            </h1>
          </div>
        </Link>

        <div className="hidden lg:flex flex-row text-white text-sm mt-12 justify-end mx-auto mr-[140px]">
          <Link href="/">
            <p className="mr-4">Home</p>
          </Link>
          <Link href="#about">
            <p className="mr-4">About Us</p>
          </Link>
          <Link href="#courses">
            <p className="mr-4">Courses</p>
          </Link>
          <Link href="#testimonies">
            <p className="mr-4">Testimonies</p>
          </Link>
          <Link href="#blog">
            <p className="mr-4">Blog</p>
          </Link>
          <Link href="#contact">
            <button className="ml-4 items-center flex bg-[#FFE722] h-6 w-20 rounded justify-center text-black font-normal text-center">
              Contact Us
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
