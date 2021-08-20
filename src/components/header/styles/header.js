import styled from 'styled-components/macro';
import { Link as ReactRouterLink } from 'react-router-dom';
import { MAIN_COLOR } from '../../../constants/colors';

export const Container = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
  height: 48px;
  background-color: #fff;
  font-size: 18px;
  box-shadow: 0 0 20px -15px #000;

  @media (max-width: 767px) {
    bottom: 0;
    padding-bottom: env(safe-area-inset-bottom);
    top: calc(100% - 60px - env(safe-area-inset-bottom));
    height: 60px;
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
