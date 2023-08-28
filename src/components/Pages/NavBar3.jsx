
import React, { useState, useEffect } from "react";
import { IoMenu, IoClose } from "react-icons/io5";

const Nav = () => {
  let Links = [
    { name: "HOME", link: "/" },
    { name: "SERVICE", link: "/" },
    { name: "ABOUT", link: "/" },
    { name: "BLOG'S", link: "/" },
    { name: "CONTACT", link: "/" },
  ];
  let [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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

  const isMobile = window.innerWidth <= 768; // Adjust the breakpoint as needed

  return (
    <div className={`w-full fixed top-0 left-0 ${isMobile ? (scrolled ? "hidden" : "bg-transparent text-gray-400") : (scrolled ? "bg-white text-black" : "")}`}>
      <div className="md:flex items-center justify-between py-4 md:px-10 px-7">
        <div className={`font-bold text-2xl cursor-pointer flex items-center font-[Poppins] ${scrolled ? "text-black" : "text-white"}`}>
          <span>Majer Fitness</span>
        </div>

        {isMobile && (
          <div onClick={() => setOpen(!open)} className={`text-3xl absolute right-8 top-4 cursor-pointer  md:hidden transition-all duration-500 ${open ? "transform rotate-180" : ""}`}>
            {open ? <IoClose /> : <IoMenu />}
          </div>
        )}

        {isMobile ? (
          <ul className={`md:flex md:items-center md:pb-0  pb-0 absolute md:static left-0 right-0 md:w-auto md:pl-0 pl-0 transition-all duration-500 ease-in ${open ? "top-[64px] bg-white text-black" : "-top-[490px]"}`}>
            {Links.map((link) => (
              <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
                <a
                  href={link.link}
                  className={` ${
                    open ? "text-black" : "text-gray-400"
                  } hover:text-gray-300 duration-500`}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        ) : (
          <ul className=" pr-10 md:flex md:items-center md:pb-0 pb-0 md:w-auto md:pl-0 pl-0">
            {Links.map((link) => (
              <li key={link.name} className=" md:ml-8 text-xl md:my-0 my-7">
                <a
                  href={link.link}
                  className={`${
                    scrolled ? "text-black" : "text-white"
                  } hover:text-gray-300 duration-500`}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Nav;

