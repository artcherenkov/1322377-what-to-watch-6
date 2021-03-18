import React from 'react';

import propTypes from './show-more-button.props';

function ShowMoreButton(props) {
  const {onClick} = props;
  return (
    <div className="catalog__more">
      <button
        className="catalog__button"
        type="button"
        onClick={onClick}
      >
        Show more
      </button>
    </div>
  );
}

ShowMoreButton.propTypes = propTypes;

export default ShowMoreButton;
