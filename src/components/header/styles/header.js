import styled from 'styled-components/macro';
import { Link as ReactRouterLink } from 'react-router-dom';
import { MAIN_COLOR } from '../../../constants/colors';

export const Container = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 48px;
  background-color: #fff;
  margin-bottom: 18px;
  font-size: 18px;
  box-shadow: 0 0 20px -15px #000;

  @media (max-width: 767px) {
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 1000;
    margin: 0;
  }
`;

export const Link = styled(ReactRouterLink)`
  text-decoration: none;
  cursor: pointer;
  color: ${MAIN_COLOR};
  opacity: ${({ active }) => (active === 'true' ? 0.4 : 1)};
  margin: 0 10px;

  &:hover {
    opacity: 0.8;
  }

  i {
    font-size: 26px;
  }
`;
