import React from 'react'
import ShimmerMovieCard from './ShimmerMovieCard';

const ShimmerMovieList = ({count}) => {
  return (
    <div className="relative z-0 flex w-full gap-2 overflow-x-scroll hide-scrollbar">
      {Array.from({ length: count }).map((el, index) => (
        <ShimmerMovieCard key={index} />
      ))}
    </div>
  );
}

export default ShimmerMovieList