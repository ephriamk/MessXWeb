// Modal.js
import React from 'react';
import '../styles/Modal.css'; // Make sure to create appropriate CSS for your modal

const Modal = ({ isOpen, handleClose, imageSrc, description }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <img src={imageSrc} alt="" className="modal-image" />
        <div className="modal-description">{description}</div>
      </div>
    </div>
  );
};

export default Modal;
