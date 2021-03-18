import {Genre} from "../const";

export function filterMoviesByGenre(movies, activeGenre) {
  return movies.filter((movie) => {
    if (activeGenre === Genre.ALL_GENRES) {
      return true;
    }

    return movie.genre === activeGenre;
  });
}
