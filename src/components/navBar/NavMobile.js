import React from "react";

const hide = () => {
  document.getElementById("navMobile").classList.add("hide");
  document.getElementById("navMobile").classList.remove("show");
};
export default function NavMobile() {
  return (
    <div className="navMobile" id="navMobile">
      <div className="closeIcon" id="hide" onClick={hide}>
        <i class="fa-solid fa-xmark fa-2x"></i>
      </div>
      <div className="navMobileContent">
        <h1>GPT-3</h1>
        <ul>
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
        <div className="loginRegister">
          <button>Sign in</button>
          <button>Sign up</button>
        </div>
      </div>
    </div>
  );
}
