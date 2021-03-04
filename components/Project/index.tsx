import Image from 'next/image';
import { IconType } from 'react-icons';
import styled from 'styled-components';

type ProjectProps = {
	projectLink: string;
	imageSrc: string;
	imageAlt: string;
	projectTitle: string;
	projectDesc: string;
	alignment: 'left' | 'right';
	stack?: string[];
	links?: ProjectLink[];
};

type ProjectLink = {
	url: string;
	Icon: IconType;
};

export function Project(props: ProjectProps) {
	return (
		<StyledProject alignment={props.alignment}>
			<div className="project__image">
				<a href={props.projectLink} target="_blank" rel="noreferrer noopener">
					<Image
						src={props.imageSrc}
						alt={props.imageAlt}
						width={100}
						height={60}
						layout="responsive"
						objectFit="fill"
					/>
				</a>
			</div>
			<div className="project__content">
				<h2>{props.projectTitle}</h2>
				<p>{props.projectDesc}</p>

				{props.stack ? (
					<ul className="skills">
						{props.stack.map(item => (
							<li key={item}>{item}</li>
						))}
					</ul>
				) : null}

				{props.links ? (
					<div className="links">
						{props.links.map(({ Icon, url }) => (
							<a key={url} href={url} target="_blank" rel="noreferrer noopener">
								<Icon />
							</a>
						))}
					</div>
				) : null}
			</div>
		</StyledProject>
	);
}

const StyledProject = styled.section<{ alignment: string }>`
	margin-top: 3.8em;
	margin-bottom: 10em;
	position: relative;
	display: grid;
	grid-gap: 10px;
	grid-template-columns: repeat(12, 1fr);
	align-items: center;

	.project__image {
		grid-column: 1/-1;
		box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
		opacity: 0.1;
	}

	.project__content {
		position: absolute;
		width: 100%;
		z-index: 10;
		color: #312e28;
		padding: 2em;
		background: #ffffff59;

		h2 {
			font-size: 1.3rem;
			margin-top: 0;
			color: #3f5898e6;
		}

		.skills {
			font-family: 'Inconsolata', monospace;
			font-weight: 500;
			padding-left: 0;
			list-style: none;
			display: flex;
			flex-wrap: wrap;
			line-height: 1.8;

			li {
				font-size: 1rem;
				white-space: nowrap;
				margin-right: 1em;

				&:last-child {
					margin-right: 0;
				}
			}
		}

		.links {
			display: flex;
			justify-content: flex-end;

			a {
				margin-right: 1em;

				&:last-child {
					margin-right: 0;
				}
			}

			svg {
				font-size: 1.4rem;
				color: #04395e;
			}
		}
	}

	@media (min-width: 830px) {
		.project__image {
			grid-column: ${({ alignment }) => (alignment === 'left' ? '1/8' : '6/-1')};
			opacity: 1;
		}

		.project__content {
			background: inherit;
			width: 75%;
			padding-left: 0;
			padding-right: 0;
			right: ${({ alignment }) => (alignment === 'left' ? 0 : 'inherit')};
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: ${({ alignment }) =>
				alignment === 'left' ? 'flex-end' : 'flex-start'};

			p {
				box-shadow: 0 2px 24px -20px #2a3869;
				background: #8b85c1;
				color: #edf5fc;
				font-weight: 500;
				padding: 1.4em;
				border-radius: 5px;
				width: 70%;
				text-align: ${({ alignment }) => (alignment === 'left' ? 'end' : 'start')};
			}
		}
	}
`;
