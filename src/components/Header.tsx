import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { IoMdClose, IoMdMenu } from "react-icons/io";
import { twMerge } from "tailwind-merge";
import Button from "./Button";
import Logo from "../assets/logo/logo.png";
import MaxWidth from "./General/MaxWidth";

type HeaderLinkTypes = {
  name: string;
  link: string;
};

const HEADERLINKS: HeaderLinkTypes[] = [
  {
    name: "Pricing",
    link: "#",
  },
  {
    name: "Benefits",
    link: "#",
  },
  {
    name: "FAQs",
    link: "#",
  },
  {
    name: "Contact us",
    link: "#",
  },
];

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    showMenu
      ? document.body.classList.add("no-scroll")
      : document.body.classList.remove("no-scroll");
  }, [showMenu]);

  return (
    <header className="sticky top-0 z-[200]">
      <nav className="bg-zinc-100 py-4 relative z-[200]">
        <MaxWidth className="flex items-center justify-between">
          <Link to="/" className="flex items-center text-blue-700">
            <img src={Logo} alt="logo" className="w-10 h-10" />
            <span className="font-bold text-2xl">ducativ</span>
          </Link>

          <button
            className="md:hidden block"
            onClick={() => setShowMenu(!showMenu)}
          >
            {showMenu ? <IoMdClose size={35} /> : <IoMdMenu size={35} />}
          </button>
          <ul
            className={twMerge(
              "absolute right-0  -top-[100vh] bg-zinc-100 md:bg-transparent py-10 px-5 md:p-0 flex flex-col md:flex-row gap-x-5 gap-y-4 md:static  md:items-center w-full z-[50] md:w-auto  transition-all duration-500 ease-linear",
              showMenu && "top-[100%] transition-all duration-500"
            )}
          >
            {HEADERLINKS.map((link: HeaderLinkTypes) => (
              <li key={link.name}>
                <NavLink
                  to={link.link}
                  className="px-2 py-2 inline-flex w-full"
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
            <Button variant="white" onClick={() => navigate("/login")}>
              Log in
            </Button>
            <Button variant="blue" onClick={() => navigate("/signup")}>
              Sign up
            </Button>
          </ul>
        </MaxWidth>
      </nav>
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
