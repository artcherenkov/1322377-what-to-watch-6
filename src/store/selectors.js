export const getMovies = (state) => state.movies;
export const getMovieById = (state, id) => state.movies.find((movie) => movie.id === Number(id));
export const getActiveGenre = (state) => state.activeGenre;
export const getAuthStatus = (state) => state.authStatus;
export const getAuthInfo = (state) => state.authInfo;
