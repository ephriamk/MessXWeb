// ElectricPulsesContainer.js
import React, { useState, useEffect } from 'react';
import ElectricPulse from './ElectricPulse';

const generateRandomStyle = () => {
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;
  return {
    left: `${Math.random() * screenWidth}px`,
    top: `${Math.random() * screenHeight}px`,
    transform: `rotate(${Math.random() * 360}deg)`,
  };
};

const ElectricPulsesContainer = () => {
  const [pulses, setPulses] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newPulse = <ElectricPulse key={Math.random()} style={generateRandomStyle()} />;
      setPulses((prevPulses) => [newPulse, ...prevPulses]);

      if (pulses.length > 20) { // Adjust based on performance
        setPulses((prevPulses) => prevPulses.slice(0, 20));
      }
    }, 200); // More frequent for lively effect

    return () => clearInterval(interval);
  }, [pulses.length]);

  return <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', overflow: 'hidden' }}>{pulses}</div>;
};

export default ElectricPulsesContainer;
