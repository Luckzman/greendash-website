import React from "react";

interface ThankYouProps {
  wrapperWidth?: string;
  isForProfessionalsPage?: boolean;
  tag?: string;
  headingClasses?: string;
  heading?: string;
  desc?: string | React.ReactNode;
  desc2?: string | React.ReactNode;
  desc3?: string | React.ReactNode;
}

const ThankYou = ({ wrapperWidth, isForProfessionalsPage = false, tag, headingClasses, heading, desc, desc2, desc3 }: ThankYouProps) => {
  return (
    <section className="relative lg:pt-vw44 lg:pb-vw200 py-[80px] sm:py-[120px]">
        <span
          style={{
            background: isForProfessionalsPage
            ? 'linear-gradient(to bottom, #131313 5%, #202120 10%, #2C2D2B 35%, #6FE451 60%, #6FE451 80%)'
            : "linear-gradient(180deg, #7FFF6B 3.25%, rgba(173, 255, 160, 0.80) 30.18%, rgba(239, 255, 236, 0.50) 66.1%, rgba(241, 255, 238, 0.10) 96.62%)",
          }}
          className="atlwh_Full pointer-events-none"
        ></span>
        <span
          style={{
            background: isForProfessionalsPage
            ? '#6FE451'
            : "linear-gradient(181deg, #FFF 42.57%, #7FFF6B 99.81%)",
          }}
          className="atlwh_Full lg:h-vw190 h-[30%] top-[unset] bottom-0 pointer-events-none"
        ></span>
        <div className={`${
        wrapperWidth ? wrapperWidth : "lg:w-[69.02777777777778vw]"
      } w-[90.699%] mx-auto flex flex-col items-center text-center lg:gap-y-vw20 gap-y-4`}>
      {/* <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto px-4"> */}
        {/* Waiting List Tag */}
        <div 
          className="w-[277px] z-[2] mx-auto capitalize bg-white border border-[rgba(34,34,34,0.10)] lg:rounded-vw10 rounded-[10px] lg:px-vw13 lg:py-vw3 px-3 py-1"
        >
          <span className="text-black font-medium lg:text13 mtext12 ls032 inter">
            {tag}
          </span>
        </div>

        {/* Main Content Frame */}
        <div className="flex flex-col items-center gap-5 mb-5 z-[2]">
          {/* Main Heading */}
          <h2 
            data-aos="fade-up"
            className={`${
              headingClasses ? headingClasses : "text-black"
            } text54 `}
          >
            {heading}
          </h2>

          {/* First paragraph */}
          <p 
            data-aos="fade-up"
            data-aos-delay="100"
            className={`${isForProfessionalsPage ? 'text-white' : 'text-black'} text-xl lg:text-2xl inter leading-relaxed max-w-4xl tracking-tight`}
          >
            {desc}
          </p>

          {/* Second paragraph */}
          <p 
            data-aos="fade-up"
            data-aos-delay="200"
            className={`${isForProfessionalsPage ? 'text-white' : 'text-black'} text-lg lg:text-xl inter leading-relaxed max-w-5xl tracking-tight`}
          >
            {desc2}
          </p>

          {/* Third paragraph */}
          <p 
            data-aos="fade-up"
            data-aos-delay="200"
            className={`${isForProfessionalsPage ? 'text-white' : 'text-black'} text-lg lg:text-xl inter leading-relaxed max-w-5xl tracking-tight`}
          >
            {desc3}
          </p>
        
        </div>
      </div>
    </section>
  );
};

export default ThankYou;
