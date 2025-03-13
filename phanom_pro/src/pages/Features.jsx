import React from 'react';
import { Shield, Zap, Globe, Users, BarChart3, Clock, Database, Cloud } from 'lucide-react';

function Features() {
  const features = [
    {
      icon: <Shield className="text-purple-600" size={24} />,
      title: "Enterprise Security",
      description: "Advanced security protocols to protect your business data"
    },
    {
      icon: <Zap className="text-purple-600" size={24} />,
      title: "Lightning Fast",
      description: "Optimized performance for quick response times"
    },
    {
      icon: <Globe className="text-purple-600" size={24} />,
      title: "Global Reach",
      description: "Connect with customers worldwide through our platform"
    },
    {
      icon: <Users className="text-purple-600" size={24} />,
      title: "Team Collaboration",
      description: "Tools designed for seamless team coordination"
    },
    {
      icon: <BarChart3 className="text-purple-600" size={24} />,
      title: "Analytics Dashboard",
      description: "Comprehensive insights into your business metrics"
    },
    {
      icon: <Clock className="text-purple-600" size={24} />,
      title: "24/7 Support",
      description: "Round-the-clock assistance for your needs"
    },
    {
      icon: <Database className="text-purple-600" size={24} />,
      title: "Data Management",
      description: "Efficient handling of your business data"
    },
    {
      icon: <Cloud className="text-purple-600" size={24} />,
      title: "Cloud Integration",
      description: "Seamless cloud service integration capabilities"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Features</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover the powerful features that make our platform the perfect choice for your business needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-purple-100 p-3 rounded-full w-fit mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-purple-600 text-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
          <p className="mb-8">Join thousands of satisfied customers using our platform</p>
          <button className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
            Start Free Trial
          </button>
        </div>
      </div>
    </div>
  );
}

export default Features;