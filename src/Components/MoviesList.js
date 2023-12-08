import React from "react";
import MovieCard from "./MovieCard";
import { Link } from "react-router-dom";
import { addMovieInfo } from "../Utils/Slices/movieInfoSlice";
import { useDispatch } from "react-redux";
import ShimmerMovieList from "../Utils/Shimmer/ShimmerMovieList";

const MoviesList = ({ title, movies, isCenter = false, isLoading }) => {

  const dispatch = useDispatch();

  const handleMovieData = (movie) => {
    dispatch(addMovieInfo({ title: movie.title, description: movie.overview }));
  }

  return (
    <div className="w-full space-y-3 md:space-y-5 at900:px-2">
      {movies?.length && (
        <h1
          className={`font-sans text-2xl sm:text-3xl font-normal text-gray-300 ${
            isCenter && `text-center`
          }`}
        >
          {title}
        </h1>
      )}

      <div className={` hide-scrollbar flex gap-1 overflow-x-scroll`}>
        {movies?.map((movie) => {
          return (
            <Link
              onClick={() => handleMovieData(movie)}
              to={`/moviesdetails/${movie.id}`}
              style={{ display: "contents" }}
              key={movie.id}
            >
              <MovieCard
                title={movie?.title}
                rating={movie?.vote_average}
                imageUrl={movie?.poster_path}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default MoviesList;
