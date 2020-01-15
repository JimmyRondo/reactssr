import * as React from 'react';
import { Route, Switch } from 'react-router';
import { AppRoute } from './routes';

export const renderRouting = (routes?: AppRoute[]): React.ReactElement | null => {
  if (!routes) return null;

  return (
    <Switch>
      {routes.map((props, index) => (
        <Route {...props} key={index} />
      ))}
    </Switch>
  );
};
