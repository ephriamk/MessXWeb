import Header from "./assets/components/Header";
import ServicesSection from "./assets/components/ServicesSection";
import Testimonials from "./assets/components/Testimonials";
import Intro from "./assets/components/Intro";
import RotatingBox from "./assets/components/RotatingBox";
import Footer from "./assets/components/Footer";
import React, { useRef, useState } from "react";
import { OrbitControls } from "@react-three/drei";

import { Canvas, useFrame } from "@react-three/fiber";
import PricingPage from "./assets/components/PricingPage";
import ThreeJSOne from "./assets/components/ThreeJSOne";
import ContactForm from "./assets/components/ContactForm";
import Deployments from "./assets/components/Deployments";

import "./App.css";
import About from "./assets/components/About";
import ElectricPulsesContainer from "./assets/components/ElectricPulseContainer";
// import BoxOne from "./assets/components/BoxOne";
// ... import other components

function App() {
  return (
    <div className="app">
      <ElectricPulsesContainer />
      {/* <Header /> */}
      <Intro />
      <Deployments />
      {/* <ServicesSection /> */}
      <About />
      <ContactForm />
      {/* <ThreeJSOne /> */}
      <Footer />
      {/* Other components */}
    </div>
  );
}

export default App;
