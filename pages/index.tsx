import Head from 'next/head';
import styled from 'styled-components';
import * as React from 'react';
import { CgClose } from 'react-icons/cg';
import { ScrollDown } from '../components/ScrollDown';

export default function Homepage() {
	const [nav, toggleNav] = React.useState(false);

	console.log(nav);

	return (
		<>
			<Head>
				<title>Home - Ochuko Ekrresa | Software Engineer</title>
			</Head>
			<Main navOpen={nav}>
				<header className="header container">
					<div className="logo">EKRRESA</div>

					{/* Mobile menu */}
					<div className="hamburger" onClick={() => toggleNav(!nav)}>
						<span></span>
						<span></span>
						<span></span>
					</div>

					<aside className="mobile__menu">
						<CgClose className="close" onClick={() => toggleNav(!nav)} />

						<ul className="menu__list">
							<li>
								<a href="#">Projects</a>
							</li>
							<li>
								<a href="#">About</a>
							</li>
							<li>
								<a href="#">Contact</a>
							</li>
						</ul>
					</aside>
					{/* Mobile menu */}

					<nav className="nav">
						<div className="nav__item">projects</div>
						<div className="nav__item">about</div>
						<div className="nav__item">contact</div>
					</nav>
				</header>

				<div className="background">ekrresa</div>

				<main className="main container">
					<h1 className="name">Ochuko Ekrresa</h1>
					<h2 className="title">Software Engineer</h2>
					<div className="skills">
						<div className="skill__item">REACT</div>
						<div className="skill__item">NODEJS</div>
						<div className="skill__item">TYPESCRIPT</div>
						<div className="skill__item">GRAPHQL</div>
					</div>
					<div className="bio">
						I am a software engineer, experienced with building systems, and comfortable
						solving problems on the frontend and backend. Check out my{' '}
						<a
							href="https://github.com/chukky-ekrresa"
							target="_blank"
							rel="noreferrer noopener"
						>
							GitHub
						</a>{' '}
						for cool stuff. For more on my work history, visit my{' '}
						<a
							href="https://www.linkedin.com/in/ochuko-ekrresa/"
							target="_blank"
							rel="noreferrer noopener"
						>
							LinkedIn
						</a>{' '}
						page.
					</div>

					<div className="scroll__down">
						<ScrollDown />
					</div>
				</main>
			</Main>
		</>
	);
}

const Main = styled.section<{ navOpen: any }>`
	height: 100vh;
	position: relative;
	overflow: hidden;

	.hamburger {
		text-align: end;
		width: 3em;
		cursor: pointer;
		padding: 0px 7px;

		span {
			display: block;
			border-radius: 10px;
			background: #232946;
			padding: 2px;
			margin: 7px 0;
			margin-left: auto;

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

		@media (min-width: 500px) {
			display: none;
		}
	}

	.mobile__menu {
		width: 100%;
		max-width: 21em;
		position: absolute;
		top: 0;
		right: 0;
		height: 100vh;
		background: #eff0f3;
		box-shadow: -8px 0 21px 0px #1f404c4f;
		margin-block-start: 0;
		transition: all 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
		visibility: ${({ navOpen }) => (navOpen ? 'visible' : 'hidden')};
		transform: ${({ navOpen }) => (navOpen ? 'translateX(0)' : 'translateX(100%)')};
		opacity: ${({ navOpen }) => (navOpen ? 1 : 0)};

		.close {
			font-size: 2.5rem;
			margin-left: auto;
			display: block;
			margin-right: 0.2em;
			margin-top: 0.3em;
			color: #363946;
		}

		.menu__list {
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			list-style: none;
			padding: 0;

			li {
				padding: 0.5em;
				margin-bottom: 1em;
				font-size: 1.3rem;

				&:last-child {
					margin-bottom: 0;
				}
			}
		}
	}

	.background {
		color: rgba(91, 79, 79, 0.02);
		text-transform: uppercase;
		font-size: 18rem;
		position: absolute;
		z-index: -10;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}

	.header {
		display: flex;
		justify-content: space-between;
		padding-top: 1em;
		padding-bottom: 1em;

		.logo {
			font-size: 1.9rem;
			color: #3f5898;
			font-weight: 800;
			letter-spacing: 0.5px;
			-webkit-text-stroke: #292929;
			-webkit-text-stroke-width: 1.3px;
		}

		.nav {
			display: none;
			align-items: center;
			color: #363946;
			font-weight: 500;
			font-size: 1rem;
			text-transform: uppercase;

			.nav__item {
				margin-right: 2em;

				&:last-child {
					margin-right: 0;
				}
			}

			@media (min-width: 500px) {
				display: flex;
			}
		}
	}

	.main {
		max-width: 70em;
		margin: auto;
		margin-top: 8em;
		text-align: center;

		.name {
			color: #232946;
			font-size: 4.5rem;
			font-weight: 600;
			margin: 0;
			line-height: 1.1;
		}

		.title {
			color: #2a2a2a;
			font-size: 2.5rem;
			font-weight: 500;
			margin-top: 0.2em;
			margin-bottom: 0.7em;
		}

		.skills {
			display: flex;
			flex-wrap: wrap;
			justify-content: center;
			line-height: 1.8;
			margin-bottom: 2em;
			font-weight: 600;
			text-transform: uppercase;
			font-size: 1.2rem;
			text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

			.skill__item {
				margin-right: 1.5em;

				&:last-child {
					margin-right: 0;
				}
			}
		}

		.bio {
			line-height: 1.7;
			max-width: 50em;
			margin: auto;
			font-size: 1.1rem;
		}

		@media (min-width: 880px) {
			margin-top: 10em;
		}

		@media (min-width: 1100px) {
			margin-top: 14em;
		}
	}

	.scroll__down {
		position: absolute;
		bottom: 4em;
		left: 50%;
		z-index: -1;
	}
`;
