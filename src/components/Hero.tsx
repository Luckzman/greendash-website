'use client';

import Image from 'next/image';

export default function Hero() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-[#EEFFEC] to-[#7FFF6B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[80vh]">
          
          {/* Left Side - Marketing Content */}
          <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
            {/* Launch Tag */}
            <div className="inline-block bg-white rounded-[10px] px-3 py-1 border border-[rgba(34, 34, 34, 0.1)] shadow-sm">
              <span className="text-sm font-medium text-black">Launch Coming Soon</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-[55px] font-bold text-gray-800 lg:leading-[60px] leading-tight">
              Sustainability made Simple for SME
            </h1>

            {/* Description */}
            <p className="text-lg sm:text-[22px] font-normal text-gray-700 leading-relaxed max-w-lg mx-auto lg:mx-0">
              Collect, monitor and report your ESG/VSME data to all your stakeholders, while improving your company&apos;s ESG performance - fast and easily
            </p>

            <div className="flex flex-col gap-6 sm:gap-8">
                {/* Call to Action */}
                <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
                    <button className="w-full sm:w-auto bg-black hover:bg-gray-800 text-white px-6 py-3 sm:py-2 rounded-lg font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                        Join Waiting List
                    </button>
                    <a href="#" className="text-gray-700 hover:text-gray-900 font-medium text-lg transition-colors">
                        Learn more →
                    </a>
                </div>

                    {/* Backed By Section */}
                <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3">
                    <p className="text-gray-700 text-sm">Backed by</p>
                    <div className="flex items-center gap-3">
                        <Image
                            src="/casa-do-impacto-logo.svg"
                            alt="Casa do Impacto Logo"
                            width={120}
                            height={40}
                            className="h-8 w-auto"
                        />
                    </div>
                </div>
            </div>
          </div>

          {/* Right Side - Dashboard Preview */}
          <div className="relative order-first lg:order-last">
            <div className="bg-[rgba(255, 255, 255, 0.28)] p-2 sm:p-[16px] rounded-2xl transform rotate-1 hover:rotate-0 transition-transform duration-500">
              <Image
                src="/dashboard-preview.png"
                alt="Green Dash Dashboard Preview"
                width={723}
                height={424}
                className="w-full h-auto rounded-2xl shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
