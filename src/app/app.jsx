import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';

import MainPage from "../pages/main/main";
import SignInPage from "../pages/sign-in/sign-in";
import MyListPage from "../pages/my-list/my-list";
import FilmPage from "../pages/film/film";
import AddReviewPage from "../pages/add-review/add-review";
import PlayerPage from "../pages/player/player";
import NotFoundPage from "../pages/not-found-page/not-found-page";

import PrivateRoute from "../components/private-route/private-route";
import {useMoviesSelector} from "../hooks/useMoviesSelector/useMoviesSelector";

const SAME_MOVIES_COUNT = 4;

const App = () => {
  const movies = useMoviesSelector();

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainPage movies={movies} />
        </Route>
        <Route exact path="/login">
          <SignInPage />
        </Route>
        <PrivateRoute
          exact
          path="/mylist"
          render={() => <MyListPage movies={movies} />}
        />
        <Route exact path="/films/:id">
          <FilmPage movies={movies} sameMovies={movies.slice(0, SAME_MOVIES_COUNT)} />
        </Route>
        <Route exact path="/films/:id/review">
          <AddReviewPage movie={movies[0]} />
        </Route>
        <Route exact path="/player/:id">
          <PlayerPage />
        </Route>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
