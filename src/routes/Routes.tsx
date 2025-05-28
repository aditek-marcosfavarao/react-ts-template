import { Route, Routes as Routing } from 'react-router-dom';
import { DefaultLayout } from '@layouts/DefaultLayout.tsx';

function Blank() {
	return <></>;
}

export function Routes() {
	return (
		<>
			<Routing>
				<Route
					path='/'
					element={<DefaultLayout />}
				>
					<Route
						path='/'
						element={<Blank />}
					/>
				</Route>
			</Routing>
		</>
	);
}
