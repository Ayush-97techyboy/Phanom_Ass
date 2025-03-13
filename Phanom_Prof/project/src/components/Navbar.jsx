import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="container mx-auto px-4 py-6">
      <div className="flex items-center justify-between">
        <Link to="/" className="text-xl font-bold text-purple-600">Phanom</Link>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-600 hover:text-purple-600"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/features" className="text-gray-600 hover:text-purple-600">Features</Link>
          <Link to="/about" className="text-gray-600 hover:text-purple-600">About</Link>
          <Link to="/contact" className="text-gray-600 hover:text-purple-600">Contact</Link>
          <Link to="/get-started" className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700">
            Get Started
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 bg-white rounded-lg shadow-lg p-4 absolute left-0 right-0 z-50">
          <div className="flex flex-col gap-4">
            <Link 
              to="/features" 
              className="text-gray-600 hover:text-purple-600 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </Link>
            <Link 
              to="/about" 
              className="text-gray-600 hover:text-purple-600 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className="text-gray-600 hover:text-purple-600 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link 
              to="/get-started" 
              className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}