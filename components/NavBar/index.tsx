import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { Hamburger } from '../Hamburger';

type NavProps = {
	homeUrl: string;
	navList: {
		url: string;
		text: string;
	}[];
};

export function NavBar(props: NavProps) {
	const [nav, toggleNav] = React.useState(false);

	const { homeUrl, navList } = props;

	return (
		<StyledHeader className="nav__container">
			<div className="logo">
				<Link href={homeUrl}>EKRRESA</Link>
			</div>

			{/* Mobile menu */}
			<div className="hamburger__btn" onClick={() => toggleNav(!nav)}>
				<span></span>
				<span></span>
				<span></span>
			</div>

			<Hamburger navStatus={nav} handleNav={() => toggleNav(!nav)} />
			{/* Mobile menu */}

			<nav className="nav">
				{navList.map(item => (
					<div key={item.url} className="nav__item">
						<Link href={item.url}>{item.text}</Link>
					</div>
				))}
			</nav>
		</StyledHeader>
	);
}

const StyledHeader = styled.header`
	display: flex;
	justify-content: space-between;
	padding-top: 1.5em;
	padding-bottom: 1.5em;

	.logo {
		font-size: 1.9rem;
		color: #3f5898;
		font-weight: 800;
		letter-spacing: 0.5px;
		-webkit-text-stroke: #292929;
		-webkit-text-stroke-width: 1.3px;

		a {
			font-family: var(--font-fam-heading);
			color: inherit;

			&:hover {
				box-shadow: none;
			}
		}
	}

	.nav {
		display: none;
		align-items: center;
		color: #094067;
		font-weight: 500;
		font-size: 1rem;
		text-transform: uppercase;

		.nav__item {
			margin-right: 2em;

			a {
				color: inherit;
				font-family: var(--font-fam-heading);

				&:hover {
					box-shadow: 0px 2px 0px #094067;
				}
			}

			&:last-child {
				margin-right: 0;
			}
		}

		@media (min-width: 546px) {
			display: flex;
		}
	}

	/* Hamburger Styles */
	.hamburger__btn {
		display: flex;
		flex-direction: column;
		align-items: flex-end;
		justify-content: space-around;
		width: 2.9em;
		height: 2em;
		cursor: pointer;
		padding: 0px 8px;

		span {
			display: block;
			border-radius: 10px;
			background: #232946;
			padding: 1.6px;

			&:nth-of-type(1) {
				width: 80%;
			}

			&:nth-of-type(2) {
				width: 100%;
			}

			&:nth-of-type(3) {
				width: 65%;
			}
		}

		@media (min-width: 546px) {
			display: none;
		}
	}
`;
