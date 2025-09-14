import { checkIfExist } from "@/utils/checkIfExist";
import Image from "next/image";
import React from "react";

const ImageComponent = ({
  src,
  alt,
  className,
  noLoading,
  quality = 75,
  sizes,
  mobImg,
  priority,
}) => {
  return (
    <>
      {noLoading || (
        <span className="atlwh_Full z-[-1] bg-[#132D2B33] border20 animate-pulse"></span>
      )}
      {src && (
        <Image
          fill
          priority={priority}
          quality={quality}
          sizes={sizes}
          src={src}
          alt={`${checkIfExist(alt, "Cyberani")}`}
          className={`  ${className ? className : "object-cover z-[1]"}  ${
            mobImg ? " hidden :sm:block " : ""
          }`}
        />
      )}
      {mobImg && (
        <Image
          fill
          quality={quality}
          sizes={sizes}
          src={mobImg}
          alt={`${checkIfExist(alt, "Cyberani")}`}
          className={`  ${
            className ? className : "object-cover z-[1]"
          } sm:hidden `}
        />
      )}
    </>
  );
};

export default ImageComponent;
