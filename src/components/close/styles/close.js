import styled from 'styled-components/macro';

export const Close = styled.div`
  position: absolute;
  right: 10px;
  top: 7px;
  width: 1.5em;
  height: 1.5em;
  opacity: 0.3;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }

  &:before,
  &:after {
    position: absolute;
    left: 10px;
    content: '';
    height: 1.5em;
    width: 2px;
    background-color: #fff;
  }

  &:before {
    transform: rotate(45deg);
  }

  &:after {
    transform: rotate(-45deg);
  }
`;
