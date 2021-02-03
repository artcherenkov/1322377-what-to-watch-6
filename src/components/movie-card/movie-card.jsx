import React from 'react';

import movieProp from '../../types/movie.prop';

const MovieCard = ({film}) => {
  const {name, posterImage} = film;

  return (
    <article className="small-movie-card catalog__movies-card">
      <div className="small-movie-card__image">
        <img src={posterImage} alt={name} width={280} height={175} />
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href="movie-page.html">{name}</a>
      </h3>
    </article>
  );
};

MovieCard.propTypes = {
  film: movieProp.isRequired,
};

export default MovieCard;
