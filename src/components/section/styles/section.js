import styled from 'styled-components/macro';

export const Container = styled.div`
  background: ${({ bg }) => (bg ? 'white' : null)};
  margin: 0 auto;
  margin-bottom: 10px;
  width: ${({ width }) => (width ? `${width}px` : '100%')};
  border-radius: 10px;
  grid-area: ${({ gridArea }) => gridArea};
  ${({ shadow }) => (shadow ? 'box-shadow: 0 0 20px -15px #000;' : null)}
`;
