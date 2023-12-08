import React from 'react'
import ShimmerMovieList from '../Utils/Shimmer/ShimmerMovieList';
// import ShimmerMovies from '../Utils/Shimmer/ShimmerMovies';
import MoviesList from "./MoviesList";
import useTMBDWithOptions from "../CustomHooks/useTMBDWithOptions";
import { getRecommendedMovieUrl } from "../Utils/constant";

const RecommendedVideos = ({id}) => {

        const { response, isLoading } = useTMBDWithOptions(
          getRecommendedMovieUrl(id),
        );
    
  return (
    <div className="w-full bg-[#0B0B0C] px-2  lg:py-5">
      {isLoading ? (
        <ShimmerMovieList count="8" />
      ) : (
        <MoviesList title="Recommended" movies={response?.results} />
      )}
    </div>
  );
}

export default RecommendedVideos