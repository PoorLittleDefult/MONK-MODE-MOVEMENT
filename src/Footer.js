import React from "react";
import { Link, useLocation } from "react-router-dom";

function Footer() {
  return (
    <footer>
    <div className="social">
        <a className="navi-extra" href="https://instagram.com">INSTAGRAM</a>
        <a className="navi-extra">•</a>
        <a className="navi-extra" href="https://Facebook.com">FACEBOOK</a>
        <a className="navi-extra">•</a>
        <a className="navi-extra" href="https://twitter.com">TWITTER</a></div>
    <div className="tos">
        <a className="navi-extra" href="">Privacy Policy</a>
        <a className="navi-extra" href="">//</a>
        <a className="navi-extra" href="">Terms Of Service</a>
    </div>
    </footer>
  );
}

export default Footer;
