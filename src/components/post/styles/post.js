import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';
import { MAIN_COLOR } from '../../../constants/colors';

export const Container = styled.div`
  width: 100%;
  background: #fff;
  display: flex;
  align-items: start;
  justify-content: space-between;
  border-radius: 10px;
  box-shadow: 0 0 20px -15px #000;
  position: relative;
  margin-bottom: 10px;
  font-size: 16px;
  min-height: 10em;
  text-align: justify;

  i {
    opacity: 0.6;
    transition: all 0.2s;

    &:hover {
      opacity: 1;
    }
  }

  @media (max-width: 1200px) {
    /* font-size: 14px; */
    min-height: 8.7em;
  }
`;

export const Picture = styled.div`
  height: 8.75em;
  min-width: 8.75em;
  flex-basis: 8.75em;
  border-radius: 50%;
  margin: 0.5em 1.25em 0.5em 1.25em;
  box-sizing: border-box;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 50%;
  }

  @media (max-width: 1200px) {
    height: 7.5em;
    min-width: 7.5em;
    flex-basis: 7.5em;
  }
  @media (max-width: 500px) {
    height: 2.5em;
    min-width: 2.5em;
    flex-basis: 2.5em;
    margin-top: 1em;
  }
`;

export const Content = styled.div`
  min-height: 10em;
  flex-grow: 1;
  padding: 1.25em 1.7em 2.5em 0;
  box-sizing: border-box;
  position: relative;

  p {
    margin-top: 0.3em;
    margin-bottom: 0.3em;
  }

  i {
    font-size: 1.25em;
    color: ${MAIN_COLOR};
  }

  @media (max-width: 1200px) {
    min-height: 8.7em;
    padding: 1em 1.2em 2.7em 0;
  }
  @media (max-width: 500px) {
    margin-left: -3.7em;
    ${({ noName }) => (noName ? 'padding-top: 25px;' : null)}
  }
`;

export const Name = styled(Link)`
  font-size: 1.3em;
  margin: 0.2em 0;
  color: ${MAIN_COLOR};
  cursor: pointer;
  display: inline-block;
  line-height: 0.73;
  text-decoration: none;
  transition: all 0.1s;

  &:hover {
    font-weight: bold;
  }
  @media (max-width: 500px) {
    margin-left: 44px;
  }
`;

export const Date = styled.p`
  font-size: 0.8em;
  opacity: 0.5;

  @media (max-width: 500px) {
    margin-left: 44px;
  }
`;

export const Text = styled.p`
  padding-top: 0.5em;
  word-wrap: break-all;

  @media (max-width: 500px) {
    ${({ noName }) => (noName ? 'padding-top: 15px;' : null)}
  }
`;

export const Likes = styled.div`
  display: inline-block;
  cursor: pointer;
  vertical-align: middle;
  position: relative;
  padding-left: 1.25em;
  position: absolute;
  bottom: 1.2em;
  font-size: 16px;

  div {
    position: absolute;
    top: -6px;
    left: -5px;
    opacity: 0.6;
    transition: all 0.2s;
    :hover {
      opacity: 1;
    }

    path {
      fill: ${MAIN_COLOR};
    }
  }
  &:hover i {
    opacity: 1;
  }
`;

export const Delete = styled.div`
  position: absolute;
  right: 4em;
  bottom: 1em;
  cursor: pointer;

  i {
    color: #d94343;
  }
`;

export const Expand = styled.div`
  position: absolute;
  right: 1.5em;
  bottom: 1em;
  cursor: pointer;
`;
