import React from "react";
import Content from "../../common/Content";
import Card from "./Card";
import PairedButtons from "@/components/common/PairedButtons";
const options = [
  {
    icon: "/images/home/why-choose/1.svg",
    iconClasses: "lg:w-vw94 lg:h-vw76 w-[54px] h-[44px]",
    title: "2.5x faster",
    desc: "ESG Reporting compared to previous methods",
  },
  {
    icon: "/images/home/why-choose/2.svg",
    iconClasses: "lg:size-vw83 size-[57px]",
    title: "Up to less 50%",
    desc: "Reporting admin work compared to previous methods",
  },
  {
    icon: "/images/home/why-choose/3.svg",
    iconClasses: "lg:w-vw101 lg:h-vw63 w-[68px] h-[42px]",
    title: "At least 25% cheaper",
    desc: "Compared to previous methods such as consultancy",
  },
];
const WhyChoose = () => {
  return (
    <section className="lg:pt-vw122 lg:pb-vw36 py-[60px] sm:py-[120px] relative">
      <div className="w-full relative z-[2]">
        <Content
          tag={"Results"}
          heading={"But why to choose GreenDash? "}
          desc={`We provide real results - no complexity, just facts`}
          descWidth={"lg:w-[59.72222222222222vw]"}
        />
        <div className="flex lg:gap-x-vw30 gap-4 justify-between lg:justify-center items-stretch flex-wrap myContainer lg:mt-vw43 mt-10">
          {options.map((option, index) => (
            <Card
              key={index}
              icon={option.icon}
              iconClasses={option.iconClasses}
              title={option.title}
              desc={option.desc}
              index={index}
            />
          ))}
        </div>
        <div className="flex justify-center lg:mt-vw42 mt-6 w-full">
          <PairedButtons
            standardBtn={{
              text: "Get Started",
              link: "/join-waiting-list",
            }}
            chevronBtn={{
              text: "Contact Us",
              link: "/contact-us",
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
