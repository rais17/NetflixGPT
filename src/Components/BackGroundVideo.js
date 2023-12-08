import React, { useState, useEffect } from "react";
import Overlay from "../Components/Overlay"
import ShimmerVideo from "../Utils/Shimmer/ShimmerVideo";


const BackGroundVideo = ({videoKey, mute, className = "", overlay, scale = false}) => {

    
  return (
    <div className={` h-full relative overflow-hidden ${className}`}>
      <Overlay overlay={overlay} />

        <iframe
          src={`https://www.youtube.com/embed/${videoKey}?autoplay=1&controls=0&loop=1&mute=${mute}&playlist=${videoKey}&modestbranding=1&rel=0&disablekb=1&fs=0&iv_load_policy=3&vq=hd1080`}
          allow="autoplay; fullscreen"
          allowFullScreen
          title="Background Video"
          className={`aspect-video h-full w-full object-cover ${
            scale ? `lg:scale-[1.75] scale-[1.85]` : `scale-150`
          }`}
        ></iframe>
  
    </div>
  );
};

export default BackGroundVideo;

