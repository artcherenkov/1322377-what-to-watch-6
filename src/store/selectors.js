export const getMovies = (state) => state.movies;
export const getMovieById = (state, id) => state.movies.find((movie) => movie.id === Number(id));
export const getFavoriteMovies = (state) => state.movies.filter((movie) => movie.isFavorite);
export const getActiveGenre = (state) => state.activeGenre;
export const getAuthStatus = (state) => state.authStatus;
export const getAuthInfo = (state) => state.authInfo;
export const getPromoMovieId = (state) => state.promoMovieId;
