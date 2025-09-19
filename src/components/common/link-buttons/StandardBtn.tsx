import Link from "next/link";
import React from "react";

interface StandardBtnProps {
  link: string;
  text: string;
  tag?: React.ElementType;
  isExternal?: boolean;
  greenVersion?: boolean;
  hasShadow?: boolean;
}


const StandardBtn = ({
  link,
  text,
  tag: Tag = Link,
  isExternal = false, // Default to false
  greenVersion,
  hasShadow = true,
}: StandardBtnProps) => {
  if (!text) {
    return <></>;
  }

  // Determine the target attribute based on isExternal
  const target = isExternal ? "_blank" : "_self";

  return (
    <Tag
      data-aos="fade"
      {...(Tag === Link ? { href: link, target } : {})} // Apply target only if Tag is Link
      className={`${
        greenVersion ? "bg-green" : "bg-black"
      } text-white  lg:px-vw17 lg:py-vw8 py-1.5 px-4 capitalize lg:rounded-vw10 rounded-[10px] text16 ls032 font-inter font-medium transition`}
      style={{ boxShadow: hasShadow ? "0 4px 4px 0 rgba(0, 0, 0, 0.25)" : "none" }}
    >
      {text}
    </Tag>
  );
};

export default StandardBtn;
