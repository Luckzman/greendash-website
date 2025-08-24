'use client';

export default function CoursesCertification() {
  return (
    <section className="py-20 bg-gradient-to-b from-green-50 to-green-100">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Badge */}
        {/* <div className="text-center mb-8">
          <div className="inline-block bg-white border border-black rounded-lg px-4 py-2">
            <span className="text-sm font-medium text-black">Courses & Certification</span>
          </div>
        </div> */}
        
        {/* Main Headline */}
        {/* <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-blue-900 mb-6 leading-tight">
            Go Beyond Reporting
          </h2>
          
          <p className="text-xl text-blue-900 max-w-4xl mx-auto leading-relaxed">
            We help small and medium businesses not only comply, but also build in-house expertise that wins client trust and opens new market opportunities
          </p>
        </div> */}

        <div className="text-center mb-12">
          <div className="inline-block bg-white rounded-[10px] px-10 py-1 mb-6 border border-[rgba(34, 34, 34, 0.1)] shadow-sm">
            <span className="text-sm font-medium text-black">PCourses & Certification</span>
          </div>

          <h2 className="lg:w-10/12 mx-auto text-4xl lg:text-[54px] font-[700] text-[#001354] mb-6 leading-[60px]">
          Go Beyond Reporting
          </h2>
          
          <p className="lg:w-10/12 mx-auto text-[16px] text-[#010D3E] max-w-3xl leading-relaxed mb-8">
          We help small and medium businesses not only comply, but also build in-house expertise that wins client trust and opens new market opportunities
          </p>
        </div>
        
        {/* Cards Container */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Left Card - Green Dash Academy */}
          <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
            {/* Logo */}
            <div className="text-center mb-6">
              <div className="inline-block">
                <div className="text-3xl font-bold text-black">
                  green <span className="text-orange-500">dash</span>
                </div>
                <div className="text-lg font-semibold text-orange-500">academy</div>
              </div>
            </div>
            
            {/* Description */}
            <p className="text-lg text-blue-900 text-center mb-8 leading-relaxed">
              Grow your expertise and learn about ESG, SDG and CSRD/VSME from Zero to Pro No Jargon or Complexity, Just Clarity
            </p>
            
            {/* CTA Link */}
            <div className="text-center">
              <a href="#" className="inline-flex items-center text-lg font-semibold text-blue-900 hover:text-blue-700 transition-colors">
                Learn more →
              </a>
            </div>
          </div>
          
          {/* Right Card - Green Dash Certification */}
          <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
            {/* Logo */}
            <div className="text-center mb-6">
              <div className="inline-block">
                <div className="text-3xl font-bold text-black">
                  green <span className="text-blue-500">dash</span>
                </div>
                <div className="text-lg font-semibold text-blue-500">certification</div>
              </div>
            </div>
            
            {/* Description */}
            <p className="text-lg text-blue-900 text-center mb-8 leading-relaxed">
              Get certified and showcase your alignment with CSRD/VSME and SDG standards
            </p>
            
            {/* CTA Link */}
            <div className="text-center">
              <a href="#" className="inline-flex items-center text-lg font-semibold text-blue-900 hover:text-blue-700 transition-colors">
                Learn more →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
