// ElectricPulse.js
import React from "react";
import "../styles/ElectricPulse.css";

const generateRandomPath = () => {
  let path = "M0 10";
  let x = 0,
    y = 10;
  for (let i = 0; i < 5; i++) {
    // Creates 5 segments
    x += Math.random() * 20 + 10; // Random x increment
    y = Math.random() > 0.5 ? 0 : 20; // Random y position
    path += ` L${x} ${y}`;
  }
  return path;
};

const ElectricPulse = ({ style }) => {
  const path = generateRandomPath();

  return (
    <div className="electric-pulse" style={style}>
      <svg viewBox="0 0 100 20" xmlns="http://www.w3.org/2000/svg">
        <path
          d={path}
          stroke="url(#electricGradient)"
          strokeWidth="1"
          fill="none"
        >
          <animate
            attributeName="stroke-dashoffset"
            from="100"
            to="0"
            dur="2s"
            repeatCount="indefinite"
          />
        </path>
        <defs>
          <linearGradient id="electricGradient" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#ffffff00" />
            <stop offset="50%" stopColor="#00ffff" />
            <stop offset="100%" stopColor="#ffffff00" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default ElectricPulse;
