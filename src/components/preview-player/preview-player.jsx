import React from 'react';

import propTypes from './video-player.props';

import './styles.css';

const PreviewPlayer = ({shouldVideoPlay, posterImage, videoLink}) => {
  return shouldVideoPlay
    ? <video className="video-player" src={videoLink} muted autoPlay/>
    : <img src={posterImage} alt={name} width={280} height={175} />;
};

PreviewPlayer.propTypes = propTypes;

export default PreviewPlayer;
