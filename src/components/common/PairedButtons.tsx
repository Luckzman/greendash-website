import React from "react";
import StandardBtn from "./link-buttons/StandardBtn";
import ChevronBtn from "./link-buttons/ChevronBtn";
import OutlineBtn from "./link-buttons/OutlineBtn";

interface PairedButtonsProps {
  standardBtn?: {
    text: string;
    link: string;
    greenVersion?: boolean;
  };
  chevronBtn?: {
    text: string;
    link: string;
  };
  isForProfessionalsPage?: boolean;
}

const PairedButtons = ({ standardBtn, chevronBtn, isForProfessionalsPage }: PairedButtonsProps) => {
  return (
    <div className="flex flex-wrap items-center lg:gap-x-vw17 gap-4">
      {isForProfessionalsPage ? (
        <OutlineBtn
          text={standardBtn?.text || ''}
          link={standardBtn?.link || ''}
          isForProfessionalsPage={isForProfessionalsPage}
        />
      ) : (
        <StandardBtn
          text={standardBtn?.text || ''}
          link={standardBtn?.link || ''}
          greenVersion={standardBtn?.greenVersion}
          />
        )}
        <ChevronBtn colorInherit={isForProfessionalsPage ? 'white' : 'black'} text={chevronBtn?.text || ''} link={chevronBtn?.link || ''} />
    </div>
  );
};

export default PairedButtons;
