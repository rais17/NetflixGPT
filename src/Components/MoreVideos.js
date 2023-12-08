import React from 'react'
import { useSelector } from 'react-redux'
import BackGroundVideo from './BackGroundVideo';

const MoreVideos = ({title}) => {
  const allVideos = useSelector(store => store.backGroundVideo?.allVideos);

  return (
    <div className="w-full space-y-5 bg-[#0B0B0C] px-2 py-10">
      <h1 className="flex items-center font-sans text-2xl font-normal text-gray-300 sm:text-3xl gap-x-2">
        Videos<span className='text-xl font-light text-gray-400 sm:font-2xl'>{"| "}{title}</span>
      </h1>
      <div className="flex flex-wrap justify-center w-full gap-2">
        {allVideos?.map((miniClip) => {
          return (
            <BackGroundVideo
              key={miniClip}
              videoKey={miniClip}
              mute={1}
              className="w-full sm:w-[calc(50%-8px)] lg:w-[calc(33.333333%-8px)] xl:w-[calc(25%-8px)]"
              overlay={false}
              scale={true}
            />
          );
        })}
      </div>
    </div>
  );
}

export default MoreVideos