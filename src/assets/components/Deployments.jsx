import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/Deployments.css';
import AnimatedArrow from './AnimatedArrow';

const Deployments = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="deployments-container">
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">What do we do?</h1>
          <p className="hero-description">
            MESSX offers a mobile power system that utilizes solar energy with the capacity to power homes, commercial
            and industrial buildings, telecommunications, disaster relief, charge electric vehicles and more.
          </p>
          <h2 className="hero-subtitle">bringing power to the people</h2>
          <h3 className="hero-subtitle">and the planet</h3>
          <h4>Here are some examples of events we have powered</h4>
        </div>
        <AnimatedArrow />
      </section>

      <section className="carousel-section">
        <Slider {...settings}>
          <div className="carousel-item">
            <img src="https://messx.io/wp-content/uploads/2023/03/images.png" alt="" className="carousel-image" />
          </div>
          <div className="carousel-item">
            <img
              src="https://messx.io/wp-content/uploads/2022/06/fb-event-header-pridefestcapitolhill2022-1024x536.png"
              alt=""
              className="carousel-image"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://messx.io/wp-content/uploads/2022/06/solar-tour-home-hero-2022-1024x446.jpg"
              alt=""
              className="carousel-image"
            />
          </div>
          <div className="carousel-item">
            <img src="https://messx.io/wp-content/uploads/2022/06/PARKE-742x1024.jpg" alt="" className="carousel-image" />
          </div>
          <div className="carousel-item">
            <img
              src="https://messx.io/wp-content/uploads/2022/10/Screen-Shot-2022-10-05-at-3.33.09-PM-779x1024.png"
              alt=""
              className="carousel-image"
            />
          </div>
          <div className="carousel-item">
            <img src="https://messx.io/wp-content/uploads/2022/10/IMG_2504-663x1024.jpg" alt="" className="carousel-image" />
          </div>
          <div className="carousel-item">
            <img src="https://messx.io/wp-content/uploads/2022/10/SPU-PNG.png" alt="" className="carousel-image" />
          </div>
          <div className="carousel-item">
            <img
              src="https://messx.io/wp-content/uploads/2022/10/Flag_of_the_Tulalip_Tribes.png"
              alt=""
              className="carousel-image"
            />
          </div>
        </Slider>
      </section>

      {/* <section className="contact-section">
        <h2 className="contact-title">Hit us up!</h2>
        <form className="contact-form">
          <div className="form-group">
            <input type="text" name="name" placeholder="Name" className="form-input" />
          </div>
          <div className="form-group">
            <input type="text" name="company" placeholder="Company" className="form-input" />
          </div>
          <div className="form-group">
            <input type="email" name="email" placeholder="Email" className="form-input" required />
          </div>
          <div className="form-group">
            <textarea name="message" placeholder="Message" rows="3" className="form-textarea"></textarea>
          </div>
          <button type="submit" className="form-button">
            Send
          </button>
        </form>
      </section> */}
    </div>
  );
};

export default Deployments;