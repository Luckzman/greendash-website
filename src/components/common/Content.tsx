import React from "react";
import PairedButtons from "./PairedButtons";

interface ContentProps {
  wrapperWidth?: string;
  descWidth?: string;
  tag?: string;
  heading?: string;
  desc?: string;
  headingClasses?: string;
  standardBtn?: {
    text: string;
    link: string;
    greenVersion?: boolean;
  };
  chevronBtn?: {
    text: string;
    link: string;
  };
  descColor?: string;
  isForProfessionalsPage?: boolean;
}

const Content: React.FC<ContentProps> = ({
  wrapperWidth,
  descWidth,
  tag,
  heading,
  desc,
  headingClasses,
  standardBtn,
  chevronBtn,
  descColor,
  isForProfessionalsPage,
}) => {
  return (
    <div
      className={`${
        wrapperWidth ? wrapperWidth : "lg:w-[69.02777777777778vw]"
      } w-[90.699%] mx-auto flex flex-col items-center text-center lg:gap-y-vw20 gap-y-4`}
    >
      {tag && (
        <div
          data-aos="fade"
          className="capitalize bg-white border border-[rgba(34,34,34,0.10)] lg:rounded-vw10 rounded-[10px] lg:px-vw13 lg:py-vw3 px-3 py-1"
        >
          <span className="text-black font-medium lg:text13 mtext12 ls032 inter">
            {tag}
          </span>
        </div>
      )}
      <h2
        data-aos="fade-up"
        className={`${
          headingClasses ? headingClasses : "gradient_text"
        } text54 `}
      >
        {heading}
      </h2>
      {desc && (
        <div
          data-aos="fade-up"
          data-aos-delay="100"
          dangerouslySetInnerHTML={{ __html: desc }}
          className={`text22 ${
            descWidth ? descWidth : "lg:w-[50.13888888888889vw]"
          } ${descColor}`}
        ></div>
      )}
      {standardBtn && chevronBtn && (
        <PairedButtons standardBtn={standardBtn} chevronBtn={chevronBtn} isForProfessionalsPage={isForProfessionalsPage} />
      )}
    </div>
  );
};

export default Content;
