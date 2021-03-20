import React from 'react';

import './styles.css';
import propTypes from './not-found-page.props';

const NotFoundPage = (props) => (
  <section className="error-page">
    <h1 className="error-page__header">{props.title || `Страница не найдена`}</h1>
    <a className="error-page__link" href="/">Вернуться на главную</a>
  </section>
);

NotFoundPage.propTypes = propTypes;

export default NotFoundPage;
