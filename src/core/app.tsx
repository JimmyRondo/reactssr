import * as React from 'react';
import { hot } from 'react-hot-loader/root';
import './assets/styles/global.scss';
import { appRoutes } from './common/routes';
import { renderRouting } from './common/routing';
import { PageTemplate } from './ui/templates';

export const App = hot(() => {
  return <PageTemplate title="React Typescript App">{renderRouting(appRoutes)}</PageTemplate>;
});
