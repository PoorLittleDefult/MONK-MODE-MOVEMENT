import React, { useState, useEffect } from "react";
import logo from "./Monk -01.jpg";
import textlogo from "./text-logo.png";
import { Link, useLocation } from "react-router-dom";

function NavBar() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    document.getElementById("far-text").style.color = "black";
  }

  return (
    <>
      <header>
        <nav>
          <div className="logo-container">
            <Link to="/">
              <img src={textlogo} className="logo-text" alt="text-logo"></img>
              <img src={logo} className="logo" alt="logo"></img>
            </Link>
          </div>
        </nav>
        <div className="navi-2">
          <a id="far-text">PRICING</a>
          <Link id="far-text" to="/WhyUs">
            WHY BUY?
          </Link>
          <Link id="far-text" to="/ContactUs">
            CONTACT
          </Link>
        </div>
        <div className="header-right">
          <a className="button-text">
            <button onClick="buynow2()" className="button-buy">
              Buy Now ->
            </button>
          </a>
        </div>
      </header>
      <div id="menuToggle">
        <input type="checkbox" />
        <span></span>
        <span></span>
        <span></span>
        <ul id="menu">
          <a href="#">
            <li>OUR VISION</li>
          </a>
          <a href="#">
            <li>PRICING</li>
          </a>
          <a href="#">
            <li>ABOUT</li>
          </a>
          <a href="#">
            <li>CONTACT</li>
          </a>
        </ul>
      </div>
    </>
  );
}

export default NavBar;
