import React from "react";
import "../styles/Footer.css";
import instagram from "../assets/instagram.svg";
import youtube from "../assets/tiktok.svg";
import tiktok from "../assets/youtube.svg";

function Footer() {
  return (
    <div className="footer ">
      <div className="footer-main">
        <div className="alamat-footer">
          <h3 style={{ fontSize: "18px" }}>SMK ANANDA BEKASI</h3>
          <p>Jl. Prof. Mr. Muh. Yamin No. 21 Duren</p>
          <p>Jaya, Bekasi Timur</p>
        </div>
        <div className="account-footer">
          <h3 style={{ fontSize: "18px" }}>Our Account</h3>
          <div className="account-icons">
            <div className="account">
              <a
                href="https://www.instagram.com/osissmkananda?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={instagram}
                  alt="Instagram"
                  className="logo-iconFoot"
                />
              </a>
            </div>
            <div className="account">
              <a
                href="https://www.tiktok.com/@smkananda?is_from_webapp=1&sender_device=pc"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={tiktok} alt="TikTok" className="logo-iconFoot" />
              </a>
            </div>
            <div className="account">
              <a
                href="https://www.youtube.com/@smkananda"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={youtube} alt="YouTube" className="logo-iconFoot" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="lower-main">
        <hr className="lines"></hr>
        <p>
          &copy;{new Date().getFullYear} SMK Ananda Bekasi | All rights reserved
        </p>
      </div>
    </div>
  );
}

export default Footer;
