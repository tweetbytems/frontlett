// import React from "react";

import MaxWidth from "../../components/layout/MaxWidth";
import FeaturesCard from "../../components/cards/FeaturesCard";

const conceptData = [
  {
    heading: "Service Incubator",
    subheading:
      "A service-for-shares model of incubating pre-product startups and early-stage companies by building their early stage product and MVP.",
  },
  {
    heading: "Virtualting",
    subheading:
      "A resource share model that allows companies share the time of resources (employees, consultants, technical advisers or influencers) while also splitting the service cost of the resource",
  },
  {
    heading: "Diiming",
    subheading:
      "A progressive investment model that allows you to put aside income (disposable or non-disposable) as investment over a period towards an investment or spend of your choice ",
  },
];

const Concept = () => {
  return (
    <section data-aos="fade-up" data-aos-offset="200" className="my-24 ">
      <MaxWidth className="max-w-[80%]">
        <h2 className="font-semibold md:text-5xl text-xl text-center  md:w-[65%]  mx-auto  mb-2 md:mb-10">
          Our Concept Innovations
        </h2>
        <h5 className="md:w-[65%] w-[90%] mx-auto  text-[#4E4E4E] text-xs mt:1 md:mt-6 mb-6 md:mb-20 text-center">
          We have proprietary concept innovations that will support the startup
          ecosystem, support solution-providers/entrepreneurs and ultimately
          help democratize success;
        </h5>

        {/* <FeaturesCard /> */}
        <div className="flex  justify-center text-center flex-wrap gap-x-12  gap-y-4 md:gap-y-20  ">
          {conceptData.map((concept, index) => (
            <FeaturesCard
              classname="pt-4"
              key={index}
              heading={concept.heading}
              subheading={concept.subheading}
              img={false}
            />
          ))}
        </div>
      </MaxWidth>
    </section>
  );
};

export default Concept;
