/* eslint-disable global-require */
/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';

const ReactHotLoader =
  process.env.NODE_ENV === 'development'
    ? require('react-hot-loader').AppContainer
    : ({ children }) => React.Children.only(children);

export default ReactHotLoader;
