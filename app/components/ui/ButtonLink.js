import Link from 'react-router-dom/Link';
import styled from 'styled-components';
import { avocadoLight, avocadoDark } from '../../styles/colors';

const ButtonLink = styled(Link)`
  background: ${avocadoDark};
  box-shadow: 0 1px 3px 0 rgba(0,0,0,.2);
  color: #fff;
  text-decoration: none;
  padding: 10px 16px;
  margin: 10px;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: ${avocadoLight};
  }
`;

export default ButtonLink;
