import {Genre} from "../const";

export function filterMoviesByGenre(movies, activeGenre) {
  if (activeGenre === Genre.ALL_GENRES) {
    return movies;
  }

  return movies.filter((movie) => movie.genre === activeGenre);
}
