import React from "react";
import { NavBar } from "../../components";
import "./header.css";
import ai from "../../assets/ai.png";
import Companies from "../companies/Companies";
export default function Header() {
  return (
    <div id="header">
      <div className="container">
        <NavBar />
        <div className="imageContent">
          <div className="content">
            <h2>Let’s Build Something amazing with GPT-3 OpenAI</h2>
            <p>
              Yet bed any for travelling assistance indulgence unpleasing. Not
              thoughts all exercise blessing. Indulgence way everything joy
              alteration boisterous the attachment. Party we years to order
              allow asked of.
            </p>
            <div className="form">
              <input type="text" placeholder="Your Email Address" />
              <button>Get Started</button>
            </div>
          </div>
          <div className="image">
            <img src={ai} alt="" srcset="" />
          </div>
        </div>
      </div>
      <Companies />
    </div>
  );
}
