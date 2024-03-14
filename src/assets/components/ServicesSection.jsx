import React from "react";
import "../styles/ServicesSection.css";
import "../styles/fonts.css";
import { Canvas } from "@react-three/fiber";
import Model1 from "./Model";
import Model2 from "./Model2";
import { OrbitControls, PresentationControls, Float } from "@react-three/drei";

function ServicesSection() {
  let handleClick = (e) => {
    e.stopPropagation();
    console.log("clicked");
    console.log(e.target);
    window.location.href = "https://buy.stripe.com/test_eVa7vWfPZdqof8A289";
  };

  return (
    <section id="Services" className="services-section">
      <h2 style={{ fontFamily: "Robot9000Italic-YzxE8" }}>Our Services</h2>
      <h3 style={{ fontFamily: "Robot9000Italic-YzxE8" }}>Product LineUp</h3>
      <div className="products">
        <div className="product">
          <h4 style={{ fontFamily: "Robot9000Italic-YzxE8" }}>Mini Grid | X</h4>
          <Canvas width={"100vw"}  camera={{ position: [0, 1, 1] }}>
            <ambientLight />
            <PresentationControls snap={true}>
              <Float>
                <Model1 position={[0, 0, 0]} rotation={[0, 0, 0]} />
              </Float>
            </PresentationControls>
          </Canvas>
          <button onClick={handleClick} className="stylish-button">
            Product 1 description
          </button>
        </div>
        <div className="product">
          <h4 style={{ fontFamily: "Robot9000Italic-YzxE8" }}>POD | X</h4>
          <Canvas camera={{ position: [0, 1, 1] }}>
            <ambientLight />
            <PresentationControls snap={true}>
              <Float>
                <Model2 position={[0, 0, 0]} rotation={[0, 0, 0]} />
              </Float>
            </PresentationControls>
          </Canvas>
          <button onClick={handleClick} className="stylish-button">
            Product 2 description
          </button>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;