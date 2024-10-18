import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10}$/; // Adjust regex as needed

    if (!formData.name) {
      newErrors.name = "Name is required";
    }
    if (!formData.email || !emailRegex.test(formData.email)) {
      newErrors.email = "Valid email is required";
    }
    if (formData.phone && !phoneRegex.test(formData.phone)) {
      newErrors.phone = "Invalid phone number";
    }
    if (formData.message.length > 300) {
      newErrors.message = "Message must be less than 300 characters";
    }
    if (!formData.message) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Handle form submission
      console.log("Form data:", formData);
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label">Name</label>
        <input
          type="text"
          className={`form-control ${errors.name ? "is-invalid" : ""}`}
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <div className="invalid-feedback">{errors.name}</div>}
      </div>
      <div className="mb-3">
        <label className="form-label">Email</label>
        <input
          type="email"
          className={`form-control ${errors.email ? "is-invalid" : ""}`}
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <div className="invalid-feedback">{errors.email}</div>}
      </div>
      <div className="mb-3">
        <label className="form-label">Phone Number</label>
        <input
          type="text"
          className={`form-control ${errors.phone ? "is-invalid" : ""}`}
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />
        {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
      </div>
      <div className="mb-3">
        <label className="form-label">Subject</label>
        <input
          type="text"
          className="form-control"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Message</label>
        <textarea
          className={`form-control ${errors.message ? "is-invalid" : ""}`}
          name="message"
          value={formData.message}
          onChange={handleChange}
          maxLength="300"
          rows={7}
        />
        {errors.message && (
          <div className="invalid-feedback">{errors.message}</div>
        )}
      </div>
      <button type="submit" className="cta mt-2">
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
