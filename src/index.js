import React from "react";
import ReactDOM from "react-dom";

import {createStore, applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import {createAPI} from "./services/api";

import {appStore} from "./store/reducer";

import App from "./app/app";
import {generateFilms} from "./mock/movie";
import {loadMovies} from "./store/actions";

const FILMS_COUNT = 20;
const movies = generateFilms(FILMS_COUNT);
const api = createAPI();

const store = createStore(
    appStore,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api)),
    )
);

Promise.resolve(store.dispatch(loadMovies(movies)))
  .then(() => {
    ReactDOM.render(
        <Provider store={store}>
          <App movies={movies} />
        </Provider>,
        document.getElementById(`root`),
    );
  });
