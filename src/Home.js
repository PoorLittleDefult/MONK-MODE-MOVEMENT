import React from "react";
import background from "./background.svg"
import TextChanger from './TextChanger';
import { Link } from "react-router-dom";
import NavBar from './NavBar';
import Footer from "./Footer";
import ContactUs from "./ContactUs";



function Home(){
    return(
    <>
     {/* <div style={{ backgroundImage:`url(${background})` }} className="main-left" src={background} alt="background">  */}
        <div className="main-left" src={background} alt="background">
        {/* <NavBar /> */}
        <label for="check" class="menuButton">
            <input id="check" type="checkbox"></input>
            <span className="top"></span>
            <span class="mid"></span>
            <span className="bot"></span>
        </label>
        <div className="main-content">
        <h1 className="main-heading">Monk. Mode. Movement.</h1>
        <h5>Its time for you to take your life into your own hands. No Excuses. You need to become the best version of yourself now. There is no time to waste.</h5>
        <Link className="button-text-1" to="HT"><button className="button-started">CLICK HERE!</button></Link>
        </div>
        </div>
        <div className="main-right">
            <h2 className="template-header">Get this FREE template now!</h2>
            <h3 className="template-sub-header">Fill out the form below</h3>
            <h4 className="template-sub-header-1">THE TIME IS NOW...</h4>
        <ContactUs />
        {/* <p className="right">Terms of Service // Privacy Policy</p> */}
        </div>
    </>
    )
}

export default Home;