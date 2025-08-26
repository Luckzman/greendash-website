'use client';

import { useEffect } from 'react';

export default function CalendlyBooking({ csrdVsme }: { csrdVsme?: boolean }) {
  useEffect(() => {
    // Load Calendly script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    // Cleanup function to remove script when component unmounts
    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <section className="py-20 bg-gradient-to-b from-[#7FFF6B] via-[#EEFFEC] to-[#7FFF6B]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-12">
          {/* Top Badge */}
          <div className="inline-block bg-white rounded-[10px] px-10 py-1 mb-6 border border-[rgba(34, 34, 34, 0.1)] shadow-sm">
            <span className="text-sm font-medium text-black">Certification</span>
          </div>
          
          {/* Main Headline */}
          <h1 className="text-4xl lg:text-5xl font-bold text-[#001354] pb-6 leading-[70px]">
            {csrdVsme ? "Let's start your CSRD VSME Certification journey" : "Let's start your ESG Maturity Certification journey"}
          </h1>
          
          {/* Description */}
          <p className="text-xl text-[#010D3E] max-w-3xl mx-auto leading-relaxed">
            Last step: Book a time with us!
          </p>
        </div>

        {/* Calendly inline widget */}
        {/* <div className="bg-white rounded-xl shadow-lg overflow-hidden"> */}
          <div 
            className="calendly-inline-widget" 
            data-url="https://calendly.com/greendash-internal/30min?primary_color=00d351" 
            style={{ minWidth: '320px', height: '700px' }}
          />
        {/* </div> */}
      </div>
    </section>
  );
}
