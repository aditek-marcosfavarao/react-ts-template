import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '@common/styles/global';
import { defaultTheme } from '@common/styles/themes/default';

export function App() {
	return (
		<>
			<ThemeProvider theme={defaultTheme}>
				<h1>hello world!</h1>

				<GlobalStyle />
			</ThemeProvider>
		</>
	);
}
