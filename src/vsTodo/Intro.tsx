import React from 'react';
import {
	AbsoluteFill,
	interpolate,
	spring,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import styled from 'styled-components';

const Title = styled.h1`
	text-align: center;
	font-size: 56px;
	padding: 40px;
	position: absolute;
	max-width: 1100px;
`;

const Extension = styled.h2`
	font-size: 100px;
`;

export const Intro = () => {
	const {width, height, fps} = useVideoConfig();
	const frame = useCurrentFrame();
	const progress = spring({
		frame,
		fps,
		config: {
			mass: 7,
			damping: 25,
		},
	});

	const titleTop = interpolate(progress, [0, 1], [-height / 3, height / 3]);

	const progress2 = spring({
		frame: frame - 60,
		fps,
		config: {
			mass: 20,
			damping: 25,
		},
	});
	const extensionNameOpacity = interpolate(progress2, [0, 1], [0, 1]);
	const extensionNameScale = interpolate(progress2, [0, 1], [0, 1], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});
	return (
		<AbsoluteFill
			style={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<Title style={{top: `${titleTop}px`}}>
				Releasing a VSCode extension to bring task management a one step closer
				to you
			</Title>

			<Extension
				style={{
					opacity: extensionNameOpacity,
					transform: `scale(${extensionNameScale})`,
					top: 0.5 * height,
					position: 'absolute',
				}}
			>
				TodoList
			</Extension>
		</AbsoluteFill>
	);
};
