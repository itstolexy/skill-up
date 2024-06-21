import img from "next/image";
import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <>
      <div className="bg-[#773cd2]">
        <div className="lg:mx-auto lg:flex lg:flex-row mx-5">
          <div className="text-white mx-auto">
            <Link href="/">
              <div className="flex flex-row pt-10 lg:mx-auto">
                <img
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
            <p className="text-xs font-light sm:mt-10 lg:mt-6 mt-2 lg:w-72 sm:w-full">
              Join our news letter and stay up to date with news, update and
              latest infos.
            </p>

            {/* FORM */}
            <div className="my-2 sm:w-full">
              <form action="https://formspree.io/f/mnqygwdr" method="post">
                <input
                  className="text-sm rounded border-t border-l border-b rounded-r-none p-1"
                  type="email"
                  id="email"
                  name="email"
                  value=""
                  autoComplete="email"
                  placeholder="enter your email"
                  required
                />
                <input
                  className="bg-[#773CD2] p-1 border-t border-r border-b rounded rounded-l-none text-sm text-center items-center lg:w-20 cursor-pointer h-auto"
                  type="submit"
                  value="Join now"
                />
              </form>
            </div>
            <p className="text-xs font-light mt-2 w-72">
              By subscribing you agree to our <u> Privacy Policy </u> and
              provide consent receive updates from our company
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
              <img className="w-5 h-5" src="/images/phone.svg" alt="phone" />
              <h1 className="flex text-white text-xs ml-2">+2348142597680</h1>
            </div>
            <div className="flex flex-row mt-2 mx-auto">
              <img className="w-5 h-5" src="/images/mail.svg" alt="mail" />
              <h1 className="flex text-white text-xs ml-2">
                odusanyaomotola64@gmail.com
              </h1>
            </div>
            <div className="hidden lg:flex flex-col mt-10 pb-16">
              <p className="text-base font-light">Socials</p>
              <div className="flex flex-row mt-2">
                <img
                  className="w-5 h-5"
                  src="/images/facebook.svg"
                  alt="facebook"
                />
                <img
                  className="ml-2 w-5 h-5"
                  src="/images/twitter.svg"
                  alt="twitter"
                />
                <img
                  className="ml-2 w-5 h-5"
                  src="/images/linkedin.svg"
                  alt="linkedin"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-end mr-5 lg:hidden">
          <div className="mt-10 pb-16">
            <p className="text-base font-light">Socials</p>
            <div className="flex flex-row mt-2">
              <img
                className="w-5 h-5"
                src="/images/facebook.svg"
                alt="facebook"
              />
              <img
                className="ml-2 w-5 h-5"
                src="/images/twitter.svg"
                alt="twitter"
              />
              <img
                className="ml-2 w-5 h-5"
                src="/images/linkedin.svg"
                alt="linkedin"
              />
            </div>
          </div>
        </div>
      </div>

      <span className="text-sm font-semibold text-[#773CD2] flex items-center justify-center">
      <p className="my-5">&copy; 2024 Omotola Odusanya. All rights reserved</p>
    </span>
    </>
  );
}

export default Footer;
