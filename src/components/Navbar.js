import React, { useState } from "react";
import "../styles/Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: "smooth",
      });
    }
    setIsOpen(false); // Close the navbar after clicking a link
  };

  return (
    <div>
      <nav className="">
        <div className="navbar-container">
          <button
            className={`hamburger hamburger--collapse ${
              isOpen ? "is-active" : ""
            }`}
            type="button"
            onClick={toggleNavbar}
          >
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </button>
          <ul className={`navbar-menu ${isOpen ? "open" : ""}`}>
            <li>
              <a href="#" onClick={() => scrollToSection("welcome")}>
                Home
              </a>
            </li>
            <li>
              <a href="#" onClick={() => scrollToSection("projects")}>
                Projects
              </a>
            </li>
            <li>
              <a href="#" onClick={() => scrollToSection("education")}>
                Education
              </a>
            </li>
            <li>
              <a href="#" onClick={() => scrollToSection("tools")}>
                Familiar Tools
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
