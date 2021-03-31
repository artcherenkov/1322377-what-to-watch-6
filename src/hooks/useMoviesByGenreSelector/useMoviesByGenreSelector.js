import {shallowEqual, useSelector} from "react-redux";
import {getMovies} from "../../store/selectors";

export const useMoviesByGenreSelector = (genre) =>
  useSelector(
      (state) => getMovies(state).filter((movie) => movie.genre === genre),
      shallowEqual
  );
