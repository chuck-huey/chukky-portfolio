import styled from 'styled-components';
import { CgClose } from 'react-icons/cg';

export function Hamburger({ navStatus = false, handleNav = () => {} }) {
	return (
		<StyledHamburger navOpen={navStatus}>
			<CgClose className="close" onClick={() => handleNav()} />

			<ul className="menu__list">
				<li>
					<a href="/blog">Blog</a>
				</li>
				<li>
					<a href="#projects">Projects</a>
				</li>
				<li>
					<a href="#about">About</a>
				</li>
				<li>
					<a href="#contact">Contact</a>
				</li>

				<li>
					<a
						className="btn resume__btn"
						href="https://drive.google.com/file/d/1KdcDdmWYL87CHy2Q-2DGCS01FRIh_-cW/view?usp=sharing"
						target="_blank"
					>
						Resumé
					</a>
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
	background: #fffffe;
	box-shadow: -8px 0 21px 0px #1f404c4f;
	margin-block-start: 0;
	transition: all 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
	visibility: ${({ navOpen }) => (navOpen ? 'visible' : 'hidden')};
	transform: ${({ navOpen }) => (navOpen ? 'translateX(0)' : 'translateX(100%)')};
	opacity: ${({ navOpen }) => (navOpen ? 1 : 0)};
	z-index: 5;

	.close {
		font-size: 2.5rem;
		margin-left: auto;
		display: block;
		margin-right: 0.5em;
		margin-top: 0.6em;
		color: #232946;
		cursor: pointer;
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
			font-size: 1.1rem;
			text-transform: uppercase;

			&:last-child {
				margin-bottom: 0;
			}

			a {
				color: #094067;
				font-family: var(--font-fam-heading);
			}
		}

		.resume__btn {
			font-weight: 700;
			font-family: var(--font-fam-text);
			width: 11em;
			text-transform: uppercase;
			background: #006ccc;
			color: #fff;
			border-color: #006ccc;
			font-size: 0.9rem;
			padding: 0.9em 1.5em;
		}
	}
`;
