import Feature from "../feature/Feature";
import "./whatisGPT.css";

export default function WhatisGPT() {
  return (
    <div className="WhatisGPT__gradient-bg">
      <div className="container">
        <div id="WhatisGPT">
          <div className="GPTHeader">
            <h2>What is GPT-3</h2>
            <p>
              We so opinion friends me message as delight. Whole front do of
              plate heard oh ought. His defective nor convinced residence own.
              Connection has put impossible own apartments boisterous. At
              jointure ladyship an insisted so humanity he. Friendly bachelor
              entrance to on by.
            </p>
          </div>
          <div className="headline">
            <h3>The possibilities are beyond your imagination</h3>
            <p>Explore The Library</p>
          </div>
          <div className="GPTFooter">
            <div className="card">
              <h4>Chatbots</h4>
              <p>
                We so opinion friends me message as delight. Whole front do of
                plate heard oh ought.
              </p>
            </div>
            <div className="card">
              <h4>Knowledgebase</h4>
              <p>
                At jointure ladyship an insisted so humanity he. Friendly
                bachelor entrance to on by. As put impossible own apartments b
              </p>
            </div>
            <div className="card">
              <h4>Education</h4>
              <p>
                At jointure ladyship an insisted so humanity he. Friendly
                bachelor entrance to on by. As put impossible own apartments b{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <Feature />
    </div>
  );
}
