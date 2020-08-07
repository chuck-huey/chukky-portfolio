import Head from 'next/head';
import { css } from 'linaria';

const box = css`
  height: 100vh;
  display: grid;
  place-items: center;
`;

function Homepage() {
  return (
    <>
      <Head>
        <title>Ochuko Ekrresa - Blog, Portfolio</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <main className={box}>Hello Ochuko 👋</main>
    </>
  );
}

export default Homepage;
