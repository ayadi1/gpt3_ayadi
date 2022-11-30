import React, { useEffect, useState } from "react";
import "./blog.css";
import articles from "./articles.json";
import { Article } from "../../components";
export default function Blog() {
  const [articlesData, setArticlesData] = useState([]);
  useEffect(() => {
    setArticlesData(articles);
  }, []);
  return (
    <div className="container">
      <div id="blog">
        <h2>A lot is happening, We are blogging about it.</h2>
        <div className="cards">
          {articlesData.map(a=><Article content={a.content} date={a.date} image={a.image} key={a.id} />)}
        </div>
      </div>
    </div>
  );
}
