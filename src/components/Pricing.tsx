'use client';

import Link from 'next/link';

export default function Pricing() {
  return (
    <section className="py-20 bg-gradient-to-b from-[#7FFF6B] via-[#EEFFEC] to-[#7FFF6B]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-16">
          {/* Top Badge */}
          <div className="inline-block bg-white rounded-[10px] px-10 py-1 mb-6 border border-[rgba(34, 34, 34, 0.1)] shadow-sm">
            <span className="text-sm font-medium text-black">Perfect-Fit Prices</span>
          </div>
          
          {/* Main Headline */}
          <h1 className="text-4xl lg:text-5xl font-bold text-[#001354] pb-6 leading-[70px]">
            Personalized price tailored for your company size and needs
          </h1>
          
          {/* Tagline */}
          <p className="text-xl text-[#010D3E] max-w-3xl mx-auto leading-relaxed">
            Start Your ESG Journey Today
          </p>
        </div>

                {/* Pricing Cards */}
        <div className="grid lg:grid-cols-4 gap-6 mb-16">
          {/* One Shot Card */}
          <div className="bg-white rounded-xl p-6 shadow-lg hover:bg-gray-50 transition-all duration-300 group">
            <h3 className="text-2xl font-bold text-[#001354] mb-3">One Shot</h3>
            <p className="text-gray-600 mb-6">For companies needing a single VSME report</p>
            
            <div className="mb-6">
              <p className="text-gray-700 font-medium mb-3">Features included:</p>
              <div className="flex items-center mb-3">
                <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700">1 Annual VSME Report</span>
              </div>
            </div>
            
            <p className="text-sm text-gray-600 mb-6">
              Ideal for SMEs that just want a one-time, fully compliant sustainability report without ongoing monitoring or recommendations
            </p>
            
            <div className="mt-auto">
              <Link href="/contact-us" className="block">
                <button className="w-full bg-white border-2 border-gray-300 text-[#001354] hover:bg-gray-100 px-6 py-3 rounded-lg font-medium transition-all duration-200 flex items-center justify-center gap-2">
                  <span>Get started</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </Link>
              <div className="border-t border-gray-200 mt-4"></div>
            </div>
          </div>

          {/* Monitoring Card */}
          <div className="bg-white rounded-xl p-6 shadow-lg hover:bg-gray-50 transition-all duration-300 group">
            <h3 className="text-2xl font-bold text-[#001354] mb-3">Monitoring</h3>
            <p className="text-gray-600 mb-6">For SMEs that want to track ESG progress all year</p>
            
            <div className="mb-6">
              <p className="text-gray-700 font-medium mb-3">Features Included:</p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">ESG Data Center</span>
                </div>
                <div className="flex items-center">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">ESG Data Analytics</span>
                </div>
                <div className="flex items-center">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">ESG Recommendations</span>
                </div>
                <div className="flex items-center">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Data Export</span>
                </div>
                <div className="flex items-center">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Scope 1 and 2 Emissions</span>
                </div>
                <div className="flex items-center">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">24/7 support on VSME</span>
                </div>
              </div>
            </div>
            
            <p className="text-sm text-gray-600 mb-6">
              Perfect for SMEs collecting data continuously, monitoring performance, and staying ready to respond to any ESG request
            </p>
            
            <div className="mt-auto">
              <Link href="/contact-us" className="block">
                <button className="w-full bg-white border-2 border-gray-300 text-[#001354] hover:bg-gray-100 px-6 py-3 rounded-lg font-medium transition-all duration-200 flex items-center justify-center gap-2">
                  <span>Get started</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </Link>
              <div className="border-t border-gray-200 mt-4"></div>
            </div>
          </div>

          {/* Reporting Card - Highlighted */}
          <div className="bg-black rounded-xl p-6 shadow-lg hover:bg-gray-900 transition-all duration-300 group">
            <h3 className="text-2xl font-bold text-white mb-3">Reporting</h3>
            <p className="text-gray-300 mb-6">For businesses completing their yearly VSME report</p>
            
            <div className="mb-6">
              <p className="text-gray-300 font-medium mb-3">All in Monitoring, plus:</p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <svg className="w-3 h-3 text-black" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-white">1 Annual VSME Report</span>
                </div>
                <div className="flex items-center">
                  <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <svg className="w-3 h-3 text-black" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-white">CSRD Certificate</span>
                </div>
                <div className="flex items-center">
                  <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <svg className="w-3 h-3 text-black" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-white">ESG Policy Service</span>
                </div>
              </div>
            </div>
            
            <p className="text-sm text-gray-300 mb-6">
              Perfect for SMEs that want full ESG monitoring, professional CSRD report generation, a tailored ESG policy, and official VSME certification
            </p>
            
            <div className="mt-auto">
              <Link href="/contact-us" className="block">
                <button className="w-full bg-white border-2 border-gray-300 text-[#001354] hover:bg-gray-100 px-6 py-3 rounded-lg font-medium transition-all duration-200 flex items-center justify-center gap-2">
                  <span>Get started</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </Link>
              <div className="border-t border-gray-600 mt-4"></div>
            </div>
          </div>

          {/* Tailored Card */}
          <div className="bg-white rounded-xl p-6 shadow-lg hover:bg-gray-50 transition-all duration-300 group">
            <h3 className="text-2xl font-bold text-[#001354] mb-3">Tailored</h3>
            <p className="text-gray-600 mb-6">For SMEs that want a personalized design or integrations</p>
            
            <div className="mb-6">
              <p className="text-gray-700 font-medium mb-3">All in Monitoring, plus:</p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Report Graphic Design service</span>
                </div>
                <div className="flex items-center">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Tailored Integrations</span>
                </div>
              </div>
            </div>
            
            <p className="text-sm text-gray-600 mb-6">
              Tailored for SMEs that require full customization of integration and report design
            </p>
            
            <div className="mt-auto">
              <Link href="/contact-us" className="block">
                <button className="w-full bg-white border-2 border-gray-300 text-[#001354] hover:bg-gray-100 px-6 py-3 rounded-lg font-medium transition-all duration-200 flex items-center justify-center gap-2">
                  <span>Contact us</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </button>
              </Link>
              <div className="border-t border-gray-200 mt-4"></div>
            </div>
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center">
          <p className="text-lg text-[#010D3E] mb-6">
            Still not sure? Contact Us for a free consultation to help choose the right plan for you
          </p>
          <Link href="/contact-us">
            <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:-translate-y-0.5">
              Contact Us
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
