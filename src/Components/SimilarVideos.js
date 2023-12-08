import React from 'react'
import useTMBDWithOptions from "../CustomHooks/useTMBDWithOptions";
import { getSimilarVideosUrl, options } from '../Utils/constant';
import ShimmerMovieList from '../Utils/Shimmer/ShimmerMovieList';
import MoviesList from './MoviesList';

const SimilarVideos = ({ id }) => {
    const { response, isLoading } = useTMBDWithOptions(getSimilarVideosUrl(id));

    return (
      <div className="bg-[#0B0B0C] px-2 py-5">
        {isLoading ? (
          <ShimmerMovieList count="7" />
        ) : (
          <MoviesList title="More Like This" movies={response?.results} />
        )}
      </div>
    );
}

export default SimilarVideos