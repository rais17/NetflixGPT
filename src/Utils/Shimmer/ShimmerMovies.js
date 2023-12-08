import React from 'react'
import ShimmerMovieList from './ShimmerMovieList'

const ShimmerMovies = ({className}) => {
  return (
    <div className={`w-screen h-screen space-y-10 px-2 ${className}`}>
      <ShimmerMovieList count="3" />
      <ShimmerMovieList count="7" />
      <ShimmerMovieList count="5" />
    </div>
  );
}

export default ShimmerMovies