import React, { useEffect } from "react";
import useSearchMovies from "../CustomHooks/useSearchMovies";
import { useSelector } from "react-redux";
import MoviesList from "./MoviesList";
import ShimmerMovies from "../Utils/Shimmer/ShimmerMovies";

const SearchMovies = ({load, setLoad}) => {
  useSearchMovies();
  const searchMovie = useSelector((store) => store.searchMovie);

  useEffect(() => {
    searchMovie.searchedMovies && setLoad(false);
  }, [searchMovie.searchedMovies]);

  if (load && !searchMovie.searchedMovies) return <ShimmerMovies />;
    
    return (
      <div className="relative z-0 flex flex-col w-full gap-8 px-2 lg:gap-16 bg-gradient-to-t from-slate-950">
        {searchMovie.searchQuery?.map((movieTitle, index) => (
          <MoviesList
            title={movieTitle}
            movies={searchMovie.searchedMovies?.[index]?.results}
          />
        ))}
      </div>
    );

};

export default SearchMovies;
