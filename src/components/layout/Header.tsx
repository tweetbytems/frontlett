import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate, useLocation } from "react-router-dom";
import { IoMdClose, IoMdMenu } from "react-icons/io";
import { twMerge } from "tailwind-merge";

import Button from "../Button";
import MaxWidth from "./MaxWidth";

import Logo from "../../assets/logo/logo.png";

type HeaderLinkTypes = {
  name: string;
  link: string;
};

const HEADERLINKS: HeaderLinkTypes[] = [
  {
    name: "About",
    link: "#",
  },
  {
    name: "SIP",
    link: "#",
  },
  {
    name: "Studio",
    link: "#",
  },
  {
    name: "SEEQ",
    link: "#",
  },
  {
    name: "Platforms",
    link: "#",
  },
  {
    name: "Initiatives",
    link: "#",
  },
  {
    name: "More",
    link: "/",
  },
];

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [displayedLinks, setDisplayedLinks] = useState(HEADERLINKS);
  const navigate = useNavigate();

  useEffect(() => {
    handleResize(); // Initial setup
    window.addEventListener("resize", handleResize); // Add resize event listener

    // Clean up the event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    showMenu
      ? document.body.classList.add("no-scroll")
      : document.body.classList.remove("no-scroll");
  }, [showMenu]);

  const handleResize = () => {
    if (window.innerWidth > 840 && window.innerWidth < 1048) {
      setDisplayedLinks(HEADERLINKS.slice(2, 7)); // Show first 4 links on smaller screens
    } else if (window.innerWidth > 768 && window.innerWidth < 840) {
      setDisplayedLinks(HEADERLINKS.slice(4, 7)); // Show all links on larger screens
    } else {
      setDisplayedLinks(HEADERLINKS); // Show all links on larger screens
    }
  };

  return (
    <header className="sticky top-0 z-[200]">
      <nav className="n bg-[#F9F9F9] py-4 relative z-[200] font-semibold text-lg">
        <MaxWidth className="flex items-center justify-between">
          <div className="flex">
            <Link to="/" className="flex items-center w-32">
              {/* Adjusted logo structure */}
              <img src={Logo} alt="logo" className="h-auto w-[50%]" />
            </Link>

            {/* Mobile menu */}
            <ul
              className={twMerge(
                "absolute right-0 -top-[100vh] bg-zinc-100 md:bg-transparent py-10 px-5 md:p-0 flex flex-col md:flex-row gap-x-2 gap-y-4 md:static md:items-center w-full z-[50] md:w-auto transition-all duration-1000 ease-linear",
                showMenu && "top-[100%] transition-all duration-1000"
              )}
            >
              {displayedLinks.map((link: HeaderLinkTypes) => (
                <li key={link.name}>
                  <a href={link.link} className="px-2 py-2">
                    {link.name}
                  </a>
                </li>
              ))}

              <div className="flex flex-col gap-y-4 md:hidden">
                {/* Mobile buttons */}
                <Button
                  variant="white"
                  className="bg-sinc-teal"
                  onClick={() => navigate("/login")}
                >
                  Sinc With Us
                </Button>
                <Button variant="blue" onClick={() => navigate("/signup")}>
                  Apply to SIP 1.0
                </Button>
              </div>
            </ul>
          </div>

          <div className="hidden md:flex gap-2">
            {/* Moved desktop buttons to align with the logo */}
            <Button
              variant="white"
              className="bg-sinc-teal px-3 md:px-4 text-sm"
              onClick={() => navigate("/login")}
            >
              Sinc With Us
            </Button>
            <Button
              variant="blue"
              className="px-3 text-sm md:text-md"
              onClick={() => navigate("/signup")} // Fixed typo in navigate function call
            >
              Apply to SIP 1.0
            </Button>
          </div>

          {/* Hamburger menu button */}
          <button
            className="md:hidden ml-auto"
            onClick={() => setShowMenu(!showMenu)}
          >
            {showMenu ? <IoMdClose size={35} /> : <IoMdMenu size={35} />}
          </button>
        </MaxWidth>
      </nav>
      {/* Mobile menu background overlay */}
      <div
        onClick={() => setShowMenu(false)}
        className={twMerge(
          "md:hidden bg-black opacity-70 fixed inset-0 w-full h-full z-[30]",
          showMenu ? "block" : "hidden"
        )}
      />
    </header>
  );
};

export default Header;
