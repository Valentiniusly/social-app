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
	body {
		padding: 0 5px;
		padding-top: 70px;
		padding-bottom: 10px;
		
		@media (max-width: 767px) {
			padding-top: 15px;
			padding-bottom: calc(65px + env(safe-area-inset-bottom));
		}
	}
	
`;
