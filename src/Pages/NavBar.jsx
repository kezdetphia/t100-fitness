import React, { useState, useEffect } from "react";
import { IoMenu, IoClose } from "react-icons/io5";
import HeaderText from "../components/HeaderText";
import { Link } from "react-scroll";

const NavBar = () => {
  let Links = [
    { name: "HOME", link: "banner" },
    { name: "ABOUT", link: "about" },
    { name: "SERVICES", link: "services" },
    { name: "VLOG", link: "/" },
    { name: "CONTACT", link: "contactUs" },
  ];

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 70) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`${
        scrolled
          ? "bg-white text-black  font-poppins border-b shadow-b-xl"
          : "bg-transparent text-white font-poppins"
      } fixed top-0 left-0 w-full flex justify-between py-1 px-3 md:py-1 md:px-10 z-10 `}
    >
      <div className="font-exo2 md:text-2xl md:flex md:items-center cursor-pointer transition duration-500 hover:scale-105 py-3">
        <Link
          to={"banner"}
          spy={true}
          smooth={true}
          offset={-65}
          duration={500}
          className="text-customred "
        >
          MAJER
        </Link>{" "}
        <Link
          to={"banner"}
          spy={true}
          smooth={true}
          offset={-65}
          duration={500}
          className="ml-2"
        >
          FITNESS
        </Link>
      </div>
      <div className="md:hidden pt-3 pr-3  ">
        {menuOpen ? (
          <IoClose
            className={`${
              scrolled
                ? "bg-white text-black font-poppins "
                : "bg-transparent text-customgray font-poppins "
            } cursor-pointer text-2xl`}
            onClick={() => setMenuOpen(!menuOpen)}
          />
        ) : (
          <IoMenu
            className={`${
              scrolled
                ? "bg-white text-black font-poppins "
                : "bg-transparent text-customgray font-poppins "
            } cursor-pointer text-2xl`}
            onClick={() => setMenuOpen(!menuOpen)}
          />
        )}
      </div>

      <div
        className={`md:flex flex-col md:flex-row transition-all duration-500 ease-in   ${
          menuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-[-20px]"
        } md:opacity-100 md:translate-y-0 absolute right-0 top-[calc(100%)] md:top-auto md:relative w-full md:w-auto md:bg-transparent bg-white md:shadow-none shadow-lg z-20`}
      >
        <ul className=" md:flex md:items-center md:pb-0 md:pt-1 md:static left-0 right-0 md:w-auto md:pl-0 pl-0 py-6 border shadow-lg md:shadow-none md:border-none">
          {Links.map((link) => (
            <li
              key={link.name}
              className={`font-poppins font-bold md:pr-16 md:flex-grow md:text-sm md:flex md:items-center py-3 transition-all duration400 ease-in  hover:scale-110 ${
                scrolled ? " md:text-black" : "md:text-customgray"
              } md:border-none text-black hover:text-customred cursor-pointer`}
            >
              <Link
                to={link.link}
                spy={true}
                smooth={true}
                offset={-65}
                duration={500}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
