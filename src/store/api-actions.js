import {loadMovies, loadMovie, loadUser} from "./actions";
import {APIRoute} from "../const";

export const fetchMoviesList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.MOVIES)
    .then(({data}) => dispatch(loadMovies(data)))
);

export const changeMovieIsFavorite = (id) => (dispatch, getState, api) => {
  const state = getState();
  const movie = state.movies.find((m) => m.id === Number(id));

  if (!movie) {
    return null;
  }

  return (
    api.post(`${APIRoute.FAVORITE}/${id}/${Number(!movie.isFavorite)}`)
      .then(({data}) => dispatch(loadMovie(data)))
  );
};

export const fetchMovieById = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.MOVIES}/${id}`)
    .then(({data}) => dispatch(loadMovie(data)))
);

export const fetchReviewsByMovieId = (movieId) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.COMMENTS}/${movieId}`)
);

export const checkAuthStatus = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(({data}) => dispatch(loadUser(data)))
);

export const login = (user) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, user)
    .then(({data}) => dispatch(loadUser(data)))
);

export const postReview = (review, movieId) => (dispatch, _getState, api) => (
  api.post(`${APIRoute.COMMENTS}/${movieId}`, review)
);
