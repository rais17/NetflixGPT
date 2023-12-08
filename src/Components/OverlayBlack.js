import React from "react";

const OverlayBlack = ({isFixed = false}) => {
  return (
    <div
      className={`inset-0 z-0 bg-black bg-opacity-60 ${isFixed ? `fixed` : `absolute`}`}
    ></div>
  );
};

export default OverlayBlack;
