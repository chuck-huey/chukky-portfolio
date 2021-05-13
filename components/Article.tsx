import styled from 'styled-components';

export const Article = styled.article`
	margin: auto;
	color: #374151;
	font-weight: 400;
	margin-top: 5em;
	padding-bottom: 10em;

	h2 {
		font-size: 2rem;
		font-weight: 600;
		color: #094067;

		strong {
			font-size: 2rem;
			font-weight: 600;
			color: #094067;
		}
	}

	.heading {
		text-align: center;
		font-size: 2.5rem;
		font-weight: 500;
		margin-bottom: 0.4em;
		color: #094067;

		@media (min-width: 768px) {
			font-size: 3rem;
		}
	}

	.post__date {
		text-align: center;
		margin-bottom: 5em;
		color: rgb(156, 163, 175);
	}

	.body {
		max-width: 68ch;
		margin: auto;
		line-height: 1.6;
		font-size: 1.25rem;

		a {
			color: #6366f1;
			font-weight: 500;
		}

		blockquote {
			font-size: 1.4rem;
			margin: 50px auto;
			font-style: italic;
			color: #555555;
			padding: 0.4em 0.4em 0.4em 0.8em;
			border-left: 8px solid #7389ae;
			line-height: 1.6;
			position: relative;
			background: #ededed;
		}

		code {
			background: #f3f3f3;
			font-family: var(--font-fam-code);
			border-radius: 6px;
			padding: 0.2em 0.4em;
		}
	}
`;
