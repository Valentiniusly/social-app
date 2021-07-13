import styled from 'styled-components/macro';
import { MAIN_COLOR } from '../../../constants/colors';

export const Container = styled.div`
  width: 100%;
  font-size: 16px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  background: #fff;
  box-shadow: 0 0 20px -15px #000;
  border-radius: 10px;
  align-items: center;
  position: sticky;
  top: 20px;
  box-sizing: border-box;

  p {
    margin: 0.5em 0;
    text-align: center;
  }

  i {
    font-size: 1.125em;
    color: ${MAIN_COLOR};
  }

  > div > i {
    font-size: 1.375em;
  }

  @media (max-width: 1200px) {
    font-size: 14px;
  }
`;

export const Picture = styled.img`
  width: 140px;
  height: 140px;
  object-fit: cover;
  max-width: 160px;
  margin-bottom: 0.5em;
  border-radius: 50%;
`;

export const Name = styled.p`
  font-size: 1.5em;
  color: ${MAIN_COLOR};
  font-weight: bold;
`;

export const Status = styled.p`
  font-size: 0.9em;
`;

export const Location = styled.p`
  font-size: 0.9em;
`;

export const Link = styled.a`
  color: ${MAIN_COLOR};
  margin: 8px 0;
`;

export const Date = styled.p`
  font-size: 0.9em;
`;

export const Edit = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
  opacity: 0.6;
  transition: all 0.2s;

  &:hover {
    opacity: 1;
  }
`;

export const AddPost = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  cursor: pointer;
  opacity: 0.6;
  transition: all 0.2s;

  &:hover {
    opacity: 1;
  }
`;
