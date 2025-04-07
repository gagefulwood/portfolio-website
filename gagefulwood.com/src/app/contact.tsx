"use client";
import React, { useState } from 'react';

export default function Contact() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({...formData, [e.target.name]: e.target.value });
    };

    return (
        <section id="contact" className="min-h-screen bg-midnight-charcoal p-6 shadow-lg">
            <header className="mb-6 text-center">
                <h2 className="text-5xl font-semibold">CONTACT</h2>
                <form
                    action="https://formspree.io/f/xpwpopno"
                    method="POST"
                    className="flex flex-col space-y-4 max-w-md mx-auto"
                >
                    <input 
                        type="text" 
                        name="name" 
                        placeholder="Enter Your Name" 
                        value={formData.name}
                        onChange={handleChange}
                        className="p-2 border border-gray-300 rounded"
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        className="p-2 border border-gray-300 rounded"
                        required
                    />
                    <textarea
                        name="message"
                        placeholder="Enter Your Message"
                        value={formData.message}
                        onChange={handleChange}
                        className="p-2 border border-gray-300 rounded h-32"
                        required
                    />
                    <button type="submit" className="bg-deep-indigo text-white p-2 rounded hover:bg-indigo-700 transition-colors">
                        Send Message
                    </button>
                </form>
            </header>
        </section>
    );
}