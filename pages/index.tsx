import Head from 'next/head';
import styled from 'styled-components';
import * as React from 'react';
import { AiOutlineGithub } from 'react-icons/ai';
import { FiExternalLink } from 'react-icons/fi';

import { Body } from '../components/Body';
import { NavBar } from '../components/NavBar';
import { Project } from '../components/Project';

const navList = [
	{ text: 'blog', url: '/blog' },
	{ text: 'projects', url: '#projects' },
	{ text: 'about', url: '#about' },
	{ text: 'contact', url: '#contact' },
];

export default function Homepage() {
	return (
		<>
			<Head>
				<title>Home - Ochuko Ekrresa | Software Engineer</title>
			</Head>
			<Body>
				<Main>
					<NavBar homeUrl="/" navList={navList} />

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
							<a className="btn" href="#projects">
								View my Projects
							</a>
							<a
								className="btn"
								href="https://drive.google.com/file/d/1KdcDdmWYL87CHy2Q-2DGCS01FRIh_-cW/view?usp=sharing"
								target="_blank"
							>
								Get my Resumé
							</a>
						</div>
					</main>
				</Main>

				<Section id="about">
					<div className="container">
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
					</div>
				</Section>

				<Section id="projects">
					<div className="container">
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
							projectTitle="Jumga"
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
					</div>
				</Section>

				<Section id="contact">
					<div className="container">
						<h2 className="section__header">contact me</h2>
						<div className="background">contact</div>

						<div className="text">
							<p>
								I'm currently on the lookout for new opportunities. Feel free to shoot me
								an email!. Whether you want to hire me, have a question or just want to
								say hi, I'll get back to you as soon as i can!
							</p>
						</div>
						<div style={{ marginTop: '2em' }}>
							<a className="btn" href="mailto:ekrresaochuko@gmail.com">
								Contact Me
							</a>
						</div>
					</div>
				</Section>
			</Body>

			<Footer className="footer">
				<p>
					Designed & Developed by{' '}
					<a
						href="https://github.com/chukky-ekrresa"
						target="_blank"
						rel="noreferrer noopener"
					>
						Ochuko Ekrresa.
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

const Section = styled.section`
	position: relative;
	overflow: hidden;
	margin-top: 1em;
	margin-bottom: 8em;

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
		color: #006ccc;
		display: inline-block;
		text-transform: uppercase;
		border-bottom: 3px solid #006ccc;
	}

	.text {
		margin-top: 3em;
		max-width: 41em;

		p {
			line-height: 1.7;
			color: #094067;
		}
	}
`;

const Main = styled.section`
	height: 100vh;
	position: relative;
	overflow: hidden;

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

	.main {
		margin-top: 8em;
		text-align: center;

		.name {
			color: #04395e;
			color: #006ccc;
			font-size: 3.2rem;
			font-weight: 600;
			margin: 0;
			line-height: 1.1;

			@media (min-width: 800px) {
				font-size: 4rem;
			}

			@media (min-width: 1000px) {
				font-size: 4.5rem;
			}
		}

		.title {
			color: #094067;
			font-size: 2rem;
			font-weight: 500;
			margin-top: 0.2em;
			margin-bottom: 0.7em;

			@media (min-width: 800px) {
				font-size: 2.5rem;
			}
		}

		.skills {
			display: flex;
			flex-wrap: wrap;
			justify-content: center;
			line-height: 1.8;
			margin-bottom: 2em;
			font-family: var(--font-fam-heading);
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

			a {
				font-weight: 500;
			}
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
		cursor: pointer;

		&:hover {
			box-shadow: none;
		}

		@media (min-width: 880px) {
			display: block;
		}
	}
`;
