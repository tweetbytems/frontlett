import React from "react";
import MaxWidth from "./General/MaxWidth";
import Logo from "../assets/logo/logo.png";
import Button from "./Button";

const FooterLinks = ["Careers", "Privacy Policy", "Terms & Conditions"];

const Footer = () => {
  return (
    <footer className="bg-blue-900 py-16 text-white/50 text-center mt-20">
      <MaxWidth className="max-w-[30rem]">
        {/*SUB:  TOP */}
        <div className="flex items-center justify-center md:gap-10 gap-5">
          <div className="flex items-center text-blue-700 bg-white rounded-full px-3">
            <img src={Logo} alt="logo" className="w-8 h-8" />
            <span className="font-bold text-xl">ducativ</span>
          </div>

          <div className="w-[1px] h-10 bg-white/35" />
          <p className="text-white font-semibold">
            SIMPLIFY <br /> MANAGEMENT
          </p>
        </div>
        {/*SUB:  MIDDLE */}
        <div className="md:my-20 my-10">
          <p className="font-semibold mb-4">Subscribe to get our Newsletter</p>
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="Your Email"
              name="newNewsletter"
              className="flex-1 px-4 border border-white/50 rounded-md bg-transparent text-white outline-none"
            />
            <Button variant="blue" className="bg-blue-700 inline-flex ">
              Sign up
            </Button>
          </div>
        </div>

        {/*SUB: BOTTOM */}
        <div className="text-center">
          <ul className="flex justify-center mb-4">
            {FooterLinks.map((link) => (
              <li
                key={link}
                className="border-r md:px-4 px-2 border-white/20 last:border-none last:pr-0"
              >
                {link}
              </li>
            ))}
          </ul>
          <p>&copy;{new Date().getFullYear()}Class Technologies Inc.</p>
        </div>
      </MaxWidth>
    </footer>
  );
};

export default Footer;
