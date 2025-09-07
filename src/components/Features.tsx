'use client';

import Image from "next/image";
import CTAButtons from "./CTAButtons";

interface FeaturesProps {
  isForProfessionalsPage?: boolean;
}

export default function Features({ isForProfessionalsPage = false }: FeaturesProps) {
  return (
    <section id="features" className={`py-12 sm:py-20`} style={{
      background: isForProfessionalsPage 
        ? 'linear-gradient(to bottom, #131313 5%, #202120 10%, #2C2D2B 25%, #6FE451 60%, #7FFF6B 100%)'
        : 'linear-gradient(to bottom, #7FFF6B 0%, #ADFFA0 20%, #ADFFA0 40%, #FFFFFF 60%, #FFFFFF 100%)'
    }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Top Section */}
        <div className="text-center mb-12 sm:mb-16">
          <div className={`inline-block rounded-[10px] px-6 sm:px-10 py-1 mb-4 sm:mb-6 shadow-sm ${
            isForProfessionalsPage 
              ? 'bg-white border border-black' 
              : 'bg-white border border-[rgba(34, 34, 34, 0.1)]'
          }`}>
            <span className="text-sm font-inter font-medium text-black">All-in-One</span>
          </div>

          <h2 className={`w-full font-dm-sans lg:w-10/12 mx-auto text-2xl sm:text-4xl lg:text-[54px] font-[700] mb-4 sm:mb-6 leading-tight lg:leading-[60px] ${
            isForProfessionalsPage 
              ? 'text-[#6FE451]' 
              : 'text-black'
          }`}>
            {isForProfessionalsPage 
              ? 'The most complete VSME reporting tool, designed for Sustainability Consultants'
              : 'The most complete ESG/VSME reporting tool, tailored for SME'
            }
          </h2>
          
          <p className={`w-full lg:w-6/12 mx-auto text-sm sm:text-[16px] max-w-3xl leading-relaxed mb-6 sm:mb-8 px-4 ${
            isForProfessionalsPage 
              ? 'text-[#F8F8F8]' 
              : 'text-[#010D3E]'
          }`}>
            {isForProfessionalsPage 
              ? 'Streamline your sustainability reporting services, reduce manual work and deliver high-quality client reports at scale - serve more clients with the same resources'
              : 'We guide you through the whole process, offering an End-to-End solution for your business'
            }
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <CTAButtons
              isForProfessionalsPage={isForProfessionalsPage}
              learnMoreText="Contact Us"
              learnMoreHref={isForProfessionalsPage ? "/professional-contact-us" : "/contact-us"}
              showLearnMore={true}
              buttonHref={isForProfessionalsPage ? "/getting-started" : "/join-waiting-list"}
            />
          </div>
        </div>

        {/* Feature Cards - Conditional Layout */}
        {isForProfessionalsPage ? (
          <>
          {/* Card 1: Centralized Data Collection */}
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 bg-gradient-to-tr from-[#111111E5] from-10% via-[#232323F1] via-80% to-[#4C4C4C] to-90% rounded-xl p-6 sm:p-8 lg:p-12 mb-6 sm:mb-[31px]">
            <div className="flex-col flex-1 items-start gap-4 mb-4">
              <Image src="/database-icon.svg" alt="Centralized Data Collection" width={24} height={24} className="w-12 h-12 bg-[#EA3C30] p-3 mb-4 sm:mb-5 rounded-lg" />
              <div>
                <h3 className="text-xl font-dm-sans sm:text-2xl lg:text-[30px] w-full lg:w-9/12 font-normal text-[#ECECEC] mb-3 sm:mb-4 leading-tight lg:leading-[40px]">
                  Centralized, Collaborative & Automated Data Collection
                </h3>
                <p className="text-[#ECECEC] font-dm-sans font-[16px] leading-relaxed text-sm sm:text-base">
                  Forget the spreadsheets and scattered files. 
                  Gather ESG data effortlessly from your team and stakeholders everything centralized in one single place, so you can track, analyze, and report with confidence.<br/>
                  We automate data collection process with smart integrations and full-document uploads, minimizing manual work
                </p>
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
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-6 sm:mb-[31px]">
            {/* Card 1: Centralized Data Collection */}
            <div className="bg-[#2A2A2A] rounded-xl p-6 sm:p-8 lg:p-12">
              <div className="flex-col items-start gap-4 sm:gap-6">
                {/* Icon */}
                <Image src="/layered-icon.svg" alt="Centralized Data Collection" width={24} height={24} className="w-12 h-12 bg-[#8A30EA] p-2 mb-4 sm:mb-5 rounded-lg" />
                
                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl lg:text-[30px] font-dm-sans text-white mb-3 sm:mb-4 leading-tight lg:leading-[40px]">
                    Smart ESG Analytics
                  </h3>
                  <p className="text-white font-[16px] font-dm-sans leading-relaxed text-sm sm:text-base">
                    Our Analytics Dashboard provides a clear and intuitive interface for you to easily analyze your client&apos;s data. From clear graphs to real-time data updates, our dashboard offers everything you need to gain valuable insights
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2: Ready-to-Share Report */}
            <div className="bg-[#2A2A2A] rounded-xl p-6 sm:p-8 lg:p-12">
              <div className="flex-col items-start gap-4 sm:gap-6">
                {/* Icon */}
                <Image src="/file-cert.svg" alt="Centralized Data Collection" width={24} height={24} className="w-12 h-12 bg-[#41DD1E] p-2 mb-4 sm:mb-5 rounded-lg" />
                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl lg:text-[30px] font-dm-sans text-white mb-3 sm:mb-4 leading-tight lg:leading-[40px]">
                    Ready-to-Share Report
                  </h3>
                  <p className="text-white font-[16px] font-dm-sans leading-relaxed text-sm sm:text-base">
                  Transform your client’s ESG data into a professional, shareable report aligned with CSRD/VSME thought automated templates. <br/>
                  Export data in Excel or PDF formats ready to be sent to your clients or auditors
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3: Smart ESG Analytics */}
            <div className="bg-[#2A2A2A] rounded-xl p-6 sm:p-8 lg:p-12">
              <div className="flex-col items-start gap-4 sm:gap-6">
                {/* Icon */}
                <Image src="/cert.svg" alt="Centralized Data Collection" width={24} height={24} className="w-12 h-12 bg-[#EA30D8] p-2 mb-4 sm:mb-5 rounded-lg" />
                
                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl lg:text-[30px] font-dm-sans font-medium text-white mb-3 sm:mb-4 leading-tight lg:leading-[40px]">
                    Multi-Client Workspace
                  </h3>
                  <p className="text-white font-[16px] font-dm-sans leading-relaxed text-sm sm:text-base">
                    Manage all your client projects in one place. Easily switch between client accounts, track progress and keep reporting workflows fully organised
                  </p>
                </div>
              </div>
            </div>

            {/* Card 4: Fully White-Label Platform */}
            <div className="bg-[#2A2A2A] rounded-xl p-6 sm:p-8 lg:p-12">
              <div className="flex-col items-start gap-4 sm:gap-6">
                {/* Icon */}
                <Image src="/layered-int.svg" alt="Centralized Data Collection" width={24} height={24} className="w-12 h-12 bg-[#EA8730] p-2 mb-4 sm:mb-5 rounded-lg" />

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl lg:text-[30px] font-dm-sans text-white mb-3 sm:mb-4 leading-tight lg:leading-[40px]">
                    Fully White-Label Platform
                  </h3>
                  <p className="text-white font-[16px] font-dm-sans leading-relaxed text-sm sm:text-base">
                    Your clients access the platform through a white-label interface with your branding, giving them a seamless, fully customised user experience. Position your firm as a technology-enabled sustainability partner
                  </p>
                </div>
              </div>
            </div>
          </div>
          </>
        ) : (
          /* Original Layout for Non-Professionals Pages */
          <>
            {/* Card 1: Centralized Data Collection */}
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 bg-gradient-to-tr from-[#111111E5] from-10% via-[#232323F1] via-80% to-[#4C4C4C] to-90% rounded-xl p-6 sm:p-8 lg:p-12 mb-6 sm:mb-[31px] hover:shadow-xl">
              <div className="flex-col flex-1 items-start gap-4 mb-4">
                <Image src="/database-icon.svg" alt="Centralized Data Collection" width={24} height={24} className="w-12 h-12 bg-[#EA3C30] p-3 mb-4 sm:mb-5 rounded-lg" />
                <div>
                  <h3 className="text-xl sm:text-2xl lg:text-[30px] w-full lg:w-9/12 font-dm-sans font-medium text-[#ECECEC] mb-3 sm:mb-4 leading-tight lg:leading-[40px]">
                    Centralized, Collaborative & Automated Data Collection
                  </h3>
                  <p className="text-[#ECECEC] font-[16px] font-dm-sans leading-relaxed text-sm sm:text-base">
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
                  <Image src="/layered-icon.svg" alt="Centralized Data Collection" width={24} height={24} className="w-12 h-12 bg-[#8A30EA] p-2 mb-4 sm:mb-5 rounded-lg" />
                  
                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl lg:text-[30px] font-dm-sans text-[#ECECEC] mb-3 sm:mb-4 leading-tight lg:leading-[40px]">
                      Smart ESG Analytics
                    </h3>
                    <p className="text-[#ECECEC] font-[16px] font-dm-sans leading-relaxed text-sm sm:text-base">
                      Our Analytics Dashboard provides a clear and intuitive interface for you to easily analyze your data. From clear graphs to real-time data updates, our dashboard offers everything you need to gain valuable insights
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 2: Ready-to-Share Report */}
              <div className="bg-[#2A2A2A] rounded-xl p-6 sm:p-8 lg:p-12">
                <div className="flex-col items-start gap-4 sm:gap-6">
                  {/* Icon */}
                  <Image src="/file-cert.svg" alt="Centralized Data Collection" width={24} height={24} className="w-12 h-12 bg-[#41DD1E] p-2 mb-4 sm:mb-5 rounded-lg" />
                  
                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl lg:text-[30px] font-dm-sans text-[#ECECEC] mb-3 sm:mb-4 leading-tight lg:leading-[40px]">
                      Ready-to-Share Report
                    </h3>
                    <p className="text-[#ECECEC] font-[16px] font-dm-sans leading-relaxed text-sm sm:text-base">
                    Transform your ESG data into a professional, shareable report aligned with CSRD/VSME. Export data in Excel or PDF formats to easily respond to client, investor, or regulatory requests - without the back-and-forth
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 3: ESG Policy Development */}
              <div className="bg-[#2A2A2A] rounded-xl p-12">
                <div className="flex-col items-start gap-6">
                  {/* Icon */}
                  <Image src="/cert.svg" alt="Centralized Data Collection" width={24} height={24} className="w-12 h-12 bg-[#EA30D8] p-2 mb-4 sm:mb-5 rounded-lg" />
                  
                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-[30px] font-dm-sans text-[#ECECEC] mb-4 leading-[40px]">
                      ESG Policy Development
                    </h3>
                    <p className="text-[#ECECEC] font-[16px] font-dm-sans leading-relaxed">
                      Easily create your company&apos;s ESG policy. Our guided process and smart templates help you draft clear, customized policy documents that align with your sustainability goals and stakeholder expectations
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 4: Benchmark ESG Suggestions */}
              <div className="bg-[#2A2A2A] rounded-xl p-12">
                <div className="flex-col items-start gap-6">
                  {/* Icon */}
                  <Image src="/layered-int.svg" alt="Centralized Data Collection" width={24} height={24} className="w-12 h-12 bg-[#EA8730] p-2 mb-4 sm:mb-5 rounded-lg" />
                  
                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-[30px] font-dm-sans text-[#ECECEC] mb-4 leading-[40px]">
                      Benchmark ESG Suggestions
                    </h3>
                    <p className="text-gray-300 leading-relaxed font-[16px] font-dm-sans">
                      Get tailored recommendations to improve your ESG performance. Based on your data and industry benchmarks, GreenDash suggests actionable practices so your company can align with the best in class
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 6: Full Customer Support */}
            <div className="flex flex-col lg:flex-row gap-12 bg-gradient-to-tr from-[#111111E5] from-10% via-[#232323F1] via-80% to-[#4C4C4C] to-90% rounded-xl p-12 hover:shadow-xl shadow-lg">
              <div className="flex-1 flex-col items-start gap-4 mb-4">
                <Image src="/eyeglass.svg" alt="Centralized Data Collection" width={24} height={24} className="w-12 h-12 bg-[#EA3C30] p-2 mb-4 sm:mb-5 rounded-lg" />
                <div>
                  <h3 className="text-[30px] lg:w-9/12 font-dm-sans text-[#ECECEC] mb-4 leading-[40px]">
                    Full-Customer Support from our Sustainability Experts
                  </h3>
                  <p className="text-gray-300 lg:w-9/12 font-[16px] font-dm-sans leading-relaxed">
                  Our dedicated team provides you End-to-End guidance, from helping you navigate our platform, understanding the CSRD/VSME, to helping you reporting on all the data points required
                  </p>
                </div>
              </div>
              <div>
                <Image 
                  src="/green-dash-expert.png" 
                  alt="Green Dash Expert" 
                  width={350} 
                  height={350}
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
