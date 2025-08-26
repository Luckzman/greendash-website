'use client';

import Image from "next/image";

export default function Features() {
  return (
    <section className="py-12 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Top Section */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-block bg-white rounded-[10px] px-6 sm:px-10 py-1 mb-4 sm:mb-6 border border-[rgba(34, 34, 34, 0.1)] shadow-sm">
            <span className="text-sm font-medium text-black">All-in-One</span>
          </div>

          <h2 className="w-full lg:w-10/12 mx-auto text-2xl sm:text-4xl lg:text-[54px] font-[700] text-[#001354] mb-4 sm:mb-6 leading-tight lg:leading-[60px]">
            The most complete ESG/VSME reporting tool, tailored for SME
          </h2>
          
          <p className="w-full lg:w-6/12 mx-auto text-sm sm:text-[16px] text-[#010D3E] max-w-3xl leading-relaxed mb-6 sm:mb-8 px-4">
            We guide you through the whole process, offering an End-to-End solution for your business
          </p>
          
          <button className="bg-lime-500 hover:bg-lime-600 text-white px-6 sm:px-10 py-2 rounded-lg font-semibold text-base sm:text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
            Contact Us
          </button>
        </div>

        {/* Card 1: Centralized Data Collection */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 bg-gradient-to-tr from-[#111111E5] from-10% via-[#232323F1] via-80% to-[#4C4C4C] to-90% rounded-xl p-6 sm:p-8 lg:p-12 mb-6 sm:mb-[31px] border-2 border-gray-200 hover:shadow-xl shadow-lg">
          <div className="flex-col flex-1 items-start gap-4 mb-4">
            <div className="w-12 h-12 bg-red-500 mb-4 sm:mb-5 rounded-lg flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl lg:text-[32px] w-full lg:w-9/12 font-medium text-[#ECECEC] mb-3 sm:mb-4 leading-tight lg:leading-[40px]">
                Centralized, Collaborative & Automated Data Collection
              </h3>
              <p className="text-[#ECECEC] font-[16px] leading-relaxed text-sm sm:text-base">
                Forget the spreadsheets and scattered files. 
                Gather ESG data effortlessly from your team and stakeholders everything centralized in one single place, so you can track, analyze, and report with confidence.<br/>
                We automate data collection process with smart integrations and full-document uploads, minimizing manual work              </p>
            </div>
          </div>

          {/* Code Snippets */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="bg-[#111111E5] rounded-lg p-3 z-0 overflow-hidden shadow shadow-[#919191]">
              <div className="text-xs text-gray-500 mb-2 font-medium">DigitalToken.js</div>
              <div className="text-sm font-mono">
                <div className="text-gray-400">{`// centralized data`}</div>
                <div className="text-purple-400">let <span className="text-white">centralData</span> = <span className="text-white">{`{`}</span></div>
                <div className="ml-2 text-white"><span className="text-white">value1</span>: <span className="text-orange-400">&apos;Data1&apos;</span>,</div>
                <div className="ml-2 text-white"><span className="text-white">value2</span>: <span className="text-orange-400">&apos;Data2&apos;</span>,</div>
                <div className="text-white">{`}`}</div>
              </div>
            </div>
            <div className="bg-[#111111] rounded-lg p-3 z-10 lg:ml-[-30px] shadow shadow-[#919191]">
              <div className="text-xs text-gray-500 mb-2 font-medium">DigitalToken.js</div>
              <div className="text-sm font-mono">
                <div className="text-gray-400">{`// centralized data`}</div>
                <div className="text-purple-400">let <span className="text-white">centralData</span> = <span className="text-white">{`{`}</span></div>
                <div className="ml-2 text-white"><span className="text-white">value1</span>: <span className="text-orange-400">&apos;Data1&apos;</span>,</div>
                <div className="ml-2 text-white"><span className="text-white">value2</span>: <span className="text-orange-400">&apos;Data2&apos;</span>,</div>
                <div className="text-white">{`}`}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-6 sm:mb-[31px]">
          {/* Card 1: Smart ESG Analytics */}
          <div className="bg-[#2A2A2A] rounded-xl p-6 sm:p-8 lg:p-12">
            <div className="flex-col items-start gap-4 sm:gap-6">
              {/* Icon */}
              <div className="w-12 h-12 mb-4 sm:mb-5 bg-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                </svg>
              </div>
              
              {/* Content */}
              <div className="flex-1">
                <h3 className="text-xl sm:text-2xl lg:text-[32px] font-medium text-[#ECECEC] mb-3 sm:mb-4 leading-tight lg:leading-[40px]">
                  Smart ESG Analytics
                </h3>
                <p className="text-[#ECECEC] font-[16px] leading-relaxed text-sm sm:text-base">
                  Our Analytics Dashboard provides a clear and intuitive interface for you to easily analyze your data. From clear graphs to real-time data updates, our dashboard offers everything you need to gain valuable insights
                </p>
              </div>
            </div>
          </div>

          {/* Card 2: Ready-to-Share Report */}
          <div className="bg-[#2A2A2A] rounded-xl p-6 sm:p-8 lg:p-12">
            <div className="flex-col items-start gap-4 sm:gap-6">
              {/* Icon */}
              <div className="w-12 h-12 mb-4 sm:mb-5 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              
              {/* Content */}
              <div className="flex-1">
                <h3 className="text-xl sm:text-2xl lg:text-[32px] font-medium text-[#ECECEC] mb-3 sm:mb-4 leading-tight lg:leading-[40px]">
                  Ready-to-Share Report
                </h3>
                <p className="text-[#ECECEC] font-[16px] leading-relaxed text-sm sm:text-base">
                  Generate professional, compliant reports that meet all regulatory requirements. Our system automatically formats your data into industry-standard reports that you can confidently share with stakeholders, investors, and regulatory bodies
                </p>
              </div>
            </div>
          </div>

          {/* Card 3: ESG Policy Development */}
          <div className="bg-[#2A2A2A] rounded-xl p-12">
            <div className="flex-col items-start gap-6">
              {/* Icon */}
              <div className="w-12 h-12 mb-5 bg-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              
              {/* Content */}
              <div className="flex-1">
                <h3 className="text-[32px] font-medium text-[#ECECEC] mb-4 leading-[40px]">
                  ESG Policy Development
                </h3>
                <p className="text-[#ECECEC] font-[16px] leading-relaxed">
                  Easily create your company&apos;s ESG policy. Our guided process and smart templates help you draft clear, customized policy documents that align with your sustainability goals and stakeholder expectations
                </p>
              </div>
            </div>
          </div>

          {/* Card 4: Benchmark ESG Suggestions */}
          <div className="bg-[#2A2A2A] rounded-xl p-12">
            <div className="flex-col items-start gap-6">
              {/* Icon */}
              <div className="w-12 h-12 mb-5 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              
              {/* Content */}
              <div className="flex-1">
                <h3 className="text-[32px] font-medium text-[#ECECEC] mb-4 leading-[40px]">
                  Benchmark ESG Suggestions
                </h3>
                <p className="text-gray-300 leading-relaxed font-[16px]">
                  Get tailored recommendations to improve your ESG performance. Based on your data and industry benchmarks, GreenDash suggests actionable practices so your company can align with the best in class
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Card 6: Full Customer Support */}
        <div className="flex gap-12 bg-gradient-to-tr from-[#111111E5] from-10% via-[#232323F1] via-80% to-[#4C4C4C] to-90% rounded-xl p-12 hover:shadow-xl shadow-lg">
          <div className="flex-1 flex-col items-start gap-4 mb-4">
            <div className="w-12 h-12 mb-5 bg-[#EA3C30] rounded-lg flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z" />
              </svg>
            </div>
            <div>
              <h3 className="text-[32px] lg:w-9/12 font-medium text-[#ECECEC] mb-4 leading-[40px]">
                Full-Customer Support from our Sustainability Experts
              </h3>
              <p className="text-gray-300 lg:w-9/12 font-[16px] leading-relaxed">
                Our dedicated team provides you full-guidance, from helping you navigate our platform, understanding the CSRD/VSME, to helping you reporting on all the data points required.
              </p>
            </div>
          </div>
          <div>
            <Image 
              src="/green-dash-expert.png" 
              alt="Green Dash Expert" 
              width={400} 
              height={400}
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
        <div className="flex items-center justify-center gap-6 mt-10">
            <button className="bg-black hover:bg-gray-800 text-white px-6 py-2 rounded-lg font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                Join Waiting List
            </button>
            <a href="#" className="text-gray-700 hover:text-gray-900 font-medium text-lg transition-colors">
                Learn more →
            </a>
        </div>
      </div>
    </section>
  );
}
