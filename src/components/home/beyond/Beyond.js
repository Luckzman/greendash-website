import React from "react";
import Content from "../../common/Content";
import Card from "./Card";

const Beyond = () => {
  return (
    <section className="lg:pt-vw86 lg:pb-vw50 py-[60px] sm:py-[120px] relative">
      <span
        className="atlwh_Full pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(127, 255, 107, 0.80) 3.25%, rgba(149, 255, 133, 0.90) 11.64%, rgba(173, 255, 160, 0.80) 28.6%, rgba(239, 255, 236, 0.50) 66.1%, rgba(241, 255, 238, 0.10) 96.62%)",
        }}
      ></span>
      <div className="w-full relative z-[2]">
        <Content
          tag={"Courses & Certification"}
          heading={"Go Beyond Reporting "}
          desc={`We help small and medium businesses not only comply, but also build in-house expertise that wins client trust and opens new market opportunities`}
          descWidth={"lg:w-[59.72222222222222vw]"}
        />
        <div className="flex lg:gap-x-vw30 gap-6 justify-between lg:justify-center items-stretch flex-wrap myContainer lg:mt-vw60 mt-10">
          <Card
            logo={"/images/home/beyond/1.svg"}
            desc={
              "Grow your expertise and learn about ESG, SDG and CSRD/VSME from Zero to Pro No Jargon or Complexity, Just Clarity"
            }
          />
          <Card
            logo={"/images/home/beyond/2.svg"}
            desc={
              "Get certified and showcase your alignment with CSRD/VSME and SDG standards"
            }
          />
        </div>
      </div>
    </section>
  );
};

export default Beyond;
