'use client';

export default function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Section */}
        <div className="text-center mb-16">
          <div className="inline-block bg-gray-100 rounded-full px-4 py-2 mb-6">
            <span className="text-sm font-medium text-gray-700">All-in-One</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-blue-900 mb-6 leading-tight">
            The most complete ESG/VSME reporting tool, tailored for SME
          </h2>
          
          <p className="text-xl text-blue-700 max-w-3xl mx-auto leading-relaxed mb-8">
            We guide you through the whole process, offering an End-to-End solution for your business
          </p>
          
          <button className="bg-lime-500 hover:bg-lime-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
            Contact Us
          </button>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Card 1: Centralized Data Collection */}
          <div className="bg-white rounded-xl p-6 border-2 border-gray-200 hover:border-red-500 transition-all duration-300 hover:shadow-xl shadow-lg">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Centralized, Collaborative & Automated Data Collection
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Streamline your ESG data collection with our centralized platform. Smart integrations and document uploads make data gathering effortless and collaborative.
                </p>
              </div>
            </div>
            
            {/* Code Snippets */}
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
                <div className="text-xs text-gray-500 mb-2 font-medium">DigitalToken.js</div>
                <div className="text-sm text-green-600 font-mono">
                  <div>// centralized data</div>
                  <div>let centralData = {`{`}</div>
                  <div className="ml-2">value1: 'Data1',</div>
                  <div className="ml-2">value2: 'Data2'</div>
                  <div>{`}`}</div>
                </div>
              </div>
              <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
                <div className="text-xs text-gray-500 mb-2 font-medium">DigitalToken.js</div>
                <div className="text-sm text-green-600 font-mono">
                  <div>// centralized data</div>
                  <div>let centralData = {`{`}</div>
                  <div className="ml-2">value1: 'Data1',</div>
                  <div className="ml-2">value2: 'Data2'</div>
                  <div>{`}`}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Smart ESG Analytics */}
          <div className="bg-white rounded-xl p-6 border-2 border-gray-200 hover:border-purple-500 transition-all duration-300 hover:shadow-xl shadow-lg">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Smart ESG Analytics
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Get valuable insights with our intuitive analytics dashboard. Clear graphs and real-time data updates help you understand your ESG performance at a glance.
                </p>
              </div>
            </div>
          </div>

          {/* Card 3: ESG Policy Development */}
          <div className="bg-white rounded-xl p-6 border-2 border-gray-200 hover:border-pink-500 transition-all duration-300 hover:shadow-xl shadow-lg">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 bg-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  ESG Policy Development
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Create customized policy documents with our guided process and smart templates. Align your policies with sustainability goals and industry best practices.
                </p>
              </div>
            </div>
          </div>

          {/* Card 4: Ready-to-Share Report */}
          <div className="bg-white rounded-xl p-6 border-2 border-gray-200 hover:border-green-500 transition-all duration-300 hover:shadow-xl shadow-lg">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Ready-to-Share Report
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Transform your ESG data into professional, shareable reports aligned with CSRD/VSME standards. Export in Excel or PDF format for easy distribution.
                </p>
              </div>
            </div>
          </div>

          {/* Card 5: Benchmark ESG Suggestions */}
          <div className="bg-white rounded-xl p-6 border-2 border-gray-200 hover:border-orange-500 transition-all duration-300 hover:shadow-xl shadow-lg">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 10l2 2m0 0l2-2m-2 2V8m0 0V6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H9a2 2 0 01-2-2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Benchmark ESG Suggestions
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Receive tailored recommendations to improve your ESG performance based on your data and industry benchmarks. Stay ahead of compliance requirements.
                </p>
              </div>
            </div>
          </div>

          {/* Card 6: Full Customer Support */}
          <div className="bg-white rounded-xl p-6 border-2 border-gray-200 hover:border-red-500 transition-all duration-300 hover:shadow-xl shadow-lg">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Full-Customer Support from our Sustainability Experts
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Get dedicated support from our team of sustainability experts. We provide full guidance on platform navigation, CSRD/VSME understanding, and reporting best practices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
