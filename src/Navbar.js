import React from "react";
import logo from "./text-logo.png";
import { Link, useLocation } from "react-router-dom";

function NavBar({ isScrolled }) {
  const location = useLocation();
  const isBuyPage = location.pathname === "/buy";
  return (
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
  );
}

export default NavBar;
