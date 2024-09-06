/* eslint-disable @next/next/no-img-element */
interface CourseCardProps {
    imageSrc: string;
    altText: string;
    title: string;
    description: string;
  }
  
  const CourseCard: React.FC<CourseCardProps> = ({ imageSrc, altText, title, description }) => {
    return (
      <div className="border border-[#773CD2] mt-5 lg:w-[250px] mx-5">
        <img
          className="ml-4 mt-4"
          src={imageSrc}
          alt={altText}
          height="16px"
          width="16px"
        />
        <span className="text-left">
          <h3 className="ml-4 mt-4 text-sm font-bold">{title}</h3>
          <p className="ml-4 mt-4 text-xs">{description}</p>
          <p className="text-[#773CDE] text-xs ml-4 my-4">Learn more &gt;{" "}</p>
        </span>
      </div>
    );
  };

export default CourseCard;