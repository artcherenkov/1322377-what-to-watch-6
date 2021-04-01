import {shallowEqual, useSelector} from "react-redux";
import {getMovieById, getPromoMovieId} from "../../store/selectors";

export const usePromoMovieSelector = () => {
  const promoMovieId = useSelector(getPromoMovieId, shallowEqual);
  return useSelector((state) => getMovieById(state, promoMovieId), shallowEqual);
};
