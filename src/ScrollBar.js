import React, { useState, useEffect } from "react";

function ScrollBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrolled, setScrolled] = useState(0);

  const handleScroll = () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const newScrolled = (winScroll / height) * 100;
    setScrolled(newScrolled);
    const threshold = 20; // set the threshold value here
    setIsScrolled(newScrolled > (height * threshold / 100));
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <>
      <div className="progress-container">
        <div className="progress-bar" style={{ width: `${isScrolled ? 100 : scrolled}%` }}></div>
      </div>
    </>
  );
}

export default ScrollBar;
