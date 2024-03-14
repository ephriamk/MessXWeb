// AnimatedArrow.js
import React from 'react';
import '../styles/AnimatedArrow.css'; // Make sure to create this CSS file in the same directory

const AnimatedArrow = () => {
    return (
        <div className="arrow-container">
            <div className="arrow"></div>
            <div className="arrow"></div>
            <div className="arrow"></div>
        </div>
    );
};

export default AnimatedArrow;
