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
				<link rel="icon" href="/favicon.ico" />
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link
					href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;500;600;700&display=swap"
					rel="stylesheet"
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500&display=swap"
					rel="stylesheet"
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@500&display=swap"
					rel="stylesheet"
				/>
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
		scroll-behavior: smooth;
		--font-fam-heading: 'Work Sans', sans-serif;
		--font-fam-code: 'Source Code Pro', monospace;
		--font-fam-text: "Inter", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
		"Helvetica Neue", Arial, 		sans-serif;
  }

  body {
    font-family: var(--font-fam-text);
		background: #fffffe;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0;
		overflow-x: hidden;
  }

	h1,h2,h3,h4,h5,h6 {
		font-family: var(--font-fam-heading)
	}

  img {
    width: 100%;
    object-fit: cover;
  }

	a {
		color: #6366f1;
		font-weight: 600;
		font-family: var(--font-fam-heading);
		text-decoration:none;
		transition: box-shadow 400ms ease 0s;
    box-shadow: 0px 0px 0px #6366f1;

		&:hover{
			transition: box-shadow 100ms ease 0s;
			box-shadow: 0px 2px 0px #6366f1;
		}
	}

	a.btn {
		background: inherit;
		color: #04395e;
		font-family: var(--font-fam-text);
		padding: 0.7em;
		margin-right: 1em;
		border-radius: 5px;
		border: 1px solid;
		cursor: pointer;
		display: inline-block;
		text-align: center;

		&:hover {
			box-shadow: none;
		}

		:last-child {
			margin-right: 0;
		}
	}

  .container {
    width: 100%;
    max-width: 82em;
    margin: 0 auto;
    padding-left: 1em;
    padding-right: 1em;
		position: inherit;
  }

	.nav__container {
		width: 100%;
    max-width: 82em;
    margin: 0 auto;
    padding-left: 1em;
    padding-right: 1em;
	}
`;
