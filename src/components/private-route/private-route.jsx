import React from "react";
import {Route, Redirect} from 'react-router-dom';
import {AuthorizationStatus} from '../../const';

import propTypes from './private-route.props';

const PrivateRoute = (props) => {
  const {render, path, exact, authorizationStatus} = props;

  return (
    <Route
      path={path}
      exact={exact}
      render={(routeProps) => {
        return (
          authorizationStatus === AuthorizationStatus.AUTH
            ? render(routeProps)
            : <Redirect to={`/login`} />
        );
      }}
    />
  );
};

PrivateRoute.propTypes = propTypes;

export default PrivateRoute;
