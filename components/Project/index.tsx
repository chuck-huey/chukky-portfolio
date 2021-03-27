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
	position: relative;
	display: grid;
	grid-gap: 2em;
	grid-template-columns: auto;
	align-items: center;

	&:last-child {
		margin-bottom: 0;
	}

	.project__image {
		border: 1px solid #eee;
		border-bottom: none;
		border-top-left-radius: 10px;
		border-top-right-radius: 10px;
		overflow: hidden;
	}

	.project__content {
		position: relative;
		top: -6em;
		z-index: 10;
		color: #094067;
		padding: 2em;
		background-color: #ffffff;
		background-image: linear-gradient(315deg, #ffffff 0%, #d7e1ec 74%);
		border-bottom-left-radius: 10px;
		border-bottom-right-radius: 10px;
		border: 1px solid #eee;
		border-top: none;

		h2 {
			font-family: var(--font-fam-heading);
			font-size: 1.3rem;
			margin-top: 0;
			color: #094067d6;
		}

		.skills {
			font-family: var(--font-fam-code);
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
		grid-template-columns: 1fr 1fr;
		grid-gap: 6em 3em;
		padding: 1em;

		.project__image {
			box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
			order: ${({ alignment }) => (alignment === 'left' ? -1 : 1)};
			border: none;
			border-radius: 10px;
		}

		.project__content {
			top: unset;
			border: none;
			background: inherit;
			border-radius: none;
			padding-left: 0;
			padding-right: 0;
			right: ${({ alignment }) => (alignment === 'left' ? 0 : 'inherit')};
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: ${({ alignment }) =>
				alignment === 'left' ? 'flex-end' : 'flex-start'};

			p {
				border-radius: 5px;
				line-height: 1.6;
				text-align: ${({ alignment }) => (alignment === 'left' ? 'end' : 'start')};
			}
		}
	}
`;
