// import React from "react";
import { twMerge } from "tailwind-merge";
import { Link } from "react-router-dom";
import { FaRegCalendarDays } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";

type FeaturesCardTypes = {
  icon?: React.ReactNode;
  bgColor?: string;
  heading: string;
  subheading: string;
  src?: string;
  paragraph?: string;
  classname?: string;
  link?: boolean;
  img?: boolean;
};

const FeaturesCard = ({
  icon,
  bgColor,
  heading,
  subheading,
  src,
  paragraph,
  classname,
  link,
  img = true,
}: FeaturesCardTypes) => {
  return (
    <article
      className={twMerge(
        "bg-[white] shadow-sm rounded-lg px-5  pt-2 pb-10 w-80",
        classname
      )}
    >
      {img && (
        <div
          className={twMerge(
            " rounded-full w-8 h-8 flex items-center justify-center my-4",
            bgColor
          )}
        >
          {icon}
          <img src={src} alt="" />
        </div>
      )}
      <h4 className="mb-5 text-sinc-black font-semibold text-lg">{heading}</h4>
      <p className="text-sm leading-7">{subheading}</p>
      <p className="text-sm leading-7 font-semibold">{paragraph}</p>
      {link && (
        <div className="flex items-center gap-3 font-semibold text-sm pt-4 ">
          <Link className="underline hover:text-gray-500" to="/">
            Learn More
          </Link>
          <span>
            <FaArrowRight />
          </span>
        </div>
      )}
    </article>
  );
};

export default FeaturesCard;
