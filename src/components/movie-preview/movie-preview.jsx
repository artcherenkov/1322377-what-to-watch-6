import React, {useState} from 'react';
import {useDispatch} from "react-redux";

import Logo from "../logo/logo";
import UserBlock from "../user-block/user-block";
import {usePromoMovieSelector} from "../../hooks/usePromoMovieSelector/usePromoMovieSelector";
import {changeMovieIsFavorite} from "../../store/api-actions";
import {Link} from "react-router-dom";

const MoviePreview = () => {
  const promoMovie = usePromoMovieSelector();
  const dispatch = useDispatch();

  const [isFavoriteLoading, setIsFavoriteLoading] = useState(false);

  const handleMovieIsFavoriteChange = () => {
    setIsFavoriteLoading(true);
    dispatch(changeMovieIsFavorite(promoMovie.id))
      .finally(() => setIsFavoriteLoading(false));
  };

  return (
    <section className="movie-card">
      <div className="movie-card__bg">
        <img
          src={promoMovie.backgroundImage}
          alt={promoMovie.name}
        />
      </div>
      <h1 className="visually-hidden">WTW</h1>
      <header className="page-header movie-card__head">
        <Logo />
        <UserBlock />
      </header>
      <div className="movie-card__wrap">
        <div className="movie-card__info">
          <div className="movie-card__poster">
            <img
              src={promoMovie.posterImage}
              alt={promoMovie.name}
              width={218}
              height={327}
            />
          </div>
          <div className="movie-card__desc">
            <h2 className="movie-card__title">{promoMovie.name}</h2>
            <p className="movie-card__meta">
              <span className="movie-card__genre">{promoMovie.genre}</span>
              <span className="movie-card__year">{promoMovie.releaseDate}</span>
            </p>
            <div className="movie-card__buttons">
              <Link className="btn btn--play movie-card__button" to={`/player/${promoMovie.id}`}>
                <svg viewBox="0 0 19 19" width={19} height={19}>
                  <use xlinkHref="#play-s" />
                </svg>
                <span>Play</span>
              </Link>
              <button type="button" className="btn btn--list movie-card__button" disabled={isFavoriteLoading} onClick={handleMovieIsFavoriteChange}>
                <svg viewBox="0 0 19 20" width={19} height={20}>
                  <use xlinkHref={promoMovie.isFavorite ? `#in-list` : `#add`} />
                </svg>
                <span>My list</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MoviePreview;
