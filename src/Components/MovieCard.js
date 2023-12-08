import React from "react";
import { MOVIE_POSTER_URL } from "../Utils/constant";
import useTMBD from "../CustomHooks/useTMBD";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import fallBackImage from "../Assets/fallbackImage.png"

const MovieCard = ({ title, rating, imageUrl }) => {
  const { response, isLoading } = useTMBD(MOVIE_POSTER_URL + imageUrl);


  return (
    <div className="group min-w-[170px] max-w-[170px] h-[255px] cursor-pointer overflow-hidden">
      <div className="relative w-full h-full">
        {
          !isLoading  && (<img
          className="object-cover w-full h-full transition-all duration-300 ease-in-out"
          src={response?.url}
          alt="poster"
          loading="lazy"
          onError={(e) => e.currentTarget.src = fallBackImage}
        />)
        }
        <div className="absolute inset-0 transition-all duration-500 translate-y-full bg-transparent bg-gradient-to-t from-black bg-clip-content group-hover:translate-y-0">
          <div className="flex flex-col items-center justify-end h-full gap-1">
            <h1 className="text-base font-medium text-center text-white">
              {title}
            </h1>
            <div className="flex items-center gap-1">
              <FaRegStarHalfStroke className="text-yellow-500" />
              <h2 className="text-xs font-medium text-white">{rating?.toFixed(1)}</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
