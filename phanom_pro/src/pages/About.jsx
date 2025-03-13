import React from 'react';
import { Award, Target, Heart } from 'lucide-react';

function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-purple-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Story</h1>
            <p className="text-xl">
              Building innovative solutions since 2020, we've helped countless businesses transform their digital presence
            </p>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-purple-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Award className="text-purple-600" size={24} />
            </div>
            <h3 className="text-xl font-bold mb-2">Excellence</h3>
            <p className="text-gray-600">
              We strive for excellence in everything we do, ensuring the highest quality in our solutions
            </p>
          </div>
          <div className="text-center">
            <div className="bg-purple-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Target className="text-purple-600" size={24} />
            </div>
            <h3 className="text-xl font-bold mb-2">Innovation</h3>
            <p className="text-gray-600">
              Constantly pushing boundaries to deliver cutting-edge solutions
            </p>
          </div>
          <div className="text-center">
            <div className="bg-purple-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Heart className="text-purple-600" size={24} />
            </div>
            <h3 className="text-xl font-bold mb-2">Customer Focus</h3>
            <p className="text-gray-600">
              Your success is our priority, and we're committed to helping you achieve your goals
            </p>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Our Leadership Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src={`https://images.unsplash.com/photo-${1500000000000 + i}?auto=format&fit=crop&w=500&h=500&q=80`}
                alt={`Team Member ${i}`}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">John Doe {i}</h3>
                <p className="text-purple-600 mb-4">Co-founder & CEO</p>
                <p className="text-gray-600">
                  With over 15 years of experience in technology and innovation
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-purple-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">5+</div>
              <div>Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">100+</div>
              <div>Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">50+</div>
              <div>Team Members</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">95%</div>
              <div>Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;