import React from 'react';

import ReviewsCol from "./components/reviews-col/reviews-col";
import Review from "./components/review/review";

import propTypes from './movie-tab-reviews.props';

const splitReviews = (reviews) => {
  if (!reviews) {
    return null;
  }

  if (!reviews.length) {
    return [];
  }

  const middle = Math.ceil(reviews.length / 2);

  return [reviews.slice(0, middle), reviews.slice(middle)];
};

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
        {dividedReviews.map((reviewsPartArr, i) => <ReviewsCol key={`review-column-${i}`}>
          {reviewsPartArr.map((review, j) => <Review key={`review-${j}`} review={review}/>)}
        </ReviewsCol>)}
      </div>
    </>
  );
};

MovieTabReviews.propTypes = propTypes;

export default MovieTabReviews;
