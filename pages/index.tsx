import Head from 'next/head';
import styled from 'styled-components';
import * as React from 'react';
import { AiOutlineGithub, AiTwotoneHeart } from 'react-icons/ai';
import { FiExternalLink } from 'react-icons/fi';

import { ScrollDown } from '../components/ScrollDown';
import { Project } from '../components/Project';
import { Hamburger } from '../components/Hamburger';

export default function Homepage() {
	const [nav, toggleNav] = React.useState(false);

	return (
		<>
			<Head>
				<title>Home - Ochuko Ekrresa | Software Engineer</title>
			</Head>
			<Body>
				<Main navOpen={nav}>
					<header className="header container">
						<div className="logo">EKRRESA</div>

						{/* Mobile menu */}
						<div className="hamburger__btn" onClick={() => toggleNav(!nav)}>
							<span></span>
							<span></span>
							<span></span>
						</div>

						<Hamburger navStatus={nav} handleNav={() => toggleNav(!nav)} />
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
						<div className="actions">
							<a className="btn" href="mailto:ekrresaochuko@gmail.com">
								Get in touch
							</a>
							<a
								className="btn"
								href="https://drive.google.com/file/d/1KdcDdmWYL87CHy2Q-2DGCS01FRIh_-cW/view?usp=sharing"
								target="_blank"
							>
								Get my Resumé
							</a>
						</div>

						<div className="scroll__down">
							<ScrollDown />
						</div>
					</main>
				</Main>

				<Section>
					<h2 className="section__header">About Me</h2>
					<div className="background">about me</div>

					{/* https://www.drawkit.io/illustrations/entryway-monochrome */}
					<img className="about__background" src="/entryway.svg" alt="" />
					<div className="text">
						<p>
							Hi, I'm Ochuko Ekrresa, a software engineer currently based in Lagos,
							Nigeria. I have over two years experience of working in engineering teams,
							building world class products. I am highly proficient at writing
							well-designed, testable and efficient code using current best practices in
							web development.
						</p>
						<p>
							I also have some leadership experience training/mentoring engineers in the
							Decagon fellowship program who have gone on to world class engineers.
						</p>
						<p>
							I currently work with an engineering team at{' '}
							<a href="https://utu.io/" target="_blank" rel="noreferrer noopener">
								UTU Technologies
							</a>{' '}
							in Kenya, where I work on improving their ride hailing service.
						</p>
					</div>
				</Section>

				<Section>
					<h2 className="section__header">Projects</h2>
					<div className="background">projects</div>

					<Project
						alignment="left"
						projectTitle="ANAP Foundation Admin Portal"
						imageAlt="star wars directory homepage"
						imageSrc="https://i.imgur.com/kayzQTL.png"
						projectDesc="An admin dashboard for monitoring activities on ANAP Foundation's Covid-19 project."
						projectLink="https://star-wars-five.now.sh/"
						stack={['React', 'PostgreSQL', 'Redux', 'React Testing Library']}
					/>

					<Project
						alignment="right"
						imageAlt="Jumga E-commerce Homepage"
						imageSrc="https://i.imgur.com/WxfJo6O.png"
						projectDesc="An e-commerce platform for users in Nigeria, Ghana, Kenya, and the UK. Built in 2 weeks. Payments are handled by Flutterwave."
						projectLink="https://fluttermart.vercel.app/"
						projectTitle="Jumga E-commerce"
						stack={['React', 'MongoDB', 'Tailwind CSS', 'React Testing Library']}
						links={[
							{ url: 'https://fluttermart.vercel.app/', Icon: FiExternalLink },
							{
								url: 'https://github.com/chukky-ekrresa/fluttermart',
								Icon: AiOutlineGithub,
							},
						]}
					/>

					<Project
						alignment="left"
						imageAlt="star wars directory homepage"
						imageSrc="https://i.imgur.com/kH5eM1v.jpg"
						projectDesc="A web app to explore the star wars mythology."
						projectLink="https://star-wars-five.now.sh/"
						projectTitle="Star Wars Directory"
						stack={['React', 'React Query', 'React Testing Library']}
						links={[
							{ url: 'https://star-wars-five.now.sh/', Icon: FiExternalLink },
							{
								url: 'https://github.com/chukky-ekrresa/star-wars-app',
								Icon: AiOutlineGithub,
							},
						]}
					/>
				</Section>

				<Section>
					<h2 className="section__header">contact me</h2>
					<div className="background">contact</div>

					<div className="text">
						<p>
							I'm currently on the lookout for new opportunities. Feel free to shoot me an
							email!. Whether you want to hire me, have a question or just want to say hi,
							I'll get back to you as soon as i can!
						</p>
					</div>
					<div style={{ marginTop: '2em' }}>
						<a className="btn" href="mailto:ekrresaochuko@gmail.com">
							Contact Me
						</a>
					</div>
				</Section>
			</Body>

			<Footer className="footer">
				<p>
					Created with
					<AiTwotoneHeart className="love" /> by{' '}
					<a
						href="https://github.com/chukky-ekrresa"
						target="_blank"
						rel="noreferrer noopener"
					>
						Ochuko Ekrresa.
					</a>{' '}
					Inspired by{' '}
					<a href="https://brittanychiang.com/" target="_blank" rel="noreferrer noopener">
						Brittany Chiang
					</a>
				</p>
			</Footer>
		</>
	);
}

