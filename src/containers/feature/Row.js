import React from "react";

export default function Row({ headline, content }) {
  return (
    <div className="row">
      <h3>{headline}</h3>
      <p>{content}</p>
    </div>
  );
}
