import React from 'react';
import { Users, Target, Award } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-4">About Us</h1>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          We're on a mission to help businesses achieve excellence through innovation
        </p>

        <div className="grid grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="bg-purple-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Users className="text-purple-600" size={24} />
            </div>
            <h3 className="text-xl font-bold mb-2">Our Team</h3>
            <p className="text-gray-600">
              Expert professionals dedicated to your success
            </p>
          </div>
          <div className="text-center">
            <div className="bg-purple-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Target className="text-purple-600" size={24} />
            </div>
            <h3 className="text-xl font-bold mb-2">Our Mission</h3>
            <p className="text-gray-600">
              Empowering businesses through innovative solutions
            </p>
          </div>
          <div className="text-center">
            <div className="bg-purple-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Award className="text-purple-600" size={24} />
            </div>
            <h3 className="text-xl font-bold mb-2">Our Values</h3>
            <p className="text-gray-600">
              Excellence, integrity, and customer success
            </p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
          <h2 className="text-2xl font-bold mb-4">Our Story</h2>
          <p className="text-gray-600 mb-4">
            Founded in 2020, Phanom has been at the forefront of digital innovation, helping businesses transform and grow in the digital age. Our commitment to excellence and customer success has made us a trusted partner for businesses worldwide.
          </p>
          <p className="text-gray-600">
            Today, we continue to push the boundaries of what's possible, developing cutting-edge solutions that help our clients stay ahead in an ever-evolving digital landscape.
          </p>
        </div>
      </div>
    </div>
  );
}