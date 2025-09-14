import React from "react";

const Buttons = ({ tabs, setActiveTab, activeTab }) => {
  return (
    <div
      data-aos="fade"
      className="lg:mt-vw47 lg:mb-vw37 mt-10 mb-6 lg:max-w-[95vw] overflow-scroll hideScroll w-[95.350%] lg:w-auto whitespace-nowrap mx-0 ml-auto lg:mx-auto lg:rounded-vw12 rounded-tl-[12px] rounded-bl-[12px] border border-[#1F1F1F] bg-[#1A1A1A] lg:p-vw9 p-1.5 sm:p-2 flex"
    >
      {tabs.map((tab, index) => (
        <button
          key={index}
          onClick={() => setActiveTab(index)}
          className={`${
            activeTab === index ? "bg-green" : ""
          }  lg:rounded-vw8 rounded-[8px] lg:px-vw42 lg:py-vw12 px-6 py-2`}
        >
          <span className="text16 text-white font-medium capitalize">
            {tab.label}
          </span>
        </button>
      ))}
    </div>
  );
};

export default Buttons;
