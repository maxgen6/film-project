import React from 'react';
import { Switch } from 'react-router-dom';
import PrivateRoute from '../PrivateRoute';
import { ROUTES } from 'constants/routes';
import PublicRoute from '../PublicRoute';

function App() {
  return (
    <>
      <Switch>
        {ROUTES?.map((item) => {
          const { root, component, private: isPrivate, exact } = item;
          let RouteWrapper;

          const Component = component;

          if (isPrivate) {
            RouteWrapper = PrivateRoute;
          } else {
            RouteWrapper = PublicRoute;
          }

          return (
            <RouteWrapper key={root} path={root} exact={exact} page={item}>
              <>
                <Component />
              </>
            </RouteWrapper>
          );
        })}
      </Switch>
    </>
  );
}

export default App;
