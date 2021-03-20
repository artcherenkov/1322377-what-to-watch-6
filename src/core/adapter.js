import {renameKeysSnakeToCamel} from "../utils/common";

export function adaptMovieToClient(movie) {
  const camelCasedMovie = renameKeysSnakeToCamel(movie);
  const adaptedMovie = {...camelCasedMovie, releaseDate: String(camelCasedMovie.released)};

  delete adaptedMovie.released;

  return adaptedMovie;
}

export function adaptUserInfoToClient(userInfo) {
  return renameKeysSnakeToCamel(userInfo);
}
