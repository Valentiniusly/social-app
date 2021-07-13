import styled from 'styled-components/macro';

export const Container = styled.div`
  background: ${({ bg }) => (bg ? 'white' : null)};
  margin-bottom: 10px;
  width: ${({ width }) => (width ? `${width}px` : '100%')};
  border-radius: 10px;
  display: flex;
  flex-direction: column;

  grid-area: ${({ gridArea }) => gridArea};
  ${({ shadow }) => (shadow ? 'box-shadow: 0 0 20px -15px #000;' : null)}
`;
