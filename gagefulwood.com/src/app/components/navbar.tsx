"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 p-4 bg-transparent">
      <div className="container mx-auto flex items-center justify-between">
        {/* Branding / Logo */}
        <div
          className={`text-xl font-bold transition-opacity duration-500 ${
            isVisible ? "opacity-100 text-white" : "opacity-0"
          }`}
        >
          <Link href="/">Gage Fulwood</Link>
        </div>
        {/* Navigation Links */}
        <div className="flex space-x-8">
          <Link
            href="#about"
            className="text-white hover:text-gray-300 transition-colors"
          >
            About
          </Link>
          <Link
            href="#projects"
            className="text-white hover:text-gray-300 transition-colors"
          >
            Projects
          </Link>
          <Link
            href="#contact"
            className="text-white hover:text-gray-300 transition-colors"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}