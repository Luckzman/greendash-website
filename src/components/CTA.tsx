'use client';

export default function CTA() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Top Badge */}
        <div className="inline-block bg-white rounded-[10px] px-10 py-1 mb-6 border border-[rgba(34, 34, 34, 0.1)] shadow-sm">
          <span className="text-sm font-medium text-black">Helping Hand</span>
        </div>
        
        {/* Main Heading */}
        <h2 className="md:w-10/12 mx-auto text-4xl lg:text-[54px] font-[700] text-[#001354] mb-6 leading-[60px]">
          Don&apos;t Know Where to Start?
        </h2>

        <p className="text-[16px] text-[#010D3E] mt-6 mb-12 max-w-xl mx-auto">
        Not sure if your company should be reporting?
        Know that you have to report but don’t know where to start?
        </p>
        
        {/* Call-to-Action Buttons */}
        <div className="flex justify-center mb-12">
          <div className="border p-2 border-gray-200 rounded-xl">
            <div className="flex flex-col lg:flex-row  gap-6 justify-center items-center max-w-5xl mx-auto">
              {/* Left Button - Assessment */}
              <button className="w-full lg:w-auto bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-medium text-[16px] transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center gap-3">
                <span>Take your FREE Compliance CSRD/VSME Assessment now</span>
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
              
              {/* Right Button - Download Kit */}
              <button className="w-full lg:w-auto bg-gray-900  text-white px-8 py-4 rounded-lg font-medium text-[16px] transition-all duration-200 hover:bg-gray-900 transform flex items-center justify-center gap-3">
                <span>Download your FREE CSRD Essentials Kit</span>
                <svg className="w-5 h-5 text-white group-hover:text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
