import { App } from '@core/app';
import { AppState } from '@core/common/reducer';
import * as React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router';
import { Store } from 'redux';

export const renderApp = (store: Store<AppState>, context?: object, location?: string | object) => {
  const appRoot = (
    <Provider store={store}>
      <StaticRouter context={context} location={location}>
        <App />
      </StaticRouter>
    </Provider>
  );

  return renderToString(appRoot);
};
