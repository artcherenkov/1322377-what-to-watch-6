import PropTypes from "prop-types";
import movieProp from "../../types/movie.prop";

export default {
  filteredMovies: PropTypes.arrayOf(movieProp),
  activeGenre: PropTypes.string.isRequired,
};
