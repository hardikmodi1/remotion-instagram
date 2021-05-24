import React from 'react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import styled from 'styled-components';

const Title = styled.h1`
	text-align: center;
	font-size: 56px;
	padding: 40px;
	position: absolute;
	max-width: 1100px;
`;

export const Outro = () => {
	const frame = useCurrentFrame();
	const progress = interpolate(frame, [0, 60], [0, 1], {
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
			<Title
				style={{
					transform: `scale(${progress})`,
					opacity: progress,
				}}
			>
				Download the extension and manage your projects in a better ways without
				ever leaving your code area 😉
			</Title>
		</AbsoluteFill>
	);
};
