'use client';

export default function Results() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Badge */}
        <div className="text-center mb-8">
          <div className="inline-block bg-white border border-black rounded-lg px-4 py-2">
            <span className="text-sm font-medium text-black">Results</span>
          </div>
        </div>
        
        {/* Main Heading and Subheading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-blue-900 mb-6 leading-tight">
            But why to choose GreenDash?
          </h2>
          
          <p className="text-xl text-blue-300 max-w-4xl mx-auto leading-relaxed">
            We provide real results - no complexity, just facts
          </p>
        </div>
        
        {/* Three Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {/* Left Card - Speed */}
          <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
            {/* Icon */}
            <div className="mb-6">
              <div className="w-16 h-16 bg-orange-400 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            
            {/* Title */}
            <h3 className="text-2xl font-bold text-black mb-4">
              2.5x faster
            </h3>
            
            {/* Description */}
            <p className="text-gray-600 leading-relaxed">
              ESG Reporting compared to previous methods
            </p>
          </div>
          
          {/* Middle Card - Efficiency */}
          <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
            {/* Icon */}
            <div className="mb-6">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
            </div>
            
            {/* Title */}
            <h3 className="text-2xl font-bold text-black mb-4">
              Up to less 50%
            </h3>
            
            {/* Description */}
            <p className="text-gray-600 leading-relaxed">
              Reporting admin work compared to previous methods
            </p>
          </div>
          
          {/* Right Card - Cost Savings */}
          <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
            {/* Icon */}
            <div className="mb-6">
              <div className="w-16 h-16 bg-orange-400 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
            </div>
            
            {/* Title */}
            <h3 className="text-2xl font-bold text-black mb-4">
              At least 25% cheaper
            </h3>
            
            {/* Description */}
            <p className="text-gray-600 leading-relaxed">
              Compared to previous methods such as consultancy
            </p>
          </div>
        </div>
        
        {/* Bottom Call-to-Action Button */}
        <div className="text-center">
          <button className="bg-black border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:bg-white hover:text-black transform hover:-translate-y-0.5">
            Join Waiting List
          </button>
        </div>
      </div>
    </section>
  );
}
