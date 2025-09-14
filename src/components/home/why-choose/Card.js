import React from "react";
import Image from "next/image";

const Card = ({ icon, iconClasses, title, desc, index }) => {
  return (
    <div
      data-aos="fade"
      data-aos-delay={`${index * 100}`}
      style={{ boxShadow: "0 7px 24px 0 rgba(36, 38, 43, 0.10)" }}
      className="lg:w-[22.2222222222vw] sm:w-[48%] w-full lg:rounded-vw10 rounded-[10px] bg-[rgba(255,255,255,0.80)] border border-[rgba(27,27,27,0.08)] flex flex-col lg:gap-y-vw16 gap-y-3 lg:px-vw40 lg:py-vw20 px-5 py-6"
    >
      <div className={`relative ${iconClasses}`}>
        <Image fill alt="icon" src={icon} />
      </div>
      <h4 className="lg:text24 gradient_text font-bold ls096 mt-auto">
        {title}
      </h4>
      <p className="text16 font-inter ls016">{desc}</p>
    </div>
  );
};

export default Card;
