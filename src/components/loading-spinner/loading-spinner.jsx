import React from 'react';
import ClipLoader from "react-spinners/ClipLoader";

import './styles.css';

function LoadingSpinner() {
  return <div className="loading-container">
    <ClipLoader loading color="blue" />
  </div>;
}

export default LoadingSpinner;
