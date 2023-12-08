import React from 'react'
import { useParams } from "react-router-dom";
import useBackgroundVideo from '../CustomHooks/useBackgroundVideo';
import BackGroundVideo from '../Components/BackGroundVideo';
import { useSelector } from "react-redux";
import BackGroundinfo from '../Components/BackGroundinfo';
import MoreVideos from '../Components/MoreVideos';
import SimilarVideos from '../Components/SimilarVideos';
import RecommendedVideos from '../Components/RecommendedVideos';
import ShimmerVideo from '../Utils/Shimmer/ShimmerVideo';

const MoviesDetails = () => {
    const { id } = useParams();

    const movieInfo = useSelector(store => store?.movieInfo);

    const isLoading = useBackgroundVideo(id, false);
    const videoKey = useSelector((store) => store.backGroundVideo?.movieBackGroundVideo);
  
  return (
    <div className="w-full bg-[#0B0B0C]">
      <div className="relative flex w-full overflow-hidden xxs:max-md:flex-col md:max-h-screen md:items-center">
        {isLoading ? (
          <ShimmerVideo />
        ) : (
          <BackGroundVideo
            videoKey={videoKey}
            mute={0}
            className="w-full"
            overlay={true}
          />
        )}
        <BackGroundinfo
          title={movieInfo?.title}
          description={movieInfo?.description}
          isHome={false}
        />
      </div>

      <MoreVideos title={movieInfo?.title} />
      <RecommendedVideos id={id} />
      <SimilarVideos id={id} />
    </div>
  );
}

export default MoviesDetails