import React from "react";
import Banner from "./long-banner.png";
import { Link} from "react-router-dom";
import ContactUs from "./ContactUs";


function Buy(){
    return(
        <>
    <section className="buy-main">
        <img className="banner" alt="mmm-hand-book" src={Banner}></img>
        <div className="payment-container">
        <div className="template-container">
            <div className="redirect-container">
                <Link className="home-redirect" to="/">Home > </Link><a className="home-redirect"> Buy</a>
            </div>
                <h2 id="payment-heading">Notion Template *FREE* </h2>
                <div className="line"></div>
                <p className="payment">$0.00 Totally FREE!</p> 
                <p className="line-through">$20.00 USD</p> 
                <span className="new">NEW</span> 
                <p className="secure">- Secure Processing -</p>
             </div>
            <ContactUs />
        </div>
    </section>
    </>
    );
}

export default Buy;