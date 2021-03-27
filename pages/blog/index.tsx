import Head from 'next/head';
import Link from 'next/link';
import styled from 'styled-components';

import { Body } from '../../components/Body';
import { NavBar } from '../../components/NavBar';
import { getSortedPostsData, PostFrontMatter } from '../../lib/posts';

const navList = [
	{ text: 'portfolio', url: '/' },
	{ text: 'contact', url: '/#contact' },
];

export default function BlogHome(props: { allPostsData: PostFrontMatter[] }) {
	const { allPostsData } = props;
	return (
		<>
			<Head>
				<title>Blog - Ochuko Ekrresa</title>
			</Head>

			<Body>
				<StyledContainer>
					<NavBar homeUrl="/blog" navList={navList} />
					<main className="main container">
						<h1 className="heading">Hey, I'm Ochuko Ekrresa</h1>
						<p className="heading__text">
							I'm a software engineer based in Lagos, Nigeria. This is where I share my
							knowledge on things I'm interested in.
						</p>
					</main>

					<div className="construction">Not Finished</div>

					<section className="container">
						<h2 className="article__heading">Articles</h2>
						<section className="articles">
							{allPostsData.map(data => (
								<Link href="#" key={data.id}>
									<div className="post__card">
										<h3>{data.title}</h3>
										<p>{data.summary}</p>
									</div>
								</Link>
							))}
							{allPostsData.map(data => (
								<Link href="#" key={data.id}>
									<div className="post__card">
										<h3>{data.title}</h3>
										<p>{data.summary}</p>
									</div>
								</Link>
							))}
						</section>
					</section>
				</StyledContainer>
			</Body>
		</>
	);
}

export async function getStaticProps() {
	const allPostsData = getSortedPostsData();

	return { props: { allPostsData } };
}

const StyledContainer = styled.section`
	position: relative;

	.main {
		margin-top: 13em;

		.heading {
			font-size: 3rem;
			font-weight: 600;
			color: #04395e;
		}

		.heading__text {
			font-size: 1.2rem;
			color: #094067;
			max-width: 44em;
			line-height: 1.6;
		}
	}

	.construction {
		color: #ef45651f;
		text-transform: uppercase;
		position: absolute;
		z-index: -10;
		font-size: 10rem;
		font-weight: 700;
		transform: translate(31%, -50%);
	}

	.article__heading {
		font-size: 2rem;
		margin-top: 3em;
		color: #006ccc;
	}

	.articles {
		display: grid;
		grid-template-columns: auto auto;
		gap: 3em;
	}

	.post__card {
		box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
		border-radius: 4px;
		max-width: 60em;
		padding: 1em;
		margin-bottom: 1em;

		h3 {
			font-size: 1.1rem;
		}
	}
`;
