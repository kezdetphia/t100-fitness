
// import logo from "../assets/img/logo.png";
// import navIcon1 from "../assets/img/nav-icon1.svg";
// import navIcon2 from "../assets/img/nav-icon2.svg";
// import navIcon3 from "../assets/img/nav-icon3.svg";
// import github from "../assets/img/github.svg";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars } from 'react-icons/fa';



const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-purple-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">Majer Fitness</div>
        {/* Hamburger icon */}
        <div className="md:hidden">
          <button
            className="text-white focus:outline-none"
            onClick={toggleMenu}
          >
            <FaBars size={24} />
          </button>
        </div>
        {/* Navigation dropdown */}
        <ul
          className={`md:flex space-x-4 md:block ${
            menuOpen ? 'block' : 'hidden'
          } absolute md:static top-16 right-0 md:top-0 md:right-0 bg-purple-500 md:bg-transparent md:p-0`}
        >
          <li>
            <a href="#" className="text-white hover:underline block md:inline">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:underline block md:inline">
              About
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:underline block md:inline">
              Services
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:underline block md:inline">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};


export default NavBar;




   


// export const NavBar = () => {
//   const [activeLink, setActiveLink] = useState("home");
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const onScroll = () => {
//       if (window.scrollY > 50) {
//         setScrolled(true);
//       } else {
//         setScrolled(false);
//       }
//     };

//     window.addEventListener("scroll", onScroll);

//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   const onUpdateActiveLink = (value) => {
//     setActiveLink(value);
//   };



//     <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
//       <div className="container mx-auto">
//         <div className="flex items-center">
//           <Link to="#home" className="navbar-brand">
//             {/* <img src={null} alt="Logo" className="h-16 w-16" /> */}
//             <p>home</p>
//           </Link>
//           <button
//             className="navbar-toggler md:hidden ml-auto"
//             aria-controls="basic-navbar-nav"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>
//         </div>
//         <div className="hidden md:flex md:space-x-6 ml-auto">
//           <Link
//             to="#home"
//             className={`navbar-link ${
//               activeLink === "home" ? "active" : ""
//             }`}
//             onClick={() => onUpdateActiveLink("home")}
//           >
//             Home
//           </Link>
//           <Link
//             to="#skills"
//             className={`navbar-link ${
//               activeLink === "skills" ? "active" : ""
//             }`}
//             onClick={() => onUpdateActiveLink("skills")}
//           >
//             Skills
//           </Link>
//           <Link
//             to="#projects"
//             className={`navbar-link ${
//               activeLink === "projects" ? "active" : ""
//             }`}
//             onClick={() => onUpdateActiveLink("projects")}
//           >
//             Projects
//           </Link>
//         </div>
//         <div className="hidden md:flex md:items-center md:ml-6 space-x-4">
//           <a href="https://www.linkedin.com/in/markfeher8/" target="_blank" className="social-icon">
//             <img src={null} alt="LinkedIn" className="h-6 w-6" />
//           </a>
//           <a href="https://github.com/kezdetphia" target="_blank" className="social-icon">
//             <img src={null} alt="GitHub" className="h-6 w-6" />
//           </a>
//           <Link to="#connect">
//             <button className="btn-cta">
//               <span>Let's Connect</span>
//             </button>
//           </Link>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default NavBar
