'use client';

import Image from "next/image";
import CTAButtons from "./CTAButtons";

interface ResultsProps {
  isForProfessionalsPage?: boolean;
}

export default function Results({ isForProfessionalsPage = false }: ResultsProps) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Badge */}
        <div className="text-center mb-8">
          <div className="inline-block bg-white rounded-[10px] px-10 py-1 mb-6 border border-[rgba(34, 34, 34, 0.1)] shadow-sm">
            <span className="text-sm font-medium text-black">Results</span>
          </div>
        </div>
        
        {/* Main Headline and Subheading */}
        <div className="text-center mb-16">
          <h2 className="lg:w-10/12 mx-auto text-4xl lg:text-[54px] font-[700] text-[#000000] mb-6 leading-[60px]">
            But why to choose GreenDash?
          </h2>
          
          <p className="lg:w-10/12 mx-auto text-[16px] text-[#010D3E] max-w-3xl leading-relaxed mb-8">
            We provide real results - no complexity, just facts
          </p>
        </div>
        
        {/* Three Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {/* Left Card - Speed */}
          <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
            {/* Icon */}
            <div className="mb-6">
              <Image
                src="/clock-icon.svg"
                alt="Clock Icon"
                width={26}
                height={26}
                className="w-20"
                suppressHydrationWarning
                style={{ width: 'auto', height: 'auto' }}
              />
            </div>
            
            {/* Title */}
            <h3 className="text-2xl font-bold font-dm-sans text-black mb-4">
              2.5x faster
            </h3>
            
            {/* Description */}
            <p className="text-[rgba(1, 13, 62, 1)] text-base font-inter leading-relaxed">
              ESG Reporting compared to previous methods
            </p>
          </div>
          
          {/* Middle Card - Efficiency */}
          <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
            {/* Icon */}
            <div className="mb-6">
              <Image
                src="/note-icon.svg"
                alt="Note Icon"
                width={26}
                height={26}
                className="w-20 h-20"
                suppressHydrationWarning
                style={{ width: 'auto', height: 'auto' }}
              />
            </div>
            
            {/* Title */}
            <h3 className="text-2xl font-bold font-dm-sans text-black mb-4">
              Up to less 50%
            </h3>
            
            {/* Description */}
            <p className="text-[#010D3E] text-base font-inter leading-relaxed">
              Reporting admin work compared to previous methods
            </p>
          </div>
          
          {/* Right Card - Cost Savings */}
          <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
            {/* Icon */}
            <div className="mb-6">
                <Image
                  src="/coins-icon.svg"
                  alt="Coins Icon"
                  width={26}
                  height={26}
                  className="w-24"
                  suppressHydrationWarning
                  style={{ width: 'auto', height: 'auto' }}
                />
            </div>
            
            {/* Title */}
            <h3 className="text-2xl font-bold font-dm-sans text-black pt-4 mb-4">
              At least 25% cheaper
            </h3>
            
            {/* Description */}
            <p className="text-[#010D3E] text-base font-inter leading-relaxed">
              Compared to previous methods such as consultancy
            </p>
          </div>
        </div>
        
        {/* Bottom Call-to-Action Button */}

        <div className="flex items-center justify-center">
          <CTAButtons
            isForProfessionalsPage={isForProfessionalsPage}
            learnMoreText="Contact Us"
            learnMoreHref={isForProfessionalsPage ? "/professional-contact-us" : "/contact-us"}
            showLearnMore={true}
            buttonHref={isForProfessionalsPage ? "/getting-started" : "/join-waiting-list"}
          />
        </div>
      </div>
    </section>
  );
}
