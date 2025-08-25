'use client';

import Link from 'next/link';

export default function Certification() {
  return (
    <section className="py-20 bg-gradient-to-b from-[#7FFF6B] via-[#EEFFEC] to-[#7FFF6B]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-16">
          {/* Top Badge */}
          <div className="inline-block bg-white rounded-[10px] px-10 py-1 mb-6 border border-[rgba(34, 34, 34, 0.1)] shadow-sm">
            <span className="text-sm font-medium text-black">Certification</span>
          </div>
          
          {/* Main Headline */}
          <h1 className="text-4xl lg:text-5xl font-bold text-[#001354] pb-6 leading-[70px]">
            Show your alignment with ESG goals and build trust with your stakeholders
          </h1>
          
          {/* Description */}
          <p className="text-xl text-[#010D3E] max-w-3xl mx-auto leading-relaxed">
            Get certified and showcase your alignment with CSRD/VSME and ESG standards
          </p>
        </div>

        {/* Certification Plans Section */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16 max-w-5xl mx-auto">
          {/* Left Card: ESG Maturity Certification */}
          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-bold text-[#001354] mb-4">ESG Maturity Certification</h3>
            <p className="text-gray-600 mb-6">
              For companies that want to assess and demonstrate how they are integrating ESG principles across their business
            </p>
            
            {/* Price */}
            <div className="mb-6">
              <span className="text-4xl font-bold text-[#001354]">250€</span>
            </div>
            
            {/* Button */}
            <div className="mb-6">
              <Link href="/esg-maturity-certification" className="block">
                <button className="w-full bg-white border-2 border-gray-300 text-[#001354] hover:bg-gray-100 px-6 py-3 rounded-lg font-medium transition-all duration-200 flex items-center justify-center gap-2">
                  <span>Get started</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </Link>
            </div>
            
            {/* Horizontal Separator */}
            <div className="border-t border-gray-200 mb-6"></div>
            
            {/* Features */}
            <div className="space-y-3">
              <div className="flex items-center">
                <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700">ESG Maturity Assessment</span>
              </div>
              <div className="flex items-center">
                <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700">Tailored Improvement Roadmap</span>
              </div>
              <div className="flex items-center">
                <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700">GreenDash Certification</span>
              </div>
            </div>
          </div>

          {/* Right Card: CSRD/VSME Certification */}
          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-bold text-[#001354] mb-4">CSRD/VSME Certification</h3>
            <p className="text-gray-600 mb-6">
              For companies that want to ensure their sustainability report is fully compliant with the new European CSRD/VSME standards
            </p>
            
            {/* Price */}
            <div className="mb-6">
              <span className="text-4xl font-bold text-[#001354]">290€</span>
            </div>
            
            {/* Button */}
            <div className="mb-6">
              <Link href="/contact-us" className="block">
                <button className="w-full bg-white border-2 border-gray-300 text-[#001354] hover:bg-gray-100 px-6 py-3 rounded-lg font-medium transition-all duration-200 flex items-center justify-center gap-2">
                  <span>Get started</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </Link>
            </div>
            
            {/* Horizontal Separator */}
            <div className="border-t border-gray-200 mb-6"></div>
            
            {/* Features */}
            <div className="space-y-3">
              <div className="flex items-center">
                <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700">Detailed Conformity Analysis</span>
              </div>
              <div className="flex items-center">
                <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700">Corrective recommendations</span>
              </div>
              <div className="flex items-center">
                <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700">GreenDash Certification</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer/Consultation Section */}
        <div className="text-left max-w-5xl mx-auto">
          <div className="flex items-center gap-4">
            <span className="text-lg text-[#010D3E]">Still not sure?</span>
            <Link href="/contact-us">
              <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200">
                Contact Us
              </button>
            </Link>
            <span className="text-lg text-[#010D3E]">
              for a free consultation to help choose the right plan for you
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
