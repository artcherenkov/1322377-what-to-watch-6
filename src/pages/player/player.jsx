import React from 'react';
import {Link, useParams} from "react-router-dom";

import {useMoviesSelector} from "../../hooks/useMoviesSelector/useMoviesSelector";
import NotFoundPage from "../not-found-page/not-found-page";
import './styles.css';

const PlayerPage = () => {
  const movies = useMoviesSelector();
  const params = useParams();

  const movieId = params.id;
  const movie = movies.find((m) => m.id === Number(movieId));

  if (!movie) {
    return <NotFoundPage />;
  }

  const {videoLink} = movie;

  return (
    <div className="player">
      <video className="video" src={videoLink} controls autoPlay />
      <Link className="player__exit link" to={`/`} >Exit</Link>
    </div>
  );
};

export default PlayerPage;
