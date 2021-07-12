import styled from 'styled-components/macro';
import { MAIN_COLOR } from '../../../constants/colors';

export const Container = styled.button`
  min-height: 2.4em;
  min-width: 80px;
  background-color: ${({ backgroundColor }) => backgroundColor || MAIN_COLOR};
  color: ${({ color }) => color || 'white'};
  font-weight: bold;
  border-radius: 4px;
  border: none;
  box-shadow: none;
  cursor: pointer;
  font-size: 1em;
  transition: all 0.2s;
  margin: 15px 20px;

  &:disabled {
    opacity: 0.7;
  }

  &:not(:disabled):hover {
    box-shadow: 0 4px 12px -5px #000;
    transform: scale(1.05);
  }

  @media (max-width: 1200px) {
    margin: 8px 15px;
  }
`;
