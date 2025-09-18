import React from "react";

const Buttons = ({ tabs, setActiveTab, activeTab }) => {
  return (
    <div
      data-aos="fade"
      className="lg:mt-vw47 lg:mb-vw37 mt-10 mb-6 lg:max-w-[95vw] w-[90.699%] lg:w-auto mx-auto lg:mx-auto lg:rounded-vw12 rounded-[12px] border border-[#1F1F1F] bg-[#1A1A1A] lg:p-vw9 p-1.5 sm:p-2"
    >
      <div className="grid grid-cols-2 lg:flex gap-1 lg:gap-0 h-full">
      {tabs.map((tab, index) => (
        <button
          key={index}
          onClick={() => setActiveTab(index)}
          className={`${
            activeTab === index ? "bg-green" : ""
          }  lg:rounded-vw8 rounded-[6px] lg:px-vw42 lg:py-vw12 px-1 py-1.5 sm:px-2 sm:py-2 w-full lg:w-auto flex items-center justify-center lg:justify-start min-h-[40px] sm:min-h-[44px]`}
        >
          <span className="text-sm lg:text16 text-white font-medium capitalize text-center lg:text-left leading-tight break-words">
            {tab.label}
          </span>
        </button>
      ))}
      </div>
    </div>
  );
};

export default Buttons;
