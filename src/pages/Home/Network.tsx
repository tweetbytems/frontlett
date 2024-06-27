// import React from "react";

import MaxWidth from "../../components/layout/MaxWidth";
import FeaturesCard from "../../components/cards/FeaturesCard";

const FeaturesData = [
  {
    heading: "Work with Service Incubators to expedite your time-to-market",
    subheading:
      "Collaborate with our meticulously chosen service partners, each with a vested interest, ensuring a shared commitment to success in the game of venture building.",
    paragraph:
      "For 7.5% equity, you get a product manager, product designer, frontend engineer, software engineer and growth marketer to build the MVP of your app or web application and validate it.",
  },
  {
    heading: "Access funding after your mvp is validated ",
    subheading:
      "Startups that have built and validated their product can take advantage of the financial resources of the SINC Investors Network, elevating their potential for success in the venture capital landscape",
    paragraph:
      "Raise $5k, $25k, $50k and $125k in 4 bootstrap deals within 12 months",
  },
];

const Netwoork = () => {
  return (
    <section data-aos="fade-up" data-aos-offset="200" className="my-24 ">
      <MaxWidth>
        <div className="flex justify-center my-24">
          <FeaturesCard
            classname="md:w-[65%] pt-6"
            heading={
              "Nigeria and Africa has a massive network effect that have not be fully utilized. With Nigerians/Africans in every country and territory of the world, we can scale an African business to 100+ countries in few weeks"
            }
            subheading={"Managing Partner at SINC Partners Ltd"}
            paragraph={"Daniel Izeghs Oratokhai"}
            img={false}
          />
        </div>

        <h2 className="font-semibold md:text-5xl text-xl text-center  md:w-[65%]  mx-auto mb-10">
          Network of builders helping startup scale
        </h2>

        {/* <FeaturesCard /> */}
        <div className="flex justify-center flex-wrap gap-x-12  gap-y-20 ">
          {FeaturesData.map((feature, index) => (
            <FeaturesCard
              classname="w-[35%] pt-4 min-w-64"
              key={index}
              heading={feature.heading}
              subheading={feature.subheading}
              paragraph={feature.paragraph}
              link={true}
              img={false}
            />
          ))}
        </div>
      </MaxWidth>
    </section>
  );
};

export default Netwoork;
