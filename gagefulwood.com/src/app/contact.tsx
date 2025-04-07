"use client";
import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section
      id="contact"
      className="min-h-screen about-bg p-6 flex items-center justify-center"
    >
      <div className="w-full max-w-lg mx-auto">
        {/* Header */}
        <header className="mb-8 text-center">
          <h2 className="text-5xl font-semibold text-white">Contact</h2>
        </header>
        {/* Contact Form */}
        <form
          action="https://formspree.io/f/xpwpopno"
          method="POST"
          className="flex flex-col space-y-4 contact-form-bg p-6 rounded-lg shadow-lg"
        >
          <input
            type="text"
            name="name"
            placeholder="Enter Your Name"
            value={formData.name}
            onChange={handleChange}
            className="p-3 border border-gray-700 rounded-lg focus:outline-none focus:ring focus:ring-indigo-600 contact-form-input-bg text-white"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Enter Your Email"
            value={formData.email}
            onChange={handleChange}
            className="p-3 border border-gray-700 rounded-lg focus:outline-none focus:ring focus:ring-indigo-600 contact-form-input-bg text-white"
            required
          />
          <textarea
            name="message"
            placeholder="Enter Your Message"
            value={formData.message}
            onChange={handleChange}
            className="p-3 border border-gray-700 rounded-lg h-32 min-h-32 max-h-40 overflow-y-auto focus:outline-none focus:ring focus:ring-indigo-600 contact-form-input-bg text-white resize-y"
            required
          />
          <button
            type="submit"
            className="bg-deep-indigo text-white p-3 rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}