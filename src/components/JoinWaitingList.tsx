'use client';

import CTAButtons from "./CTAButtons";

export default function JoinWaitingList() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-[#7FFF6B]">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Main Headline */}
        <div className="mb-8">
          <h2 className="lg:w-10/12 mx-auto text-4xl font-dm-sans lg:text-[54px] font-[700] text-black mb-6 leading-[60px]">
            Join the Waiting List today
          </h2>
        </div>
        
        {/* Descriptive Paragraph */}
        <div className="mb-12">
          <p className="lg:w-10/12 mx-auto text-[16px] text-[#010D3E] max-w-3xl leading-relaxed mb-8">
            Celebrate the joy of accomplishment with an app designed to track your progress and motivate your efforts.
          </p>
        </div>
        
        {/* Call-to-Action Button */}
        <div className="flex items-center justify-center">
          <CTAButtons
            isForProfessionalsPage={false}
            showLearnMore={false}
          />
        </div>
      </div>
    </section>
  );
}
