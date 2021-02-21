import Head from 'next/head';
import styled from 'styled-components';

export default function Homepage() {
	return (
		<>
			<Head>
				<title>Home - Ochuko Ekrresa | Software Engineer</title>
			</Head>
			<Main>
				<header className="header container">
					<div className="logo">EKRRESA</div>
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
						solving problems on the frontend and backend. Check out my GitHub for cool
						stuff. For more on my work history, visit my LinkedIn page.
					</div>
				</main>
			</Main>
		</>
	);
}

const Main = styled.section`
	height: 100vh;
	position: relative;

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
			display: flex;
			align-items: center;
			color: #0d0d0d;
			font-weight: 500;
			font-size: 1rem;
			text-transform: uppercase;

			.nav__item {
				margin-right: 2em;

				&:last-child {
					margin-right: 0;
				}
			}
		}
	}

	.main {
		max-width: 70em;
		margin: auto;
		margin-top: 12em;
		text-align: center;

		.name {
			color: #2a2a2a;
			font-size: 4.5rem;
			font-weight: 600;
			margin: 0;
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
			justify-content: center;
			margin-bottom: 1.5em;
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
	}
`;
