import React from "react";
import "../styles/ServicesSection.css";
import podx from "../../../public/PODX.png";
import MiniGrid from "../../../public/MiniGridX.png";

function ServicesSection() {

  let handleClick = (e) => {
    e.stopPropagation();
    console.log("clicked");
    console.log(e.target);
  }


  return (
    <section id="Services" className="services-section">
      <h2>Our Services</h2>
      <h3>Product LineUp</h3>
      <div className="products">
        <div className="product">
          <h4>Mini Grid | X</h4>
          <img src={MiniGrid}></img>
          
          <button onClick={handleClick} className="stylish-button">Product 1 description</button>
          
          
        </div>
        
        <div className="product">
          <h4>POD | X</h4>
          <img src={podx}></img>
          <button onClick={handleClick} className="stylish-button">Product 2 description</button>

        </div>
      </div>
      {/* Service cards or list */}
    </section>
  );
}

export default ServicesSection;
