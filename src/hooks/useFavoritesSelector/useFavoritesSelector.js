import {shallowEqual, useSelector} from "react-redux";
import {getFavoriteMovies} from "../../store/selectors";

export const useFavoritesSelector = () => useSelector(getFavoriteMovies, shallowEqual);
