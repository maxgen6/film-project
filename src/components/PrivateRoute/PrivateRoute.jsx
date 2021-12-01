import React from 'react';
import { Redirect, Route, useLocation } from 'react-router-dom';
import { isToken } from 'utils/localStorage';

const PrivateRoute = (props) => {
  const { component, ...rest } = props;
  const location = useLocation();

  return (
    <Route {...rest}>
      {isToken() ? component : <Redirect to={{ pathname: '/login', state: { from: location } }} />}
    </Route>
  );
};

export default PrivateRoute;
