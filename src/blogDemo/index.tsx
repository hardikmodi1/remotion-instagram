import React from 'react';
import {
	AbsoluteFill,
	Sequence,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import {Blog} from './Blog';
import {GoogleSearch} from './GoogleSearch';
import {HomePage} from './HomePage';

export const BlogDemo = () => {
	const {width, height, fps} = useVideoConfig();
	const frame = useCurrentFrame();

	return (
		<AbsoluteFill style={{background: 'white'}}>
			<Sequence name="GoogleSearch" from={0} durationInFrames={120}>
				<GoogleSearch />
			</Sequence>

			<Sequence name="HomePage" from={90} durationInFrames={90}>
				<HomePage />
			</Sequence>

			<Sequence name="BlogPage" from={180} durationInFrames={Infinity}>
				<Blog />
			</Sequence>
		</AbsoluteFill>
	);
};
