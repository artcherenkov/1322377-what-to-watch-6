import React from 'react';
import {nanoid} from "nanoid";

import ReviewsCol from "./components/reviews-col/reviews-col";
import Review from "./components/review/review";

import propTypes from './movie-tab-reviews.props';

function splitReviews(reviews) {
  if (!reviews) {
    return null;
  }

  if (!reviews.length) {
    return [];
  }

  const middle = Math.ceil(reviews.length / 2);

  return [reviews.slice(0, middle), reviews.slice(middle)];
}

const MovieTabReviews = (props) => {
  const {reviews, isLoading} = props;

  const dividedReviews = splitReviews(reviews);

  if (isLoading) {
    return <p>Загрузка...</p>;
  }

  if (dividedReviews && !dividedReviews.length) {
    return <h2>Комментариев пока нет</h2>;
  }

  if (!dividedReviews) {
    return <h2>Произошла ошибка загрузки</h2>;
  }

  return (
    <>
      <div className="movie-card__reviews movie-card__row">
        {dividedReviews.map((reviewsPartArr) => <ReviewsCol key={nanoid()}>
          {reviewsPartArr.map((review) => <Review key={nanoid()} review={review}/>)}
        </ReviewsCol>)}
      </div>
    </>
  );
};

MovieTabReviews.propTypes = propTypes;

export default MovieTabReviews;
