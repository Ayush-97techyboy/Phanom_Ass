import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="container mx-auto px-4">
      <div className="flex items-center justify-between py-4">
        <Link to="/" className="text-2xl font-bold text-purple-700">Phanom</Link>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/features" className="text-gray-600 hover:text-purple-700">Features</Link>
          <Link to="/about" className="text-gray-600 hover:text-purple-700">About</Link>
          <Link to="/contact" className="text-gray-600 hover:text-purple-700">Contact</Link>
          <Link to="/get-started" className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700">
            Get Started
          </Link>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="flex flex-col gap-4 py-4">
            <Link 
              to="/features" 
              className="text-gray-600 hover:text-purple-700 px-4 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </Link>
            <Link 
              to="/about" 
              className="text-gray-600 hover:text-purple-700 px-4 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className="text-gray-600 hover:text-purple-700 px-4 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link 
              to="/get-started" 
              className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 mx-4"
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

export default Navbar;