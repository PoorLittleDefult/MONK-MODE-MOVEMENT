import React, { useState, useEffect, useRef} from "react";
import handbook from "./course-box.png"
import TextChanger from './TextChanger';
import { Link } from "react-router-dom";
import NavBar from './NavBar';
import Footer from "./Footer";
import ContactUs from "./ContactUs";
import MobileMenu from "./MobileMenu";
import ScrollBar from "./ScrollBar";


function Home(){
    const h1Ref = useRef();

    useEffect(() => {
      const handleScroll = () => {
        if (window.pageYOffset >= 10) {
          h1Ref.current.style.transform = "translateY(300px)";
        } else {
          h1Ref.current.style.transform = "translateY(0px)";
        }
      };
  
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
    return(
    <>
    <div className="main">
        <NavBar />
        <div className="main-content">
            <h1 ref={h1Ref} className="main-heading">MONK. MODE. MOVEMENT.</h1>
            <h2 className="main-heading-h2">Change your <span className="gradient-text-h2-1">own</span> <span className="gradient-text-h2-2">reality</span></h2>
                <div className="h5-container">
                <h5>Its time for you to take your life into your own hands. No Excuses. You need to become the best version of yourself now.</h5>
                </div>
            <a className="button-text-1" target="_blank" href=""><button className="button-started">CLICK HERE!</button></a>
        </div>
            {/* <div className="main-mid">
            <h2 className="template-header">Get our FREE Notion template now!</h2>
            <h3 className="template-sub-header">Fill out the form below</h3>
            <h4 className="template-sub-header-1">THE TIME IS NOW...</h4>
                <ContactUs />
            </div> */}
        </div>
        <div className="main-middle">
            <div className="course-box">
                <h2 className="course-box-h2">MONK'S LIFESTYLE COURSE</h2>
                <h3 className="course-box-h3">LIFESTYLE | MINDSET | HEALTH</h3>
                <h4 className="course-box-h4">Get it Now for $49</h4>
                <div className="course-buy-box">
                    <div className="container">
                    <a className="button-text-1" target="_blank" href=""><button className="button-course">Buy</button></a>
                        <span className="learn-text">Learn More -></span>
                    </div>
                </div>
            </div>
            <img src={handbook} className="book" alt="book"></img>
        </div> 
        <div className="main-bottom">
            <h2 className="included-heading">What's included in the course?</h2>
            <p className="included-text">When you buy the course you gain access to all of the information and features below. </p>
            <div className="included-container">
            <div className="included-wrapper">
                <h3 className="info-heading">Health</h3>
                <p className="bullet-point">✓ Bio Hacking Secrets</p>
                <p className="bullet-point">✓ Nutrition Guide</p>
                <p className="bullet-point">✓ Sleep and rest</p>
            </div>
            <div className="included-wrapper">
                <h3 className="info-heading">Environment</h3>
                <p className="bullet-point">✓ Upgrade your environment</p>
                <p className="bullet-point">✓ Routine Optimization</p>
                <p className="bullet-point">✓ Sleep and rest</p>
            </div>
            <div className="included-wrapper">
                <h3 className="info-heading">Mental & Mindset</h3>
                <p className="bullet-point">✓ Social application</p>
                <p className="bullet-point">✓ Proven Mental Health fixes</p>
                <p className="bullet-point">✓ Key Mindset ideas</p>
            </div>

         </div>
        <div className="card-container">
        <div class="plan">
		<div class="inner">
			<span class="pricing">
				<span>
					<small>Worth: </small> $199
				</span>
			</span>
			<p class="title">Testosterone Lifestyle</p>
			<p class="info">Ultimate guide day to day on tesostrone optimization</p>
			<ul class="features">
				<li>
					<span class="icon">
						<svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
							<path d="M0 0h24v24H0z" fill="none"></path>
							<path fill="currentColor" d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
						</svg>
					</span>
					<span>Day to day optimization</span>
				</li>
				<li>
					<span class="icon">
						<svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
							<path d="M0 0h24v24H0z" fill="none"></path>
							<path fill="currentColor" d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
						</svg>
					</span>
					<span>Testosterone <strong>Secrets</strong></span>
				</li>
				<li>
					<span class="icon">
						<svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
							<path d="M0 0h24v24H0z" fill="none"></path>
							<path fill="currentColor" d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
						</svg>
					</span>
                    <span><strong>Boosting </strong>methods</span>
				</li>
			</ul>
			<div class="action">
			<a class="button" href="#">
				Get it now!
			</a>
			</div>
		</div>
        </div>

        <div class="plan">
		<div class="inner">
			<span class="pricing">
				<span>
					<small>Worth: </small> $99
				</span>
			</span>
			<p class="title">Environment upgrade</p>
			<p class="info">Ultimate guide day to day on tesostrone optimization</p>
			<ul class="features">
				<li>
					<span class="icon">
						<svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
							<path d="M0 0h24v24H0z" fill="none"></path>
							<path fill="currentColor" d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
						</svg>
					</span>
					<span><strong>10</strong> environment hacks</span>
				</li>
				<li>
					<span class="icon">
						<svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
							<path d="M0 0h24v24H0z" fill="none"></path>
							<path fill="currentColor" d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
						</svg>
					</span>
					<span>Testosterone <strong>Secrets</strong></span>
				</li>
				<li>
					<span class="icon">
						<svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
							<path d="M0 0h24v24H0z" fill="none"></path>
							<path fill="currentColor" d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
						</svg>
					</span>
					<span>Boosting methods</span>
				</li>
			</ul>
			<div class="action">
			<a class="button" href="#">
				Get it now!
			</a>
			</div>
		</div>
        </div>

        
        <div class="plan">
		<div class="inner">
			<span class="pricing">
				<span>
					<small>Worth: </small> $149
				</span>
			</span>
			<p class="title">Health 101</p>
			<p class="info">Ultimate guide day to day on tesostrone optimization</p>
			<ul class="features">
				<li>
					<span class="icon">
						<svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
							<path d="M0 0h24v24H0z" fill="none"></path>
							<path fill="currentColor" d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
						</svg>
					</span>
					<span>Day to day optimization</span>
				</li>
				<li>
					<span class="icon">
						<svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
							<path d="M0 0h24v24H0z" fill="none"></path>
							<path fill="currentColor" d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
						</svg>
					</span>
					<span>Nutrition <strong>Cheat codes</strong></span>
				</li>
				<li>
					<span class="icon">
						<svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
							<path d="M0 0h24v24H0z" fill="none"></path>
							<path fill="currentColor" d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
						</svg>
					</span>
					<span><strong>Boosting </strong>methods</span>
				</li>
			</ul>
			<div class="action">
			<a class="button" href="#">
				Get it now!
			</a>
			</div>
		</div>
        </div>
    </div>
    <h3 className="limited">ALL FOR $49 FOR A <span className="gradient-text-h2-2">LIMITED</span> TIME!</h3>
    </div>  
        <Footer />
    </>
    )
}

export default Home;