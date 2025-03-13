import React from 'react';
import { Shield, Lock, Eye, FileCheck } from 'lucide-react';

export default function Privacy() {
  const sections = [
    {
      icon: <Shield className="text-purple-600" size={24} />,
      title: "Data Protection",
      content: "We implement industry-standard security measures to protect your personal information."
    },
    {
      icon: <Lock className="text-purple-600" size={24} />,
      title: "Secure Storage",
      content: "Your data is encrypted and stored securely in compliance with international standards."
    },
    {
      icon: <Eye className="text-purple-600" size={24} />,
      title: "Data Usage",
      content: "We are transparent about how we collect and use your data to improve our services."
    },
    {
      icon: <FileCheck className="text-purple-600" size={24} />,
      title: "Your Rights",
      content: "You have full control over your data and can request access or deletion at any time."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-4">Privacy Policy</h1>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          We are committed to protecting your privacy and ensuring the security of your personal information
        </p>

        {/* Key Privacy Features */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {sections.map((section, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-start gap-4">
                <div className="bg-purple-100 p-3 rounded-full">
                  {section.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{section.title}</h3>
                  <p className="text-gray-600">{section.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Detailed Privacy Policy */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-6">Detailed Privacy Policy</h2>
          
          <div className="space-y-6">
            <section>
              <h3 className="text-xl font-bold mb-3">1. Information We Collect</h3>
              <p className="text-gray-600 mb-4">
                We collect information that you provide directly to us, including:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Name and contact information</li>
                <li>Account credentials</li>
                <li>Payment information</li>
                <li>Communication preferences</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-bold mb-3">2. How We Use Your Information</h3>
              <p className="text-gray-600 mb-4">
                Your information is used to:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Provide and improve our services</li>
                <li>Communicate with you</li>
                <li>Process payments</li>
                <li>Ensure security and prevent fraud</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-bold mb-3">3. Data Sharing and Disclosure</h3>
              <p className="text-gray-600">
                We do not sell your personal information to third parties. We may share your information with:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Service providers who assist in our operations</li>
                <li>Law enforcement when required by law</li>
                <li>Business partners with your consent</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-bold mb-3">4. Your Rights and Choices</h3>
              <p className="text-gray-600">
                You have the right to:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Access your personal information</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Opt-out of marketing communications</li>
              </ul>
            </section>
          </div>

          <div className="mt-8 p-4 bg-purple-50 rounded-lg">
            <p className="text-gray-600 text-sm">
              Last updated: March 2024. For any privacy-related questions, please contact our Data Protection Officer at privacy@phanom.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}