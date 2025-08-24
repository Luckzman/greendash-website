'use client';

import Image from "next/image";

export default function CoursesCertification() {
  return (
    <section className="py-20 bg-gradient-to-b from-[#7FFF6BCC] from-20% to-white to-80%">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Badge */}
        <div className="text-center mb-8">
          <div className="inline-block bg-white rounded-[10px] px-10 py-1 mb-6 border border-[rgba(34, 34, 34, 0.1)] shadow-sm">
            <span className="text-sm font-medium text-black">Courses & Certification</span>
          </div>
        </div>
        
        {/* Main Headline */}
        <div className="text-center mb-16">
          <h2 className="lg:w-10/12 mx-auto text-4xl lg:text-[54px] font-[700] text-[#001354] mb-6 leading-[60px]">
            Go Beyond Reporting
          </h2>
          
          <p className="lg:w-10/12 mx-auto text-[16px] text-[#010D3E] max-w-3xl leading-relaxed mb-8">
            We help small and medium businesses not only comply, but also build in-house expertise that wins client trust and opens new market opportunities
          </p>
        </div>
        
        {/* Cards Container */}
        <div className="grid md:grid-cols-2 gap-8 lg:max-w-5xl mx-auto">
          {/* Left Card - Green Dash Academy */}
          <div className="bg-white rounded-xl p-8 shadow-md shadow-gray-300 border border-[rgba(36, 38, 43, 0.5)]  flex flex-col">
            {/* Logo */}
            <div className="text-center mb-6">
              <Image
                src="/greendash-academy-logo.svg"
                alt="Green Dash Academy Logo"
                width={200}
                height={80}
                className="h-16 w-auto mx-auto"
              />
            </div>
            
            {/* Description */}
            <p className="w-9/12 mx-auto text-[16px] text-[#010D3E] text-center mb-8 leading-relaxed flex-1">
              Grow your expertise and learn about ESG, SDG and CSRD/VSME from Zero to Pro No Jargon or Complexity, Just Clarity
            </p>
            
            {/* CTA Link */}
            <div className="text-center mt-auto">
              <a href="#" className="inline-flex items-center text-base font-medium text-black hover:text-blue-700 transition-colors">
                Learn more →
              </a>
            </div>
          </div>
          
          {/* Right Card - Green Dash Certification */}
          <div className="bg-white rounded-xl p-8 shadow-md shadow-gray-300 border border-[rgba(36, 38, 43, 0.5)] flex flex-col">
            {/* Logo */}
            <div className="text-center mb-6">
              <Image
                src="/greendash-academy-certification.svg"
                alt="Green Dash Certification Logo"
                width={200}
                height={80}
                className="h-16 w-auto mx-auto"
              />
            </div>
            
            {/* Description */}
            <p className="w-9/12 mx-auto text-[16px] text-[#010D3E] text-center mb-8 leading-relaxed flex-1">
              Get certified and showcase your alignment with CSRD/VSME and SDG standards
            </p>
            
            {/* CTA Link */}
            <div className="text-center mt-auto">
              <a href="#" className="inline-flex items-center text-base font-medium text-black hover:text-blue-700 transition-colors">
                Learn more →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
