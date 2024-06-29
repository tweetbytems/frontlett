// import React from "react";

import MaxWidth from "../../components/layout/MaxWidth";
import { cn } from "../../utils/utils";

const focusData = [
  {
    bg: "bg-gray-800",
    heading: "01",
    subheading: "Business Support & Incubation.",
  },
  {
    bg: "bg-yellow-500",
    heading: "02",
    subheading: "On-Demand & As-A-Service",
  },
  {
    bg: "bg-pink-500",
    heading: "03",
    subheading: "Marketplace & Crowdsourcing",
  },
  {
    bg: "bg-teal-600",
    heading: "04",
    subheading: "Aggregation & Shared Economy",
  },
  {
    bg: "bg-pink-500",
    heading: "05",
    subheading: "Decentralized Economy & Digital Assets",
  },
];

const Focus = () => {
  return (
    <MaxWidth
      className="
    max-w-[80%] 
    "
    >
      <div
        data-aos="fade-up"
        data-aos-offset="200"
        className="flex flex-col flex-wrap md:flex-nowrap justify-center"
      >
        <h2 className="font-semibold md:text-5xl text-xl text-center  md:w-[65%]  mx-auto  mb-2 md:mb-10">
          Our Area Of Focus
        </h2>
        <h5 className="md:w-[65%] w-[90%] mx-auto  text-[#4E4E4E] text-xs mt:1 md:mt-6 mb-6 md:mb-20 text-center">
          In our quest to help make success available to everyone, we have
          initial strategic direction to focus on these five (5) key areas at
          the lab
        </h5>
        <div className="flex flex-wrap md:flex-nowrap">
          {focusData.map(({ bg, heading, subheading }) => (
            <div
              className={cn(
                "flex flex-col justify-between w-full lg:min-w-44 min-h-24 p-3  text-[white]",
                bg
              )}
            >
              <h1 className="text-left text-sm">{heading}</h1>
              <h3 className="text-sm text-left">{subheading}</h3>
            </div>
          ))}
        </div>
      </div>
    </MaxWidth>
  );
};

export default Focus;
