import React from 'react';
import { Redirect, Route, useLocation } from 'react-router-dom';
import { isToken } from 'utils/localStorage';

// Comment: Different PrivateRoute can redirect to different place, would be better to have it as a prop (redirectTo)
const PrivateRoute = (props) => {
  const { component, ...rest } = props;
  const location = useLocation();

  return (
    <Route {...rest}>
      {/* Comment: Why do we need to pass state and location here ? */}
      {isToken() ? component : <Redirect to={{ pathname: '/login', state: { from: location } }} />}
    </Route>
  );
};

export default PrivateRoute;
