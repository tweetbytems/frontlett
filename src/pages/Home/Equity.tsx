// import React from "react";
import OuterLink from "../../components/cards/OuterLink";

import Equity1 from "../../assets/images/Equity/Equity1.png";
import Equity2 from "../../assets/images/Equity/Equity2.png";
import Equity3 from "../../assets/images/Equity/Equity3.png";
import Equity4 from "../../assets/images/Equity/Equity4.png";
import Button from "../../components/Button";

const EquityData = [
  {
    src: Equity1,
    heading: "This company is a SAAS Startup that builds AI copy generator...",
    subheading:
      "Top Ten Most Powerful Startup. Top Ten Most Powerful Startup. Top Ten Most Powerful Startup",
    role: "Chief Executive Officer",
  },
  {
    src: Equity2,
    heading: "This company is a SAAS Startup that builds AI copy generator...",
    subheading:
      "Top Ten Most Powerful Startup. Top Ten Most Powerful Startup. Top Ten Most Powerful Startup",
    role: "UX Strategist",
  },
  {
    src: Equity3,
    heading: "This company is a SAAS Startup that builds AI copy generator...",
    subheading:
      "Top Ten Most Powerful Startup. Top Ten Most Powerful Startup. Top Ten Most Powerful Startup",
    role: "CTO & Head of innovations",
  },
  {
    src: Equity4,
    heading: "This company is a SAAS Startup that builds AI copy generator...",
    subheading:
      "Top Ten Most Powerful Startup. Top Ten Most Powerful Startup. Top Ten Most Powerful Startup",
    role: "Backend Developer",
  },
];

const Equity = () => {
  return (
    <div className="max-w-[80%] mx-[auto] my-24">
      <h2 className="font-semibold md:text-5xl  text-xl text-center  md:w-[65%]  mx-auto mb-10">
        Equity jobs
      </h2>
      <h5 className="text-base md:w-[65%] w-[90%] mx-auto  text-[#4E4E4E] mt-6 mb-4  md:mb-20 text-center">
        See companies and startups offering equity or a mix of cash and equity
        for very important position in their company
      </h5>
      <div className="flex flex-wrap md:flex-nowrap justify-center gap-x-8 gap-y-4">
        {EquityData.map(({ src, heading, subheading, role }) => (
          <EquityCard
            src={src}
            heading={heading}
            subheading={subheading}
            role={role}
          />
        ))}
      </div>
      <OuterLink outerLinkText="See More Equitys & Resources" />
    </div>
  );
};

export default Equity;

interface EquityCardProps {
  src: string;
  heading: string;
  subheading: string;
  role: string;
}
export const EquityCard = ({
  src,
  role,
  heading,
  subheading,
}: EquityCardProps) => {
  return (
    <div className="bg-[white] shadow-sm rounded-lg px-5  pt-2 pb-10 ">
      <div>
        <img
          src={src}
          alt=""
          className=" w-16  flex items-center justify-center my-2
        "
        />
        <h5 className="text-[#212121] text-xs font-light">{heading}</h5>
      </div>

      <div className="gap-1 text-[0.65rem] mt-8">
        <h2 className="font-semibold text-sm">{role}</h2>
        {equityCardData.map(
          ({ headerLeft, headerRight, textLeft, textRight }) => (
            <div className="my-2">
              <div className="my-1">
                <p className="flex justify-between text-[#8E8E8E]  ">
                  <span>{headerLeft}</span>
                  <span>{headerRight}</span>
                </p>
                <p className="flex justify-between  ">
                  <span>{textLeft}</span>
                  <span>{textRight}</span>
                </p>{" "}
              </div>
            </div>
          )
        )}
        <Button variant="blue" className="py-2 mt-6">
          View Details
        </Button>
      </div>
    </div>
  );
};

const equityCardData = [
  {
    headerLeft: "LOCATION",
    headerRight: "INDUSTRY",
    textLeft: "Abuja, Nigeria",
    textRight: "On-demand print",
  },
  {
    headerLeft: "EQUITY",
    headerRight: "STIPEND",
    textLeft: "1.2%",
    textRight: "NGN 200,000/mth ",
  },
  {
    headerLeft: "DEADLINE",
    headerRight: "ROLE TYPE",
    textLeft: "24th, January 2024",
    textRight: "Full-time",
  },
];
