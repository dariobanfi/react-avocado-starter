/* eslint-disable global-require */

import React from 'react';
import { render } from 'react-dom';
import BrowserRouter from 'react-router-dom/BrowserRouter';

import ReactHotLoader from './components/ReactHotLoader';
import Application from '../app/components/Application';

const container = document.querySelector('#app');

// If the user's browser doesn't support the HTML5 history API then we
// will force full page refreshes on each page change.
const supportsHistory = 'pushState' in window.history;

function renderApp(TheApp) {
  const app = (
    <ReactHotLoader>
      <BrowserRouter forceRefresh={!supportsHistory}>
        <TheApp />
      </BrowserRouter>
    </ReactHotLoader>
  );

  render(app, container);
}

renderApp(Application);

// This registers our service worker for asset caching and offline support.
// Keep this as the last item, just in case the code execution failed (thanks
// to react-boilerplate for that tip.)
require('./registerServiceWorker');

if (process.env.BUILD_FLAG_IS_DEV === 'true' && module.hot) {
  module.hot.accept('./index.js');
  module.hot.accept('../app/components/Application', () => {
    renderApp(require('../app/components/Application').default);
  });
}
