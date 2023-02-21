import React, { useState, useEffect } from "react";

function ScrollBar() {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    setIsScrolled(scrolled > 20);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="progress-container">
        <div className="progress-bar" style={{ width: `${isScrolled ? 100 : 0}%` }}></div>
      </div>
    </>
  );
}

export default ScrollBar;
