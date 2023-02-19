import React, { useState, useEffect } from "react";
import TextChanger from './TextChanger';
import { Link } from "react-router-dom";
import NavBar from './Navbar';
import Footer from "./Footer";
import ScrollBar from "./ScrollBar"

function Home() {
return(
    <>
<section className="main"> 
    <div className="announcement-bar">
        <p className="moving-text">WE ARE LAUNCHING ON THE 15TH OF MARCH! <span className="spacing"></span> PRE-ORDER NOW TO SAVE 15% <span className="spacing">
            </span> DEAL ENDS ON THE 10TH OF MARCH....<span className="spacing" style={{width: '400px'}}></span>GET A FREE NOTION TEMPLATE! <span className="spacing"></span> CLICK THE 'CLICK HERE'<span className="spacing"></span>NO TIME TO WASTE! <span className="spacing"></span>PRE ORDER RIGHT NOW</p></div>
    <NavBar />
    <ScrollBar />
    <div className="main-content">    
        <div className="left-box">
            <h1 id="mmm">Monk. Mode. Movement.</h1>
            <div className="welcome-changer">
                <h2 className="changing-text"></h2>
                <TextChanger />
            </div>
            <div className="text-gradient">        
                <h5>Its time for you to take your life into your own hands. No Excuses. You need to become the best version of yourself now. There is no time to waste.</h5>
                <Link className="button-text-1" to="/Buy"><button className="button-started">CLICK HERE!</button></Link>
            </div>
        </div>
    <div className="side-menu">
        <a href="index.html"><img className="side-menu-icons" alt="icon" src="./SVG/home.svg"></img></a>
        <a href="index.html"><img className="side-menu-icons" alt="icon" src="./SVG/share.svg"></img></a>
        <a href="index.html"><img className="side-menu-icons" alt="icon" src="./SVG/user.svg"></img></a>
        <a href="index.html"><img className="side-menu-icons" alt="icon" src="./SVG/slider.svg"></img></a>
        <a href="index.html"><img className="side-menu-icons" alt="icon" src="./SVG/help.svg"></img></a>
    </div>
      <div className="mock-up-course">
        <h2 className="mock-header">MONK MODE MOVEMENT</h2>
        <div className="hold">                
            <h2 className="status">Status:&nbsp;&nbsp;</h2><h2 className="status-1">IMPROVING</h2></div>
        <div className="mock-content">
            <p className="mock-header-content-heading">What are you waiting for...?</p>
        </div>
        <div className="mock-list">
            <a className="mock-list-headings">ENVIRONMENT</a>
            <a className="mock-list-headings">NURTITION</a>
            <a className="mock-list-headings">SLEEP</a>
            <a className="mock-list-headings">MENTAL HEALTH</a>
            <a className="mock-list-headings">MIND</a>
        </div>
        <div className="mock-content-1"> 
            <a className="completion">CONTENT TO LEARN</a>    
            <hr className="line-2"></hr>         
        </div>
        <div className="mock-content-1"> 
            <a className="completion">COURSE COMPLETION</a>    
            <hr className="line-2"></hr>
            <div className="animated-progress progress-blue">
                <span data-progress="85"></span>
              </div>                 
        </div>
        <div className="mock-content-2">                
            <p className="mock-text">What you will get from this course:
                <p className="mock-text-listing"> - Nice shit and other stuff</p>
                <p className="mock-text-listing"> - lots of cool thingys</p>
                <p className="mock-text-listing"> - would buy it ngl</p>
                <p className="mock-text-listing"> - good course for improvment</p>
                <p className="mock-text-listing"> - always good to improve</p>
            </p>
        </div>
    </div>
    </div>
    <div class="ball-container">
        <div class="ball ball-1"></div>
        <div class="ball ball-2"></div>
        <div class="ball ball-3"></div>
        <div class="ball ball-4"></div>
        <div class="ball ball-5"></div>
    </div>
    <Footer />
</section>
<section className="second-main">
    <h2 className="coming-soon">Coming soon...</h2>
</section>
</>
    )
}

export default Home;