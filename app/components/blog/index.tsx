/* eslint-disable @next/next/no-img-element */
import React from "react";

const BlogSection = () => {
  return (
    <>
      <div id="blog" className="mt-20 text-center mx-auto text-black">
        <h2 className="text-center text-[#773cde] font-bold">Blog</h2>
        <p className="font-bold text-lg text-black mt-6 lg:mx-auto mx-14 lg:w-[390px]">
          Stay ahead of the curve. Great insights, tips and tutorials from our
          blog
        </p>
      </div>

      <div className="mt-14 lg:flex lg:flex-row text-black text-left justify-center">
        <BlogCard
          image="/images/demy.svg"
          category="Blockchain Technology"
          title="Demystifying Blockchain: understanding its importance beyond cryptocurrency"
          description="Discover how no-code development platforms are democratizing app creation and ...."
        />
        <BlogCard
          image="/images/fro.svg"
          category="Artificial Intelligence"
          title="From AI to XR : Exploring emerging technologies shaping the future of tech"
          description="Dive into the forefront of innovation with our exploration of AI, XR, and other cutting-edge technologies defining the future landscape"
          className="lg:ml-10"
        />
        <BlogCard
          image="/images/emerge.svg"
          category="Product Design"
          title="Emerging Design Trends in 2004: Discover the latest design frontiers shaping 2024 and beyond"
          description="Explore innovative concepts, dynamic interfaces, and immersive experiences defiing.."
          className="lg:ml-10"
        />
      </div>
      <div className="flex justify-center items-center mt-14">
        <button className="rounded-lg w-36 h-8 bg-[#773cde] text-white text-xs mb-10">
          Explore all articles
        </button>
      </div>
    </>
  );
};

interface BlogCardProps {
  image: string;
  category: string;
  title: string;
  description: string;
  className?: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
  image,
  category,
  title,
  description,
  className = "",
}) => {
  return (
    <div
      className={`border rounded-lg border-[#804bf5] lg:w-[250px] mx-5 mt-5 ${className}`}
    >
      <img
        className="lg:mx-auto lg:mt-4 w-full lg:max-h-[200px] lg:max-w-[200px] lg:ml-4"
        src={image}
        alt={title}
      />
      <p className="ml-4 mt-2 border text-center border-[#773cde] text-[#773cde] text-xs font-light w-[140px]">
        {category}
      </p>
      <h3 className="ml-4 mt-4 text-sm font-bold">{title}</h3>
      <p className="mx-4 mt-4 text-xs font-light">{description}</p>
      <p className="text-[#773CDE] text-xs ml-4 my-4">Learn more &gt; </p>
    </div>
  );
};

export default BlogSection;
