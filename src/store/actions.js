export const ActionType = {
  LOAD_MOVIES: `LOAD_MOVIES`,
  CHANGE_GENRE: `CHANGE_GENRE`,
  INCREMENT_MOVIES_COUNT: `INCREMENT_MOVIES_COUNT`,
  RESET_MOVIES_COUNT: `RESET_MOVIES_COUNT`,
};

export const changeGenre = (genre) => ({
  type: ActionType.CHANGE_GENRE,
  payload: genre,
});

export const loadMovies = (movies) => ({
  type: ActionType.LOAD_MOVIES,
  payload: movies,
});

export const incrementMoviesCount = () => ({
  type: ActionType.INCREMENT_MOVIES_COUNT,
});

export const resetMoviesCount = () => ({
  type: ActionType.RESET_MOVIES_COUNT,
});
