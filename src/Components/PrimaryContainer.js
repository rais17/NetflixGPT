import React from 'react'
import { useSelector } from 'react-redux'
import useBackgroundVideo from '../CustomHooks/useBackgroundVideo';
import BackGroundVideo from './BackGroundVideo';
import BackGroundinfo from './BackGroundinfo';
import ShimmerVideo from '../Utils/Shimmer/ShimmerVideo';



const PrimaryContainer = ({isDataLoaded}) => {
  
  const backGroundVideo = useSelector(store => store.movies?.nowPlayingMovies);

  const isLoading = useBackgroundVideo(backGroundVideo?.[3]?.id, true);
  const videoKey = useSelector(
      (store) => store.backGroundVideo?.homeBackGroundVideo
    );

  return isLoading ? (
    <ShimmerVideo />
  ) : (
    <div className="relative flex w-full overflow-hidden xxs:max-md:flex-col md:items-center md:max-h-screen ">
      <BackGroundVideo
        videoKey={videoKey}
        mute={1}
        className="w-full"
        overlay={true}
      />

      <BackGroundinfo
        title={backGroundVideo?.[1].title}
        description={backGroundVideo?.[1].overview}
        isHome={true}
      />
    </div>
  );
}

export default PrimaryContainer