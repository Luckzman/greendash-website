'use client';

import { useState } from 'react';
import Image from 'next/image';
import CTAButtons from './CTAButtons';

export default function IndustryCompliance() {
  const [activeIndustry, setActiveIndustry] = useState('industrial');

  const industries = [
    {
      id: 'industrial',
      label: 'Industrial',
      title: 'Manufacturing & Industry',
      description: 'GreenDash helps manufacturing SMEs track energy and emissions, and demonstrate supply chain sustainability to large B2B clients',
      features: [
        'Simple emissions and electricity calculation',
        'Energy efficiency and waste reduction recommendations',
        'Ready to share ESG data'
      ]
    },
    {
      id: 'food-beverage-retail',
      label: 'Food/Beverage & Retail',
      title: 'Food/Beverage & Retail',
      description: 'Enables food companies to easily track water and waste, and deliver CSRD-aligned reports to retail and enterprise customers',
      features: [
        'Simple emissions and electricity calculation',
        'Energy efficiency and waste reduction recommendations',
        'Ready to share ESG data'
      ]
    },
    {
      id: 'construction-real-estate',
      label: 'Construction & Real Estate',
      title: 'Construction & Real Estate',
      description: 'Supports SMEs collect ESG data, monitor materials and safety metrics, and create compliant  reports for clients and regulators',
      features: [
        'Simple emissions and electricity calculation',
        'Safety and ethics recommendations',
        'Ready to share ESG data'
      ]
    },
    {
      id: 'transport-logistics',
      label: 'Transport & Logistics',
      title: 'Transport & Logistics',
      description: 'Supports Transport & Logistic SME to fully track ESG metrics and report with success to their clients',
      features: [
        'Simple emissions and electricity calculation',
        'Energy efficiency and consume reduction recommendations',
        'Ready to share ESG data'
      ]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Section */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-block bg-white rounded-[10px] px-6 sm:px-10 py-1 mb-4 sm:mb-6 border border-[rgba(34, 34, 34, 0.1)] shadow-sm">
            <span className="text-xs sm:text-sm font-medium text-black">Perfect Match</span>
          </div>

          <h2 className="w-full sm:w-11/12 lg:w-10/12 mx-auto text-2xl sm:text-3xl lg:text-4xl xl:text-[54px] font-[700] text-black font-dm-sans mb-4 sm:mb-6 leading-tight sm:leading-[60px]">
            Industry Compliance Assurance
          </h2>
          
          <p className="w-full sm:w-11/12 lg:w-10/12 font-inter mx-auto text-sm sm:text-base lg:text-[16px] text-black max-w-3xl leading-relaxed mb-6 sm:mb-8">
          Aligned with CSRD/VSME, we provide an industry-fit and up-to-date solution that allows you to stay ahead of the evolving sustainability reporting standards
          </p>
        </div>

        {/* Industry Navigation */}
        <div className="flex justify-center mb-8 sm:mb-12">
          <div className="bg-[#1A1A1A] border border-black rounded-xl p-1 sm:p-2 w-full max-w-5xl">
            <div className="grid grid-cols-2 sm:flex gap-1 sm:gap-0">
              {industries.map((industry) => (
                <button
                  key={industry.id}
                  onClick={() => setActiveIndustry(industry.id)}
                  className={`w-full px-2 sm:px-6 py-2 sm:py-3 font-dm-sans font-medium transition-all duration-200 text-xs sm:text-sm ${
                    activeIndustry === industry.id
                      ? 'bg-[#6FE451] text-white rounded-lg shadow-lg'
                      : 'text-white hover:text-gray-200'
                  }`}
                >
                  <span className="hidden sm:inline">{industry.label}</span>
                  <span className="sm:hidden">
                    {industry.label.split(' ')[0]}
                    {industry.label.includes('&') && ' &'}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-[#2A2A2A] rounded-xl p-6 sm:p-8 lg:p-12">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            {/* Left Side - Content */}
            <div className="flex-1 order-2 lg:order-1">
              {/* Top Badge */}
              <div className="inline-block bg-black rounded-full px-3 sm:px-4 py-1 sm:py-2 mb-4 sm:mb-6">
                <span className="text-xs font-medium font-dm-sans text-white uppercase tracking-wide">
                  NO COMPLEXITY. WE&apos;VE GOT YOUR BACK
                </span>
              </div>
              
              {/* Dynamic Title and Description */}
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-dm-sans text-white leading-tight mb-4 sm:mb-6">
                {industries.find(ind => ind.id === activeIndustry)?.title || 'Select Industry'}
              </h3>
              
              <p className="text-white/90 text-base sm:text-lg font-dm-sans leading-relaxed mb-6 sm:mb-8">
                {industries.find(ind => ind.id === activeIndustry)?.description || 'Please select an industry to view details'}
              </p>

              {/* Dynamic Features List */}
              <div className="space-y-3 sm:space-y-4">
                {industries.find(ind => ind.id === activeIndustry)?.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-white/90 text-sm font-dm-sans sm:text-base lg:text-lg">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Right Side - Dashboard Preview */}
            <div className="flex-1 order-1 lg:order-2">
              {/* Placeholder for dashboard preview - you can add images here later */}
              <Image
                src="/sidebar-preview.png"
                alt="Green Dash Dashboard Preview"
                width={600}
                height={400}
                className="w-full h-auto rounded-2xl shadow-2xl"
                priority
                suppressHydrationWarning
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mt-8 sm:mt-10">
          <CTAButtons
            isForProfessionalsPage={false}
            learnMoreText="Contact Us"
            learnMoreHref="/contact-us"
            showLearnMore={true}
          />
        </div>
      </div>
    </section>
  );
}
