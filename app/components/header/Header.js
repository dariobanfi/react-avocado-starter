import React from 'react';
import styled from 'styled-components';

import Logo from './Logo';
import Menu from './Menu';

/* const */

const HeaderWrapper = styled.div`
  font-size: 1.5em;
  margin-bottom: 1rem;
  text-align: center;
  color: #5499c7;
`;

const Header = () => (
  <HeaderWrapper>
    <Logo />
    <h1>React Avocado Starter</h1>
    <p>
      <strong>
        A simple but very powerful starter
         kit. <span role="img" aria-labelledby="avocado">🥑</span>
      </strong>
    </p>
    <Menu />
  </HeaderWrapper>
);

export default Header;
