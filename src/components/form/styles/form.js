import styled from 'styled-components/macro';
import { MAIN_COLOR } from '../../../constants/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: #fff;
  margin: 0 auto;
  max-width: 420px;
  padding: 20px;
  user-select: none;
  border-radius: 10px;
  box-sizing: border-box;

  @media (max-width: 767px) {
    width: 100%;
    h1 {
      font-size: 22px;
      line-height: 1;
    }
  }
  @media (max-width: 440px) {
    max-width: 96.5%;
  }
`;

export const Base = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1``;

export const Input = styled.div`
  position: relative;
  height: 35px;
  width: 100%;
  margin: 15px 0;

  &:hover > input:not(:focus) + span {
    letter-spacing: 1px;
  }
`;

export const Label = styled.span`
  z-index: 1;
  position: absolute;
  display: block;
  font-size: ${({ value }) => (value ? '13px' : '16px')};
  color: #00000077;
  top: ${({ value }) => (value ? '-18px' : '9px')};
  left: ${({ value }) => (value ? '10px' : '10px')};
  transition: all 0.2s;
  pointer-events: none;
`;

export const InputInner = styled.input`
  height: 100%;
  width: 100%;
  background: #edeef0;
  border: 0;
  border-radius: 4px;
  box-sizing: border-box;
  padding: 5px;
  padding-left: 10px;
  font-size: 16px;
  outline: none;

  &:focus {
    border: 1px solid ${MAIN_COLOR};
    border-radius: 4px;
  }

  &:focus + span {
    top: -18px;
    left: 10px;
    font-size: 13px;
  }
`;

export const Textarea = styled(Input)`
  min-height: 200px;

  &:hover > textarea:not(:focus) + span {
    letter-spacing: 1px;
  }
`;

export const TextareaInner = styled.textarea`
  height: 100%;
  width: 100%;
  background: #edeef0;
  border: 0;
  border-radius: 4px;
  box-sizing: border-box;
  padding: 5px;
  padding-left: 10px;
  font-size: 16px;
  outline: none;
  resize: none;

  &:focus {
    border: 1px solid ${MAIN_COLOR};
    border-radius: 4px;
  }

  &:focus + span {
    top: -18px;
    left: 10px;
    font-size: 13px;
  }
`;

export const Error = styled.div`
  background: #d94343;
  width: 100%;
  font-size: 14px;
  color: white;
  border-radius: 4px;
  padding: 10px;
  padding-right: 3em;
  box-sizing: border-box;
  margin-bottom: 20px;
  box-shadow: 0 3px 10px -3px black;
  position: relative;
`;
