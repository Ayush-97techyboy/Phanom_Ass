import React from 'react';
import { Briefcase, Heart, Coffee, Users } from 'lucide-react';

export default function Careers() {
  const positions = [
    {
      title: "Senior Frontend Developer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time"
    },
    {
      title: "Product Designer",
      department: "Design",
      location: "San Francisco",
      type: "Full-time"
    },
    {
      title: "Marketing Manager",
      department: "Marketing",
      location: "New York",
      type: "Full-time"
    }
  ];

  const benefits = [
    {
      icon: <Heart className="text-purple-600" size={24} />,
      title: "Health Insurance",
      description: "Comprehensive health, dental, and vision coverage"
    },
    {
      icon: <Coffee className="text-purple-600" size={24} />,
      title: "Work-Life Balance",
      description: "Flexible working hours and remote work options"
    },
    {
      icon: <Users className="text-purple-600" size={24} />,
      title: "Team Events",
      description: "Regular team building and social events"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-4">Join Our Team</h1>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          We're looking for passionate individuals to help us build the future of technology
        </p>

        {/* Benefits Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="bg-purple-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Open Positions */}
        <h2 className="text-2xl font-bold mb-8">Open Positions</h2>
        <div className="space-y-4">
          {positions.map((position, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex flex-col md:flex-row md:items-center justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Briefcase className="text-purple-600" size={20} />
                    <h3 className="text-xl font-bold">{position.title}</h3>
                  </div>
                  <div className="text-gray-600">
                    {position.department} · {position.location} · {position.type}
                  </div>
                </div>
                <button className="mt-4 md:mt-0 bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700">
                  Apply Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Culture Section */}
        <div className="mt-16 bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-4">Our Culture</h2>
          <p className="text-gray-600 mb-4">
            At Phanom, we believe in fostering a culture of innovation, collaboration, and continuous learning. Our team members are passionate about making a difference and pushing the boundaries of what's possible.
          </p>
          <p className="text-gray-600">
            We value diversity, inclusion, and creating an environment where everyone can thrive and grow professionally.
          </p>
        </div>
      </div>
    </div>
  );
}