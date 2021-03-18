import React from 'react';
import {connect} from 'react-redux';

import MoviePreview from "../../components/movie-preview/movie-preview";
import GenresList from "../../components/genres-list/genres-list";
import MoviesList from "../../components/movies-list/movies-list";
import Footer from "../../components/footer/footer";

import {getFilteredMovies, getActiveGenre, getMovieCardsToShowCount} from "../../store/selectors";

import propTypes from './main.props';
import {incrementMoviesCount} from "../../store/actions";

const MainPage = (props) => {
  const {filteredMovies, activeGenre, movieCardsToShowCount, handleShowMoreClick} = props;

  const moviesToShow = filteredMovies.slice(0, movieCardsToShowCount);
  const shouldShowButton = filteredMovies.length >= movieCardsToShowCount;

  return (
    <>
      <MoviePreview />
      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <GenresList activeGenre={activeGenre} />
          <MoviesList movies={moviesToShow} />
          {shouldShowButton && (
            <div className="catalog__more">
              <button className="catalog__button" type="button" onClick={handleShowMoreClick}>Show more</button>
            </div>
          )}
        </section>
        <Footer />
      </div>
    </>
  );
};

MainPage.propTypes = propTypes;

const mapStateToProps = (state) => ({
  filteredMovies: getFilteredMovies(state),
  activeGenre: getActiveGenre(state),
  movieCardsToShowCount: getMovieCardsToShowCount(state)
});

const mapDispatchToProps = (dispatch) => ({
  handleShowMoreClick() {
    dispatch(incrementMoviesCount());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
