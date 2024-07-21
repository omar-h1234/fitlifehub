import React, { useState } from 'react';
import '../styles/Community.css';

const Community = () => {
  const [form, setForm] = useState({ name: '', email: '', submission: '' });
  const [submittedData, setSubmittedData] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (section) => (e) => {
    e.preventDefault();
    setSubmittedData({ ...submittedData, [section]: form });
    setForm({ name: '', email: '', submission: '' });
    alert('Submission received!');
  };

  return (
    <div className="community">
      <h1>Community Forum</h1>
      <div className="forum-sections">
        <div className="section">
          <h2>General Discussion</h2>
          <p>For broad topics related to fitness.</p>
          <form onSubmit={handleSubmit('generalDiscussion')}>
            <label>Name</label>
            <input type="text" name="name" value={form.name} onChange={handleChange} required />

            <label>Email</label>
            <input type="email" name="email" value={form.email} onChange={handleChange} required />

            <label>Submission</label>
            <textarea name="submission" value={form.submission} onChange={handleChange} required></textarea>

            <button type="submit">Submit</button>
          </form>
        </div>
        <div className="section">
          <h2>Equipment Reviews</h2>
          <p>Users can post and read reviews about various equipment.</p>
          <form onSubmit={handleSubmit('equipmentReviews')}>
            <label>Name</label>
            <input type="text" name="name" value={form.name} onChange={handleChange} required />

            <label>Email</label>
            <input type="email" name="email" value={form.email} onChange={handleChange} required />

            <label>Submission</label>
            <textarea name="submission" value={form.submission} onChange={handleChange} required></textarea>

            <button type="submit">Submit</button>
          </form>
        </div>
        <div className="section">
          <h2>Fitness Tips</h2>
          <p>Share and read fitness tips.</p>
          <form onSubmit={handleSubmit('fitnessTips')}>
            <label>Name</label>
            <input type="text" name="name" value={form.name} onChange={handleChange} required />

            <label>Email</label>
            <input type="email" name="email" value={form.email} onChange={handleChange} required />

            <label>Submission</label>
            <textarea name="submission" value={form.submission} onChange={handleChange} required></textarea>

            <button type="submit">Submit</button>
          </form>
        </div>
        <div className="section">
          <h2>Expert Advice</h2>
          <p>Get advice from fitness professionals.</p>
          <form onSubmit={handleSubmit('expertAdvice')}>
            <label>Name</label>
            <input type="text" name="name" value={form.name} onChange={handleChange} required />

            <label>Email</label>
            <input type="email" name="email" value={form.email} onChange={handleChange} required />

            <label>Submission</label>
            <textarea name="submission" value={form.submission} onChange={handleChange} required></textarea>

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Community;
