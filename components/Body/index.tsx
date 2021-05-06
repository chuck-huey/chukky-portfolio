import styled from 'styled-components';

export const Body = styled.section`
	min-height: 100vh;
	z-index: 2;
	background: #fffffe;
	position: relative;

	.about__section,
	.contact__section {
		padding: 6em 0em;
		background: #f5fbff;
	}

	.projects__section {
		padding: 6em 0em;
	}

	.contact__section {
		padding-bottom: 10em;
	}
`;
