import {ActionType} from "./actions";
import {AuthorizationStatus, Genre} from "../const";
import {adaptMovieToClient, adaptUserInfoToClient} from "../core/adapter";

const initialState = {
  movies: [],
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
    case ActionType.LOAD_USER: {
      return {...state, authStatus: AuthorizationStatus.AUTH, authInfo: adaptUserInfoToClient(action.payload)};
    }
    default:
      return state;
  }
};

export {appStore};
