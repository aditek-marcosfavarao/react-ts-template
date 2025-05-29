import styled from 'styled-components';

export const HeaderWrapper = styled.header`
	background-color: #000;
	width: 100%;
	padding: 0.5rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 0.5rem;
`;

export const TemplateName = styled.h1`
	color: #fff;
	font-size: 0.875rem;
	font-weight: 500;
	text-align: left;
	text-transform: capitalize;
	line-height: 1.6;
`;

export const Link = styled.a`
	padding: 0.25rem;
	border: 0;
	border-radius: 4px;
	cursor: pointer;

	&:hover {
		background-color: #111;
	}

	&:hover > img {
		rotate: 60deg;
	}
`;

export const Logo = styled.img`
	width: 1.5rem;
	height: 1.5rem;
	transition: all 500ms linear;
`;
