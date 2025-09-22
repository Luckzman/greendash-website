import React from "react";
import PairedButtons from "./PairedButtons";
import Image from "next/image";
import { usePathname } from "next/navigation";

interface HeroProps {
  isForProfessionalsPage?: boolean;
  isForCertificationPage?: boolean;
}

const Hero = ({ isForProfessionalsPage = false, isForCertificationPage = false }: HeroProps) => {
  const pathname = usePathname();
  
  // Determine the correct link for the "Learn more" button
  const getLearnMoreLink = () => {
    if (isForProfessionalsPage && (isForCertificationPage || pathname === '/for-professionals')) {
      return "#pro-features";
    } else if (isForProfessionalsPage) {
      return "/for-professionals#pro-features";
    } else if (isForCertificationPage || pathname === '/pricing' || pathname === '/quiz' || pathname === '/essential-kit') {
      // For non-professional pages (pricing, certification), navigate to homepage features
      return "/#features";
    } else {
      return "#features";
    }
  };
  
  return (
    <section className="fullVh fullSvh relative lg:pt-[19vh] lg:pb-[10.5555555556vh] pt-36 sm:pt-[200px] pb-[60px] sm:pb-[120px]">
      <span className={`${
      isForProfessionalsPage 
        ? 'bg-[#131313]' 
        : 'hero_gradient'} atlwh_Full pointer-events-none`}></span>
      <div className="relative z-[2] flex flex-wrap items-center lg:gap-x-vw81 gap-y-6 sm:gap-y-10 lg:pl-vw53">
        <div className="lg:w-[35.4861111111vw] w-[90.699%] mx-auto lg:mx-0 flex flex-col items-start lg:gap-y-vw20 gap-y-4">
          <div
            data-aos="fade"
            className={`capitalize lg:rounded-vw10 rounded-[10px] lg:px-vw13 lg:py-vw3 px-3 py-1 ${
              isForProfessionalsPage 
                ? 'bg-white border border-black' 
                : 'bg-white border border-[rgba(34, 34, 34, 0.1)]'
            }`}
          >
            <span className="text-black font-medium lg:text13 mtext12 ls032 inter">
              Launch Coming Soon
            </span>
          </div>
          <h1 data-aos="fade-up" data-aos-delay="100" className={`${
              isForProfessionalsPage 
                ? 'text-[#6FE451]' 
                : 'text-black'
            } text55 `}>
            {isForProfessionalsPage 
                ? 'Accelerate Your Reporting Services' 
                : isForCertificationPage
                ? 'ESG Certification for SMEs'
                : 'Sustainability made Simple for SME'
              }
          </h1>
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className={`text22 lg:w-[34.8611111111vw] ${
              isForProfessionalsPage 
                ? 'text-white' 
                : 'text-gray-700'
            }`}
          >
            {isForProfessionalsPage 
                ? 'Deliver VSME-compliant sustainability reports for your clients faster and more efficiently with our all-in-one platform tailored for SMEs'
                : isForCertificationPage
                ? 'Prove your commitment. Build trust. Win more business. Be more sustainable'
                : 'Collect, monitor and report your ESG/VSME data to all your stakeholders, while improving your company\'s ESG performance - fast and easily'
              }
          </p>
          <PairedButtons standardBtn={{
            text: "Get Started",
            link: isForProfessionalsPage ? "/getting-started" : "/join-waiting-list",
          }} chevronBtn={{
            text: "Learn more",
            link: getLearnMoreLink(),
          }} isForProfessionalsPage={isForProfessionalsPage} />
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3">
              <p className={`text-sm font-inter ${
                isForProfessionalsPage 
                  ? 'text-white' 
                  : 'text-gray-700'
              }`}>
                Backed by
              </p>
              <div className="flex items-center gap-3">
                  {isForProfessionalsPage ? <Image
                      src="/casa-do-impacto-white-logo.svg"
                      alt="Casa do Impacto Logo"
                      width={200}
                      height={100}
                      className="h-[60px] w-auto"
                      suppressHydrationWarning
                  /> : <Image
                      src="/casa-do-impacto-logo.svg"
                      alt="Casa do Impacto Logo"
                      width={180}
                      height={60}
                      className="h-[38pxß] w-auto"
                      suppressHydrationWarning
                  />}
              </div>
          </div>
        </div>
        <div
          data-aos="zoom-in"
          className="relative lg:w-[52.5vw] lg:h-[33.8888888889vw] w-full h-[31.4vh] sm:h-[48.4vh]"
        >
          <Image fill alt="browser" src={"/images/home/hero/browser.png"} />
          <div className="absolute lg:bottom-vw15 bottom-3 sm:bottom-6 transform -translate-x-1/2 left-1/2 lg:w-[50.2083333333vw] lg:h-[29.4444444444vw] w-[90.699%] h-[26vh] sm:h-[40vh] lg:rounded-vw10 rounded-[10px] overflow-hidden">
            <Image
              data-aos="fade"
              data-aos-delay="300"
              fill
              alt="browser"
              src={"/images/home/hero/browser_image.png"}
            />
          </div>
        </div>
        {/* <div
          data-aos="fade"
          className="hidden lg:flex lg:gap-x-vw20 items-center "
        >
          <span className="text16 inter ls032 text-black">Backed by</span>
          <div className="relative lg:w-vw100 lg:h-vw38">
            <Image fill alt="stamp" src={"/images/home/hero/stamp.svg"} />
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Hero;
