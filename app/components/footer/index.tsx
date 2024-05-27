import Image from "next/image";
import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <div className="bg-[#773cd2]">
      <div className="mx-auto flex flex-row">
        <div className="text-white mx-auto">
          <Link href="/">
            <div className="flex flex-row mt-10 mx-auto">
              <Image
                className=""
                src="/images/foot.svg"
                alt="Castle-Lite"
                width={30}
                height={30}
              />
              <h1 className="flex text-white text-2xl font-bold ml-2">
                Skill.Up
              </h1>
            </div>
          </Link>
          <p className="text-xs font-light mt-6 w-72">
            Join our news letter and stay up to date with news, update and
            latest infos.
          </p>

          {/* FORM */}
          <div className="my-2">
            <form
              action="https://formspree.io/f/odusanyaomotola64@gmail.com"
              method="post"
            >
              <input
                className="text-sm rounded border"
                type="text"
                id="email"
                name="email"
                value=""
                placeholder="enter your email"
                required
              />
              <input
                className="bg-[#773CD2] border text-sm rounded text-center items-center w-20 cursor-pointer h-auto"
                type="submit"
                value="Join now"
              />
            </form>
          </div>
          <p className="text-xs font-light mt-2 w-72">
            By subscribing you agree to our <u> Privacy Policy </u> and provide
            consent receive updates from our company
          </p>
        </div>

        {/* MIDDLE */}

        <div className="font-light mt-10 mx-auto">
          <p className=" text-base">Quick Links</p>
          <span className="text-xs">
            <Link href="/">
              {" "}
              <p className="mt-2">Home</p>
            </Link>
            <Link href="#about">
              <p className="mt-2">About Us</p>
            </Link>
            <Link href="#courses">
              <p className="mt-2">Courses</p>
            </Link>
            <Link href="#testimonies">
              <p className="mt-2">Testimonies</p>
            </Link>
            <Link href="#blog">
              <p className="mt-2">Blog</p>
            </Link>
          </span>
        </div>

        {/* THIRD */}

        <div className="font-light mt-10 mx-auto">
          <p id="contact" className="text-base">
            Contact Us
          </p>

          <div className="flex flex-row mt-10 mx-auto">
            <Image
              className=""
              src="/images/phone.jpg"
              alt="phone"
              width={24}
              height={2}
            />
            <h1 className="flex text-white text-xs ml-2">+2348142597680</h1>
          </div>
          <div className="flex flex-row mt-2 mx-auto">
            <Image
              className=""
              src="/images/phone.jpg"
              alt="phone"
              width={24}
              height={2}
            />
            <h1 className="flex text-white text-xs ml-2">
              odusanyaomotola64@gmail.com
            </h1>
          </div>
          <div className="mt-10 pb-16">
            <p className="text-base font-light">Socials</p>
            <div className="flex flex-row mt-2">
              <Image
                className=""
                src="/images/phone.jpg"
                alt="phone"
                width={24}
                height={2}
              />
              <Image
                className="ml-2"
                src="/images/phone.jpg"
                alt="phone"
                width={24}
                height={2}
              />
              <Image
                className="ml-2"
                src="/images/phone.jpg"
                alt="phone"
                width={24}
                height={2}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
