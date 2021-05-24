import React from 'react';
import {
	AbsoluteFill,
	Audio,
	Easing,
	Img,
	interpolate,
	Sequence,
	spring,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import clickSound from './assets/mouse-click.mp3';
import Home from './images/home.png';

export const HomePage = () => {
	const {width, height, fps} = useVideoConfig();
	const frame = useCurrentFrame();

	const top = spring({
		fps,
		frame,
		config: {
			mass: 100,
		},
	});

	const topStyle = interpolate(top, [0, 1], [height, 0], {
		extrapolateRight: 'clamp',
	});

	const pointer = interpolate(frame - 60, [0, 10, 11, 20], [0, 1, 1, 0], {
		easing: Easing.bezier(0.8, 0.22, 0.96, 0.65),
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	return (
		<AbsoluteFill>
			<Sequence name="MouseClickPress" from={60} durationInFrames={10}>
				<Audio src={clickSound} startFrom={15} endAt={25} />
			</Sequence>
			<Img
				style={{
					top: topStyle,
					height: '100%',
					width: '100%',
					position: 'absolute',
				}}
				src={Home}
			/>
			<div
				style={{
					position: 'absolute',
					top: height / 2 + 225,
					left: width / 2 - 425,
					width: '170px',
					height: '170px',
					background: 'yellow',
					borderRadius: '50%',
					// opacity: frame > 60 ? 1 : 0,
					transform: `scale(${pointer})`,
				}}
			></div>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				xmlnsXlink="http://www.w3.org/1999/xlink"
				version="1.1"
				id="Layer_1"
				x="0px"
				y="0px"
				viewBox="0 0 32 32"
				enable-background="new 0 0 32 32"
				xmlSpace="preserve"
				style={{
					position: 'absolute',
					top: height / 2 + 250,
					left: width / 2 - 400,
					width: '120px',
					height: '120px',
					opacity: frame > 50 ? 1 : 0,
				}}
			>
				<g>
					<defs>
						<rect id="SVGID_1_" width="32" height="32" />
					</defs>
					<clipPath id="SVGID_2_">
						<use xlinkHref="#SVGID_1_" overflow="visible" />
					</clipPath>
					<path
						clip-path="url(#SVGID_2_)"
						fill="#FFFFFF"
						d="M11.3,20.4c-0.3-0.4-0.6-1.1-1.2-2c-0.3-0.5-1.2-1.5-1.5-1.9   c-0.2-0.4-0.2-0.6-0.1-1c0.1-0.6,0.7-1.1,1.4-1.1c0.5,0,1,0.4,1.4,0.7c0.2,0.2,0.5,0.6,0.7,0.8c0.2,0.2,0.2,0.3,0.4,0.5   c0.2,0.3,0.3,0.5,0.2,0.1c-0.1-0.5-0.2-1.3-0.4-2.1c-0.1-0.6-0.2-0.7-0.3-1.1c-0.1-0.5-0.2-0.8-0.3-1.3c-0.1-0.3-0.2-1.1-0.3-1.5   c-0.1-0.5-0.1-1.4,0.3-1.8c0.3-0.3,0.9-0.4,1.3-0.2c0.5,0.3,0.8,1,0.9,1.3c0.2,0.5,0.4,1.2,0.5,2c0.2,1,0.5,2.5,0.5,2.8   c0-0.4-0.1-1.1,0-1.5c0.1-0.3,0.3-0.7,0.7-0.8c0.3-0.1,0.6-0.1,0.9-0.1c0.3,0.1,0.6,0.3,0.8,0.5c0.4,0.6,0.4,1.9,0.4,1.8   c0.1-0.4,0.1-1.2,0.3-1.6c0.1-0.2,0.5-0.4,0.7-0.5c0.3-0.1,0.7-0.1,1,0c0.2,0,0.6,0.3,0.7,0.5c0.2,0.3,0.3,1.3,0.4,1.7   c0,0.1,0.1-0.4,0.3-0.7c0.4-0.6,1.8-0.8,1.9,0.6c0,0.7,0,0.6,0,1.1c0,0.5,0,0.8,0,1.2c0,0.4-0.1,1.3-0.2,1.7   c-0.1,0.3-0.4,1-0.7,1.4c0,0-1.1,1.2-1.2,1.8c-0.1,0.6-0.1,0.6-0.1,1c0,0.4,0.1,0.9,0.1,0.9s-0.8,0.1-1.2,0c-0.4-0.1-0.9-0.8-1-1.1   c-0.2-0.3-0.5-0.3-0.7,0c-0.2,0.4-0.7,1.1-1.1,1.1c-0.7,0.1-2.1,0-3.1,0c0,0,0.2-1-0.2-1.4c-0.3-0.3-0.8-0.8-1.1-1.1L11.3,20.4z"
					/>

					<path
						clip-path="url(#SVGID_2_)"
						fill="none"
						stroke="#000000"
						stroke-width="0.75"
						stroke-linecap="round"
						stroke-linejoin="round"
						d="   M11.3,20.4c-0.3-0.4-0.6-1.1-1.2-2c-0.3-0.5-1.2-1.5-1.5-1.9c-0.2-0.4-0.2-0.6-0.1-1c0.1-0.6,0.7-1.1,1.4-1.1c0.5,0,1,0.4,1.4,0.7   c0.2,0.2,0.5,0.6,0.7,0.8c0.2,0.2,0.2,0.3,0.4,0.5c0.2,0.3,0.3,0.5,0.2,0.1c-0.1-0.5-0.2-1.3-0.4-2.1c-0.1-0.6-0.2-0.7-0.3-1.1   c-0.1-0.5-0.2-0.8-0.3-1.3c-0.1-0.3-0.2-1.1-0.3-1.5c-0.1-0.5-0.1-1.4,0.3-1.8c0.3-0.3,0.9-0.4,1.3-0.2c0.5,0.3,0.8,1,0.9,1.3   c0.2,0.5,0.4,1.2,0.5,2c0.2,1,0.5,2.5,0.5,2.8c0-0.4-0.1-1.1,0-1.5c0.1-0.3,0.3-0.7,0.7-0.8c0.3-0.1,0.6-0.1,0.9-0.1   c0.3,0.1,0.6,0.3,0.8,0.5c0.4,0.6,0.4,1.9,0.4,1.8c0.1-0.4,0.1-1.2,0.3-1.6c0.1-0.2,0.5-0.4,0.7-0.5c0.3-0.1,0.7-0.1,1,0   c0.2,0,0.6,0.3,0.7,0.5c0.2,0.3,0.3,1.3,0.4,1.7c0,0.1,0.1-0.4,0.3-0.7c0.4-0.6,1.8-0.8,1.9,0.6c0,0.7,0,0.6,0,1.1   c0,0.5,0,0.8,0,1.2c0,0.4-0.1,1.3-0.2,1.7c-0.1,0.3-0.4,1-0.7,1.4c0,0-1.1,1.2-1.2,1.8c-0.1,0.6-0.1,0.6-0.1,1   c0,0.4,0.1,0.9,0.1,0.9s-0.8,0.1-1.2,0c-0.4-0.1-0.9-0.8-1-1.1c-0.2-0.3-0.5-0.3-0.7,0c-0.2,0.4-0.7,1.1-1.1,1.1   c-0.7,0.1-2.1,0-3.1,0c0,0,0.2-1-0.2-1.4c-0.3-0.3-0.8-0.8-1.1-1.1L11.3,20.4z"
					/>

					<line
						clip-path="url(#SVGID_2_)"
						fill="none"
						stroke="#000000"
						stroke-width="0.75"
						stroke-linecap="round"
						x1="19.6"
						y1="20.7"
						x2="19.6"
						y2="17.3"
					/>

					<line
						clip-path="url(#SVGID_2_)"
						fill="none"
						stroke="#000000"
						stroke-width="0.75"
						stroke-linecap="round"
						x1="17.6"
						y1="20.7"
						x2="17.5"
						y2="17.3"
					/>

					<line
						clip-path="url(#SVGID_2_)"
						fill="none"
						stroke="#000000"
						stroke-width="0.75"
						stroke-linecap="round"
						x1="15.6"
						y1="17.3"
						x2="15.6"
						y2="20.7"
					/>
				</g>
			</svg>
		</AbsoluteFill>
	);
};
