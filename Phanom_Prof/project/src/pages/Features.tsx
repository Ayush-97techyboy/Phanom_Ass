import React from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Features() {
  const features = [
    {
      title: "Advanced Analytics",
      description: "Get deep insights into your business performance with our advanced analytics tools."
    },
    {
      title: "Real-time Monitoring",
      description: "Monitor your systems and processes in real-time with instant notifications."
    },
    {
      title: "Automated Workflows",
      description: "Streamline your operations with our intelligent automation solutions."
    },
    {
      title: "Secure Infrastructure",
      description: "Enterprise-grade security to protect your valuable business data."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-4">Our Features</h1>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Discover how our innovative features can transform your business and drive growth
        </p>

        <div className="grid grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-start gap-4">
                <div className="bg-purple-100 p-2 rounded-full">
                  <CheckCircle className="text-purple-600" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/get-started"
            className="bg-purple-600 text-white px-8 py-3 rounded-full inline-flex items-center gap-2 hover:bg-purple-700"
          >
            Get Started Now <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
}