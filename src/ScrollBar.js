import React, { useState, useEffect } from "react";

function ScrollBar() {
    const [scrolledPercentage, setScrolledPercentage] = useState(0);
    const [isTextUnblurred, setIsTextUnblurred] = useState(false);
  
    const handleScroll = () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrolledPercentage(scrolled);
  
      // Unblur text as user scrolls
      if (winScroll > 100) {
        setIsTextUnblurred(true);
      } else {
        setIsTextUnblurred(false);
      }
    };
  
    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
  
    const textClassName = isTextUnblurred ? "scroll-container-text unblur" : "scroll-container-text";

  return (
    <>
    <div className="progress-container">
    <div className="progress-bar" id="myBar" style={{ width: `${scrolledPercentage}%` }}></div>
    </div>
    </>
  );
}

export default ScrollBar;
