import React from 'react'
import { useSelector } from 'react-redux'
import MoviesList from './MoviesList';

const SecondaryContainer = () => {
  const moviesList = useSelector(store => store?.movies);
  return (
    <div className="w-full bg-black">
      <div className="flex flex-col w-full gap-8 px-2 lg:gap-16 at900:relative at900:z-40 at900:-mt-16 xl:-mt-28 ">
        <MoviesList
          title=""
          movies={moviesList?.nowPlayingMovies}
        />
        <MoviesList
          title="Popular"
          movies={moviesList?.popularMovies}
        />
        <MoviesList
          title="Top Rated"
          movies={moviesList?.topRatedMovies}
        />
        <MoviesList
          title="Trending"
          movies={moviesList?.trendingMovies}
        />
        <MoviesList
          title="Upcoming"
          movies={moviesList?.upcomingMovies}
        />
      </div>
    </div>
  );
}

export default SecondaryContainer