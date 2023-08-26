import React, { useState, useEffect } from "react";
import { IoMenu, IoClose } from "react-icons/io5";

const NavBar2 = () => {
  let Links = [
    { name: "HOME", link: "/" },
    { name: "SERVICE", link: "/" },
    { name: "ABOUT", link: "/" },
    { name: "BLOG'S", link: "/" },
    { name: "CONTACT", link: "/" },
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
          ? "bg-white text-black  font-[Poppins]"
          : "bg-transparent text-white font-[Poppins]"
      } fixed top-0 left-0 w-full flex justify-between py-4 px-5 md:py-1 md:px-10 z-10 `}
    >
      <div className="md:text-2xl md:flex md:items-center  hover:text-gray-400 cursor-pointer transition-all duration-500 ease-in">
        Majer Fitness
      </div>


      <div className="md:hidden  ">
        {menuOpen ? (
          <IoClose
            className={`${
              scrolled
                ? "bg-white text-black font-[Poppins]"
                : "bg-transparent text-white font-[Poppins]"
            } cursor-pointer text-2xl `}
            onClick={() => setMenuOpen(!menuOpen)}
          />
        ) : (
          
          <IoMenu
            className={`${
              scrolled
                ? "bg-white text-black font-[Poppins]"
                : "bg-transparent text-white font-[Poppins]"
            } cursor-pointer text-2xl`}
            onClick={() => setMenuOpen(!menuOpen)}
          />
        )}
      </div>


      <div
        className={`${
          menuOpen ? "w-full  block origin-top-right absolute right-0  rounded-md shadow-lg bg-white " : "hidden"
        } md:flex flex-col md:flex-row `}
      >
        <ul
          className={`md:flex md:items-center md:pb-0 py-5 md:pt-1 absolute md:static left-0 right-0 md:w-auto md:pl-0 pl-0 transition-all duration-500 ease-in ${
            menuOpen ? "top-[40px] shadow-lg bg-white text-black " : "-top-[h-screen]"
          }`}
        >
          {Links.map((link) => (
            <li
              key={link.name}
              className="md:pr-16  md:text-lg md:flex md:items-center py-3 hover:text-gray-400 cursor-pointer "
            >
              <a href={link.link}>{link.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NavBar2;
