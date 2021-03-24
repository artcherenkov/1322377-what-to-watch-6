import {loadMovies, loadMovie, loadUser} from "./actions";
import {APIRoute} from "../const";

export const fetchMoviesList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.MOVIES)
    .then(({data}) => dispatch(loadMovies(data)))
);

export const fetchMovieById = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.MOVIES}/${id}`)
    .then(({data}) => dispatch(loadMovie(data)))
);

export const checkAuthStatus = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(({data}) => dispatch(loadUser(data)))
);

export const login = (user) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, user)
    .then(({data}) => dispatch(loadUser(data)))
);
