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

function onUnauthorized() {
  console.log(`Вы не авторизованы`);
}

const api = createAPI(onUnauthorized);

const store = createStore(
    appStore,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api)),
    )
);

store.dispatch(login());

Promise.all([
  store.dispatch(fetchMoviesList()),
])
  .then(() => {
    ReactDOM.render(
        <Provider store={store}>
          <App />
        </Provider>,
        document.getElementById(`root`),
    );
  });
