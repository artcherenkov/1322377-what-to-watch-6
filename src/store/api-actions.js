import {loadMovies} from "./actions";
import {APIRoute} from "../const";

export const fetchMoviesList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.MOVIES)
    .then(({data}) => dispatch(loadMovies(data)))
);