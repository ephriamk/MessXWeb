import React, { useState } from 'react';
import '../styles/ContactForm.css';
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    notes: '',
  });

  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Reset error for the changed field
    if (formErrors[name]) {
      setFormErrors({ ...formErrors, [name]: '' });
    }
  };

  const validateForm = () => {
    let errors = {};

    // Name validation
    if (!formData.name) {
      errors.name = 'Please enter your name';
    }

    // Email validation
    const emailRegex = /\S+@\S+\.\S+/;
    if (!formData.email) {
      errors.email = 'Please enter your email';
    } else if (!emailRegex.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }

    // Phone validation
    const phoneRegex = /^\d{10}$/;
    if (!formData.phone) {
      errors.phone = 'Please enter your phone number';
    } else if (!phoneRegex.test(formData.phone)) {
      errors.phone = 'Please enter a valid 10-digit phone number';
    }

    setFormErrors(errors);

    // Return true if there are no errors
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Form is valid, submit data
      console.log('Form submitted:', formData);
      // Add your submission logic here
    }
  };

  return (
    <div className="contact-form-container">
      <div className="contact-form-background"></div>
      <form onSubmit={handleSubmit} className="contact-form">
        <h2 className="form-title">Get in Touch</h2>
        <div className="form-group">
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`form-input ${formErrors.name ? 'error' : ''}`}
            placeholder="Your Name"
            required
          />
          {formErrors.name && <span className="error-message">{formErrors.name}</span>}
        </div>

        <div className="form-group">
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`form-input ${formErrors.email ? 'error' : ''}`}
            placeholder="Your Email"
            required
          />
          {formErrors.email && <span className="error-message">{formErrors.email}</span>}
        </div>

        <div className="form-group">
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={`form-input ${formErrors.phone ? 'error' : ''}`}
            placeholder="Your Phone"
            required
          />
          {formErrors.phone && <span className="error-message">{formErrors.phone}</span>}
        </div>

        <div className="form-group">
          <textarea
            id="notes"
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            className="form-textarea"
            placeholder="Your Message"
          />
        </div>

        <button type="submit" className="form-submit">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;