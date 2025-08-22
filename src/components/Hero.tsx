'use client';

import Image from 'next/image';

export default function Hero() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-lime-50 to-green-100">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          
          {/* Left Side - Marketing Content */}
          <div className="space-y-8">
            {/* Launch Tag */}
            <div className="inline-block bg-white rounded-full px-4 py-2 shadow-sm">
              <span className="text-sm font-medium text-black">Launch Coming Soon</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
              Sustainability made Simple for SME
            </h1>

            {/* Description */}
            <p className="text-xl text-gray-700 leading-relaxed max-w-lg">
              Collect, monitor and report your ESG/VSME data to all your stakeholders, while improving your company&apos;s ESG performance - fast and easily
            </p>

            {/* Call to Action */}
            <div className="flex items-center gap-6">
              <button className="bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                Join Waiting List
              </button>
              <a href="#" className="text-gray-700 hover:text-gray-900 font-medium text-lg transition-colors">
                Learn more →
              </a>
            </div>

            {/* Backed By Section */}
            <div className="pt-8">
              <p className="text-gray-700 text-sm mb-3">Backed by</p>
              <div className="flex items-center gap-3">
                <div className="bg-white rounded-lg px-4 py-3 shadow-sm">
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold text-gray-800">(CI)</span>
                    <div className="text-sm">
                      <span className="font-medium text-gray-800">CASA DO</span>
                      <br />
                      <span className="font-medium text-gray-800 underline">IMPACTO</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Dashboard Preview */}
          <div className="relative">
            <div className="transform rotate-1 hover:rotate-0 transition-transform duration-500">
              <Image
                src="/dashboard-preview.png"
                alt="Green Dash Dashboard Preview"
                width={600}
                height={400}
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
