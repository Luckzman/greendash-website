'use client';

import Link from 'next/link';

export default function Certification() {
  return (
    <section className="py-20" style={{
      background: 'linear-gradient(to bottom, #7FFF6B 0%, #ADFFA0 20%, #ADFFA0 40%, #FFFFFF 60%, #FFFFFF 85%, #7FFF6B 100%)'
    }}>
      <div className="max-w-5xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-16">
          {/* Top Badge */}
          <div className="inline-block bg-white rounded-[10px] px-10 py-1 mb-6 border border-[rgba(34, 34, 34, 0.1)] shadow-sm">
            <span className="text-sm font-medium text-black">Certification</span>
          </div>
          
          {/* Main Headline */}
          <h1 className="text-4xl lg:text-5xl font-bold font-dm-sans text-black pb-6 leading-[70px]">
            Show your alignment with ESG goals and build trust with your stakeholders
          </h1>
          
          {/* Description */}
          <p className="text-xl text-[#010D3E] max-w-3xl mx-auto leading-relaxed font-inter">
            Get certified and showcase your alignment with CSRD/VSME and ESG standards
          </p>
        </div>

        {/* Certification Plans Section */}
        <div className="grid lg:grid-cols-2 gap-8 mb-10 max-w-3xl mx-auto">
          {/* Left Card: ESG Maturity Certification */}
          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-bold font-inter text-[#170F49] mb-4">ESG Maturity Certification</h3>
            <p className="text-[#514F6E] font-inter mb-6 text-sm font-medium">
              For companies that want to assess and demonstrate how they are integrating ESG principles across their business
            </p>
            
            {/* Price */}
            <div className="mb-6">
              <span className="text-5xl font-semibold font-inter text-[#170F49]">250€</span>
            </div>
            
            {/* Button */}
            <div className="mb-10">
              <Link href="/esg-maturity-certification" className="block">
                <button className="w-full bg-white border border-gray-300 text-[#001354] hover:bg-gray-100 px-6 py-3 rounded-lg font-medium transition-all duration-200 flex items-center justify-center gap-2">
                  <span>Get started</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </Link>
            </div>
            
            {/* Horizontal Separator */}
            <div className="border-t border-gray-200 mb-10"></div>
            
            {/* Features */}
            <div className="space-y-4">
              <p className="text-[#170F49] mb-6 font-inter font-medium">Included:</p>
              <div className="flex items-center">
                <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-[#6F6C8F] font-inter font-normal">ESG Maturity Assessment</span>
              </div>
              <div className="flex items-center">
                <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-[#6F6C8F] font-inter font-normal">Tailored Improvement Roadmap</span>
              </div>
              <div className="flex items-center">
                <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-[#6F6C8F] font-inter font-normal">GreenDash Certification</span>
              </div>
            </div>
          </div>

          {/* Right Card: CSRD/VSME Certification */}
          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-bold font-inter text-[#170F49] mb-4">CSRD/VSME Certification</h3>
            <p className="text-[#514F6E] font-inter mb-6 text-sm font-medium">
              For companies that want to ensure their sustainability report is fully compliant with the new European CSRD/VSME standards
            </p>
            
            {/* Price */}
            <div className="mb-6">
              <span className="text-5xl font-semibold font-inter text-[#170F49]">290€</span>
            </div>
            
            {/* Button */}
            <div className="mb-10">
              <Link href="/csrd-vsme-certification" className="block">
                <button className="w-full bg-white border border-gray-300 text-[#001354] hover:bg-gray-100 px-6 py-3 rounded-lg font-medium transition-all duration-200 flex items-center justify-center gap-2">
                  <span>Get started</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </Link>
            </div>
            
            {/* Horizontal Separator */}
            <div className="border-t border-gray-200 mb-10"></div>
            
            {/* Features */}
            <div className="space-y-4">
              <p className="text-[#170F49] mb-6 font-inter font-medium">Included:</p>
              <div className="flex items-center">
                <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-[#6F6C8F] font-inter font-normal">Detailed Conformity Analysis</span>
              </div>
              <div className="flex items-center">
                <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-[#6F6C8F] font-inter font-normal">Corrective recommendations</span>
              </div>
              <div className="flex items-center">
                <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-[#6F6C8F] font-inter font-normal">GreenDash Certification</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer/Consultation Section */}
        <div className="text-center max-w-5xl mx-auto">
          <div className="flex items-center gap-4 justify-center">
            <span className="text-lg text-[#010D3E]">Still not sure?</span>
            <Link href="/contact-us">
              <button className="bg-[#6FE451] hover:bg-green-600 text-white px-6 py-2 rounded-lg font-medium transition-all duration-200"
                style={{ boxShadow: '0 4px 4px rgba(0, 0, 0, 0.25)' }}
              >
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
