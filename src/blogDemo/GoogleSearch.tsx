import React from 'react';
import {
	AbsoluteFill,
	Audio,
	Img,
	interpolate,
	Sequence,
	spring,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import styled from 'styled-components';
import typingSound from './assets/keyboard-typing-sound.mp3';
import GoogleLogo from './images/googleLogo.png';

const message = 'hardikmodi.in';

const QueryCotainer = styled.div`
	flex: 1;
	&:after {
		content: '';
		border-right: 1px solid black;
	}
`;

const getOpacityForWord = (index: number, frame: number) => {
	if (index * 5 < frame) {
		return 1;
	}
	return 0;
};

export const GoogleSearch = () => {
	const {width, fps} = useVideoConfig();
	const frame = useCurrentFrame();
	const words = message.split('');

	const wordOpacity = (index: number) => getOpacityForWord(index, frame);

	const opacitySpring = spring({
		fps,
		frame: frame - 80,
		config: {
			mass: 40,
		},
	});

	const opacity = interpolate(opacitySpring, [0, 1], [1, 0], {
		extrapolateRight: 'clamp',
	});

	return (
		<AbsoluteFill
			style={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				opacity,
			}}
		>
			<Audio src={typingSound} startFrom={0} endAt={72} />
			<Sequence name="EnterKeyPress" from={82} durationInFrames={10}>
				<Audio src={typingSound} startFrom={90} endAt={100} />
			</Sequence>

			<Img src={GoogleLogo} width={width / 3} />
			<div
				style={{
					marginTop: '26px',
					height: '100px',
					width: width / 3,
					fontSize: '70px',
					border: '1px solid grey',
					padding: '10px',
					paddingLeft: '40px',
					borderRadius: '48px',
					boxShadow: '0 5px 30px #dfe1e5',
					display: 'flex',
				}}
			>
				<svg
					focusable="false"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					style={{
						height: '100%',
						fill: 'rgb(154, 160, 166)',
						paddingRight: '15px',
					}}
				>
					<path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
				</svg>
				<QueryCotainer>
					{words.map((w, index) => {
						const opacity = wordOpacity(index);
						return (
							<span
								key={`${w}__${index}`}
								style={{
									opacity,
									display: opacity ? 'inline' : 'none',
								}}
							>
								{w}
							</span>
						);
					})}
				</QueryCotainer>
				<svg
					focusable="false"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="m12 15c1.66 0 3-1.31 3-2.97v-7.02c0-1.66-1.34-3.01-3-3.01s-3 1.34-3 3.01v7.02c0 1.66 1.34 2.97 3 2.97z"
						fill="#4285f4"
					></path>
					<path d="m11 18.08h2v3.92h-2z" fill="#34a853"></path>
					<path
						d="m7.05 16.87c-1.27-1.33-2.05-2.83-2.05-4.87h2c0 1.45 0.56 2.42 1.47 3.38v0.32l-1.15 1.18z"
						fill="#f4b400"
					></path>
					<path
						d="m12 16.93a4.97 5.25 0 0 1 -3.54 -1.55l-1.41 1.49c1.26 1.34 3.02 2.13 4.95 2.13 3.87 0 6.99-2.92 6.99-7h-1.99c0 2.92-2.24 4.93-5 4.93z"
						fill="#ea4335"
					></path>
				</svg>
			</div>
		</AbsoluteFill>
	);
};
