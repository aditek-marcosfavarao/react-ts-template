import reactLogo from '@common/assets/svgs/react-logo.svg';
import { HeaderWrapper, Link, Logo, TemplateName } from './Header.styles';

export function Header() {
	return (
		<>
			<HeaderWrapper>
				<TemplateName>react ts template</TemplateName>
				<Link
					href='https://react.dev/'
					target='_blank'
					rel='noopener noreferrer'
				>
					<Logo
						src={reactLogo}
						alt='react-logo'
						title='react logo'
					/>
				</Link>
			</HeaderWrapper>
		</>
	);
}
