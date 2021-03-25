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

export function adaptReviewToServer(review) {
  const adaptedReview = {...review, comment: review.reviewText};

  delete adaptedReview.reviewText;

  return adaptedReview;
}
