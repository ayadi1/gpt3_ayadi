import React, { useEffect, useState } from "react";
import "./feature.css";
import Row from "./Row";

import data from "./data.json";

export default function Feature() {
  const [features, setFeatures] = useState([]);
  useEffect(() => {
    setFeatures(data);
  }, []);

  return (
    <div className="feature__gradient--bg">
      <div className="container">
        <div id="feature">
          <div className="headline">
            <h2>
              The Future is Now and You Just Need To Realize It. Step into
              Future Today & Make it Happen.
            </h2>
            <p>Request Early Access to Get Started</p>
          </div>
          <div className="content">
            {features.map((f) => (
              <Row headline={f.headline} content={f.content} key={f.headline} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
