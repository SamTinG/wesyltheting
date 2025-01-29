import React, { useState } from 'react';
import axios from 'axios';

const Form = ({ uuid }) => {
  const [formData, setFormData] = useState({ name: '', phone: '', companion: '0' });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    console.log(formData);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      const response = await axios.post('https://wedding-server-z200.onrender.com/submit', {
        ...formData,
        uuid,
      });
      alert('Submission successful!');
    } catch (err) {
      setError('Invalid UUID or submission failed');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
      </div>
      <div>
        <label>Phone:</label>
        <input type="text" name="phone" value={formData.phone} onChange={handleChange} required />
      </div>
      <div>
        <label>Are you bringing someone?</label>
        <select name="companion" value={formData.companion} onChange={handleChange} required>
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
        </select>
      </div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
