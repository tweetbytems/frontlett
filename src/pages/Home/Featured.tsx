// import React from "react";
import FeaturedImage from "../../assets/images/featured.png";
import Button from "../../components/Button";

const Featured = () => {
  return (
    <div className="flex flex-col justify-center">
      <h2 className="font-semibold text-xl text-center  md:w-[65%]  mx-auto mb-10 my-24">
        As Featured In
      </h2>
      <img src={FeaturedImage} alt="" />

      <h2 className=" max-w-[65%] mx-auto  text-2xl md:text-4xl lg:text-4xl text-center mb-10 my-24 md:leading-[2.5rem] lg:leading-[5rem]">
        Let's build companies that help everyone succeed
      </h2>
      <span className="flex gap-2 justify-center">
        <Button
          variant="white"
          className=" border-solid border-[1px] border-[black] text-black bg-white"
        >
          Sinc With Us
        </Button>
        <Button variant="blue">Apply to SIP 1.0</Button>
      </span>
    </div>
  );
};

export default Featured;
