import React from "react";
import ReactDOM from "react-dom";

import {createStore, applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import {createAPI} from "./services/api";

import {appStore} from "./store/reducer";

import App from "./app/app";
import {fetchMoviesList, login} from "./store/api-actions";
import NotFoundPage from "./pages/not-found-page/not-found-page";

function onUnauthorized() {
  ReactDOM.render(
      <NotFoundPage title="Вы не авторизованы" />,
      document.getElementById(`root`),
  );
}

const api = createAPI(onUnauthorized);

const store = createStore(
    appStore,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api)),
    )
);

Promise.all([
  store.dispatch(fetchMoviesList()),
  store.dispatch(login())
])
  .then(() => {
    ReactDOM.render(
        <Provider store={store}>
          <App />
        </Provider>,
        document.getElementById(`root`),
    );
  });
