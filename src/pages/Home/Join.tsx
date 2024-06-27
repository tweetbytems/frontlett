// import React from "react";
import { useRef } from "react";
import OuterLink from "../../components/cards/OuterLink";

import Network1 from "../../assets/images/Network1.png";
import Network2 from "../../assets/images/Network2.png";
import Network3 from "../../assets/images/Network3.png";
import Network4 from "../../assets/images/Network4.png";

import arrowRight from "../../assets/images/arrowRight.png";
import arrowLeft from "../../assets/images/arrowLeft.png";

import MaxWidth from "../../components/layout/MaxWidth";
import FeaturesCard from "../../components/cards/FeaturesCard";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const FeaturesData = [
  {
    src: Network1,
    heading: "Application and Selection",
    subheading:
      "Begin your journey by completing our straightforward application form. Share insights into your entrepreneurial background, expertise, and your vision for supporting the success of our portfolio companies. Our dedicated selection committee, comprised of key stakeholders at SINC Partners, will carefully review your application",
  },
  {
    src: Network2,
    heading: "Alignment Meeting and Proposal Submission",
    subheading:
      "If your application stands out, we'll invite you to an alignment meeting. This is an opportunity to discuss the goals of our EIR program and explore how your expertise aligns with the needs of our portfolio companies. Following the alignment meeting, submit a formal proposal outlining your intended contributions and how you envision adding significant value to our portfolio companies.",
  },
  {
    src: Network3,
    heading: "Negotiation and Agreement",
    subheading:
      "Upon successful alignment and proposal review, we'll engage in discussions to finalize the terms of your EIR role. This includes the duration, expectations, and any compensation or equity arrangements. Once terms are agreed upon, we'll draft a formal agreement outlining the specifics of your EIR engagement, including reporting structures, responsibilities, and the support/resources provided by SINC Partners.",
  },
  {
    src: Network4,
    heading: "Onboarding and Integration",
    subheading:
      "Congratulations! As an accepted EIR, you'll undergo an onboarding process to familiarize yourself with the SINC Partners ecosystem, our portfolio companies, and key team members. Facilitated introductions will ensure a seamless integration between you and relevant portfolio companies, setting clear expectations for collaboration.",
  },
];

const Join = () => {
  let sliderRef = useRef<Slider>(null);

  const next = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const previous = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 0.5,
        },
      },
    ],
  };
  return (
    <div>
      <h2 className="font-semibold md:text-5xl text-xl text-center  md:w-[65%]  mx-auto mb-10">
        How It Works
      </h2>
      <h5 className="text-base md:w-[65%] w-[90%] mx-auto  text-[#4E4E4E] mt-6 mb-4 md:mb-20 text-center">
        Our EIR program is our structured 3 months un-paid program designed to
        help us have a pipeline of business and technical cofounders who can run
        the venture of choice as CEO & CTO owning 20% equity each.
      </h5>
      <Slider ref={sliderRef} {...settings} className="ml-[10%]">
        {FeaturesData.map((feature, index) => (
          <FeaturesCard
            key={index}
            src={feature.src}
            heading={feature.heading}
            subheading={feature.subheading}
          />
        ))}
      </Slider>
      <OuterLink outerLinkText="Support the Future" />

      <div className="flex gap-x-12 h-12 justify-center mt-10">
        <img onClick={previous} src={arrowLeft} alt="" />
        <img onClick={next} src={arrowRight} alt="" />
      </div>
    </div>
  );
};

export default Join;
