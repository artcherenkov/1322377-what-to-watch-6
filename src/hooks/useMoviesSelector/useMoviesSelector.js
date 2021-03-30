import {shallowEqual, useSelector} from "react-redux";
import {getMovies} from "../../store/selectors";

export const useMoviesSelector = () => useSelector(getMovies, shallowEqual);
