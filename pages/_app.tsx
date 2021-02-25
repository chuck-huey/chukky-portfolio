import { AppProps } from 'next/app';
import Head from 'next/head';
import { createGlobalStyle } from 'styled-components';

export default function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<GlobalStyle />
			<Head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<link
					href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500&display=swap"
					rel="stylesheet"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Component {...pageProps} />
		</>
	);
}

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    font-family: inherit;
    font-size: inherit;
    box-sizing: inherit;
    text-decoration: none;
    line-height: inherit;
  }

  html {
    box-sizing: border-box;
  }

  body {
    font-family: "Inter", "SF Pro Text", "SF Pro Icons", "Helvetica Neue",
      "Helvetica", "Arial", sans-serif;
    background: #eff0f3;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0;
  }

  img {
    width: 100%;
    object-fit: cover;
  }

	a {
		color: #4433ff;
		font-weight:500;
		text-decoration:none;
		transition: box-shadow 400ms ease 0s;
    box-shadow: 0px 0px 0px #4433ff;

		&:hover{
		transition: box-shadow 100ms ease 0s;
    box-shadow: 0px 2px 0px #4433ff;
		}
	}

  .container {
    width: 100%;
    max-width: 95em;
    margin: 0 auto;
    padding-left: 0.5em;
    padding-right: 0.5em;
  }
`;
