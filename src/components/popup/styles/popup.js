import styled from 'styled-components/macro';
import { MAIN_COLOR } from '../../../constants/colors';

export const Layout = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 99;
  overflow: scroll;
`;

export const Container = styled.div`
  position: relative;
  background: white;
  margin: 0 auto 66px auto;
  width: 500px;
  z-index: 100;
  border-radius: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
  box-sizing: border-box;

  @media (max-width: 520px) {
    width: calc(100% - 20px);
  }
  @media screen and (orientation: landscape) {
    margin-top: 66px;
  }
  @media screen and (max-width: 767px) {
    margin-top: 20px;
  }

  .close {
    position: absolute;
    top: 15px;
    right: 15px;
    cursor: pointer;
    color: ${MAIN_COLOR};
    font-size: 25px;
  }
`;
