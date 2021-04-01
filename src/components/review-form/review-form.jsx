import React, {useState} from 'react';
import {convertKebabToCamel, count} from "../../utils/common";
import RatingStar from "./components/rating-star/rating-star";
import {connect} from "react-redux";
import {postReview as postReviewAction} from "../../store/api-actions";
import {adaptReviewToServer} from "../../core/adapter";
import {useParams, useHistory} from "react-router-dom";

import propTypes from './review-form.props';

const MAX_RATING = 10;

const ReviewForm = (props) => {
  const {postReview} = props;
  const params = useParams();
  const history = useHistory();
  const movieId = params.id;

  const initialFormState = {
    rating: `8`,
    reviewText: ``,
  };

  const [formState, setFormState] = useState(initialFormState);
  const [isLoading, setIsLoading] = useState(false);

  const isFormValid = formState.reviewText.length >= 50 && formState.reviewText.length < 400;

  const onChange = (evt) => {
    const {name, value} = evt.target;
    setFormState((prevState) => ({
      ...prevState,
      [convertKebabToCamel(name)]: value,
    }));
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    setIsLoading(true);
    postReview(formState, movieId)
      .then(() => {
        setFormState(initialFormState);
        history.push(`/films/${movieId}`);
      })
      .catch(() => setIsLoading(false));
  };

  return (
    <div className="add-review">
      <form className="add-review__form" onChange={onChange} onSubmit={onSubmit}>
        <div className="rating">
          <div className="rating__stars">
            {count(MAX_RATING).map((i) =>
              <RatingStar
                key={`star-${i + 1}`}
                value={i + 1}
                isChecked={+formState.rating === i + 1}
              />
            )}
          </div>
        </div>
        <div className="add-review__text">
          <textarea
            className="add-review__textarea"
            name="review-text"
            id="review-text"
            placeholder="Review text"
            value={formState.reviewText}
            onChange={() => {}}
          />
          <div className="add-review__submit">
            {isLoading
              ? <span>Загрузка...</span>
              : <button className="add-review__btn" type="submit" disabled={!isFormValid}>Post</button>}
          </div>
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  postReview(review, movieId) {
    const adaptedReview = adaptReviewToServer(review);
    return dispatch(postReviewAction(adaptedReview, movieId));
  }
});

ReviewForm.propTypes = propTypes;

export default connect(null, mapDispatchToProps)(ReviewForm);
