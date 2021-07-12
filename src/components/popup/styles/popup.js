import styled from 'styled-components/macro';

export const Layout = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 99;
  overflow: scroll;
`;

export const Container = styled.div`
  margin: 10vh auto;
  background: white;
  width: 500px;
  z-index: 100;

  @media (max-width: 520px) {
    width: 96.5%;
  }
`;
