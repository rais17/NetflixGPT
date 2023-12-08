import React from 'react'
import Auth from '../Components/Auth';
import OverlayBlack from '../Components/OverlayBlack';

const Authentication = () => {
  return (
    <div className="relative flex items-center w-screen h-screen bg-center bg-no-repeat bg-cover bg-AuthBG">
      <OverlayBlack />
      <Auth />
    </div>
  );
}

export default Authentication