import React from "react";

export default function Article({ content, date, image }) {
  return (
    <div className="card">
      <img src={`/images/${image}`} alt="" />
      <div className="data">
        <p>{date}</p>
        <h4>{content}</h4>
        <h6>Read Full Article</h6>
      </div>
    </div>
  );
}
