import Head from 'next/head';
import styled from 'styled-components';

export default function Homepage() {
	return (
		<>
			<Head>
				<title>Home - Ochuko Ekrresa | Software Engineer</title>
			</Head>
			<Main>Hello Ochuko 👋</Main>
		</>
	);
}

const Main = styled.main`
	min-height: 100vh;
	display: grid;
	place-items: center;
`;
