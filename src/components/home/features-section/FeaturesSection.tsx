import Content from "@/components/common/Content";
import Image from "next/image";
import React from "react";

const features = (isForProfessionalsPage: boolean) => {
  const allFeatures = [
    {
      icon: "/images/home/features/icons/1.svg",
      color: "#EA3C30",
      heading: "Centralized, Collaborative & Automated Data Collection",
      desc: `Forget the spreadsheets and scattered files. <br/>
Gather ESG data effortlessly from your team and stakeholders everything centralized in one single place, so you can track, analyze, and report with confidence.<br/>
We automate data collection process with smart integrations and full-document uploads, minimizing manual work
`,
      image: "/images/home/features/1.png",
      imageClasses: "lg:w-[38.19444444444444vw] lg:h-[20.90277777777778vw]",
    },
    {
      icon: "/images/home/features/icons/2.svg",
      color: "#8A30EA",
      heading: "Smart ESG Analytics",
      desc: `Our Analytics Dashboard provides a clear and intuitive interface for you to easily analyze your ${isForProfessionalsPage ? 'client\'s' : ''} data. From clear graphs to real-time data updates, our dashboard offers everything you need to gain valuable insights`,
      flipped: true,
    },
    {
      icon: "/images/home/features/icons/3.svg",
      color: "#41DD1E",
      heading: "Ready-to-Share Report",
      desc: isForProfessionalsPage ? "Transform your client's ESG data into a professional, shareable report aligned with CSRD/VSME thought automated templates. Export data in Excel or PDF formats ready to be sent to your clients or auditors" :"Transform your ESG data into a professional, shareable report aligned with CSRD/VSME. Export data in Excel or PDF formats to easily respond to client, investor, or regulatory requests - without the back-and-forth",
    },
    {
      icon: "/images/home/features/icons/4.svg",
      color: "#EA30D8",
      heading: isForProfessionalsPage ? "Multi-Client Workspace" : "ESG Policy Development",
      desc: isForProfessionalsPage ? "Manage all your client projects in one place. Easily switch between client accounts, track progress and keep reporting workflows fully organised" : "Easily create your company's ESG policy. Our guided process and smart templates help you draft clear, customized policy documents that align with your sustainability goals and stakeholder expectations",
      flipped: true,
    },
    {
      icon: "/images/home/features/icons/5.svg",
      color: "#EA8730",
      heading: isForProfessionalsPage ? "Fully White-Label Platform" : "Benchmark VSME Suggestions",
      desc: isForProfessionalsPage ? "Your clients access the platform through a white-label interface with your branding, giving them a seamless, fully customised user experience. Position your firm as a technology-enabled sustainability partner" : "Get tailored recommendations to improve your VSME performance. Based on your data and industry benchmarks, GreenDash suggests actionable practices so your company can align with the best in class",
    },
    {
      icon: "/images/home/features/icons/6.svg",
      color: "#EA3C30",
      heading: "Full-Customer Support from our VSME Experts",
      desc: `Our dedicated team provides you End-to-End guidance, from helping you navigate our platform, understanding the CSRD/VSME, to helping you reporting on all the data points required`,
      image: "/images/home/features/2.png",
      imageClasses: "lg:w-[27.22222222222222vw] lg:h-[18.125vw]",
    },
  ];

  // Exclude the last item if isForProfessionalsPage is true
  return isForProfessionalsPage ? allFeatures.slice(0, -1) : allFeatures;
};

interface FeaturesSectionProps {
  isForProfessionalsPage?: boolean;
}

