import {ActionType} from "./actions";
import {Genre} from "../const";
import {filterMoviesByGenre} from "../utils/movies";

const initialState = {
  movies: [],
  filteredMovies: [],
  activeGenre: Genre.ALL_GENRES,
};

const appStore = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE: {
      const movies = state.movies.slice();
      const activeGenre = action.payload;
      const filteredMovies = filterMoviesByGenre(movies, activeGenre);

      return {...state, activeGenre, filteredMovies};
    }
    case ActionType.LOAD_MOVIES: {
      return {...state, movies: action.payload, filteredMovies: action.payload};
    }
    default:
      return state;
  }
};

export {appStore};
