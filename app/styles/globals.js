import { injectGlobal } from 'styled-components';
import { grey300 } from './colors';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html {
    box-sizing: border-box;
    font-family: Arial, sans-serif;
    font-size: 14px;
  }

  body {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    color: ${grey300};
  }
`;
