import React, { useState, useEffect, useRef } from "react";
import Typed from "typed.js";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  const typedElement = useRef(null);

  useEffect(() => {
    const options = {
      strings: ["Web Developer", "Data Scientist"],
      typeSpeed: 40,
      backSpeed: 40,
      loop: true,
    };

    const typed = new Typed(typedElement.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className="App">
      <Navbar />
      <div className={`scroll-to-top ${isVisible ? "visible" : ""}`}>
        <button onClick={scrollToTop} title="Go to top">
          &#8593;
        </button>
      </div>
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>

      <div className="welcome">
        <h1 className="txt-depan text-start pl-20 w-11/12 text-6xl font-semibold">
          Hi, <br />
          I'm <span className="nama">Arrafi</span>
          <br />
          <span ref={typedElement} className="typed-element font-normal"></span>
        </h1>
      </div>

      <div className="about-me font-thin mb-18">
        <p>
          Hi! I am Arrafi Fakhri Hadi, an undergraduate student Computer Science
          at BINUS University. Personally, I'm happy to do it learn new things.
          I am a student taking a class on databases technologies and embedded
          systems for IoT. Not only that, me also learn front-end usually using
          the React.js framework. For now I am learning several frameworks and
          deepening database tools.
        </p>
      </div>

      <div className="My-work font-semibold text-5xl text-center">
        <h1 className="ps mt-18">Projects</h1>
      </div>

      <div className="Project-aing">
        <div class="card">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M20 5H4V19L13.2923 9.70649C13.6828 9.31595 14.3159 9.31591 14.7065 9.70641L20 15.0104V5ZM2 3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934ZM8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11Z"></path>
          </svg>
          <div class="card__content">
            <p class="card__title">Card Title</p>
            <p class="card__description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco.
            </p>
          </div>
        </div>
        <div class="card">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M20 5H4V19L13.2923 9.70649C13.6828 9.31595 14.3159 9.31591 14.7065 9.70641L20 15.0104V5ZM2 3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934ZM8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11Z"></path>
          </svg>
          <div class="card__content">
            <p class="card__title">Card Title</p>
            <p class="card__description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco.
            </p>
          </div>
        </div>
        <div class="card">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M20 5H4V19L13.2923 9.70649C13.6828 9.31595 14.3159 9.31591 14.7065 9.70641L20 15.0104V5ZM2 3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934ZM8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11Z"></path>
          </svg>
          <div class="card__content">
            <p class="card__title">Card Title</p>
            <p class="card__description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
