import React, { useState, useEffect, useRef} from "react";
import handbook from "./course-box.png"
import TextChanger from './TextChanger';
import NavBar from './NavBar';
import Footer from "./Footer";
import ContactUs from "./ContactUs";


function Contact(){
    return(
    <>
    <div className="main">
        <NavBar />
            <div className="main-mid">
            <h2 className="template-header">Get 20% off when the course releases!</h2>
            <h3 className="template-sub-header">Fill out the form below</h3>
                <ContactUs />
            </div>
        </div>
        <Footer />
    </>
    )
}

export default Contact;