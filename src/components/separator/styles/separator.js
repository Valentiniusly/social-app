import styled from 'styled-components/macro';

export const Container = styled.div`
  content: '';
  width: 100%;
  max-width: 1050px;
  margin: 0 auto 0 auto;
  display: grid;
  ${({ reverse }) =>
    reverse
      ? `grid-template-areas: 'aside content';
		grid-template-columns: 290px auto;`
      : `grid-template-areas: 'content aside';
		grid-template-columns: auto 290px;`}
  gap: 10px;

  @media (max-width: 1200px) {
    grid-template-columns: ${({ reverse }) =>
      reverse ? '260px auto' : 'auto 260px'};
  }
  @media only screen and (orientation: landscape) {
    width: 100%;
  }

  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
    margin-top: 10px;
  }
`;
