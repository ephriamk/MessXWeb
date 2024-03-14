import React, { useState, Suspense } from "react";
import "../styles/About.css";
import { Canvas } from "@react-three/fiber";
import { PresentationControls, Float, useProgress } from "@react-three/drei";

import Model2 from "./Model2";
import Model from "./Model";

const ModelLoader = ({ children }) => {
  const { progress } = useProgress();

  return (
    <div className="model-container">
      {progress < 100 ? (
        <div className="energy-bars">
          <div className="energy-bar"></div>
          <div className="energy-bar"></div>
          <div className="energy-bar"></div>
        </div>
      ) : (
        children
      )}
    </div>
  );
};

const ServicesSection = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleLearnMoreClick = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseClick = () => {
    setSelectedProduct(null);
  };

  let handleClick = (e) => {
    e.stopPropagation();
    console.log("clicked");
    console.log(e.target);
    window.location.href = "https://buy.stripe.com/test_eVa7vWfPZdqof8A289";
  };

  return (
    <section className="services-section">
      <div className="container">
        <div className="energy-strip"></div>
        <h3 className="section-title">Product Line-Up</h3>
        <div
          className={`products ${selectedProduct ? "product-selected" : ""}`}
        >
          {selectedProduct !== "podX" && (
            <div
              className={`product ${
                selectedProduct === "miniGrid" ? "selected" : ""
              }`}
              onClick={() => handleLearnMoreClick("miniGrid")}
            >
              <h4 className="product-title">Mini Grid | X</h4>
              {selectedProduct === "miniGrid" ? (
                <Canvas camera={{ position: [0, 1, 1] }}>
                  <ambientLight />
                  <PresentationControls snap={true}>
                    <Float>
                      <Model position={[0, 0, 0]} rotation={[0, 0, 0]} />
                    </Float>
                  </PresentationControls>
                </Canvas>
              ) : (
                <div className="product-image">
                  {/* Replace with your mini grid image */}
                  <img src="path/to/minigrid-image.jpg" alt="Mini Grid X" />
                </div>
              )}

              <p className="product-description">
                MESSX offers a mobile power system that utilizes solar energy
                with the capacity to power homes, commercial and industrial
                buildings, telecommunications, disaster relief, charge electric
                vehicles and more.
              </p>
              {selectedProduct !== "miniGrid" && (
                <button
                  className="btn btn-primary"
                  onClick={() => handleLearnMoreClick("miniGrid")}
                >
                  Learn More
                </button>
              )}
            </div>
          )}
          {selectedProduct !== "miniGrid" && (
            <div
              className={`product ${
                selectedProduct === "podX" ? "selected" : ""
              }`}
              onClick={() => handleLearnMoreClick("podX")}
            >
              <h4 className="product-title">POD | X</h4>
              {selectedProduct === "podX" ? (
                <Canvas camera={{ position: [0, 1, 1] }}>
                  <Suspense>
                    <ambientLight />
                    <PresentationControls snap={true}>
                      <Float>
                        <Model2 position={[0, 0, 0]} rotation={[0, 0, 0]} />
                      </Float>
                    </PresentationControls>
                  </Suspense>
                </Canvas>
              ) : (
                <div className="product-image">
                  {/* Replace with your POD X image */}
                  <img src="path/to/podx-image.jpg" alt="POD X" />
                </div>
              )}
              <p className="product-description">
                {/* Add a brief description of POD X */}
              </p>
              {selectedProduct !== "podX" && (
                <button
                  className="btn btn-primary"
                  onClick={() => handleLearnMoreClick("podX")}
                >
                  Learn More
                </button>
              )}
            </div>
          )}
        </div>
        {selectedProduct && (
          <div className="buttonsBottom">
            <button className="btn btn-secondary" onClick={handleClick}>
              Check Price
            </button>
            <button className="btn btn-secondary" onClick={handleCloseClick}>
              Close
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ServicesSection;
