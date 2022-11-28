import "./companies.css";
import google from "../../assets/google.png";
import dropbox from "../../assets/dropbox.png";
import atlassian from "../../assets/atlassian.png";
import shopify from "../../assets/shopify.png";
import slack from "../../assets/slack.png";
export default function Companies() {
  return (
    <div id="companies">
      <div className="container">
        <ul>
          <li>
            <img src={google} alt="" />
          </li>
          <li>
            <img src={dropbox} alt="" />
          </li>
          <li>
            <img src={atlassian} alt="" />
          </li>
          <li>
            <img src={shopify} alt="" />
          </li>
          <li>
            <img src={slack} alt="" />
          </li>
        </ul>
      </div>
    </div>
  );
}
