'use client';

import { useState } from 'react';

export default function IndustryCompliance() {
  const [activeIndustry, setActiveIndustry] = useState('Industrial');

  const industries = [
    { id: 'Industrial', label: 'Industrial' },
    { id: 'Food/Beverage & Retail', label: 'Food/Beverage & Retail' },
    { id: 'Construction & Real Estate', label: 'Construction & Real Estate' },
    { id: 'Transport & Logistics', label: 'Transport & Logistics' }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Section */}
        <div className="text-center mb-12">
          <div className="inline-block bg-white border border-black rounded-full px-4 py-2 mb-6">
            <span className="text-sm font-medium text-black">Perfect Match</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-blue-900 mb-8 leading-tight">
            Industry Compliance Assurance
          </h2>
        </div>

        {/* Industry Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {industries.map((industry) => (
            <button
              key={industry.id}
              onClick={() => setActiveIndustry(industry.id)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                activeIndustry === industry.id
                  ? 'bg-lime-500 text-white shadow-lg'
                  : 'bg-gray-800 text-white hover:bg-gray-700'
              }`}
            >
              {industry.label}
            </button>
          ))}
        </div>

        {/* Main Content Card */}
        <div className="bg-gray-900 rounded-2xl p-8 border-2 border-dashed border-white/20 relative overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Side - Content */}
            <div className="space-y-6">
              <div className="text-white/80 text-sm font-medium">
                NO COMPLEXITY. WE&apos;VE GOT YOUR BACK
              </div>
              
              <h3 className="text-3xl lg:text-4xl font-bold text-white leading-tight">
                Manufacturing & Industry
              </h3>
              
              <p className="text-white/90 text-lg leading-relaxed">
                GreenDash helps manufacturing SMEs track energy and emissions, and demonstrate supply chain sustainability to large B2B clients
              </p>
              
              {/* Bullet Points */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-white/90">Simple emissions and electricity calculation</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-white/90">Energy efficiency and consume reduction recommendations</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-white/90">Ready to share ESG data</span>
                </div>
              </div>
              
              <button className="bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                Join Waiting List
              </button>
            </div>

            {/* Right Side - Dashboard Preview */}
            <div className="relative">
              <div className="bg-white rounded-xl shadow-2xl overflow-hidden transform rotate-1 hover:rotate-0 transition-transform duration-500">
                {/* Dashboard Header */}
                <div className="bg-white border-b border-gray-200 px-6 py-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-xl font-bold text-black">green</span>
                      <span className="text-green-600 text-lg">🍃</span>
                      <span className="text-xl font-bold text-black">dash</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <select className="bg-gray-100 border border-gray-300 rounded-lg px-3 py-2 text-sm">
                        <option>2025</option>
                      </select>
                      <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                        <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M9 11h.01M9 8h.01M9 5h.01M9 2h.01" />
                        </svg>
                      </button>
                      <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                        <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </button>
                      <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                        <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex">
                  {/* Left Sidebar */}
                  <div className="w-48 bg-gray-800 text-white p-4 text-sm">
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-300 uppercase tracking-wider mb-2">REPORT HUB</h4>
                        <div className="space-y-1 ml-2">
                          <div className="text-gray-300">Home</div>
                          <div className="text-gray-300">Tasks</div>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-300 uppercase tracking-wider mb-2">DATA COLLECTION</h4>
                        <div className="space-y-1 ml-2">
                          <div className="text-gray-300">General</div>
                          <div className="text-gray-300">Environment</div>
                          <div className="text-gray-300">Social</div>
                          <div className="text-gray-300">Governance</div>
                        </div>
                      </div>
                      
                      <div className="space-y-1">
                        <div className="text-gray-300">Analytics</div>
                        <div className="text-gray-300">Requests</div>
                        <div className="text-gray-300">Export</div>
                        <div className="text-gray-300">Generate Report</div>
                      </div>
                      
                      <div className="space-y-1">
                        <div className="text-gray-300">Files</div>
                        <div className="text-gray-300">Certification</div>
                        <div className="text-gray-300">Users</div>
                        <div className="text-gray-300">Support</div>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-300 uppercase tracking-wider mb-2">MODULES</h4>
                        <div className="space-y-1 ml-2">
                          <div className="text-gray-300">Carbon Accounting</div>
                          <div className="text-gray-300">Double Materiality</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Main Content Area */}
                  <div className="flex-1 p-6">
                    <div className="mb-6">
                      <h1 className="text-lg font-semibold text-gray-800 mb-2">
                        REPORT HUB / DATA COLLECTION / GENERAL INFORMATION / B1 - BASIS FOR PREPARATION
                      </h1>
                    </div>

                    {/* Form Content */}
                    <div className="space-y-6">
                      {/* Status and Owner Selection */}
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Select Status</label>
                          <select className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500">
                            <option>Not Started</option>
                            <option>In Progress</option>
                            <option>Completed</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Select Owner</label>
                          <select className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500">
                            <option>John Doe</option>
                            <option>Jane Smith</option>
                            <option>Mike Johnson</option>
                          </select>
                        </div>
                      </div>

                      {/* Checkbox */}
                      <div className="flex items-center gap-3">
                        <input type="checkbox" className="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500" />
                        <label className="text-sm text-gray-700">This topic is not material</label>
                      </div>

                      {/* Text Area */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                        <textarea 
                          rows={4}
                          className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                          placeholder="Enter description here..."
                        />
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-3">
                        <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                          Information Request
                        </button>
                        <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                          Comments
                        </button>
                        <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                          Data History
                        </button>
                        <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                          Save
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
