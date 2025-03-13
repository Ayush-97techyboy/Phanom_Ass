import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="container mx-auto px-4 py-6 flex items-center justify-between">
      <Link to="/" className="text-xl font-bold text-purple-600">Phanom</Link>
      <div className="flex items-center gap-8">
        <Link to="/features" className="text-gray-600 hover:text-purple-600">Features</Link>
        <Link to="/about" className="text-gray-600 hover:text-purple-600">About</Link>
        <Link to="/contact" className="text-gray-600 hover:text-purple-600">Contact</Link>
        <Link to="/get-started" className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700">
          Get Started
        </Link>
      </div>
    </nav>
  );
}