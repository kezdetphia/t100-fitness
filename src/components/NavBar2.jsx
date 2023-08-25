import React, { useState, useEffect } from "react";

const NavBar2 = () => {
  let Links = [
    { name: "HOME", link: "/" },
    { name: "SERVICE", link: "/" },
    { name: "ABOUT", link: "/" },
    { name: "BLOG'S", link: "/" },
    { name: "CONTACT", link: "/" },
  ];
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

  return (
    <div
      className={`${
        scrolled ?  "bg-white text-black " : "bg-transparent text-white font-[Poppins]"
      } fixed top-0 left-0 w-full flex justify-between py-4 px-5 md:py-6 md:px-10 `}
    >
      
     <div className="">Majer Fitness</div>
     <div className="links">
      <ul className="flex">
        {Links.map((link)=>(
          <li key={link.name} className="pr-16 hover:text-gray-400 cursor-pointer">
            <a href={link.link}>
              {link.name}
            </a>
        </li>
        ))}

      </ul>
     </div>
    </div>
  );
};

export default NavBar2;
