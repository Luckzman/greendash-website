import React from "react";
import Image from "next/image";
import ChevronBtn from "@/components/common/link-buttons/ChevronBtn";

const Card = ({ logo, desc }) => {
  return (
    <div
      data-aos="fade"
      style={{ boxShadow: "0 2px 10px 0 rgba(36, 38, 43, 0.50)" }}
      className="lg:w-[35.4166666667vw] sm:w-[48%] w-full group cursor-pointer lg:rounded-vw20 rounded-[20px] bg-white flex flex-col items-center text-center lg:gap-y-vw26 gap-y-4 lg:p-vw40 px-5 py-6"
    >
      <div className="relative lg:w-[17.3611111111vw] lg:h-vw83 w-[185px] h-[61px]">
        <Image fill alt="logo" src={logo} />
      </div>
      <p className="text16 font-inter ls016 mb-auto">{desc}</p>
      <div className="relative">
        <div className="group-hover:opacity-0 opacity-100 transition-all duration-500">
          <ChevronBtn text={"Learn more"} tag={"div"} />
        </div>
        <span className="group-hover:opacity-100 opacity-0 text-black transition-all duration-500 lg:text16 mtext18 ls032 font-inter font-medium capitalize absolute size-full left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
          coming soon
        </span>
      </div>
    </div>
  );
};

export default Card;
