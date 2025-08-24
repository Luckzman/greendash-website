'use client';

import Image from 'next/image';

export default function ESGCompliance() {
  return (
    <section className="py-20 bg-gradient-to-b from-[#7FFF6B] via-[#ADFFA0CC] to-[#F1FFEE1A]">
    {/* <section className="py-20 bg-gradient-to-b from-[rgba(127, 255, 107, 1)] via-[rgba(173, 255, 160, 0.8)]  to-[rgba(241, 255, 238, 0.1)]"> */}
      <div className="max-w-7xl mx-auto px-6">
        {/* Marketing Text */}
        <div className="text-center mb-2">
          <div className="inline-block bg-gray-100 rounded-full px-12 py-2 mb-6">
            <span className="text-sm font-medium text-gray-700">The Best Solution for SME</span>
          </div>
          
          <h2 className="md:w-10/12 mx-auto text-4xl lg:text-[54px] font-[700] text-[#001354] mb-6 leading-[60px]">
            Stay ESG Compliant, All Year Long - even if you don&apos;t have a sustainability team
          </h2>
          
          <p className="text-[16px] text-[#010D3E] mt-6 max-w-xl mx-auto">
            We simplify your VSME reporting journey, so you can focus on what&apos;s important - your business
          </p>
        </div>

        {/* Browser Frame with Dashboard */}
        <div className="max-w-6xl mx-auto">
            <Image
              src="/product-image.png"
              alt="Green Dash Dashboard Preview"
              width={723}
              height={424}
              className="w-full h-auto"
              priority
            />
        </div>
      </div>
    </section>
  );
}


