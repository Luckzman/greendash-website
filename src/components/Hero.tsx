'use client';

import Image from 'next/image';
import CTAButtons from './CTAButtons';

interface HeroProps {
  isForProfessionalsPage?: boolean;
  isForCertificationPage?: boolean;
}

export default function Hero({ isForProfessionalsPage = false, isForCertificationPage = false }: HeroProps) {
  return (
    <section className={`min-h-screen ${
      isForProfessionalsPage 
        ? 'bg-[#131313]' 
        : 'bg-gradient-to-b from-[#EEFFEC] to-[#7FFF6B]'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center min-h-[80vh]">
          
          {/* Left Side - Marketing Content (45%) */}
          <div className="lg:col-span-5 space-y-6 sm:space-y-8 text-center lg:text-left">
            {/* Launch Tag */}
            <div className={`inline-block rounded-[10px] px-3 py-1 shadow-sm ${
              isForProfessionalsPage 
                ? 'bg-white border border-black' 
                : 'bg-white border border-[rgba(34, 34, 34, 0.1)]'
            }`}>
              <span className={`text-sm font-inter font-medium ${
                isForProfessionalsPage ? 'text-black' : 'text-black'
              }`}>
                {isForProfessionalsPage ? 'Launch Coming Soon' : 'Launch Coming Soon'}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className={`text-3xl sm:text-4xl lg:text-[50px] font-dm-sans font-bold lg:leading-[60px] leading-tight ${
              isForProfessionalsPage 
                ? 'text-[#6FE451]' 
                : 'text-black'
            }`}>
              {isForProfessionalsPage 
                ? 'Accelerate Your Reporting Services' 
                : isForCertificationPage
                ? 'ESG Certification for SMEs'
                : 'Sustainability made Simple for SME'
              }
            </h1>

            {/* Description */}
            <p className={`text-lg sm:text-[22px] font-inter font-normal leading-relaxed max-w-lg mx-auto lg:mx-0 ${
              isForProfessionalsPage 
                ? 'text-white' 
                : 'text-gray-700'
            }`}>
              {isForProfessionalsPage 
                ? 'Deliver VSME-compliant sustainability reports for your clients faster and more efficiently with our all-in-one platform tailored for SMEs'
                : isForCertificationPage
                ? 'Prove your commitment. Build trust. Win more business. Be more sustainable'
                : 'Collect, monitor and report your ESG/VSME data to all your stakeholders, while improving your company\'s ESG performance - fast and easily'
              }
            </p>

            <div className="flex flex-col gap-6 sm:gap-8">
                {/* Call to Action */}
                <CTAButtons 
                  isForProfessionalsPage={isForProfessionalsPage}
                  learnMoreText="Learn more"
                  learnMoreHref="#"
                  showLearnMore={!isForCertificationPage}
                />

                    {/* Backed By Section */}
                <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3">
                    <p className={`text-sm font-inter ${
                      isForProfessionalsPage 
                        ? 'text-white' 
                        : 'text-gray-700'
                    }`}>
                      Backed by
                    </p>
                    <div className="flex items-center gap-3">
                        <Image
                            src="/casa-do-impacto-logo.svg"
                            alt="Casa do Impacto Logo"
                            width={180}
                            height={60}
                            className="h-8 w-auto"
                        />
                    </div>
                </div>
            </div>
          </div>

          {/* Right Side - Dashboard Preview (55%) */}
          <div className="relative order-first lg:order-last lg:col-span-7">
            <div className="relative rounded-2xl transform rotate-1 hover:rotate-0 transition-transform duration-500 border border-white/20 overflow-hidden" style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}>
              {/* Three circles on top left - positioned like window controls */}
              <div className="absolute top-3 left-4 flex gap-1.5 z-10">
                <div className="w-2.5 h-2.5 bg-gray-200 rounded-full"></div>
                <div className="w-2.5 h-2.5 bg-gray-300 rounded-full"></div>
                <div className="w-2.5 h-2.5 bg-gray-400 rounded-full"></div>
              </div>
              
              <div className="p-2 pt-8 lg:p-4 lg:pt-8">
                <Image
                  src="/dashboard-preview.png"
                  alt="Green Dash Dashboard Preview"
                  width={723}
                  height={424}
                  className="w-full h-auto rounded-xl shadow-2xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
