import styled from 'styled-components';
import { CgClose } from 'react-icons/cg';

export function Hamburger({ navStatus = false, handleNav = () => {} }) {
	return (
		<StyledHamburger navOpen={navStatus}>
			<CgClose className="close" onClick={() => handleNav()} />

			<ul className="menu__list">
				<li>
					<a href="#">Projects</a>
				</li>
				<li>
					<a href="#">About</a>
				</li>
				<li>
					<a href="#">Contact</a>
				</li>
			</ul>
		</StyledHamburger>
	);
}

const StyledHamburger = styled.aside<{ navOpen: boolean }>`
	width: 100%;
	max-width: 21em;
	position: absolute;
	top: 0;
	right: 0;
	height: 100vh;
	background: #edf5fc;
	box-shadow: -8px 0 21px 0px #1f404c4f;
	margin-block-start: 0;
	transition: all 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
	visibility: ${({ navOpen }) => (navOpen ? 'visible' : 'hidden')};
	transform: ${({ navOpen }) => (navOpen ? 'translateX(0)' : 'translateX(100%)')};
	opacity: ${({ navOpen }) => (navOpen ? 1 : 0)};

	.close {
		font-size: 2.5rem;
		margin-left: auto;
		display: block;
		margin-right: 0.2em;
		margin-top: 0.3em;
		color: #363946;
	}

	.menu__list {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		list-style: none;
		padding: 0;

		li {
			padding: 0.5em;
			margin-bottom: 1em;
			font-size: 1.3rem;

			&:last-child {
				margin-bottom: 0;
			}
		}
	}
`;
