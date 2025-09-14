import Link from "next/link";
import React from "react";

interface ChevronBtnProps {
  link: string;
  text: string;
  tag?: React.ElementType;
  isExternal?: boolean;
  colorInherit?: string;
}

const ChevronBtn = ({
  link,
  text,
  tag: Tag = Link,
  isExternal = false, // Default to false
  colorInherit,
}: ChevronBtnProps) => {
  if (!text) {
    return <></>;
  }

  // Determine the target attribute based on isExternal
  const target = isExternal ? "_blank" : "_self";

  return (
    <Tag
      style={{
        color: `${colorInherit ? colorInherit : "black"}`,
      }}
      data-aos="fade"
      data-aos-delay="100"
      {...(Tag === Link ? { href: link, target } : {})} // Apply target only if Tag is Link
      className={`flex items-center lg:gap-x-vw4 gap-x-1 capitalize lg:rounded-vw10 rounded-[10px] lg:text16 mtext18 ls032 font-inter font-medium transition`}
    >
      {text}
      <div className="relative lg:size-vw20 size-5">
        {/* <Image fill alt="chevron" src={"/images/icons/btn_chevron.svg"} /> */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="atlwh_Full"
          viewBox="0 0 21 20"
          fill="none"
        >
          <path
            d="M16.764 10.5306L12.264 15.0306C12.1231 15.1715 11.932 15.2507 11.7328 15.2507C11.5335 15.2507 11.3424 15.1715 11.2015 15.0306C11.0606 14.8897 10.9815 14.6986 10.9815 14.4994C10.9815 14.3001 11.0606 14.109 11.2015 13.9681L14.4209 10.75H5.2334C5.03449 10.75 4.84372 10.671 4.70307 10.5303C4.56242 10.3897 4.4834 10.1989 4.4834 9.99999C4.4834 9.80108 4.56242 9.61031 4.70307 9.46966C4.84372 9.329 5.03449 9.24999 5.2334 9.24999H14.4209L11.2028 6.02999C11.0619 5.88909 10.9827 5.69799 10.9827 5.49874C10.9827 5.29948 11.0619 5.10838 11.2028 4.96749C11.3437 4.82659 11.5348 4.74744 11.734 4.74744C11.9333 4.74744 12.1244 4.82659 12.2653 4.96749L16.7653 9.46749C16.8352 9.53726 16.8907 9.62016 16.9285 9.71142C16.9663 9.80269 16.9857 9.90052 16.9856 9.99931C16.9854 10.0981 16.9658 10.1959 16.9278 10.2871C16.8898 10.3782 16.8341 10.461 16.764 10.5306Z"
            style={{
              fill: `${colorInherit ? colorInherit : "black"}`,
            }}
          />
        </svg>
      </div>
    </Tag>
  );
};

export default ChevronBtn;
