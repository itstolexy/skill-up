import Image from "next/image";
import React from "react";

function Footer() {
  return (
    <div className="bg-[#773cd2] mx-auto flex flex-row">
      <div className="text-white mx-auto">
        <div className="flex flex-row mt-10 mx-auto">
          <Image
            className=""
            src="/images/foot.svg"
            alt="Castle-Lite"
            width={30}
            height={30}
          />
          <h1 className="flex text-white text-2xl font-bold ml-2">Skill.Up</h1>
        </div>
        <p className=" text-xs font-light mt-6 w-72">
          Join our news letter and stay up to date with news, update and latest
          infos.
        </p>
        
      </div>
    </div>
  );
}

export default Footer;
