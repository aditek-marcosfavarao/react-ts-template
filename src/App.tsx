import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '@common/styles/global';
import { defaultTheme } from '@common/styles/themes/default';
import { Routes } from '@routes/Routes';

export function App() {
	return (
		<>
			<ThemeProvider theme={defaultTheme}>
				<BrowserRouter>
					<Routes />
				</BrowserRouter>

				<GlobalStyle />
			</ThemeProvider>
		</>
	);
}
