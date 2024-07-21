import React, { useState } from 'react';
import '../styles/Contact.css';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Optionally, you can add code to handle the form submission here
  };

  return (
    <div className="contact">
      <h1>Contact Us</h1>
      {submitted ? (
        <p>Thanks for submitting. We will be in contact with you shortly.</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <label>Your Name</label>
          <input type="text" name="name" value={form.name} onChange={handleChange} required />

          <label>Your Email</label>
          <input type="email" name="email" value={form.email} onChange={handleChange} required />

          <label>Your Phone</label>
          <input type="tel" name="phone" value={form.phone} onChange={handleChange} required />

          <label>Your Message</label>
          <textarea name="message" value={form.message} onChange={handleChange} required></textarea>

          <button type="submit">Submit</button>
        </form>
      )}
      {!submitted && (
        <p>If you have any questions, feel free to reach out to us at contact@fitlifehub.com or call us at (123) 456-7890.</p>
      )}
    </div>
  );
};

export default Contact;
