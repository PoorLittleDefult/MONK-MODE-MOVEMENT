import React, { useState } from 'react';
import './App.css';

function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <label htmlFor="menu-checkbox" className="menuButton" onClick={handleMenuToggle}>
        <input id="menu-checkbox" type="checkbox" checked={isOpen} readOnly />
        <span className="top"></span>
        <span className="mid"></span>
        <span className="bot"></span>
      </label>
      <div className={`menuContainer ${isOpen ? 'open' : ''}`}>
        <ul className="menu">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
    </>
  );
}

export default MobileMenu;
