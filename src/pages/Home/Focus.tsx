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
        // data-aos="fade-up"
        // data-aos-offset="200"
        className="flex flex-wrap md:flex-nowrap justify-center"
      >
        {focusData.map(({ bg, heading, subheading }) => (
          <div
            className={cn(
              "flex flex-col justify-between w-44 h-24 p-3  text-[white]",
              bg
            )}
          >
            <h1 className="text-left text-sm">{heading}</h1>
            <h3 className="text-sm text-left">{subheading}</h3>
          </div>
        ))}
      </div>
    </MaxWidth>
  );
};

export default Focus;
