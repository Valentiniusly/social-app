import { createGlobalStyle } from 'styled-components/macro';

export const GlobalStyles = createGlobalStyle`
	html, body {
		font-family: 'Roboto', sans-serif;
		-webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
		font-size: 13px;
		background-color: #edeef0;
		-webkit-tap-highlight-color: rgba(255, 255, 255, 0);

	}

	@media (max-width: 767px) {
		body {
			padding-top: 20px;
			padding-bottom: 48px;
		}
	}
`;
