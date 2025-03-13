import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function GetStarted() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-4">Get Started with Phanom</h1>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Choose the plan that best fits your needs and start your journey with us
        </p>

        <div className="grid grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Basic Plan */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold mb-2">Basic</h3>
            <div className="text-3xl font-bold mb-4">$29<span className="text-lg text-gray-600">/mo</span></div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-2">
                <ArrowRight size={16} className="text-purple-600" />
                <span>Basic Analytics</span>
              </li>
              <li className="flex items-center gap-2">
                <ArrowRight size={16} className="text-purple-600" />
                <span>5 Team Members</span>
              </li>
              <li className="flex items-center gap-2">
                <ArrowRight size={16} className="text-purple-600" />
                <span>Basic Support</span>
              </li>
            </ul>
            <button className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700">
              Choose Basic
            </button>
          </div>

          {/* Pro Plan */}
          <div className="bg-purple-600 p-8 rounded-xl shadow-lg text-white transform scale-105">
            <div className="absolute top-0 right-0 bg-yellow-400 text-xs font-bold px-3 py-1 rounded-full -translate-y-1/2">
              POPULAR
            </div>
            <h3 className="text-xl font-bold mb-2">Pro</h3>
            <div className="text-3xl font-bold mb-4">$99<span className="text-lg opacity-75">/mo</span></div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-2">
                <ArrowRight size={16} />
                <span>Advanced Analytics</span>
              </li>
              <li className="flex items-center gap-2">
                <ArrowRight size={16} />
                <span>25 Team Members</span>
              </li>
              <li className="flex items-center gap-2">
                <ArrowRight size={16} />
                <span>Priority Support</span>
              </li>
            </ul>
            <button className="w-full bg-white text-purple-600 py-2 rounded-lg hover:bg-gray-100">
              Choose Pro
            </button>
          </div>

          {/* Enterprise Plan */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold mb-2">Enterprise</h3>
            <div className="text-3xl font-bold mb-4">$299<span className="text-lg text-gray-600">/mo</span></div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-2">
                <ArrowRight size={16} className="text-purple-600" />
                <span>Custom Analytics</span>
              </li>
              <li className="flex items-center gap-2">
                <ArrowRight size={16} className="text-purple-600" />
                <span>Unlimited Members</span>
              </li>
              <li className="flex items-center gap-2">
                <ArrowRight size={16} className="text-purple-600" />
                <span>24/7 Support</span>
              </li>
            </ul>
            <button className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700">
              Choose Enterprise
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}