import React from 'react'
import PrimaryContainer from '../Components/PrimaryContainer';
import SecondaryContainer from '../Components/SecondaryContainer';
import useMovies from '../CustomHooks/useMovies';
import { useSelector } from 'react-redux';
import ShimmerMovies from "../Utils/Shimmer/ShimmerMovies";

const Browse = () => {

  useMovies();
  const isDataLoaded = useSelector((store) => store.movies.isDataLoaded);

  return (
    <div className="w-full bg-black ">
      <PrimaryContainer isDataLoaded={isDataLoaded} />
      {!isDataLoaded ? <ShimmerMovies className={`md:-mt-16`} /> : <SecondaryContainer />}
    </div>
  );
}

export default Browse
