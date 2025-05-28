import { Route, Routes as Routing } from 'react-router-dom';

function Blank() {
	return <></>;
}

export function Routes() {
	return (
		<>
			<Routing>
				<Route
					path='/'
					element={<Blank />}
				></Route>
			</Routing>
		</>
	);
}
