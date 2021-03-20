import React from "react";
import {useSelector, shallowEqual} from "react-redux";
import {Route, Redirect} from 'react-router-dom';

import {AuthorizationStatus} from '../../const';
import {getAuthStatus} from "../../store/selectors";
import propTypes from './private-route.props';

const PrivateRoute = (props) => {
  const {render, path, exact} = props;
  const authorizationStatus = useSelector(getAuthStatus, shallowEqual);

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
