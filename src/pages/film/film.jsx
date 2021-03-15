import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import PropTypes from 'prop-types';
import moment from "moment";

import Footer from "../../components/footer/footer";
import MoviesList from "../../components/movies-list/movies-list";
import Logo from "../../components/logo/logo";
import MovieTabs from "../../components/movie-tabs/movie-tabs";
import movieProp from '../../types/movie.prop';

import MovieTabOverview from "../../components/movie-tabs/components/movie-tab-overview/movie-tab-overview";
import MovieTabDetails from "../../components/movie-tabs/components/movie-tab-details/movie-tab-details";
import MovieTabReviews from "../../components/movie-tabs/components/movie-tab-reviews/movie-tab-reviews";
import NotFoundPage from "../not-found-page/not-found-page";

export const MovieTab = {
  OVERVIEW: `Overview`,
  DETAILS: `Details`,
  REVIEWS: `Reviews`,
};

function useScrollToTop(...dependencies) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, dependencies);
}

const FilmPage = ({movies, sameMovies}) => {
  const params = useParams();
  const movie = movies.find((movieItem) => movieItem.id === params.id);

  if (!movie) {
    return <NotFoundPage />;
  }

  const {posterImage, name, genre, releaseDate} = movie;

  useScrollToTop(params.id);

  const [movieTab, setMovieTab] = useState(MovieTab.OVERVIEW);
  const handleMovieTabChange = (newTab) => setMovieTab(newTab);

  return (
    <>
      <section className="movie-card movie-card--full">
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img src={posterImage} alt={name} />
          </div>
          <h1 className="visually-hidden">WTW</h1>
          <header className="page-header movie-card__head">
            <Logo />
            <div className="user-block">
              <div className="user-block__avatar">
                <img src="img/avatar.jpg" alt="User avatar" width={63} height={63} />
              </div>
            </div>
          </header>
          <div className="movie-card__wrap">
            <div className="movie-card__desc">
              <h2 className="movie-card__title">{name}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{genre}</span>
                <span className="movie-card__year">{moment(releaseDate).format(`YYYY`)}</span>
              </p>
              <div className="movie-card__buttons">
                <button className="btn btn--play movie-card__button" type="button">
                  <svg viewBox="0 0 19 19" width={19} height={19}>
                    <use xlinkHref="#play-s" />
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list movie-card__button" type="button">
                  <svg viewBox="0 0 19 20" width={19} height={20}>
                    <use xlinkHref="#add" />
                  </svg>
                  <span>My list</span>
                </button>
                <a href="add-review.html" className="btn movie-card__button">Add review</a>
              </div>
            </div>
          </div>
        </div>
        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <div className="movie-card__poster movie-card__poster--big">
              <img src={posterImage} alt={name} width={218} height={327} />
            </div>
            <MovieTabs activeTab={movieTab} onChange={handleMovieTabChange}>
              {movieTab === MovieTab.OVERVIEW && <MovieTabOverview movie={movie} />}
              {movieTab === MovieTab.DETAILS && <MovieTabDetails movie={movie} />}
              {movieTab === MovieTab.REVIEWS && <MovieTabReviews />}
            </MovieTabs>
          </div>
        </div>
      </section>
      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <MoviesList movies={sameMovies} />
        </section>
        <Footer />
      </div>
    </>
  );
};

FilmPage.propTypes = {
  movie: movieProp,
  sameMovies: PropTypes.arrayOf(movieProp),
};

export default FilmPage;
