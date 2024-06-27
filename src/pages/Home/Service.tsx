// import React from "react";

import Polygon1 from "../../assets/images/features-pic/Polygon 1.png";
import Polygon2 from "../../assets/images/features-pic/Polygon 2.png";
import Polygon3 from "../../assets/images/features-pic/Polygon 3.png";

import MaxWidth from "../../components/layout/MaxWidth";
import FeaturesCard from "../../components/cards/FeaturesCard";

import OuterLink from "../../components/cards/OuterLink";
import Button from "../../components/Button";

const FeaturesData = [
  {
    bg: "",
    src: Polygon1,
    heading: "We Ideate",
    subheading:
      "We internally generate concepts and ideas that help solve problems in our thesis areas, after which we proceed to develop a nano/micro MVP (usually having as low as 30 functions to as high as 100 functions) of the product that we take to the market.",
  },
  {
    bg: "",
    src: Polygon2,
    heading: "You Validate",
    subheading:
      "You join our 3 months  inResidence program as a business expert to run the operations or as a technical expert to further the development and validate the idea with an average monthly revenue of $1k or 10,000 users and/or an MVP of at least 150 functions .",
  },
  {
    bg: "",
    src: Polygon3,
    heading: "You Co-own",
    subheading:
      "After successful validation and demo day at the end of the EIR program, we move those with perfect fit to become co-founders of the product they validated as CEO & CTO, each owning 20% of the venture.",
  },
];

const Service = () => {
  return (
    <section data-aos="fade-up" data-aos-offset="200" className="my-24 ">
      <MaxWidth className="max-w-[80%]">
        <h2 className="font-semibold md:text-5xl text-xl text-center   mx-auto">
          Our Service Incubation Model
        </h2>
        <h5 className="text-base md:w-[80%] w-[90%] mx-auto  text-[#4E4E4E] mt-6 mb-20 text-center">
          The Service Incubation model is an alternate funding model for startup
          that allows professionals to offer their services to startups in
          return for a minute equity (usually between 0.5% to 1.5%) in the
          startup. As a service incubator, you will see your share grow as much
          as 1000% in 12 – 24 months as been first to invest.
        </h5>

        <div className="">
          <h2 className="font-semibold  text-lg">Hypothesis</h2>
          <h5 className=" text-[#4E4E4E] mt-6 mb-20">
            Just a few reasons we know its time for this model
            within the ecosystem
          </h5>
        </div>

        {/* <FeaturesCard /> */}
        <div className="flex  justify-center flex-wrap gap-x-12  gap-y-20 ">
          {FeaturesData.map((feature, index) => (
            <FeaturesCard
              key={index}
              bgColor={feature.bg}
              src={feature.src}
              heading={feature.heading}
              subheading={feature.subheading}
            />
          ))}
        </div>

        <div className="">
          <h2 className="font-semibold  text-lg">Case Study</h2>
          <h5 className=" text-[#4E4E4E] mt-6 mb-20">
            See what Service Incubators get, the maths behind Service Equity
            (SEEQ) and what the value of your share equity can be over time
          </h5>
        </div>

        <div className="flex flex-col md:flex-row gap-4">
          <Button
            variant="blue"
            className=" border-solid border-[1px] border-[#c2c2c2] text-black px-6 py-2 h-6 bg-white text-sm"
          >
            Service Incubator Equity
          </Button>
          <Button
            variant="blue"
            className=" border-solid border-[1px] border-[#c2c2c2] text-blackpx-6 py-2 h-6 bg-white text-sm"
          >
            SEEQ Maths Equation
          </Button>{" "}
          <Button
            variant="blue"
            className=" border-solid border-[1px] border-[#c2c2c2] text-blackpx-6 py-2 h-6 bg-white text-sm"
          >
            Value of my Equity Over Time
          </Button>
        </div>

        <OuterLink outerLinkText="Become A Service Incubator" />
      </MaxWidth>
    </section>
  );
};

export default Service;
