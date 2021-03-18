import {ActionType} from "./actions";
import {Genre} from "../const";
import {filterMoviesByGenre} from "../utils/movies";

const MOVIES_CARD_COUNT_STEP = 8;

const initialState = {
  movies: [],
  filteredMovies: [],
  activeGenre: Genre.ALL_GENRES,
  movieCardsToShowCount: MOVIES_CARD_COUNT_STEP,
};

const appStore = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE: {
      const movies = state.movies.slice();
      const activeGenre = action.payload;
      const filteredMovies = filterMoviesByGenre(movies, activeGenre);

      const movieCardsToShowCount = MOVIES_CARD_COUNT_STEP;
      return {...state, activeGenre, filteredMovies, movieCardsToShowCount};
    }
    case ActionType.LOAD_MOVIES: {
      return {...state, movies: action.payload, filteredMovies: action.payload};
    }
    case ActionType.INCREMENT_MOVIES_COUNT: {
      const movieCardsToShowCount = state.movieCardsToShowCount;
      const newMovieCardsToShowCount = movieCardsToShowCount + MOVIES_CARD_COUNT_STEP;

      return {...state, movieCardsToShowCount: newMovieCardsToShowCount};
    }
    default:
      return state;
  }
};

export {appStore};
