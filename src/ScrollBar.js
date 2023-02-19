import React, { useState, useEffect } from "react";

function ScrollBar() {
  const [scrolledPercentage, setScrolledPercentage] = useState(0);

  const handleScroll = () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    setScrolledPercentage(scrolled);

    // Hide the item when the user has scrolled past a certain percentage
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="progress-container">
        <div className="progress-bar" style={{ width: `${scrolledPercentage}%` }}></div>
      </div>
    </>
  );
}

export default ScrollBar;
