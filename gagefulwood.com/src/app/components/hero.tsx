"use client";
import React from "react";

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-900 via-purple-900 to-pink-900 text-white p-8">
      {/* Main content: Headline, subheadline, call-to-action */}
      <div className="text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          Gage Fulwood
        </h1>
        <p className="text-lg md:text-2xl mb-8">
          Software Engineering, MSU 2026
        </p>
        <a
          href="#about"
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 transition-colors rounded-full text-white font-semibold"
        >
          Learn More
        </a>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8">
        <a href="#about" className="text-white animate-bounce">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </a>
      </div>
    </section>
  );
}