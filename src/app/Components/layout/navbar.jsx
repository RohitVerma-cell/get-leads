"use client";
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold text-[#2D6CDF]">Biz Connect</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-gray-700 hover:text-[#2D6CDF] transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-[#2D6CDF] transition-colors"
            >
              About Us
            </button>
            <button
              onClick={() => scrollToSection('pricing')}
              className="text-gray-700 hover:text-[#2D6CDF] transition-colors"
            >
              Pricing
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className="text-gray-700 hover:text-[#2D6CDF] transition-colors"
            >
              Testimonials
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-[#2D6CDF] transition-colors"
            >
              Contact Us
            </button>

            <div className="flex items-center space-x-4 ml-4">
              <a
                href="/login"
                className="text-gray-700 hover:text-[#2D6CDF] transition-colors"
              >
                Log In
              </a>
              <a
                href="/signup"
                className="bg-[#2D6CDF] text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Sign Up
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-[#2D6CDF]"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('hero')}
                className="text-left text-gray-700 hover:text-[#2D6CDF] transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-left text-gray-700 hover:text-[#2D6CDF] transition-colors"
              >
                About Us
              </button>
              <button
                onClick={() => scrollToSection('pricing')}
                className="text-left text-gray-700 hover:text-[#2D6CDF] transition-colors"
              >
                Pricing
              </button>
              <button
                onClick={() => scrollToSection('testimonials')}
                className="text-left text-gray-700 hover:text-[#2D6CDF] transition-colors"
              >
                Testimonials
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-left text-gray-700 hover:text-[#2D6CDF] transition-colors"
              >
                Contact Us
              </button>
              <div className="flex flex-col space-y-2 pt-4 border-t border-gray-200">
                <a href="/login" className="text-gray-700 hover:text-[#2D6CDF] transition-colors">
                  Log In
                </a>
                <a
                  href="/signup"
                  className="bg-[#2D6CDF] text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-center"
                >
                  Sign Up
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
