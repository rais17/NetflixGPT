import React from 'react'

const Overlay = ({overlay}) => {
  return (
    <div
      className={`absolute inset-0 z-10 bg-transparent bg-gradient-to-r from-black bg-clip-content ${!overlay && `hidden`}`}
    ></div>
  );
}

export default Overlay