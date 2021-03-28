import React, {useEffect, useState} from 'react';

import ReviewsCol from "./components/reviews-col/reviews-col";
import Review from "./components/review/review";

import propTypes from './movie-tab-reviews.props';
import {fetchReviewsByMovieId} from "../../../../store/api-actions";
import {useDispatch} from "react-redux";
import {useParams} from "react-router-dom";

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

const MovieTabReviews = () => {
  const dispatch = useDispatch();
  const params = useParams();

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [reviews, setReviews] = useState(null);

  const movieId = params.id;

  useEffect(() => {
    if (!reviews) {
      setIsLoading(true);
      dispatch(fetchReviewsByMovieId(movieId))
        .then(({data}) => setReviews(data))
        .catch(() => setIsError(true))
        .finally(() => setIsLoading(false));
    }
    return () => {
      setReviews(null);
    };
  }, [movieId]);

  const dividedReviews = splitReviews(reviews);

  if (isLoading) {
    return <p>Загрузка...</p>;
  }

  if (dividedReviews && !dividedReviews.length) {
    return <h2>Комментариев пока нет</h2>;
  }

  if (isError || !dividedReviews) {
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
