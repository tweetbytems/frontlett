// import React from "react";
import { cn } from "../../utils/utils";
import Button from "../../components/Button";

const investorData = [
  {
    heading: "Deal 1",
    one: "✓ Idea Stage: ",
    two: " ✓ Expected Revenue at This Stage:",
    three: "✓ Duration of Raise:",
    four: "✓ Who Can Invest:  ",
    oneBold: "$5k for 5% Equity",
    twoBold: " $0/mth",
    threeBold: " 1mth",
    fourBold: "People with Domain Expertise and Advisors ",
  },
  {
    heading: "Deal 2",
    one: "✓ Idea Stage: ",
    two: " ✓ Expected Revenue at This Stage:",
    three: "✓ Duration of Raise:",
    four: "✓ Who Can Invest:   ",
    oneBold: "$5k for 5% Equity",
    twoBold: " $0/mth",
    threeBold: " 1mth",
    fourBold: "People with Domain Expertise and Advisors",
  },
  {
    heading: "Deal 3",
    one: "✓ Validation Stage: ",
    two: " ✓ Expected Revenue at This Stage: ",
    three: "✓ Duration of Raise: ",
    four: "✓ Who Can Invest: ",
    oneBold: "$50k for 5% Equity",
    twoBold: "$1k+/mth",
    threeBold: "3-6mths",
    fourBold: "Everyone ",
  },
  {
    heading: "Deal 4",
    one: "✓ Traction Stage: ",
    two: " ✓ Expected Revenue at This Stage: ",
    three: "✓ Duration of Raise: ",
    four: "✓ Who Can Invest:  ",
    oneBold: "$125k worth of service for 5% Equity",
    twoBold: "$5k+/mth",
    threeBold: "6-12mths",
    fourBold: "Media, Influencers, Celebrity, Platform Owners",
  },
];

const investorData2 = [
  {
    heading: "Deal 5",
    one: "✓ Pre-seed Stage:",
    two: " ✓ Expected Revenue at This Stage:",
    three: "✓ Duration of Raise:",
    four: "✓  Who Can Invest ",
    oneBold: " $1.5M for 10% Equity",
    twoBold: " $50k+/mth",
    threeBold: " 6-18mths",
    fourBold: ": Angel Investors, VCs, PE, Institutions ",
    bg: "",
    workText: "",
    button: "",
  },
  {
    heading: "Deal 6",
    one: "✓ Seed Stage: ",
    two: " ✓  Expected Revenue at This Stage: ",
    three: "✓  Duration of Raise:",
    four: "✓  Who Can Invest:  ",
    oneBold: ": $7.5M for 20% Equity",
    twoBold: " $250k+/mth",
    threeBold: " 12-24mths",
    fourBold: " VCs, PE, Institutions",
    bg: "",
    workText: "",
    button: "",
  },
  {
    heading: "Deal 7",
    one: "✓ IPO Stage: ",
    two: " ✓  Expected Revenue at This Stage:",
    three: "✓  Duration of Raise: ",
    four: "✓ Who Can Invest: ",
    oneBold: "$1.5B for 20% Equity",
    twoBold: "$1M+/mth",
    threeBold: " 18-36mths",
    fourBold: ": The Public",
    bg: "",
    workText: "",
    button: "",
  },
  {
    heading: "",
    one: " ",
    two: " ",
    three: " ",
    four: " ",
    oneBold: "",
    twoBold: "",
    threeBold: " ",
    fourBold: "",
    bg: "bg-black",
    workText:
      "Work with Service Incubators (SINC) to expedite your time to market",
    button: (
      <Button variant="blue" className="text-sm">
        Join SINC Network
      </Button>
    ),
  },
];

const Investor = () => {
  return (
    <div className=" max-w-[80%] sm:max-w-[100%]    mx-auto">
      <h2 className="font-semibold md:text-5xl text-xl text-center mb-10 my-24">
        SINC Investors Network
      </h2>
      <h5 className="text-base md:w-[80%]  mx-auto  text-[#4E4E4E] mt-6 mb-20 text-center">
        Our deals are structured not just to take in investments but to onboard
        owners passionate about our solutions. Our portfolio companies are
        valued at $50k at start, with these low valuation, you are guaranteed at
        least 2x-5x, usually been the first to invest.
        <br />
        <strong>Disclaimer:</strong> These deal flows is a statement of our
        projections and may differ from stage to stage and from venture to
        venture and the guarantee is for deal 1, usually the first to invest
      </h5>
      <h5 className="mb-4">
        <span className="font-semibold ">
          Micro Angel Investors & Service incubators
        </span>
        (Invest from $500 & above)
      </h5>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 text-[0.7rem]  ">
        {investorData.map(
          ({
            heading,
            one,
            two,
            three,
            four,
            oneBold,
            twoBold,
            threeBold,
            fourBold,
          }) => (
            <div className="border-solid border-l-0 border-2 border-black/20 md:last:border-r-0 p-4 ">
              <h5 className="font-semibold text-sm pb-2 ">{heading}</h5>
              <li>
                {one}
                <span className="font-bold">{oneBold}</span>
              </li>
              <li>
                {two} <span className="font-bold">{twoBold}</span>
              </li>
              <li>
                {three} <span className="font-bold">{threeBold}</span>
              </li>
              <li>
                {four}
                <span className="font-bold">{fourBold}</span>
              </li>
            </div>
          )
        )}
      </ul>

      <h5 className="my-4">
        <span className="font-semibold ">
          Angel Investors & Venture Capital
        </span>
        (Invest from $50k and above)
      </h5>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 text-[0.7rem]  ">
        {investorData2.map(
          ({
            heading,
            one,
            two,
            three,
            four,
            oneBold,
            twoBold,
            threeBold,
            fourBold,
            bg,
            button,
            workText,
          }) => (
            <div className="relative border-solid border-l-0 border-2 border-black/20 last:border-r-0 border-b-0 md:border-b-1   p-4 ">
              <h5 className="font-semibold text-sm pb-2 ">{heading}</h5>
              <li>
                {one}
                <span className="font-bold">{oneBold}</span>
              </li>
              <li>
                {two} <span className="font-bold">{twoBold}</span>
              </li>
              <li>
                {three} <span className="font-bold">{threeBold}</span>
              </li>
              <li>
                {four}
                <span className="font-bold">{fourBold}</span>
              </li>
              <span
                className={cn(
                  "text-white last:absolute right-34 bottom-4 h-28 w-60  p-4 hidden lg:block",
                  bg
                )}
              >
                <h5 className="mb-2 text-[0.75rem]">{workText}</h5>
                <div>{button}</div>
              </span>
            </div>
          )
        )}
      </ul>
    </div>
  );
};

export default Investor;
