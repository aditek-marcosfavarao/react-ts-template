import { Outlet } from 'react-router-dom';

function Blank() {
	return <></>;
}

export function DefaultLayout() {
	return (
		<>
			<Blank />
			<Outlet />
		</>
	);
}
