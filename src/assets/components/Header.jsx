import React, { useState, useEffect } from 'react';
import "../styles/Header.css";
import logo from "../../../public/MESSX.png";

function Header() {

  return (
    <div id="AboutSection" className='header'>
      
      <img src={logo} alt="MESSX Logo" className="logo" />
      <nav>
        <ul>
          <li>
            <a href="AboutSection.jsx">Home</a>
          </li>
          <li>
            <a href="HeroSection.jsx">About</a>
          </li>
          <li>
            <a href="ServicesSection.jsx">Products</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
