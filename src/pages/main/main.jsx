import React, {useEffect, useState} from "react";
import {shallowEqual, useSelector} from "react-redux";

import MoviePreview from "../../components/movie-preview/movie-preview";
import GenresList from "../../components/genres-list/genres-list";
import MoviesList from "../../components/movies-list/movies-list";
import Footer from "../../components/footer/footer";

import {getActiveGenre, getMovies} from "../../store/selectors";

import ShowMoreButton from "./components/show-more-button/show-more-button";
import {MOVIES_CARD_COUNT_STEP} from "../../const";
import {filterMoviesByGenre} from "../../utils/movies";

const MainPage = () => {
  const movies = useSelector(getMovies, shallowEqual);
  const activeGenre = useSelector(getActiveGenre, shallowEqual);

  const [moviesToShowCount, setMoviesToShowCount] = useState(MOVIES_CARD_COUNT_STEP);
  const [filteredMoviesIds, setFilteredMoviesIds] = useState([]);

  useEffect(() => {
    setFilteredMoviesIds(filterMoviesByGenre(movies, activeGenre).map((movie) => movie.id));
  }, [activeGenre]);

  const filteredMovies = movies.filter((movie) => filteredMoviesIds.includes(movie.id));
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

export default MainPage;