const FeaturesSection = ({ isForProfessionalsPage = false }: FeaturesSectionProps) => {
  return (
    <section
      id="feature"
      className="relative lg:pt-vw64 lg:pb-vw43 py-[60px] sm:py-[120px]"
    >
      <span
        style={{
          background: isForProfessionalsPage 
          ? 'linear-gradient(to bottom, #131313 5%, #202120 10%, #2C2D2B 25%, #6FE451 60%, #7FFF6B 100%)'
          : "linear-gradient(180deg, #7FFF6B 3.25%, rgba(173, 255, 160, 0.80) 30.18%, rgba(239, 255, 236, 0.50) 66.1%, rgba(241, 255, 238, 0.10) 96.62%)",
        }}
        className="atlwh_Full pointer-events-none"
      ></span>
      <div className="relative">
        <Content
          headingClasses={`${isForProfessionalsPage ? 'text-[#6FE451]' : 'text-black'}`}
          tag={"All-in-One"}
          heading={
            isForProfessionalsPage ? "The most complete VSME reporting tool, designed for Sustainability Consultants" : "The most complete ESG/VSME reporting tool, tailored for SME"
          }
          desc={
            isForProfessionalsPage ? "Streamline your sustainability reporting services, reduce manual work and deliver high-quality client reports at scale - serve more clients with the same resources" : "We guide you through the whole process, offering an End-to-End solution for your business"
          }
          standardBtn={{
            text: "Get Started",
            link: isForProfessionalsPage ? "/getting-started" : "/join-waiting-list",
          }}
          chevronBtn={{
            text: "Contact Us",
            link: "/contact-us",
          }}
          descColor={`${isForProfessionalsPage ? 'text-white' : ''}`}
          isForProfessionalsPage={isForProfessionalsPage}
        />
        <div className="flex flex-wrap lg:gap-vw42 gap-6 lg:mt-vw31 mt-6 justify-between myContainer">
          {features(isForProfessionalsPage).map((feature, index) => {
            const isFirst = index === 0;
            const isLast = index === features(isForProfessionalsPage).length - 1;
            // Only apply last item full width styling if we're NOT on professionals page
            const shouldTakeFullWidth = isFirst || (isLast && !isForProfessionalsPage);
            
            return (
            <div
              key={index}
              data-aos="fade"
              className={`${shouldTakeFullWidth ? 'w-full' : ''} group ${!shouldTakeFullWidth ? 'lg:w-[41.875vw]' : ''} w-full lg:rounded-vw20 rounded-[20px] overflow-hidden relative lg:p-vw60 px-5 py-[30px]`}
            >
              <span
                className={`${
                  feature.flipped ? "-scale-x-100" : ""
                } atlwh_Full pointer-events-none`}
                style={{
                  background:
                    "linear-gradient(218deg, #888 -7.76%, rgba(12, 12, 12, 0.92) -4.4%, #4C4C4C 2.92%, rgba(35, 35, 35, 0.95) 14.29%, rgba(31, 31, 31, 0.94) 16.39%, rgba(17, 17, 17, 0.90) 27.96%)",
                  boxShadow:
                    "0 -2px 10px 0 rgba(233, 223, 255, 0.30), 0 -2px 40px 0 rgba(187, 155, 255, 0.15), 0 0.5px 0 0 rgba(255, 255, 255, 0.50) inset",
                }}
              ></span>
              <div className="flex justify-between relative z-[2]">
                <div className={`flex flex-col text-ECECEC ${shouldTakeFullWidth ? 'lg:w-[38.61111111111111vw]' : 'lg:w-[33.54166666666667vw]'}`}>
                  <div
                    className={` blur-[0.25px] relative flex justify-center items-center lg:size-vw50 size-10 lg:rounded-vw8 rounded-[8px]`}
                    style={{
                      boxShadow: "0 0 36.45px 0 rgba(105, 217, 67, 0.50)",
                      background: `${feature.color}`,
                    }}
                  >
                    {feature.icon && (
                      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:size-vw96 ${shouldTakeFullWidth ? 'lg:size-vw28 size-6' : 'size-20'}`}>
                        <Image fill alt="icon" src={feature.icon} />
                      </div>
                    )}
                  </div>
                  <h3 className="lg:text32 mtext22 ls016 lg:mt-vw16 mt-4">
                    {feature.heading}
                  </h3>
                  <div
                    className="lg:text16 mtext14 lg:mt-vw10 mt-2"
                    dangerouslySetInnerHTML={{ __html: feature.desc }}
                  ></div>
                </div>
                <div
                  className={`${feature.imageClasses} relative hidden lg:block`}
                >
                  <Image fill alt="image" src={feature.image || ""} />
                </div>
              </div>
            </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
