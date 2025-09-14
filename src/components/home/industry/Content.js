import Image from "next/image";
import React from "react";

const Content = ({ tabs, activeTab }) => {
  return (
    <>
      {" "}
      {
        <div className="lg:w-[39.86111111111111vw] flex flex-col items-start">
          <div className="capitalize bg-[rgba(26,26,26,0.70)] border border-[#1F1F1F] rounded-full lg:px-vw14 lg:py-vw1 px-3 py-1">
            <span className="text-[#EBEBEB] font-medium lg:text12 mtext12 uppercase">
              NO COMPLEXITY. WE’VE GOT YOUR BACK
            </span>
          </div>
          <h3 className="lg:text48 mtext26 font-bold text-white lg:mt-vw20 mt-2 lg:w-[32.5694444444vw]">
            {tabs[activeTab].content.heading}
          </h3>
          <p className="lg:text18 mtext16 text-white lg:my-vw26 my-4">
            {tabs[activeTab].content.desc}
          </p>
          <ul className="flex flex-col lg:gap-y-vw12 gap-y-2">
            {tabs[activeTab].content.list.map((item, ind) => (
              <li key={ind} className="flex lg:gap-x-vw12 gap-x-2">
                <div className="relative lg:size-vw20 size-[18px] lg:min-w-vw20 min-w-[18px] mt-0.5">
                  <Image fill alt="check" src={"/images/icons/check.svg"} />
                </div>
                <span className="lg:text16 mtext14 text-[#EBEBEB]">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      }
    </>
  );
};

export default Content;
