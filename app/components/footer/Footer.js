import React from 'react';
import styled from 'styled-components';

const Container = styled.footer`
  position: absolute;
  bottom: 0;
  right: 0;
  font-size: 11px;
`;

const Footer = () => (
  <Container>
    react-avocado-starter rocks!
  </Container>
);


export default Footer;
