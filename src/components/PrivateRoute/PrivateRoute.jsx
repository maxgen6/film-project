import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { isToken } from 'utils/localStorage';

// Comment: Different PrivateRoute can redirect to different place, would be better to have it as a prop (redirectTo)
const PrivateRoute = (props) => {
  const { children, ...rest } = props;

  return <Route {...rest}>{isToken() ? children : <Redirect to="/login" />}</Route>;
};

export default PrivateRoute;
