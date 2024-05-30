import React, { useState } from "react";
import "../styles/Navbar.css";
// import logoSekolah from "../assets/ananda.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
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
              <a href="/">Home</a>
            </li>
            <li>
              <a href="./Rules">Projects</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
