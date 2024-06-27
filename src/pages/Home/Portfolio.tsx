import Img1 from "../../assets/images/Portfolio/1.png";
import Img2 from "../../assets/images/Portfolio/2.png";
import Img3 from "../../assets/images/Portfolio/3.png";
import Img4 from "../../assets/images/Portfolio/4.png";
import Img5 from "../../assets/images/Portfolio/5.png";
import Img6 from "../../assets/images/Portfolio/6.png";
import Img7 from "../../assets/images/Portfolio/7.png";
import Img8 from "../../assets/images/Portfolio/8.png";
import Img9 from "../../assets/images/Portfolio/9.png";
import Img10 from "../../assets/images/Portfolio/10.png";
import Img11 from "../../assets/images/Portfolio/11.png";
import Img12 from "../../assets/images/Portfolio/12.png";
import Img13 from "../../assets/images/Portfolio/13.png";
import Img14 from "../../assets/images/Portfolio/14.png";
import Img15 from "../../assets/images/Portfolio/15.png";
import Img16 from "../../assets/images/Portfolio/16.png";
import Img17 from "../../assets/images/Portfolio/17.png";
import Img18 from "../../assets/images/Portfolio/18.png";
import Img19 from "../../assets/images/Portfolio/19.png";
import Img20 from "../../assets/images/Portfolio/20.png";
import Img21 from "../../assets/images/Portfolio/21.png";
import Img22 from "../../assets/images/Portfolio/22.png";
import Img23 from "../../assets/images/Portfolio/23.png";
import Img24 from "../../assets/images/Portfolio/24.png";
import Img25 from "../../assets/images/Portfolio/25.png";
import Img26 from "../../assets/images/Portfolio/26.png";
import Img27 from "../../assets/images/Portfolio/27.png";
import Img28 from "../../assets/images/Portfolio/28.png";
import Img29 from "../../assets/images/Portfolio/29.png";
import Img30 from "../../assets/images/Portfolio/30.png";
import Img31 from "../../assets/images/Portfolio/31.png";
import Img32 from "../../assets/images/Portfolio/31.png";
import Img33 from "../../assets/images/Portfolio/33.png";
import Img34 from "../../assets/images/Portfolio/34.png";
import Img35 from "../../assets/images/Portfolio/35.png";
import Img36 from "../../assets/images/Portfolio/36.png";
import Img37 from "../../assets/images/Portfolio/37.png";
import Img38 from "../../assets/images/Portfolio/38.png";
import Img39 from "../../assets/images/Portfolio/39.png";
import Img40 from "../../assets/images/Portfolio/40.png";

import MaxWidth from "../../components/layout/MaxWidth";
import FeaturesCard from "../../components/cards/FeaturesCard";

import OuterLink from "../../components/cards/OuterLink";

const logos = [
  {
    src: Img1,
  },
  {
    src: Img2,
  },
  {
    src: Img3,
  },
  {
    src: Img4,
  },
  {
    src: Img5,
  },
  {
    src: Img6,
  },
  {
    src: Img7,
  },
  {
    src: Img8,
  },
  {
    src: Img9,
  },
  {
    src: Img10,
  },
  {
    src: Img11,
  },
  {
    src: Img12,
  },
  {
    src: Img13,
  },
  {
    src: Img14,
  },
  {
    src: Img15,
  },
  {
    src: Img16,
  },
  {
    src: Img17,
  },
  {
    src: Img18,
  },
  {
    src: Img19,
  },
  {
    src: Img20,
  },
  {
    src: Img21,
  },
  {
    src: Img22,
  },
  {
    src: Img23,
  },
  {
    src: Img24,
  },
  {
    src: Img25,
  },
  {
    src: Img26,
  },
  {
    src: Img27,
  },
  {
    src: Img28,
  },
  {
    src: Img29,
  },
  {
    src: Img30,
  },
  {
    src: Img31,
  },
  {
    src: Img32,
  },
  {
    src: Img33,
  },
  {
    src: Img34,
  },
  {
    src: Img35,
  },
  {
    src: Img36,
  },
  {
    src: Img37,
  },
  {
    src: Img38,
  },
  {
    src: Img39,
  },
  {
    src: Img40,
  },
];

const Portfolio = () => {
  return (
    <section data-aos="fade-up" data-aos-offset="200" className="my-24 ">
      <MaxWidth className="max-w-[80%]">
        <h2 className="font-semibold md:text-5xl text-xl text-center  md:w-[65%]  mx-auto">
          Our Studio Portfolio
        </h2>
        <h5 className="text-base md:w-[65%] w-[90%] mx-auto  text-gray-500 mt-6 mb-20 text-center">
          Our 2024 Service Incubator Portfolio Companies
        </h5>
        {/* <FeaturesCard /> */}
        <div className="grid  grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-4 md:gap-8">
          {logos.map(({ src }, index) => (
            <img key={index} src={src} alt={"logo"} />
          ))}
        </div>

        <OuterLink outerLinkText="Build your dream" />
      </MaxWidth>
    </section>
  );
};

export default Portfolio;
