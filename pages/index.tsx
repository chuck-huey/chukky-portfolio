import Head from "next/head";
import styled from "styled-components";

export default function Homepage() {
  return (
    <>
      <Head>
        <title>Home - Ochuko Ekrresa | Software Engineer</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
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
