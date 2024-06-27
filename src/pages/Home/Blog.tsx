// import React from "react";
import { useRef } from "react";
import OuterLink from "../../components/cards/OuterLink";

import Blog1 from "../../assets/images/Blog/Blog1.png";
import Blog2 from "../../assets/images/Blog/Blog2.png";
import Blog3 from "../../assets/images/Blog/Blog3.png";
import Blog11 from "../../assets/images/Blog/Blog11.png";
import Blog12 from "../../assets/images/Blog/Blog12.png";
import Blog13 from "../../assets/images/Blog/Blog13.png";

const blogData = [
  {
    src: Blog1,
    heading: "Top Ten Most Powerful Startup",
    subheading:
      "Top Ten Most Powerful Startup. Top Ten Most Powerful Startup. Top Ten Most Powerful Startup",
    miniImg: Blog11,
  },
  {
    src: Blog2,
    heading: "Top Ten Most Powerful Startup",
    subheading:
      "Top Ten Most Powerful Startup. Top Ten Most Powerful Startup. Top Ten Most Powerful Startup",
    miniImg: Blog12,
  },
  {
    src: Blog3,
    heading: "Top Ten Most Powerful Startup",
    subheading:
      "Top Ten Most Powerful Startup. Top Ten Most Powerful Startup. Top Ten Most Powerful Startup",
    miniImg: Blog13,
  },
];

const Blog = () => {
  return (
    <div className="max-w-[80%] mx-[auto]">
      <h2 className="font-semibold md:text-5xl  text-xl text-center  md:w-[65%]  mx-auto mb-10">
        Blogs & Resources
      </h2>
      <div className="flex flex-wrap sm:flex-nowrap">
        {blogData.map(({ src, heading, subheading, miniImg }) => (
          <BlogCard
            src={src}
            heading={heading}
            subheading={subheading}
            miniImg={miniImg}
          />
        ))}
      </div>
      <OuterLink outerLinkText="See More Blogs & Resources" />
    </div>
  );
};

export default Blog;

interface BlogCardProps {
  src: string;
  heading: string;
  subheading: string;
  miniImg: string;
}
export const BlogCard = ({
  src,
  heading,
  subheading,
  miniImg,
}: BlogCardProps) => {
  return (
    <div
      className="
   px-5  pt-2 pb-10 max-w-80 mx-auto
    "
    >
      <div>
        <img src={src} alt="" />
      </div>
      <div className="flex gap-1 mt-8">
        <span className=" text-xs">
          <h5 className="font-semibold pb-2">{heading}</h5>
          <p>{subheading}</p>
        </span>
        <span>
          <img src={miniImg} alt="" className="w-36" />
        </span>
      </div>
    </div>
  );
};
