import styled from 'styled-components';

export const Body = styled.section`
	min-height: 100vh;
	z-index: 2;
	background: #fffffe;
	position: relative;

	.about__section,
	.contact__section {
		padding: 3em 0em;
		background: #d8eefe;
	}

	.projects__section {
		padding: 3em 0em;
	}

	.contact__section {
		padding-bottom: 10em;
	}
`;
