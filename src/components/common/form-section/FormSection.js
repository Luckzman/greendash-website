import Content from "@/components/common/Content";
import React from "react";

const FormSection = ({ content }) => {
  return (
    <section className="relative lg:pt-vw44 lg:pb-vw200 py-[60px] sm:py-[120px]">
      <span
        style={{
          background:
            "linear-gradient(180deg, #7FFF6B 3.25%, rgba(173, 255, 160, 0.80) 30.18%, rgba(239, 255, 236, 0.50) 66.1%, rgba(241, 255, 238, 0.10) 96.62%)",
        }}
        className="atlwh_Full pointer-events-none"
      ></span>
      <span
        style={{
          background: "linear-gradient(181deg, #FFF 42.57%, #7FFF6B 99.81%)",
        }}
        className="atlwh_Full lg:h-vw190 h-[30%] top-[unset] bottom-0 pointer-events-none"
      ></span>
      <div className="relative z-[2]">
        <Content
          tag={content.tag}
          heading={content.heading}
          desc={content.desc}
          wrapperWidth={content.wrapperWidth}
          descWidth={content.descWidth}
        />
      </div>
    </section>
  );
};

export default FormSection;
