import React from 'react';
import { ArrowRight, Users, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <header className="container mx-auto px-4 pt-8">
        <div className="flex flex-col md:flex-row items-center justify-between py-16 gap-8">
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Let's Innovation match your excellence
            </h1>
            <p className="text-gray-600 mb-8">
              Transform your business with our cutting-edge solutions and expert guidance
            </p>
            <Link to="/get-started" className="bg-purple-600 text-white px-8 py-3 rounded-full flex items-center gap-2 hover:bg-purple-700 w-fit">
              Get Started <ArrowRight size={20} />
            </Link>
          </div>
          <div className="w-full md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80" 
              alt="Innovation" 
              className="rounded-lg shadow-2xl w-full"
            />
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-purple-700">24/7</div>
            <div className="text-gray-600">Support</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-purple-700">85%</div>
            <div className="text-gray-600">Success Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-purple-700">99%</div>
            <div className="text-gray-600">Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-purple-700">50+</div>
            <div className="text-gray-600">Expert Team</div>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="bg-purple-100 p-3 rounded-full w-fit mb-4">
              <Users className="text-purple-600" size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3">Client Success</h3>
            <p className="text-gray-600">Dedicated support and guidance for your success journey</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="bg-purple-100 p-3 rounded-full w-fit mb-4">
              <BarChart3 className="text-purple-600" size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3">Data Analysis</h3>
            <p className="text-gray-600">Advanced analytics to drive informed decisions</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-purple-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-purple-500 p-6 rounded-lg">
                <img 
                  src={`https://images.unsplash.com/photo-${1500000000000 + i}?auto=format&fit=crop&w=150&h=150&q=80`}
                  alt={`Client ${i}`}
                  className="w-16 h-16 rounded-full mb-4"
                />
                <p className="mb-4">Amazing service and support! Highly recommended.</p>
                <div className="font-bold">John Doe</div>
                <div className="text-purple-200">CEO, Company {i}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-bold mb-6">Let's create something great together</h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          Join us in building the future of innovation and success
        </p>
        <Link to="/contact" className="bg-purple-600 text-white px-8 py-3 rounded-full flex items-center gap-2 mx-auto hover:bg-purple-700 w-fit">
          Contact Us <ArrowRight size={20} />
        </Link>
      </section>
    </div>
  );
}

export default Home;