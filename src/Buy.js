import React from "react";
import Banner from "./long-banner.png";
import Home from "./Home";
import NavBar from "./Navbar";
import ContactUs from "./ContactUs";
import logo from "./text-logo.png"
import { Link, useLocation } from "react-router-dom";
import Footer from "./Footer";

function Buy(){
    return(
        <>
        <header style={{
            top: "0", display: "none"
        }}>
            <div className="container-menu"> 
            <input type="checkbox" id="active"></input>
            <label htmlFor="active" className="menu-btn" onClick="menuOpen"><span></span></label>
            <label htmlFor="active" className="close"></label>
            </div>
            <nav>
            <Link to="/"><img src={logo} className="logo-text" alt="text-logo"></img></Link>
            </nav>
            </header>       
    <section className="buy-main">
        <img className="banner" alt="mmm-hand-book" src={Banner}></img>
        <div className="payment-container">
            <div className="redirect-container">
                    <Link className="home-redirect" to="/">Home > </Link><a className="home-redirect"> Buy</a>
                </div>
                <h2 id="payment-heading">Notion Template *FREE* </h2>
                <div className="line"></div>
                <p className="payment">$0.00 Totally FREE!</p> 
                <p className="line-through">$20.00 USD</p> 
                <span className="new">NEW</span> 
                <div className="box-container">    
                    {/* <span className="sale">Save 15%</span> */}
                </div>
                {/* <a className="button-text-1" href="buy.html"><button className="button-buynow">Buy Now</button></a> */}
                {/* <a className="button-text-2" target="_blank" href="https://dash.whop.com/passes?tabSlider=Pages"><button className="button-cart">PayPal</button></a>  */}
                <p className="secure">- Secure Payment -</p>
                <ContactUs />
            </div>
            <Footer />
        </section>
        </>
    );
}

export default Buy;