const Footer = styled.footer`
	background: #04395e;
	color: #edf5fc;
	font-size: 0.9rem;
	position: sticky;
	left: 0;
	bottom: 0;
	padding: 1em;
	text-align: center;

	a {
		color: #ed4d6e;
	}

	.love {
		vertical-align: middle;
		margin: 0 0.3em;
		color: crimson;
	}
`;

const Body = styled.section`
	min-height: 100vh;
	z-index: 2;
	background: #edf5fc;
	padding-bottom: 10em;
	position: relative;
`;

const Section = styled.section`
	position: relative;
	overflow: hidden;
	max-width: 70em;
	margin: 0 auto;
	padding-left: 1em;
	padding-right: 1em;
	margin-top: 4em;

	.background {
		color: rgba(91, 79, 79, 0.02);
		text-transform: uppercase;
		position: absolute;
		z-index: -10;
		top: -0.2em;
		font-size: 10rem;
		font-weight: 700;
	}

	.about__background {
		position: absolute;
		right: 0;
		top: 0;
		width: 28em;
		z-index: -20;
		display: none;

		@media (min-width: 880px) {
			display: block;
		}
	}

	.section__header {
		font-size: 1.9rem;
		color: #3f5898;
		display: flex;
		align-items: center;
		text-transform: uppercase;

		::after {
			content: '';
			border: 1px solid;
			width: 5em;
			background-color: #3f5898;
			position: relative;
			margin-left: 1em;
		}
	}

	.text {
		margin-top: 3em;
		max-width: 41em;

		p {
			line-height: 1.5;
			color: #094067;
		}
	}
`;

const Main = styled.section<{ navOpen: any }>`
	height: 100vh;
	position: relative;
	overflow: hidden;

	.hamburger__btn {
		display: flex;
		flex-direction: column;
		align-items: flex-end;
		justify-content: space-around;
		width: 3em;
		height: 2.3em;
		cursor: pointer;
		padding: 0px 7px;

		span {
			display: block;
			border-radius: 10px;
			background: #232946;
			padding: 2px;

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

	.background {
		color: rgba(91, 79, 79, 0.02);
		text-transform: uppercase;
		font-size: 18rem;
		font-weight: 600;
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
			color: #094067;
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
			color: #04395e;
			font-size: 4.5rem;
			font-weight: 600;
			margin: 0;
			line-height: 1.1;
		}

		.title {
			color: #094067;
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
			color: #094067;
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
			color: #094067;
		}

		.actions {
			text-align: center;
			margin-top: 2.5em;
		}

		@media (min-width: 880px) {
			margin-top: 10em;
		}

		@media (min-width: 1100px) {
			margin-top: 14em;
		}
	}

	.scroll__down {
		display: none;
		position: absolute;
		bottom: 4em;
		left: 49.2%;
		z-index: -1;

		@media (min-width: 880px) {
			display: block;
		}
	}
`;
