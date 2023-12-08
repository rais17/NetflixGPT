import OpenAI from "openai";

export const USER_LOGO =
  "https://e7.pngegg.com/pngimages/419/473/png-clipart-computer-icons-user-profile-login-user-heroes-sphere-thumbnail.png";
// const API_KEY = "d4a044cbb7f13fe47efdbd2f9bc331e6";

export const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNGEwNDRjYmI3ZjEzZmU0N2VmZGJkMmY5YmMzMzFlNiIsInN1YiI6IjY1NjhlMDVkZGJmMTQ0MDBlMzZlNjM3ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qEs7wz-K20ok7j1v58Y9wZFiHyaCq3gXvc21NWd8JMY",
  },
};

export const NOW_PLAYING_MOVIE_URL =
  "https://api.themoviedb.org/3/movie/now_playing?page=1";
export const POPULAR_MOVIE_URL =
  "https://api.themoviedb.org/3/movie/popular?page=1";
export const TOP_RATED_MOVIE_URL =
  "https://api.themoviedb.org/3/movie/top_rated?page=1";
export const UPCOMING_MOVIE_URL =
  "https://api.themoviedb.org/3/movie/upcoming?page=1";
export const TRENDING_MOVIE_URL =
  "https://api.themoviedb.org/3/trending/movie/week";

export const getVideoUrl = (id) =>
  `https://api.themoviedb.org/3/movie/${id}/videos`;

export const MOVIE_POSTER_URL = "https://image.tmdb.org/t/p/w500";

export const getSimilarVideosUrl = (id) =>
  `https://api.themoviedb.org/3/movie/${id}/similar?page=1`;

export const getSearchNovieUrl = (query) =>
  `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(
    query,
  )}&include_adult=false&page=1`;

  export const getRecommendedMovieUrl = (id) =>
    `https://api.themoviedb.org/3/movie/${id}/recommendations?page=1`;


export const openai = new OpenAI({
  apiKey: "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",
  dangerouslyAllowBrowser: true,
});
