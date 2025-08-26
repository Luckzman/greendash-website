'use client';

import Link from 'next/link';

export default function CTA() {
  return (
    <section className="py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
        {/* Top Badge */}
        <div className="inline-block bg-white rounded-[10px] px-6 sm:px-10 py-1 mb-4 sm:mb-6 border border-[rgba(34, 34, 34, 0.1)] shadow-sm">
          <span className="text-sm font-medium text-black">Helping Hand</span>
        </div>
        
        {/* Main Heading */}
        <h2 className="w-full md:w-10/12 mx-auto text-2xl sm:text-4xl lg:text-[54px] font-[700] text-[#001354] mb-4 sm:mb-6 leading-tight lg:leading-[60px] px-4">
          Don&apos;t Know Where to Start?
        </h2>

        <p className="text-sm sm:text-[16px] text-[#010D3E] mt-4 sm:mt-6 mb-8 sm:mb-12 max-w-xl mx-auto px-4">
        Not sure if your company should be reporting?
        Know that you have to report but don&apos;t know where to start?
        </p>
        
        {/* Call-to-Action Buttons */}
        <div className="flex justify-center mb-8 sm:mb-12">
          <div className="border p-2 border-gray-200 rounded-xl w-full max-w-5xl">
            <div className="flex flex-col lg:flex-row gap-4 lg:gap-5 justify-center items-center">
              {/* Left Button - Assessment */}
              <Link href="/compliant-assessment" className="w-full lg:w-auto">
                <button className="w-full lg:w-auto bg-green-500 hover:bg-green-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-medium text-sm sm:text-[16px] transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center gap-2 sm:gap-3">
                  <span className="text-center">Take your FREE Compliance CSRD/VSME Assessment now</span>
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </Link>
              
              {/* Right Button - Download Kit */}
              <Link href="/essential-kit" className="w-full lg:w-auto">
                <button className="w-full lg:w-auto bg-gray-900 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-medium text-sm sm:text-[16px] transition-all duration-200 hover:bg-gray-900 transform hover:-translate-y-0.5 flex items-center justify-center gap-2 sm:gap-3">
                  <span className="text-center">Download your FREE CSRD Essentials Kit</span>
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
