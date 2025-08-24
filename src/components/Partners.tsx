'use client';

import Image from "next/image";

export default function Partners() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Badge */}
        <div className="text-center mb-8">
          <div className="inline-block bg-white rounded-[10px] px-10 py-1 mb-6 border border-[rgba(34, 34, 34, 0.1)] shadow-sm">
            <span className="text-sm font-medium text-black">Partners</span>
          </div>
        </div>
        
        {/* Main Headline */}
        <div className="text-center mb-16">
          <h2 className="mx-auto text-4xl lg:text-[54px] font-[700] text-[#001354] mb-6 leading-[60px]">
            We are Collaborating with the Best in Town
          </h2>
        </div>
        
        {/* Partner Logos Carousel */}
        <div className="relative overflow-hidden">
          {/* Fade Left */}
          <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-white to-transparent z-10"></div>
          
          {/* Fade Right */}
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-white to-transparent z-10"></div>
          
          {/* Carousel Container */}
          <div className="flex animate-scroll">
            {/* First set of logos */}
            <div className="flex items-center gap-16 px-8">
              {/* Logo 1: CASA DO IMPACTO */}
              <div className="text-center min-w-[200px]">
                <div className="mb-3">
                  <div className="w-54 h-54 flex items-center justify-center mx-auto">
                    <Image
                      src="/casa-do-impacto-logo.svg"
                      alt="Casa do Impacto Logo"
                      width={160}
                      height={60}
                      className="h-28 w-auto"
                    />
                  </div>
                </div>
              </div>
              
              {/* Logo 2: unicorn Factory Lisboa */}
              <div className="text-center min-w-[200px]">
                <div className="mb-3">
                  <div className="w-60 h-60 flex items-center justify-center mx-auto">
                    <Image
                      src="/unicorn-logo.svg"
                      alt="Unicorn Factory Lisboa Logo"
                      width={160}
                      height={60}
                      className="h-28 w-auto"
                    />
                  </div>
                </div>
              </div>
              
              {/* Logo 3: Junitec */}
              <div className="text-center min-w-[200px]">
                <div className="mb-3">
                  <div className="w-54 h-54 flex items-center justify-center mx-auto">
                    <Image
                      src="/junitec-logo.svg"
                      alt="Junitec Logo"
                      width={120}
                      height={40}
                      className="h-28 w-auto"
                    />
                  </div>
                </div>
              </div>
              
              {/* Logo 4: European Institute of Innovation & Technology */}
              <div className="text-center min-w-[200px]">
                <div className="mb-3">
                  <div className="w-54 h-54 flex items-center justify-center mx-auto">
                    <Image
                      src="/eit-logo.svg"
                      alt="European Institute of Innovation & Technology Logo"
                      width={160}
                      height={60}
                      className="h-28 w-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Duplicate set for seamless loop */}
            <div className="flex items-center gap-16 px-8">
              {/* Logo 1: CASA DO IMPACTO */}
              <div className="text-center min-w-[200px]">
                <div className="mb-3">
                  <div className="w-54 h-54 flex items-center justify-center mx-auto">
                    <Image
                      src="/casa-do-impacto-logo.svg"
                      alt="Casa do Impacto Logo"
                      width={160}
                      height={60}
                      className="h-28 w-auto"
                    />
                  </div>
                </div>
              </div>
              
              {/* Logo 2: unicorn Factory Lisboa */}
              <div className="text-center min-w-[200px]">
                <div className="mb-3">
                  <div className="w-60 h-60 flex items-center justify-center mx-auto">
                    <Image
                      src="/unicorn-logo.svg"
                      alt="Unicorn Factory Lisboa Logo"
                      width={160}
                      height={60}
                      className="h-28 w-auto"
                    />
                  </div>
                </div>
              </div>
              
              {/* Logo 3: Junitec */}
              <div className="text-center min-w-[200px]">
                <div className="mb-3">
                  <div className="w-54 h-54 flex items-center justify-center mx-auto">
                    <Image
                      src="/junitec-logo.svg"
                      alt="Junitec Logo"
                      width={120}
                      height={40}
                      className="h-28 w-auto"
                    />
                  </div>
                </div>
              </div>
              
              {/* Logo 4: European Institute of Innovation & Technology */}
              <div className="text-center min-w-[200px]">
                <div className="mb-3">
                  <div className="w-54 h-54 flex items-center justify-center mx-auto">
                    <Image
                      src="/eit-logo.svg"
                      alt="European Institute of Innovation & Technology Logo"
                      width={160}
                      height={60}
                      className="h-28 w-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
