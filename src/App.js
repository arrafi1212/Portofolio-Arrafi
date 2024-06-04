import React, { useState, useEffect, useRef } from "react";
import Typed from "typed.js";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Image } from "react-bootstrap";
import Vocafest from "./assets/voca-fest.png";
import TanakaGuitar from "./assets/tanaka-guitar.png";
import Css from "./assets/Css.png";
import Html from "./assets/Html.png";
import Figma from "./assets/Figma.png";
import Reactj from "./assets/React.png";
import Tailwind from "./assets/Tailwind.png";
import JS from "./assets/JS.png";

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
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const garisPjg = document.querySelector(".garis-pjg");
    const garisPjgsma = document.querySelector(".garis-pjgsma");
    const garisPjgPosition = garisPjg.getBoundingClientRect().top;
    const garisPjgsmaPosition = garisPjgsma.getBoundingClientRect().top;
    const screenPosition = window.innerHeight;

    if (garisPjgPosition < screenPosition) {
      garisPjg.classList.add("animate-line");
    }

    if (garisPjgsmaPosition < screenPosition) {
      garisPjgsma.classList.add("animate-line-sma");
    }
  };

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

      <div id="projects" className="My-work text-5xl text-center">
        <h1 className="ps mt-18 font-semibold">Projects</h1>
        <h3 className="title-ps text-2xl text-center pt-12 pb-8 font-normal">
          Front-End
        </h3>
      </div>

      <div className="Project-aing">
        <div class="container noselect mb-20">
          <div class="canvas">
            <div class="tracker tr-1"></div>
            <div class="tracker tr-2"></div>
            <div class="tracker tr-3"></div>
            <div class="tracker tr-4"></div>
            <div class="tracker tr-5"></div>
            <div class="tracker tr-6"></div>
            <div class="tracker tr-7"></div>
            <div class="tracker tr-8"></div>
            <div class="tracker tr-9"></div>
            <div class="tracker tr-10"></div>
            <div class="tracker tr-11"></div>
            <div class="tracker tr-12"></div>
            <div class="tracker tr-13"></div>
            <div class="tracker tr-14"></div>
            <div class="tracker tr-15"></div>
            <div class="tracker tr-16"></div>
            <div class="tracker tr-17"></div>
            <div class="tracker tr-18"></div>
            <div class="tracker tr-19"></div>
            <div class="tracker tr-20"></div>
            <div class="tracker tr-21"></div>
            <div class="tracker tr-22"></div>
            <div class="tracker tr-23"></div>
            <div class="tracker tr-24"></div>
            <div class="tracker tr-25"></div>
            <div href="https://example.com" id="card">
              <Image id="prompt" src={Vocafest} />
              <div class="title">
                Voca Fest Vol.2 adalah platform untuk turnamen tahunan yang
                diselenggarakan oleh SMK Ananda Bekasi. Web ini dirancang
                menggunakan React.js untuk memfasilitasi pendaftaran dan
                memberikan informasi lengkap tentang turnamen.
              </div>
            </div>
          </div>
        </div>

        <div class="container noselect mb-20">
          <div class="canvas">
            <div class="tracker tr-1"></div>
            <div class="tracker tr-2"></div>
            <div class="tracker tr-3"></div>
            <div class="tracker tr-4"></div>
            <div class="tracker tr-5"></div>
            <div class="tracker tr-6"></div>
            <div class="tracker tr-7"></div>
            <div class="tracker tr-8"></div>
            <div class="tracker tr-9"></div>
            <div class="tracker tr-10"></div>
            <div class="tracker tr-11"></div>
            <div class="tracker tr-12"></div>
            <div class="tracker tr-13"></div>
            <div class="tracker tr-14"></div>
            <div class="tracker tr-15"></div>
            <div class="tracker tr-16"></div>
            <div class="tracker tr-17"></div>
            <div class="tracker tr-18"></div>
            <div class="tracker tr-19"></div>
            <div class="tracker tr-20"></div>
            <div class="tracker tr-21"></div>
            <div class="tracker tr-22"></div>
            <div class="tracker tr-23"></div>
            <div class="tracker tr-24"></div>
            <div class="tracker tr-25"></div>
            <div id="card">
              <Image id="prompt" src={TanakaGuitar} />
              <div class="title">
                Tanaka Guitar adalah platform online yang menawarkan layanan
                jual beli dan memberikan layanan untuk pengguna untuk agar bisa
                memilih berbagai jenis gitar.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="education" className="education mt-20 mb-20">
        <h1 className="text-center text-5xl mt-10 font-semibold mb-6">
          Education
        </h1>
        <div className="Univ">
          <div className="univ-untill">
            <h2 className="edu-kanan text-2xl ml-14 mt-10">
              Universitas Bina Nusantara
            </h2>
            <div class="garis-pjg border-t-2 border-white mt-14"></div>
            <h3 className="untill text-base mr-10 mt-10">(2021 - Now)</h3>
          </div>
          <h3 className="ipk text-xs ml-14">IPK 3.18 </h3>
        </div>
        <div className="SHS">
          <div className="univ-untill">
            <h2 className="edu-kanan text-2xl ml-14 mt-10">
              SMAN 20 Kota Bekasi
            </h2>
            <div class="garis-pjgsma border-t-2 border-white mt-14"></div>
            <h3 className="untill text-base mr-10 mt-10">(2018 - 2021)</h3>
          </div>
        </div>
      </div>

      <div id="tools" className="Tools mb-20 mt-20">
        <h1 className="tools-kata mt-20 text-center text-5xl font-semibold">
          Familiar Tools
        </h1>
        <div className=" icon-tools mt-10 grid lg:grid-cols-3 place-items-center grid-cols-2">
          <Image
            class="flex flex-col items-center font-body text-[1.1rem]"
            src={Reactj}
          ></Image>
          <Image
            class="flex flex-col items-center font-body text-[1.1rem]"
            src={Css}
          ></Image>
          <Image
            class="flex flex-col items-center font-body text-[1.1rem]"
            src={Html}
          ></Image>
          <Image
            class="flex flex-col items-center font-body text-[1.1rem]"
            src={JS}
          ></Image>
          <Image
            class="flex flex-col items-center font-body text-[1.1rem]"
            src={Tailwind}
          ></Image>
          <Image
            class="flex flex-col items-center font-body text-[1.1rem]"
            src={Figma}
          ></Image>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
