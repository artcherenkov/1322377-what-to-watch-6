import React from 'react';

import Logo from "../../components/logo/logo";
import UserBlock from "../../components/user-block/user-block";
import ReviewForm from "../../components/review-form/review-form";

import propTypes from './add-review.props';
import {useMovieByIdSelector} from "../../hooks/useMovieByIdSelector/useMovieByIdSelector";
import {Link, useParams} from "react-router-dom";

const AddReviewPage = () => {
  const params = useParams();
  const movieId = params.id;
  const movie = useMovieByIdSelector(movieId);
  const {posterImage, name} = movie;

  return (
    <section className="movie-card movie-card--full">
      <div className="movie-card__header">
        <div className="movie-card__bg">
          <img src={posterImage} alt="The Grand Budapest Hotel" />
        </div>
        <h1 className="visually-hidden">WTW</h1>
        <header className="page-header">
          <Logo/>
          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={`/films/${movieId}`} className="breadcrumbs__link">{name}</Link>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>
          <UserBlock />
        </header>
        <div className="movie-card__poster movie-card__poster--small">
          <img src={posterImage} alt="The Grand Budapest Hotel poster" width={218} height={327} />
        </div>
      </div>
      <ReviewForm />
    </section>
  );
};

AddReviewPage.propTypes = propTypes;

export default AddReviewPage;
