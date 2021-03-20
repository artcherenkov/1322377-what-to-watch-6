import {ActionType} from "./actions";
import {AuthorizationStatus, Genre} from "../const";
import {adaptMovieToClient} from "../core/adapter";

const initialState = {
  movies: [],
  activeGenre: Genre.ALL_GENRES,
  isAuth: AuthorizationStatus.NOT_AUTH,
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
    case ActionType.CHANGE_AUTH_STATUS: {
      return {...state, isAuth: action.payload};
    }
    default:
      return state;
  }
};

export {appStore};
