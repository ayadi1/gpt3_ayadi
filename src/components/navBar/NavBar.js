import React from "react";
import "./navBar.css";
import NavMobile from "./NavMobile";

const show = () => {
  document.getElementById("navMobile").classList.add("show");
  document.getElementById("navMobile").classList.remove("hide");
};
export default function NavBar() {
  return (
    <nav id="navBar">
      <h1>GPT-3</h1>
      <ul className="navDesktop">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#what">What is GPT?</a>
        </li>
        <li>
          <a href="#ai">Open AI</a>
        </li>
        <li>
          <a href="#case">Case Studies</a>
        </li>
        <li>
          <a href="#Library">Library</a>
        </li>
      </ul>
      <div className="loginRegister navDesktop">
        <button>Sign in</button>
        <button>Sign up</button>
      </div>
      <div className="navIcon" id="show" onClick={show}>
        <i className="fa-solid fa-bars fa-2x"></i>
      </div>
      <NavMobile />
    </nav>
  );
}
