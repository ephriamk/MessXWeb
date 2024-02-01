import React from "react";
import "../styles/ServicesSection.css";
import podx from "../../../public/PODX.png";
import MiniGrid from "../../../public/MiniGridX.png";
import '../styles/fonts.css'; // or import './path-to-your-css-file.css';

function ServicesSection() {

  let handleClick = (e) => {
    e.stopPropagation();
    console.log("clicked");
    console.log(e.target);
  }


  return (
    <section id="Services" className="services-section">
      <h2 style={{ fontFamily:'Robot9000Italic-YzxE8' }}>Our Services</h2>
      <h3 style={{ fontFamily:'Robot9000Italic-YzxE8' }}>Product LineUp</h3>
      <div className="products">
        <div className="product">
          <h4 style={{ fontFamily:'Robot9000Italic-YzxE8' }}>Mini Grid | X</h4>
          <img src={MiniGrid}></img>
          
          <button onClick={handleClick} className="stylish-button">Product 1 description</button>
          
          
        </div>
        
        <div className="product">
          <h4 style={{ fontFamily:'Robot9000Italic-YzxE8' }} >POD | X</h4>
          <img src={podx}></img>
          <button onClick={handleClick} className="stylish-button">Product 2 description</button>

        </div>
      </div>
      {/* Service cards or list */}
    </section>
  );
}

export default ServicesSection;
