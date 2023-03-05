import React from "react";
import background from "./background.svg"
import mockbook from "./mockbook.png"
import logo from "./text-logo.png"
import TextChanger from './TextChanger';
import { Link } from "react-router-dom";
import NavBar from './NavBar';
import Footer from "./Footer";
import ContactUs from "./ContactUs";
import MobileMenu from "./MobileMenu";



function Home(){
    return(
    <>
        <div className="main">
        <NavBar />
        <div className="main-content">
        <h1 className="main-heading">MONK. MODE. MOVEMENT.</h1>
        <div className="h5-container">
        <h5>Its time for you to take your life into your own hands. No Excuses. You need to become the best version of yourself now. There is no time to waste.</h5></div>
        <a className="button-text-1" target="_blank" href="https://whop.com/"><button className="button-started">CLICK HERE!</button></a>
        </div>
        </div>
        <div className="main-mid"></div>
        <div className="main-bottom">
            <h2 className="template-header">Get our FREE Notion template now!</h2>
            <h3 className="template-sub-header">Fill out the form below</h3>
            <h4 className="template-sub-header-1">THE TIME IS NOW...</h4>
        <h4 className="right">Lifestyle | Mindset | Health</h4>
                <ContactUs />
        </div>
    </>
    )
}

export default Home;