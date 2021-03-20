export const ActionType = {
  LOAD_MOVIES: `LOAD_MOVIES`,
  CHANGE_GENRE: `CHANGE_GENRE`,
  LOAD_USER: `LOAD_USER`
};

export const changeGenre = (genre) => ({
  type: ActionType.CHANGE_GENRE,
  payload: genre,
});

export const loadMovies = (movies) => ({
  type: ActionType.LOAD_MOVIES,
  payload: movies,
});

export const loadUser = (authInfo) => ({
  type: ActionType.LOAD_USER,
  payload: authInfo,
});
