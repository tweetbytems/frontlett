// import React from "react";
import { Link } from "react-router-dom";

import MaxWidth from "./MaxWidth";
import Button from "../Button";

import Logo from "../../assets/logo/footerLogo.png";
import accrediited from "../../assets/images/accrediited.png";
import chat from "../../assets/images/chat.png";
import cacus from "../../assets/images/cacus.png";

import facebook from "../../assets/images/1.png";
import twitter from "../../assets/images/2.png";
import instagram from "../../assets/images/3.png";
import linkedin from "../../assets/images/4.png";
import medium from "../../assets/images/5.png";
import youtube from "../../assets/images/6.png";
import twitch from "../../assets/images/7.png";
import nig from "../../assets/images/nig.png";

const Footer = () => {
  return (
    <footer className="bg-[#212121] py-4 text-white  mt-24">
      <MaxWidth className="max-w-[80rem] mb-8">
        {/*SUB:  TOP */}

        <div className="md:max-w-[35%] flex flex-col mt-4 gap-y-4">
          <h5 className="font-semibold lg:text-4xl"> Newsletter</h5>
          <p className="text-sm">
            Get the latest about SINC Partners, our startup Incubator program,
            Portfolio company offerings - straight into your inbox.
          </p>
          <div className="flex justify-center gap-4 border-[1px] rounded-full mt-6">
            <input
              type="text"
              placeholder="Enter your email address"
              name="newNewsletter"
              className="flex-1 px-4 border-none bg-transparent text-white outline-none min-h-12"
            />
            <Button
              variant="white"
              className="bg-[white] text-black font-semibold inline-flex rounded-full "
            >
              Subscribe
            </Button>
          </div>
        </div>
      </MaxWidth>

      <div className="md:grid grid-cols-4 text-[0.7rem] ">
        <div
          className=" col-span-3 border-x-0
         border-solid  border-2 border-white/20 last:border-r-0 py-8 px-[6%]
        "
        >
          <div className="md:grid grid-cols-4 gap-x-12">
            <div className="col-span-1">
              <Link to="/">
                <img src={Logo} alt="logo" className="w-15 h-10 mb-6" />
              </Link>
              <p>
                SINC Partners is a service incubation company connecting experts
                in product development and growth marketing willing to offer
                their services to amazing startups in exchange for minute equity
                (usually 0.5% to 2%)
              </p>
            </div>
            <div className="col-span-3 grid grid-cols-2 md:grid-cols-4 mb-4 mt-6 md:mt-0">
              {footerLinks.map((column, index) => (
                <FooterColumn
                  key={index}
                  title={column.title}
                  links={column.links}
                />
              ))}
            </div>
          </div>
        </div>
        <div
          className=" col-span-1 border-r-0
         border-solid  border-2 border-white/20 last:border-r-0 p-4
        "
        >
          <div className="flex flex-col flex-wrap pr-[20%]">
            <h5 className="font-bold text-sm py-[1rem] ">Locations</h5>
            <ul
              className=" flex gap-[7px] flex-col text-size-[0.9rem] font-light text-[white] pb-[1rem]
    "
            >
              <Link to="/" className="block text-[white]  ">
                Abuja, Nigeria
              </Link>
              <Link to="/" className="block text-[white] ">
                Lagos, Nigeria
              </Link>
              <Link to="/" className="block text-[white] pb-[7px]">
                Philadelphia, USA
              </Link>
            </ul>
            <div className="inline-flex justify-start">
              <span>
                <img src={accrediited} className="w-[80%]" alt="" />
              </span>
              <span>
                <img src={chat} alt="" />
                <p className="pt-6">Chat With Us</p>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center text-center ">
        <MaxWidth
          className=" pb-4 md:flex 
      text-xs py-6"
        >
          <div className="md:w-[80%] ">
            <p className=" pb-6">
              Guaranteed 2x on your service or cash investment, usually been the
              first to invest.
              <span className="font-bold">
                Get in early and SINC your guaranty!
              </span>
            </p>
            <span className="flex flex-col md:flex-row justify-center md:justify-start items-center">
              <p className="flex-1">
                &copy;{new Date().getFullYear()} SINC Partners Ltd. All rights
                reserved
              </p>
              <span className="text-white space-x-4 flex-1">
                <Link className="underline text-white" to="#">
                  Privacy Policy
                </Link>
                <Link className="underline text-white" to="#">
                  {" "}
                  Terms of Service
                </Link>
                <Link className="underline text-white" to="#">
                  Security
                </Link>
              </span>
            </span>
          </div>

          <div>
            <span className="flex md:justify-start flex-col md:flex-row justify-center items-center md:items-start mt-8 md:mt-0 md:ml-20">
              <img
                src={cacus}
                alt=""
                className="w-[40%] md:w-[20%] h-[20%]  pr-2"
              />
              <span>
                <p className="md:max-w-[70%] text-[0.6rem]">
                  We are a business built on the foundation of Christian values
                  and belief
                </p>
                <span className="flex gap-x-3 mt-5 justify-center md:justify-start">
                  {socialIcons.map((icon, i) => (
                    <span>
                      <img key={i} src={icon.icon} alt="" className="w-4" />
                    </span>
                  ))}
                </span>
              </span>
            </span>
          </div>
        </MaxWidth>
        <div className="flex items-center md:items-start justify-center">
          <p className="text-center text-[0.8rem]">Web in Nigeria</p>
          <img src={nig} className="pl-1 w-6 " alt="" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

interface Footer {
  title: string;
  links: string[];
}

const FooterColumn = ({ title, links }: Footer) => (
  <div className="flex flex-col flex-wrap ">
    <h5 className="font-bold text-sm pb-[1rem]">{title}</h5>
    <ul
      className="flex gap-[7px] flex-col text-size-[0.9rem]
 pb-[1rem]
    "
    >
      {links.map((link, index) => (
        <Link to="/" key={index} className="block  font-light text-[white]">
          {link}
        </Link>
      ))}
    </ul>
  </div>
);

export const footerLinks = [
  {
    title: "Platforms",
    links: [
      "Kofoundme",
      "InResidency",
      "Service Market",
      "Founders School",
      "Metty",
      "Grantty",
      "Boldtell",
      "Chekwa",
    ],
  },
  {
    title: "Initiatives",
    links: [
      "Jabi Plains",
      "Local Pricing Initiative",
      "Scholarship Program",
      "SSMN Pricing",
      "University STEM",
      "University InResidency ",
      "1M Nigeria Products",
      "Founders Festival ",
    ],
  },

  {
    title: "About Us",
    links: [
      "Who We Are",
      "Our People",
      "Concept Innovations",
      "Our Process",
      "Investors Network",
      "CSR & Events",
      "Career",
      "Contact",
    ],
  },

  {
    title: "More",
    links: [
      "Services",
      "Equity Jobs",
      "EIR Program",
      "Offers",
      "Innovation News",
      "FAQ",
      "Blog & Resources",
      "Press",
    ],
  },
];

const socialIcons = [
  {
    icon: facebook,
  },
  {
    icon: twitter,
  },
  {
    icon: instagram,
  },
  {
    icon: linkedin,
  },
  {
    icon: medium,
  },
  {
    icon: youtube,
  },
  {
    icon: twitch,
  },
];
