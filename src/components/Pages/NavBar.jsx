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
          ? "bg-white text-black  font-[Poppins] border-b shadow-b-xl"
          : "bg-transparent text-white font-[Poppins]"
      } fixed top-0 left-0 w-full flex justify-between py-4 px-5 md:py-1 md:px-10 z-10 `}
    >
      <div className="md:text-2xl md:flex md:items-center hover:text-gray-400 cursor-pointer transition-all duration-500 ease-in">
        Majer Fitness
      </div>

      <div className="md:hidden">
        {menuOpen ? (
          <IoClose
            className={`${
              scrolled
                ? "bg-white text-black font-[Poppins]"
                : "bg-transparent text-white font-[Poppins]"
            } cursor-pointer text-2xl`}
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
        className={`md:flex flex-col md:flex-row transition-all duration-500 ease-in ${
          menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[-20px]"
        } md:opacity-100 md:translate-y-0 absolute right-0 top-[calc(100%)] md:top-auto md:relative w-full md:w-auto md:bg-transparent bg-white md:shadow-none shadow-lg z-20`}
      >
        <ul className="md:flex md:items-center md:pb-0 md:pt-1 md:static left-0 right-0 md:w-auto md:pl-0 pl-0 py-6 border shadow-lg md:shadow-none md:border-none">
          {Links.map((link) => (
            <li
              key={link.name}
              className={`md:pr-16 md:flex-grow md:text-lg md:flex md:items-center py-3 ${
                scrolled ? "md:text-black" : "md:text-white"
              } md:border-none text-black hover:text-gray-400 cursor-pointer`}
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
