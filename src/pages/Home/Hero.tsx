import { useNavigate } from "react-router-dom";

import Button from "../../components/Button";
import MaxWidth from "../../components/layout/MaxWidth";

import heroGirl from "../../assets/images/herogirl.png";
import topLeft from "../../assets/images/header-pic/topleft.png";
import topRight from "../../assets/images/header-pic/topright.png";
import bottomRight from "../../assets/images/header-pic/bottomright.png";
import bottomLeft from "../../assets/images/header-pic/bottomleft.png";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <section className="hero">
      <MaxWidth className="flex gap-x-16 md:flex-row flex-col md:pt-32 pt-12">
        {/* SUB: TEXT SECTION */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="font-semibold md:text-5xl text-4xl [word-spacing:5px] text-edu-yellow md:leading-[4rem] leading-[2.5rem]">
            <span className="text-blue-800">Your Gateway to</span> Smart
            Education
          </h1>
          <p className="w-[85%] my-10 text-lg opacity-65 font-light">
            Educativ is a platform that helps teachers, students, and parents
            join hands in lifelong learning
          </p>
          <Button
            variant="blue"
            className="px-16 mx-auto md:mx-0"
            onClick={() => navigate("/login")}
          >
            Get Started
          </Button>
        </div>

        {/* SUB: IMAGE SECTION */}
        <div className="relative md:-top-20 ">
          <img
            src={topLeft}
            alt="topLeft"
            className="md:w-[12rem] w-[9rem] absolute top-[25%] z-[5] md:-left-[15%] left-0"
          />
          <img
            src={topRight}
            alt="topLeft"
            className="md:w-[8rem] w-[6rem] absolute top-[10%] z-[5] md:-right-[10%] right-[2%]"
          />
          <img
            src={bottomLeft}
            alt="topLeft"
            className="md:w-[17rem] w-[10rem] absolute bottom-[15%] z-[5] md:-left-[20%] left-0"
          />
          <img
            src={bottomRight}
            alt="topLeft"
            className="md:w-[15rem] w-[10rem] absolute bottom-[40%] z-[5] md:-right-[15%] right-[2%]"
          />

          {/* SUB: MAIN IMAGE */}
          <img
            src={heroGirl}
            alt="girl smiling"
            className="md:w-[30rem] w-[25rem] md:scale-[1.2]"
          />
        </div>
      </MaxWidth>
    </section>
  );
};

export default Hero;
