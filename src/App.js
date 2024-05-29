import React, { useEffect, useRef } from "react";
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

  return (
    <div className="App">
      <Navbar />
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
    </div>
  );
}

export default App;
