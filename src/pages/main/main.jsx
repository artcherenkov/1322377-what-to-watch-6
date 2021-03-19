import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';

import MoviePreview from "../../components/movie-preview/movie-preview";
import GenresList from "../../components/genres-list/genres-list";
import MoviesList from "../../components/movies-list/movies-list";
import Footer from "../../components/footer/footer";

import {getFilteredMovies, getActiveGenre} from "../../store/selectors";

import propTypes from './main.props';
import ShowMoreButton from "./components/show-more-button/show-more-button";
import {MOVIES_CARD_COUNT_STEP} from "../../const";

const MainPage = (props) => {
  const {filteredMovies, activeGenre} = props;

  const [moviesToShowCount, setMoviesToShowCount] = useState(MOVIES_CARD_COUNT_STEP);

  const moviesToShow = filteredMovies.slice(0, moviesToShowCount);
  const shouldShowButton = filteredMovies.length > moviesToShowCount;

  function handleShowMoreClick() {
    setMoviesToShowCount((prevState) => prevState + MOVIES_CARD_COUNT_STEP);
  }

  return (
    <>
      <MoviePreview />
      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <GenresList activeGenre={activeGenre} />
          <MoviesList movies={moviesToShow} />
          {shouldShowButton && <ShowMoreButton onClick={handleShowMoreClick} />}
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
});

export default connect(mapStateToProps, null)(MainPage);
