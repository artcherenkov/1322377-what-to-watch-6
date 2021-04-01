import {shallowEqual, useSelector} from "react-redux";
import {getMovieById} from "../../store/selectors";

export const useMovieByIdSelector = (id) => useSelector((state) => getMovieById(state, id), shallowEqual);
