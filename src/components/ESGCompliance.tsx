'use client';

import Image from 'next/image';

export default function ESGCompliance() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Marketing Text */}
        <div className="text-center mb-16">
          <div className="inline-block bg-gray-100 rounded-full px-4 py-2 mb-6">
            <span className="text-sm font-medium text-gray-700">The Best Solution for SME</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-blue-900 mb-6 leading-tight">
            Stay ESG Compliant, All Year Long
          </h2>
          <p className="text-xl text-blue-700 max-w-3xl mx-auto leading-relaxed">
            even if you don&apos;t have a sustainability team
          </p>
          
          <p className="text-lg text-blue-600 mt-6 max-w-2xl mx-auto">
            We simplify your VSME reporting journey, so you can focus on what's important - your business
          </p>
        </div>

        {/* Browser Frame with Dashboard */}
        <div className="max-w-6xl mx-auto">
        <Image
            src="/product-image.png"
            alt="Green Dash Dashboard Preview"
            width={600}
            height={400}
            className="w-full h-auto rounded-2xl shadow-2xl"
            priority
        />
          

        </div>
      </div>
    </section>
  );
}


