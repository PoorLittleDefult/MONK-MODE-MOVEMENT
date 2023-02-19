import React from "react";
import logo from "./text-logo.png"
import { Link, useLocation } from "react-router-dom";

function NavBar() {
  const location = useLocation();
  const isBuyPage = location.pathname === "/buy";

  return (
    <header>
      {/* <div className="container-menu"> 
        <input type="checkbox" id="active"></input>
        <label htmlFor="active" className="menu-btn" onClick="menuOpen"><span></span></label>
        <label htmlFor="active" className="close"></label>
      </div> */}
      <nav>
        <Link to="/"><img src={logo} className="logo-text" alt="text-logo"></img></Link>
      </nav>
      <div className="navi-2">
          <a className="far-text"> • OUR VISION •</a>
          <a className="far-text"> • PRICING •</a>
          <a className="far-text"> • ABOUT •</a>   
          <Link className="far-text" to="/Buy"> • CONTACT •</Link>  
        </div>
      <div className="header-right">
        <a className="button-text"><button onClick="buynow2()" className="button-buy">Buy Now -></button></a>
      </div>
      <div className="wrapper">
        <ul>
          <li><a href="buy.html">PRODUCTS</a></li>
          <li><a href="/public/vision.html">OUR VISION</a></li>
          <li><a href="#">CONTACT US</a></li>
          <li><a href="#">FAQs</a></li>
        </ul>
      </div>
    </header>
  );
}

export default NavBar;
