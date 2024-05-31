import React, { useState } from 'react';
import axios from 'axios';

function Feedback() {
  const [formData, setFormData] = useState({
    email: '',
    content: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const feedbackData = {
      content: formData.content,
      email: formData.email,
    };

    axios.post('http://localhost:5000/givefeedback', feedbackData)
      .then((response) => {
        console.log('Feedback created successfully', response.data);
        // Reload the page after successful submission
        window.location.reload();
      })
      .catch((error) => {
        console.error('There was an error creating the feedback!', error);
      });
  };

  return (
    <div className="bg-gray-800 rounded-lg p-5 max-w-md mx-auto my-24">
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Feedback Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="content" className="block text-gray-700 font-semibold mb-2">
              Give Your Feedback
            </label>
            <textarea
              id="content"
              name="content"
              rows="3"
              className="appearance-none border border-gray-400 rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500 w-full"
              placeholder="Your Feedback"
              value={formData.content}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <div className="mb-6">
            <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
              Your email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="appearance-none border border-gray-400 rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500 w-full"
              placeholder="Your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Feedback;
