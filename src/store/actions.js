export const ActionType = {
  LOAD_MOVIES: `LOAD_MOVIES`,
  LOAD_MOVIE: `LOAD_MOVIE`,
  CHANGE_GENRE: `CHANGE_GENRE`,
  LOAD_USER: `LOAD_USER`
};

export const changeGenre = (payload) => ({
  type: ActionType.CHANGE_GENRE,
  payload,
});

export const loadMovies = (payload) => ({
  type: ActionType.LOAD_MOVIES,
  payload,
});

export const loadMovie = (payload) => ({
  type: ActionType.LOAD_MOVIE,
  payload,
});

export const loadUser = (payload) => ({
  type: ActionType.LOAD_USER,
  payload,
});
