import React from 'react';
import styled from 'styled-components';

export function Footer() {
	return (
		<StyledFooter className="footer">
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
		</StyledFooter>
	);
}

const StyledFooter = styled.footer`
	background: #094067;
	color: #edf5fc;
	font-size: 0.9rem;
	position: sticky;
	left: 0;
	bottom: 0;
	padding: 1em;
	text-align: center;

	a {
		color: #64ffda;
	}
`;
