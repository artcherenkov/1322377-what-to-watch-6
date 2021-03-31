import React from "react";
import ReactDOM from "react-dom";

import {createStore, applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import {createAPI} from "./services/api";

import {appStore} from "./store/reducer";

import App from "./app/app";
import {fetchMoviesList, checkAuthStatus} from "./store/api-actions";

function onUnauthorized() {}

const api = createAPI(onUnauthorized);

const store = createStore(
    appStore,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api)),
    )
);


Promise.all([
  store.dispatch(fetchMoviesList()),
  store.dispatch(checkAuthStatus())
])
  .then(() => {
    ReactDOM.render(
        <Provider store={store}>
          <App />
        </Provider>,
        document.getElementById(`root`),
    );
  });
