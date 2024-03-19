import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/Deployments.css';


const Deployments = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState({});
  const images = [
    {
      src: "https://messx.io/wp-content/uploads/2023/03/images.png",
      description: "Description for Image 1",
    },
    {
      src: "https://messx.io/wp-content/uploads/2022/06/fb-event-header-pridefestcapitolhill2022-1024x536.png",
      description: "Description for Image 1",
    },
    {
      src: "https://messx.io/wp-content/uploads/2022/06/solar-tour-home-hero-2022-1024x446.jpg",
      description: "Description for Image 1",
    },
    {
      src: "https://messx.io/wp-content/uploads/2022/06/PARKE-742x1024.jpg",
      description: "Description for Image 1",
    },
    {
      src: "https://messx.io/wp-content/uploads/2023/03/images.png",
      description: "Description for Image 1",
    },
    {
      src: "https://messx.io/wp-content/uploads/2023/03/images.png",
      description: "Description for Image 1",
    },
    // Add the rest of your images here in the same format
  ];

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

  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="deployments-container" onClick={closeModal}>
      {/* Existing sections */}
      <h1 className="deployments-header">
  Here are some of the events we have <span class="glow">powered</span>
</h1>
      <section className="carousel-section">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} className="carousel-item" onClick={(e) => { e.stopPropagation(); openModal(image); }}>
              <img src={image.src} alt="" className="carousel-image" />
            </div>
          ))}
        </Slider>
      </section>

      
      {isModalOpen && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage.src} alt="" className="full-size-image" />
            <div className="image-description">{selectedImage.description}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Deployments;
