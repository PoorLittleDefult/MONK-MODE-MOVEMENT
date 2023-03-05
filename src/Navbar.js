import React from "react";
import logo from "./text-logo.png";
import { Link, useLocation } from "react-router-dom";

function NavBar({ isScrolled }) {
  const location = useLocation();
  const isBuyPage = location.pathname === "/buy";
  return (
    <>
    <header className={isScrolled ? "scrolled" : ""}>
      <nav>
        <Link to="/">
          <img src={logo} className="logo-text" alt="text-logo"></img>
        </Link>
      </nav>
      <div className="navi-2">
        <a className="far-text">  OUR VISION </a>
        <a className="far-text"> PRICING </a>
        <a className="far-text"> ABOUT </a>
        <Link className="far-text" to="/Buy">
          {" "}
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
        <a href="#"><li>Home</li></a>
        <a href="#"><li>About</li></a>
        <a href="#"><li>Info</li></a>
        <a href="#"><li>Contact</li></a>
        <a href="https://erikterwan.com/" target="_blank"><li>Show me more</li></a>
        </ul>
    </div>
    </>
  );
}

export default NavBar;
