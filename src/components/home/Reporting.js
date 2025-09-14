import React from "react";
import Content from "../common/Content";
import Image from "next/image";
const benefits = [
  {
    icon: "/images/home/reporting/1.svg",
    text: "Meet ESG data requests from financial institutions, large companies and other partners",
  },
  {
    icon: "/images/home/reporting/2.svg",
    text: "Facilitate access to green financing",
  },
  {
    icon: "/images/home/reporting/3.svg",
    text: "Manage ESG risks and opportunities more strategically",
  },
  {
    icon: "/images/home/reporting/4.svg",
    text: "Get a solid competitive advantage over other players",
  },
  {
    icon: "/images/home/reporting/5.svg",
    text: "Contribute to a more sustainable and inclusive economy",
  },
];
const Reporting = () => {
  return (
    <section className="lg:pt-vw50 lg:pb-vw25 py-[60px] sm:py-[120px] relative">
      <span
        className="atlwh_Full pointer-events-none"
        style={{
          background:
            "linear-gradient(178deg, #FFF 39.64%, #E6FFE2 54.28%, #CBFFC3 67.1%, rgba(127, 255, 107, 0.80) 91.32%)",
        }}
      ></span>
      <div className="w-full relative z-[2]">
        <Content
          tag={"Why Reporting?"}
          heading={"Don’t lose deals over missing ESG data "}
          desc={`From assuring to meet all your stakeholders data requests to contribute to a more sustainable economy, reporting your ESG data is crucial`}
          descWidth={"lg:w-[59.72222222222222vw]"}
        />
        <ul className="flex flex-col lg:gap-y-vw15 gap-y-6 lg:w-[57.9166666667vw] myContainer lg:mt-vw52 mt-10">
          {benefits.map((benefit, index) => (
            <li
              data-aos="fade"
              key={index}
              className="flex flex-col lg:flex-row items-center text-center lg:text-start lg:gap-x-vw30 gap-2"
            >
              <div
                style={{ boxShadow: "0 4px 4px 0 rgba(0, 0, 0, 0.10)" }}
                className="flex justify-center items-center lg:size-vw56 lg:min-w-vw56 size-12 border border-[#EDEDED] lg:rounded-vw12 rounded-[12px] bg-white"
              >
                <div className="relative lg:size-vw24 lg:min-w-vw24 size-6">
                  <Image fill alt="icon" src={benefit.icon} />
                </div>
              </div>
              <span className="text-black lg:text18 mtext16 font-inter">
                {" "}
                {benefit.text}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Reporting;
