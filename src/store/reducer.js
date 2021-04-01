import {ActionType} from "./actions";
import {AuthorizationStatus, Genre} from "../const";
import {adaptMovieToClient, adaptUserInfoToClient} from "../core/adapter";

const initialState = {
  movies: [],
  promoMovieId: null,
  activeGenre: Genre.ALL_GENRES,
  authStatus: AuthorizationStatus.NOT_AUTH,
  authInfo: null,
};

const appStore = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE: {
      return {...state, activeGenre: action.payload};
    }
    case ActionType.LOAD_MOVIES: {
      const movies = action.payload.map((movie) => adaptMovieToClient(movie));
      return {...state, movies};
    }
    case ActionType.LOAD_PROMO_MOVIE_ID: {
      return {...state, promoMovieId: action.payload};
    }
    case ActionType.LOAD_MOVIE: {
      const movie = adaptMovieToClient(action.payload);
      const movies = state.movies.slice();
      const movieId = movies.findIndex((m) => m.id === movie.id);
      if (movieId !== -1) {
        movies[movieId] = movie;
        return {...state, movies};
      }
      return {...state, movies: [...state.movies, movie]};
    }
    case ActionType.LOAD_USER: {
      return {...state, authStatus: AuthorizationStatus.AUTH, authInfo: adaptUserInfoToClient(action.payload)};
    }
    default:
      return state;
  }
};

export {appStore};
