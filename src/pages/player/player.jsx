import React from 'react';
import {Link, useParams} from "react-router-dom";

import NotFoundPage from "../not-found-page/not-found-page";
import {useMovieByIdSelector} from "../../hooks/useMovieByIdSelector/useMovieByIdSelector";
import './styles.css';

const PlayerPage = () => {
  const params = useParams();

  const movieId = params.id;
  const movie = useMovieByIdSelector(movieId);

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
