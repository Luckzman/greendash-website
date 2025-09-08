'use client';

import Link from 'next/link';

export default function Pricing() {
  return (
    <section className="py-20" style={{
      background: 'linear-gradient(to bottom, #7FFF6B 0%, #ADFFA0 20%, #ADFFA0 40%, #FFFFFF 60%, #FFFFFF 85%, #7FFF6B 100%)'
    }}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-16">
          {/* Top Badge */}
          <div className="inline-block bg-white rounded-[10px] px-10 py-1 mb-6 border border-[rgba(34, 34, 34, 0.1)] shadow-sm">
            <span className="text-sm font-medium text-black">Perfect-Fit Prices</span>
          </div>
          
          {/* Main Headline */}
          <h1 className="text-4xl lg:text-5xl font-bold text-black pb-6 leading-[70px] font-dm-sans max-w-4xl mx-auto">
            Personalized price tailored for your company size and needs
          </h1>
          
          {/* Tagline */}
          <p className="text-xl text-[#010D3E] max-w-3xl mx-auto leading-relaxed font-inter">
            Start Your ESG Journey Today
          </p>
        </div>

                {/* Pricing Cards */}
        <div className="grid lg:grid-cols-4 gap-6 mb-16 items-start">
          {/* One Shot Card */}
          <div className="bg-white rounded-xl p-6 shadow-lg hover:bg-black hover:text-white transition-all duration-300 group">
            <h3 className="text-2xl font-bold font-inter text-[#001354] group-hover:text-white mb-3">One Shot</h3>
            <p className="text-[#514F6E] group-hover:text-gray-300 mb-10 text-sm font-inter font-medium">For companies needing a single VSME report</p>
            
            <div>
              <Link href="/join-waiting-list" className="block">
                <button className="w-full bg-white border-2 border-gray-300 text-[#001354] hover:bg-gray-100 group-hover:bg-white group-hover:text-black px-6 py-3 rounded-lg font-medium transition-all duration-200 flex items-center justify-center gap-2">
                  <span>Get started</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </Link>
            <div className="border-t border-gray-200 group-hover:border-gray-600 my-8"></div>

            <div className="">
              <p className="text-[#170F49] group-hover:text-gray-300 font-medium mb-10 font-inter">Features included:</p>
              <div className="flex items-center mb-3">
                <div className="w-5 h-5 bg-[#4FCC3C] group-hover:bg-white rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  <svg className="w-3 h-3 text-white group-hover:text-black" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-[#6F6C8F] group-hover:text-white font-inter font-normal">1 Annual VSME Report</span>
              </div>
            </div>

            <div className="border-t border-gray-200 group-hover:border-gray-600 my-8"></div>
            
            <p className="text-[#6F6C8F] group-hover:text-gray-300 mb-6 font-inter font-normal">
              Ideal for SMEs that just want a one-time, fully compliant sustainability report without ongoing monitoring or recommendations
            </p>
            
           
            </div>
          </div>

          {/* Monitoring Card */}
          <div className="bg-white rounded-xl p-6 shadow-lg hover:bg-black hover:text-white transition-all duration-300 group">
            <h3 className="text-2xl font-bold font-inter text-[#001354] group-hover:text-white mb-3">Monitoring</h3>
            <p className="text-[#514F6E] group-hover:text-gray-300 mb-10 text-sm font-inter font-medium">For SMEs that want to track ESG progress all year</p>
            
            <div>
              <Link href="/join-waiting-list" className="block">
                <button className="w-full bg-white border-2 border-gray-300 text-[#001354] hover:bg-gray-100 group-hover:bg-white group-hover:text-black px-6 py-3 rounded-lg font-medium transition-all duration-200 flex items-center justify-center gap-2">
                  <span>Get started</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </Link>
              <div className="border-t border-gray-200 group-hover:border-gray-600 my-8"></div>

              <div className="">
                <p className="text-[#170F49] group-hover:text-gray-300 font-medium mb-10 font-inter">Features Included:</p>
                <div className="space-y-6">
                  <div className="flex items-center">
                    <div className="w-5 h-5 bg-[#4FCC3C] group-hover:bg-white rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <svg className="w-3 h-3 text-white group-hover:text-black" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-[#6F6C8F] group-hover:text-white font-inter font-normal">ESG Data Center</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-5 h-5 bg-[#4FCC3C] group-hover:bg-white rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <svg className="w-3 h-3 text-white group-hover:text-black" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-[#6F6C8F] group-hover:text-white font-inter font-normal">ESG Data Analytics</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-5 h-5 bg-[#4FCC3C] group-hover:bg-white rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <svg className="w-3 h-3 text-white group-hover:text-black" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-[#6F6C8F] group-hover:text-white font-inter font-normal">ESG Recommendations</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-5 h-5 bg-[#4FCC3C] group-hover:bg-white rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <svg className="w-3 h-3 text-white group-hover:text-black" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-[#6F6C8F] group-hover:text-white font-inter font-normal">Data Export</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-5 h-5 bg-[#4FCC3C] group-hover:bg-white rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <svg className="w-3 h-3 text-white group-hover:text-black" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-[#6F6C8F] group-hover:text-white font-inter font-normal">Scope 1 and 2 Emissions</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-5 h-5 bg-[#4FCC3C] group-hover:bg-white rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <svg className="w-3 h-3 text-white group-hover:text-black" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-[#6F6C8F] group-hover:text-white font-inter font-normal">24/7 support on VSME</span>
                  </div>
                </div>
              </div>
              
              <div className="border-t border-gray-200 group-hover:border-gray-600 my-8"></div>

              <p className="text-[#6F6C8F] group-hover:text-gray-300 mb-6 font-inter font-normal">
                Perfect for SMEs collecting data continuously, monitoring performance, and staying ready to respond to any ESG request
              </p>
            </div>
          </div>

          {/* Reporting Card - With Hover Effects */}
          <div className="bg-white rounded-xl p-6 shadow-lg hover:bg-black hover:text-white transition-all duration-300 group">
            <h3 className="text-2xl font-bold font-inter text-[#001354] group-hover:text-white mb-3">Reporting</h3>
            <p className="text-[#514F6E] group-hover:text-gray-300 mb-10 text-sm font-inter font-medium">For businesses completing their yearly VSME report</p>
            

            <div>
              <Link href="/join-waiting-list" className="block">
                <button className="w-full bg-white border-2 border-gray-300 text-[#001354] hover:bg-gray-100 group-hover:bg-white group-hover:text-black px-6 py-3 rounded-lg font-medium transition-all duration-200 flex items-center justify-center gap-2">
                  <span>Get started</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </Link>
              <div className="border-t border-gray-200 group-hover:border-gray-600 my-8"></div>
            </div>

            <div className="">
              <p className="text-[#170F49] group-hover:text-gray-300 font-medium mb-10 font-inter">All in Monitoring, plus:</p>
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-5 h-5 bg-[#4FCC3C] group-hover:bg-white rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <svg className="w-3 h-3 text-white group-hover:text-black" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-[#6F6C8F] group-hover:text-white font-inter font-normal">1 Annual VSME Report</span>
                </div>
                <div className="flex items-center">
                  <div className="w-5 h-5 bg-[#4FCC3C] group-hover:bg-white rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <svg className="w-3 h-3 text-white group-hover:text-black" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-[#6F6C8F] group-hover:text-white font-inter font-normal">CSRD Certificate</span>
                </div>
                <div className="flex items-center">
                  <div className="w-5 h-5 bg-[#4FCC3C] group-hover:bg-white rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <svg className="w-3 h-3 text-white group-hover:text-black" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-[#6F6C8F] group-hover:text-white font-inter font-normal">ESG Policy Service</span>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-200 group-hover:border-gray-600 my-8"></div>
            
            <p className="text-[#6F6C8F] group-hover:text-gray-300 mb-6 font-inter font-normal">
              Perfect for SMEs that want full ESG monitoring, professional CSRD report generation, a tailored ESG policy, and official VSME certification
            </p>
            
          </div>

          {/* Tailored Card */}
          <div className="bg-white rounded-xl p-6 shadow-lg hover:bg-black hover:text-white transition-all duration-300 group">
            <h3 className="text-2xl font-inter font-bold text-[#001354] group-hover:text-white mb-3">Tailored</h3>
            <p className="text-[#514F6E] group-hover:text-gray-300 mb-10 text-sm font-inter font-medium">For SMEs that want a personalized design or integrations</p>
            
            <div>
              <Link href="/contact-us" className="block">
                <button className="w-full bg-white border-2 border-gray-300 text-[#001354] hover:bg-gray-100 group-hover:bg-white group-hover:text-black px-6 py-3 rounded-lg font-medium transition-all duration-200 flex items-center justify-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>Contact us</span>
                </button>
              </Link>
              <div className="border-t border-gray-200 group-hover:border-gray-600 my-8"></div>
              
              <div className="">
                <p className="text-[#170F49] group-hover:text-gray-300 font-medium mb-10 font-inter">All in Monitoring, plus:</p>
                <div className="space-y-6">
                  <div className="flex items-center">
                    <div className="w-5 h-5 bg-[#4FCC3C] group-hover:bg-white rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <svg className="w-3 h-3 text-white group-hover:text-black" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-[#6F6C8F] group-hover:text-white font-inter font-normal">Report Graphic Design service</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-5 h-5 bg-[#4FCC3C] group-hover:bg-white rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <svg className="w-3 h-3 text-white group-hover:text-black" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-[#6F6C8F] group-hover:text-white font-inter font-normal">Tailored Integrations</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="border-t border-gray-200 group-hover:border-gray-600 my-8"></div>
            
            <p className="text-[#6F6C8F] group-hover:text-gray-300 mb-6 font-inter font-normal">
              Tailored for SMEs that require full customization of integration and report design
            </p>
            
            
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center">
          <p className="text-lg text-[#010D3E] mb-6">
            Still not sure? <Link href="/contact-us">
            <button className="bg-[#6FE451] hover:bg-green-600 text-white px-6 py-2 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:-translate-y-0.5" style={{ boxShadow: '0 4px 4px rgba(0, 0, 0, 0.25)' }}>
              Contact Us
            </button>
          </Link> for a free consultation to help choose the right plan for you
          </p>
          
        </div>
      </div>
    </section>
  );
}
