export const ActionType = {
  LOAD_MOVIES: `LOAD_MOVIES`,
  CHANGE_GENRE: `CHANGE_GENRE`,
  CHANGE_AUTH_STATUS: `CHANGE_AUTH_STATUS`
};

export const changeGenre = (genre) => ({
  type: ActionType.CHANGE_GENRE,
  payload: genre,
});

export const loadMovies = (movies) => ({
  type: ActionType.LOAD_MOVIES,
  payload: movies,
});

export const changeAuthStatus = (authStatus) => ({
  type: ActionType.CHANGE_AUTH_STATUS,
  payload: authStatus,
});
