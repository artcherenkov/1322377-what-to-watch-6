import React, {useEffect} from 'react';

import MoviesList from "../../components/movies-list/movies-list";
import Logo from "../../components/logo/logo";
import UserBlock from "../../components/user-block/user-block";
import Footer from "../../components/footer/footer";

import propTypes from './my-list.props';
import {useMoviesSelector} from "../../hooks/useMoviesSelector/useMoviesSelector";
import {fetchFavoriteMoviesList} from "../../store/api-actions";
import {useDispatch} from "react-redux";

const MyListPage = () => {
  const dispatch = useDispatch();
  const movies = useMoviesSelector().filter((movie) => movie.isFavorite);

  useEffect(() => {
    dispatch(fetchFavoriteMoviesList());
  }, []);

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />
        <h1 className="page-title user-page__title">My list</h1>
        <UserBlock />
      </header>
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <MoviesList movies={movies} />
      </section>
      <Footer />
    </div>
  );
};

MyListPage.propTypes = propTypes;

export default MyListPage;
