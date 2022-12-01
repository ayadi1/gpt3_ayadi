import React from "react";
import "./footer.css";
import logo from "../../assets/logo.svg";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="headlines">
          <h2>Do you want to step in to the future before others</h2>
          <p>Request Early Access</p>
        </div>
        <div className="links">
          <div className="logoData">
            <img src={logo} alt="" />
            <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
          </div>
          <nav>
            <div className="list">
              <h3>Links</h3>
              <ul>
                <li>Overons</li>
                <li>Social Media</li>
                <li>Counters</li>
              </ul>
            </div>
            <div className="list">
              <h3>Company</h3>
              <ul>
                <li>Contact</li>
                <li>Privacy Policy</li>
                <li>Terms & Conditions</li>
              </ul>
            </div>
            <div className="list">
              <h3>Get in touch</h3>
              <ul>
                <li>Crechterwoord K12 182 DK Alknjkcb</li>
                <li>ayadiossama44@gmail.com</li>
                <li>+212626005713</li>
              </ul>
            </div>
          </nav>
        </div>
        <p className="rights">
          © 2021 GPT-3{" "}
          <a href="https://www.linkedin.com/in/oussama-ayadi1/">
            ayadi oussama
          </a>
          . All rights reserved.
        </p>
      </div>
    </footer>
  );
}
