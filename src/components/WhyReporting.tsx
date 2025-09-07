'use client';

import Image from "next/image";

export default function WhyReporting() {
  return (
    <section className="py-20 bg-gradient-to-b from-white from-30% to-[#7FFF6BCC] to-80%">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-block bg-white rounded-[10px] px-10 py-1 mb-6 border border-[rgba(34, 34, 34, 0.1)] shadow-sm">
            <span className="text-sm font-medium text-black">Why Reporting?</span>
          </div>

          <h2 className="lg:w-10/12 mx-auto text-4xl lg:text-[54px] font-[700] font-dm-sans text-black mb-6 leading-[60px]">
          Don&apos;t lose deals over missing ESG data
          </h2>
          
          <p className="lg:w-10/12 mx-auto text-[22px] text-[#010D3E] font-inter max-w-3xl leading-relaxed mb-8">
          From assuring to meet all your stakeholders data requests to contribute to a more sustainable economy, reporting your ESG data is crucial
          </p>
        </div>
        
        {/* Benefits List */}
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Item 1: Meet ESG Data Requests */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center flex-shrink-0 shadow-sm">
              <Image src="/person.svg" alt="Coins Icon" width={26} height={26} />
            </div>
            <div>
              <p className="text-lg font-inter text-black leading-relaxed">
                Meet ESG data requests from financial institutions, large companies and other partners
              </p>
            </div>
          </div>
          
          {/* Item 2: Facilitate Green Financing */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center flex-shrink-0 shadow-sm">
              <Image src="/zoom-money.svg" alt="Coins Icon" width={26} height={26} />
            </div>
            <div>
              <p className="text-lg font-inter text-black leading-relaxed">
                Facilitate access to green financing
              </p>
            </div>
          </div>
          
          {/* Item 3: Manage ESG Risks */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center flex-shrink-0 shadow-sm">
              <Image src="/arrow-ramp-left.svg" alt="Coins Icon" width={26} height={26} />
            </div>
            <div>
              <p className="text-lg font-inter text-black leading-relaxed">
                Manage ESG risks and opportunities more strategically
              </p>
            </div>
          </div>
          
          {/* Item 4: Competitive Advantage */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center flex-shrink-0 shadow-sm">
              <Image src="/dots.svg" alt="Coins Icon" width={26} height={26} />
            </div>
            <div>
              <p className="text-lg font-inter text-black leading-relaxed">
                Get a solid competitive advantage over other players
              </p>
            </div>
          </div>
          
          {/* Item 5: Sustainable Economy */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center flex-shrink-0 shadow-sm">
              <Image src="/leaf.svg" alt="Coins Icon" width={26} height={26} />
            </div>
            <div>
              <p className="text-lg font-inter text-black leading-relaxed">
                Contribute to a more sustainable and inclusive economy
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
