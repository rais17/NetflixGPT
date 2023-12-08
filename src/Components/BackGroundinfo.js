import React from "react";
import { FaGooglePlay } from "react-icons/fa6";
import { SiInformatica } from "react-icons/si";
import Button from "./Button";

const BackGroundinfo = ({ title, description, isHome }) => {
  return (
    <div className="w-full px-3 space-y-1 sm:space-y-3 md:pl-16 md:w-2/5 md:absolute md:z-30 at1054:space-y-5 xxs:max-md:shadow-2xl">
      <h1 className="font-sans text-2xl text-gray-200 sm:text-5xl md:text-6xl at1054:font-semibold whitespace-nowrap">
        {title}
      </h1>
      <p className="font-sans text-xs font-normal text-gray-200 sm:text-sm at1054:text-base">
        {description}
      </p>

      {isHome && (
        <div className="flex flex-wrap items-center gap-2 at1054:gap-5 xxs:max-at921:hidden">
          <Button Icon={FaGooglePlay} title="Play Now" />
          <Button Icon={SiInformatica} title="More Info" />
        </div>
      )}
    </div>
  );
};

export default BackGroundinfo;
