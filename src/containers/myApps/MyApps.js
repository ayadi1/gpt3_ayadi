import React from "react";
import "./myApps.css";
import possibility from "../../assets/possibility.png";

export default function MyApps() {
  return (
    <div className="container">
      <div id="myApps">
        <div className="image">
          <img src={possibility} alt="" />
        </div>
        <div className="content">
          <h5>Request Early Access to Get Started</h5>
          <h4>The possibilities are beyond your imagination</h4>
          <p>
            Yet bed any for travelling assistance indulgence unpleasing. Not
            thoughts all exercise blessing. Indulgence way everything joy
            alteration boisterous the attachment. Party we years to order allow
            asked of.
          </p>
          <h6>Request Early Access to Get Started</h6>
        </div>
      </div>
    </div>
  );
}
