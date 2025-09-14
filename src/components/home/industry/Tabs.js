import React from "react";
import Buttons from "./Buttons";
import Content from "./Content";
import Image from "next/image";

const Tabs = ({ tabs, setActiveTab, activeTab }) => {
  return (
    <div className="flex flex-col items-center">
      <Buttons setActiveTab={setActiveTab} activeTab={activeTab} tabs={tabs} />
      <div
        data-aos="fade"
        style={{
          background:
            "radial-gradient(62.73% 58.55% at 10% 0%, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.00) 60%), linear-gradient(329deg, rgba(26, 26, 26, 0.65) 29.29%, #111 63.2%)",
          boxShadow:
            "0 24px 60px -24px rgba(255, 255, 255, 0.14), 0 10px 28px -20px rgba(255, 255, 255, 0.10)",
        }}
        className="myContainer lg:w-[85.97222222222222vw] flex justify-between gap-6 items-center flex-wrap lg:rounded-vw20 rounded-[20px] backdrop-blur-[8px] lg:px-vw42 lg:pt-vw41 lg:pb-vw58 px-5 sm:px-[30px] py-[30px]"
      >
        <Content activeTab={activeTab} tabs={tabs} />
        <div className="relative lg:w-[34.51388888888889vw] lg:h-[24.02777777777778vw] w-full h-[28vh] sm:h-[45vh] overflow-hidden lg:rounded-vw10 rounded-[10px]">
          <Image fill alt="check" src={"/images/home/industry/1.png"} />
        </div>
      </div>
    </div>
  );
};

export default Tabs;
