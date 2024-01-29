import React from 'react';
import Header from './assets/components/Header';
import ServicesSection from './assets/components/ServicesSection';
import Testimonials from './assets/components/Testimonials';
import Intro from './assets/components/Intro';
import Gallery from './assets/components/Gallery';
import Footer from './assets/components/Footer';


import './App.css';
// ... import other components

function App() {
 
  return (
    <div className='app'>
    <div className='scroll-watcher'></div>
      <Header />
      <Intro />
      <ServicesSection /> 
      {/* <Testimonials /> */}
      <Gallery />
      <Footer />
      {/* Other components */}
    </div>
  );
}

export default App;
