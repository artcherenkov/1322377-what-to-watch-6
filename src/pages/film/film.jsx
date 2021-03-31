import React, {useState, useEffect} from 'react';
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {Link, useParams} from 'react-router-dom';
import moment from "moment";

import Footer from "../../components/footer/footer";
import MoviesList from "../../components/movies-list/movies-list";
import Logo from "../../components/logo/logo";
import UserBlock from "../../components/user-block/user-block";
import MovieTabs from "../../components/movie-tabs/movie-tabs";

import MovieTabOverview from "../../components/movie-tabs/components/movie-tab-overview/movie-tab-overview";
import MovieTabDetails from "../../components/movie-tabs/components/movie-tab-details/movie-tab-details";
import MovieTabReviews from "../../components/movie-tabs/components/movie-tab-reviews/movie-tab-reviews";
import NotFoundPage from "../not-found-page/not-found-page";
import LoadingSpinner from "../../components/loading-spinner/loading-spinner";

import propTypes from './film.props';
import {changeMovieIsFavorite, fetchMovieById} from "../../store/api-actions";
import {adaptMovieToClient} from "../../core/adapter";
import {getAuthInfo} from "../../store/selectors";
import {useMovieByIdSelector} from "../../hooks/useMovieByIdSelector/useMovieByIdSelector";

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

const FilmPage = ({sameMovies}) => {
  const params = useParams();
  const dispatch = useDispatch();
  const movieId = params.id;
  const foundMovie = useMovieByIdSelector(movieId);
  const authInfo = useSelector(getAuthInfo, shallowEqual);

  const [movieTab, setMovieTab] = useState(MovieTab.OVERVIEW);
  const [isLoading, setIsLoading] = useState(false);
  const [isFavoriteLoading, setIsFavoriteLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [movie, setMovie] = useState(null);

  console.log(foundMovie);

  useEffect(() => {
    if (foundMovie) {
      setMovie(foundMovie);
    } else {
      setIsLoading(true);
      dispatch(fetchMovieById(movieId))
        .then((data) => setMovie(adaptMovieToClient(data.payload)))
        .catch(() => setIsError(true))
        .finally(() => setIsLoading(false));
    }
  }, [movieId, foundMovie]);

  useScrollToTop(params.id);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (isError || !movie) {
    return <NotFoundPage />;
  }

  const {posterImage, name, genre, releaseDate} = movie;
  const handleMovieTabChange = (newTab) => setMovieTab(newTab);

  const handleMovieIsFavoriteChange = () => {
    setIsFavoriteLoading(true);
    dispatch(changeMovieIsFavorite(movieId)).then(() => setIsFavoriteLoading(false));
  };

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
            <UserBlock />
          </header>
          <div className="movie-card__wrap">
            <div className="movie-card__desc">
              <h2 className="movie-card__title">{name}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{genre}</span>
                <span className="movie-card__year">{moment(releaseDate).format(`YYYY`)}</span>
              </p>
              <div className="movie-card__buttons">
                <Link className="btn btn--play movie-card__button" to={`/player/${movieId}`}>
                  <svg viewBox="0 0 19 19" width={19} height={19}>
                    <use xlinkHref="#play-s" />
                  </svg>
                  <span>Play</span>
                </Link>
                <button type="button" className="btn btn--list movie-card__button" disabled={isFavoriteLoading} onClick={handleMovieIsFavoriteChange}>
                  <svg viewBox="0 0 19 20" width={19} height={20}>
                    <use xlinkHref={movie.isFavorite ? `#in-list` : `#add`} />
                  </svg>
                  <span>My list</span>
                </button>
                {authInfo && <Link to={`/films/${movieId}/review`} className="btn movie-card__button">Add review</Link>}
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

FilmPage.propTypes = propTypes;

export default FilmPage;
