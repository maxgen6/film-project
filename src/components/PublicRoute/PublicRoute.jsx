import React from 'react';
import { Route } from 'react-router-dom';

const PublicRoute = (props) => {
  const { children, ...rest } = props;

  return <Route {...rest}>{children}</Route>;
};

export default PublicRoute;
