import { useEffect, useState } from 'react';
import {
    NOW_PLAYING_MOVIE_URL,
    POPULAR_MOVIE_URL,
    TOP_RATED_MOVIE_URL,
    UPCOMING_MOVIE_URL,
    TRENDING_MOVIE_URL,
    options
} from '../Utils/constant';

import {
  addNowPlayingMovies,
  addPopularMovies,
  addTopRatedMovies,
  addUpcomingMovies,
  addTrendingMovies,
  setAllDataLoaded,
} from "../Utils/Slices/moviesSlice";
import { useDispatch, useSelector } from 'react-redux';


const useMovies = () => {

    const isDataLoaded = useSelector((store) => store.movies.isDataLoaded);
    const dispatch = useDispatch();

    useEffect(() => {
        !isDataLoaded && fetchMovies();
    }, []);

    const fetchMovies = async () => {
        try {
                    const [response1, response2, response3, response4, response5] =
                      await Promise.all([
                        fetch(NOW_PLAYING_MOVIE_URL, options),
                        fetch(POPULAR_MOVIE_URL, options),
                        fetch(TOP_RATED_MOVIE_URL, options),
                        fetch(UPCOMING_MOVIE_URL, options),
                        fetch(TRENDING_MOVIE_URL, options),
                      ]);

                    if (!response1.ok || !response2.ok || !response3.ok || !response4.ok || !response5.ok) {
                      throw new Error("Error fetching data");
                    }

                    const data1 = await response1.json();
                    const data2 = await response2.json();
                    const data3 = await response3.json();
                    const data4 = await response4.json();
                    const data5 = await response5.json();
            
            dispatch(addNowPlayingMovies(data1.results));
            dispatch(addPopularMovies(data2.results));
            dispatch(addTopRatedMovies(data3.results));
            dispatch(addUpcomingMovies(data4.results));
            dispatch(addTrendingMovies(data5.results));

            dispatch(setAllDataLoaded(true));
            
                    
        }
        catch (error) {
            console.log(error.message);
        }
    }
}

export default useMovies