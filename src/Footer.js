import React from "react";
import { Link, useLocation } from "react-router-dom";
import ScrollBar from "./ScrollBar";

function Footer() {
  return (
    <footer>
      <ScrollBar />
      <h3 className="scroll-explore" style={{ opacity: 1 }}>
        scroll to explore!
      </h3>
      <div className="container_mouse">
        <span className="mouse-btn">
          <span className="mouse-scroll"></span>
        </span>
      </div>
      <div className="social">
        <a className="navi-extra" href="https://instagram.com">
          INSTAGRAM
        </a>
        <a className="navi-extra">•</a>
        <a className="navi-extra" href="https://Facebook.com">
          FACEBOOK
        </a>
        <a className="navi-extra">•</a>
        <a className="navi-extra" href="https://twitter.com">
          TWITTER
        </a>
      </div>
      <div className="tos">
        <a className="navi-extra" href="">
          Privacy Policy
        </a>
        <a className="navi-extra" href="">
          //
        </a>
        <a className="navi-extra" href="">
          Terms Of Service
        </a>
      </div>
    </footer>
  );
}

export default Footer;
