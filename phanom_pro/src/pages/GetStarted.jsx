import React from 'react';
import { Check } from 'lucide-react';

function GetStarted() {
  const plans = [
    {
      name: "Basic",
      price: "49",
      features: [
        "Up to 5 team members",
        "Basic analytics",
        "24/7 support",
        "1GB storage"
      ]
    },
    {
      name: "Pro",
      price: "99",
      features: [
        "Up to 15 team members",
        "Advanced analytics",
        "Priority support",
        "10GB storage",
        "Custom integrations"
      ]
    },
    {
      name: "Enterprise",
      price: "199",
      features: [
        "Unlimited team members",
        "Full analytics suite",
        "Dedicated support",
        "Unlimited storage",
        "Custom integrations",
        "Advanced security"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Choose Your Plan</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Select the perfect plan for your needs. All plans include our core features with different levels of functionality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold">${plan.price}</span>
                <span className="text-gray-600">/month</span>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Check className="text-green-500" size={20} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full bg-purple-600 text-white py-3 px-6 rounded-lg hover:bg-purple-700 transition-colors">
                Get Started
              </button>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-lg shadow-lg p-8 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold mb-2">How do I get started?</h3>
              <p className="text-gray-600">
                Simply choose your plan and click the Get Started button. We'll guide you through the setup process.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-2">Can I change plans later?</h3>
              <p className="text-gray-600">
                Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-2">What payment methods do you accept?</h3>
              <p className="text-gray-600">
                We accept all major credit cards, PayPal, and bank transfers for business accounts.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GetStarted;