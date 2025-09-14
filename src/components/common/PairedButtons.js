import React from "react";
import StandardBtn from "./link-buttons/StandardBtn";
import ChevronBtn from "./link-buttons/ChevronBtn";

const PairedButtons = ({ standardBtn, chevronBtn }) => {
  return (
    <div className="flex flex-wrap items-center lg:gap-x-vw17 gap-4">
      <StandardBtn
        text={standardBtn?.text}
        link={standardBtn?.link}
        greenVersion={standardBtn?.greenVersion}
      />
      <ChevronBtn text={chevronBtn?.text} link={chevronBtn?.link} />
    </div>
  );
};

export default PairedButtons;
