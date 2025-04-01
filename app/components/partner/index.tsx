/* eslint-disable @next/next/no-img-element */
import React from "react";

const PartnersSection = () => {
  const partners = [
    { src: "/images/1.svg", alt: "invision", height: "10px", width: "10px" },
    { src: "/images/2.svg", alt: "apple", height: "10px", width: "10px" },
    { src: "/images/3.svg", alt: "google", height: "30px", width: "45px" },
    { src: "/images/4.svg", alt: "meta", height: "20px", width: "55px" },
    { src: "/images/5.svg", alt: "microsoft", height: "40px", width: "55px" },
    { src: "/images/6.svg", alt: "ibm", height: "20px", width: "25px" },
    { src: "/images/7.svg", alt: "logo", height: "10px", width: "10px" },
  ];

  return (
    <div className="overflow-hidden w-full mt-10 lg:mt-20">
      <div id="slide" className="flex whitespace-nowrap">
        {/* First set of partners */}
        <div className="flex animate-slide">
          {partners.map((partner, index) => (
            <img
              key={`partner-1-${index}`}
              src={partner.src}
              className="mr-14 mb-10 inline-block"
              alt={partner.alt}
              height={partner.height}
              width={partner.width}
            />
          ))}

          {/* Duplicate set for seamless loop */}
          {partners.map((partner, index) => (
            <img
              key={`partner-2-${index}`}
              src={partner.src}
              className="mr-14 mb-10 inline-block"
              alt={partner.alt}
              height={partner.height}
              width={partner.width}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PartnersSection;
