// import React from "react";

import Img1 from "../../assets/images/features-pic/1.png";
import Img2 from "../../assets/images/features-pic/2.png";
import Img3 from "../../assets/images/features-pic/3.png";

import MaxWidth from "../../components/layout/MaxWidth";
import FeaturesCard from "../../components/cards/FeaturesCard";

import OuterLink from "../../components/cards/OuterLink";

const FeaturesData = [
  {
    bg: "",
    src: Img1,
    heading: "We Ideate",
    subheading:
      "We internally generate concepts and ideas that help solve problems in our thesis areas, after which we proceed to develop a nano/micro MVP (usually having as low as 30 functions to as high as 100 functions) of the product that we take to the market.",
  },
  {
    bg: "",
    src: Img2,
    heading: "You Validate",
    subheading:
      "You join our 3 months  inResidence program as a business expert to run the operations or as a technical expert to further the development and validate the idea with an average monthly revenue of $1k or 10,000 users and/or an MVP of at least 150 functions .",
  },
  {
    bg: "",
    src: Img3,
    heading: "You Co-own",
    subheading:
      "After successful validation and demo day at the end of the EIR program, we move those with perfect fit to become co-founders of the product they validated as CEO & CTO, each owning 20% of the venture.",
  },
];

const Cofound = () => {
  return (
    <section data-aos="fade-up" data-aos-offset="200" className="my-24 ">
      <MaxWidth>
        <h2 className="font-semibold md:text-5xl text-xl text-center  md:w-[65%]  mx-auto">
          Co-found With Us
        </h2>
        <h5 className="text-base md:w-[65%] w-[90%] mx-auto  text-gray-500 mt-6 mb-4 md:mb-20 text-center">
          We seek to collaborate with visionary individuals who are solving
          similar problems of helping entrepreneurs succeed
        </h5>
        {/* <FeaturesCard /> */}
        <div className="flex  justify-center flex-wrap gap-x-12  gap-y-4 md:gap-y-20 ">
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
        <OuterLink outerLinkText="Build your dream" />
      </MaxWidth>
    </section>
  );
};

export default Cofound;
