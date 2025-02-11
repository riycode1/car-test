"use client";

import { useEffect, useState } from "react";

// next image
// react scroll
import { Link } from "react-scroll";

// media query hook
import { useMediaQuery } from "react-responsive";

// icons
import { BiMenuAltRight, BiX } from "react-icons/bi"; // Corrected import statement

export default function Header() {
  const [header, setHeader] = useState(false);
  const [nav, setNav] = useState(false);

  const desktopMode = useMediaQuery({
    query: "(min-width: 1300px)",
  });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setHeader(true);
      } else {
        setHeader(false);
      }
    };

    // Add event listener
    window.addEventListener("scroll", handleScroll);

    // Remove event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Added empty dependency array to ensure useEffect runs once

  return (
    <header
      className={`${
        header ? "bg-white shadow-md py-2" : "bg-transparent shadow-none py-7"
      } fixed w-full max-w-[1920px] mx-auto z-18 transition-all duration-300`}
    >
      <div className="xl:container mx-auto flex flex-col xl:flex-row xl:items-center xl:justify-between">
        <div className="flex justify-between items-center px-4">
          <Link
            to="home"
            smooth={desktopMode}
            spy={true}
            className="cursor-pointer text-black"
          >
            GaadiSansar
          </Link>
          {/*nav open menu */}
          <div
            onClick={() => setNav(!nav)}
            className="cursor-pointer xl:hidden"
          >
            {nav ? (
              <BiX className="text-4xl" />
            ) : (
              <BiMenuAltRight className="text-4xl" />
            )}
          </div>
        </div>
        {/*nav*/}
        <nav
          className={`${
            nav ? "max-h-max py-8 px-4 xl:py-0 xl:px-0" : "max-h-0 xl:max-h-max"
          } flex flex-col w-full bg-white gap-y-7 text-black
          overflow-hidden font-semibold xl:font-medium xl:flex-row xl:w-max xl:gap-x-8 xl:h-max 
          xl:bg-transparent xl:pb-0 transition-all duration-150 text-center 
          xl:text-left uppercase text-sm xl:text-[15px] xl:normal-case
        `}
        >
          <Link
            className="cursor-pointer"
            to="home"
            activeClass="active"
            smooth={desktopMode}
            spy={true}
          >
            Home
          </Link>
          <Link
            className="cursor-pointer"
            to="About"
            activeClass="active"
            smooth={desktopMode}
            spy={true}
          >
            About
          </Link>
          <Link
            className="cursor-pointer"
            to="Service"
            activeClass="active"
            smooth={desktopMode}
            spy={true}
          >
            Service Centers
          </Link>
          <Link
            className="cursor-pointer xl:hidden btn btn-primary btn-sm max-w-[164px] mx-auto"
            to="CarListings"
            activeClass="active"
            smooth={desktopMode}
            spy={true}
          >
            SEE ALL LISTINGS
          </Link>
          <Link
            className="cursor-pointer"
            to="contact"
            activeClass="active"
            smooth={desktopMode}
            spy={true}
          >
            Contact
          </Link>

          <Link
            className="cursor-pointer"
            to="why"
            activeClass="active"
            smooth={desktopMode}
            spy={true}
          >
            Why us
          </Link>

          <Link
            className="cursor-pointer"
            to="admin"
            activeClass="active"
            smooth={desktopMode}
            spy={true}
          >
            Admin
          </Link>
        </nav>
      </div>
    </header>
  );
}
