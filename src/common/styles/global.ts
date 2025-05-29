import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		scroll-behavior: smooth;
	}

	html {
		@media (max-width: 1080px) {
			font-size: 93.75%;
		};

		@media (max-width: 720px) {
			font-size: 87.5%
		};
	}

	body {
		background-color: white;
		color: black;
		-webkit-font-smoothing: antialiased;
	}

	body, input, textarea, button {
		font-family: system-ui, sans-serif;
		font-weight: 400;
		font-size: 1rem;
	}

	h1, h2, h3, h4, h5, h6, strong, b {
		font-weight: 600;
	}

	button {
		cursor: pointer;
	}

	a {
		color: unset;
		text-decoration: none;
	}

	::-moz-selection, ::selection {
		background-color: unset;
		color: unset;
	}

	:focus {
		outline: transparent;
		box-shadow: 0 0 0 2px transparent;
	}

	:disabled {
		opacity: 0.6;
		cursor: not-allowed;
	}
`;
