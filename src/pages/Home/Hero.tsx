import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from "../../components/Button";
import MaxWidth from "../../components/layout/MaxWidth";

import hero1 from "../../assets/images/hero1.png";
import hero2 from "../../assets/images/hero2.png";
import hero3 from "../../assets/images/hero3.png";
import heroPeg from "../../assets/images/heroPeg.png";

const Hero = () => {
  var settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 10000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    cssEase: "linear",
    // fade: true,
    // waitForAnimate: false,
    swipeToSlide: true,
  };

  const navigate = useNavigate();
  return (
    <section className=" bg-white ">
      {/* SUB: TEXT SECTION */}
      <Slider {...settings}>
        {HeroData.map(
          ({ src, heading, subheading, one, two, three, heroPeg }) => (
            <HeroCard
              imgUrl={src}
              heading={heading}
              subheading={subheading}
              one={one}
              two={two}
              three={three}
              heroPeg={heroPeg}
            />
          )
        )}
      </Slider>
    </section>
  );
};

export default Hero;

interface heroProps {
  imgUrl: string;
  heading: string;
  subheading?: string;
  one?: string;
  two?: string;
  three?: string;
  heroPeg?: string;
}

export const HeroCard = ({
  imgUrl,
  heading,
  subheading,
  one,
  two,
  three,
  heroPeg,
}: heroProps) => {
  const navigate = useNavigate();

  return (
    <MaxWidth className="flex justify-between items-center md:w-full m-0">
      <div
        className=" mx-auto
      items-center mt-8 md:pl-24 md:text-left text-center md:1/2 lg:w-1/3 h-[16rem] "
      >
        <h1 className="font-semibold md:text-4xl  text-xl   md:leading-[3rem] leading-[1.8rem]">
          {heading}
        </h1>
        <p className=" my:3 md:mt-4 md:mb-8 text-sm text-[#4E4E4E]">
          {subheading}
        </p>
        <ul className="pb-4 text-sm">
          <li>{one}</li>
          <li>{two}</li>
          <li>{three}</li>
        </ul>
        <Button
          variant="blue"
          className="px-8 mx-auto md:mx-0"
          onClick={() => navigate("/login")}
        >
          Sinc With Us
        </Button>
      </div>
      <div className="relative hidden md:block ">
        <img
          src={imgUrl}
          alt="girl smiling"
          className="md:h-[20rem] lg:h-[30rem] w-[100%]"
        />

        {heroPeg && (
          <img
            src={heroPeg}
            alt="heroPeg"
            className="absolute h-32 lg:h-36 top-24 lg:top-52 left-[-7%]"
          />
        )}
      </div>
    </MaxWidth>
  );
};

const HeroData = [
  {
    src: hero1,
    heading: "We are big on these 3 things;",
    one: "✓ Service Incubation & Ecosystem Advocacy",
    two: " ✓ Building SAAS & Marketing Tech Platforms",
    three: "✓ Institutional Innovations",
    heroPeg: heroPeg,
  },
  {
    src: hero2,
    heading: "SINC Partners is a service incubation company ",
    subheading:
      "Connecting experts in product development and growth marketing willing to offer their services to amazing startups in exchange for minute equity (usually 0.5% to 2%).",
    heroPeg: "",
  },
  {
    src: hero3,
    heading: "Come with an idea, leave with a company.",
    subheading:
      "You, alongside seasoned service partners and investors, expedite the growth and market entry of your startup.",
    heroPeg: "",
  },
];
