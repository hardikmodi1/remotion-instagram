import React from 'react';
import {
	AbsoluteFill,
	interpolate,
	Sequence,
	spring,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import {CoverContainer} from './components/CoverContainer';
import {Feed} from './components/Feed';
import {FlexColumn} from './components/FlexColumn';
import {Text} from './components/Text';
import {
	IMAGE_SIZE,
	PROFILE_HEADER_HEIGHT,
	PROFILE_HEADER_TOP_OFFSET,
	TEXT_WIDTH,
} from './constants';
import {Profile} from './Profile';

export const Instagram = () => {
	const frame = useCurrentFrame();
	const {width, fps} = useVideoConfig();
	const image = spring({
		frame,
		fps,
		config: {
			stiffness: 200,
			damping: 100,
			mass: 10,
			overshootClamping: true,
		},
	});
	const text = spring({
		frame: frame - 25,
		fps,
		config: {
			damping: 100,
			stiffness: 200,
			mass: 10,
		},
	});

	const coverScale = interpolate(image, [0, 1], [0, 1], {
		extrapolateRight: 'clamp',
	});

	const followerLeft = interpolate(
		text,
		[0, 1],
		[width / 2 - IMAGE_SIZE / 2, width / 2 - IMAGE_SIZE / 2 - TEXT_WIDTH],
		{extrapolateRight: 'clamp'}
	);
	const followingLeft = interpolate(
		text,
		[0, 1],
		[width / 2 - IMAGE_SIZE / 2, width / 2 - IMAGE_SIZE / 2 + TEXT_WIDTH + 70],
		{extrapolateRight: 'clamp'}
	);
	const textOpacity = interpolate(text, [0, 1], [0, 1], {
		extrapolateRight: 'clamp',
	});
	return (
		<AbsoluteFill
			style={{
				background: 'white',
			}}
		>
			<Sequence durationInFrames={Infinity} from={0}>
				<AbsoluteFill
					style={{
						height: PROFILE_HEADER_HEIGHT,
						boxShadow: '0 1px 4px 0 rgba(10,10,20,0.15)',
					}}
				>
					<CoverContainer
						style={{
							left: width / 2 - IMAGE_SIZE / 2,
							height: IMAGE_SIZE,
							top: PROFILE_HEADER_TOP_OFFSET,
							transform: `scale(${coverScale})`,
							opacity: coverScale,
						}}
					>
						<Profile />
					</CoverContainer>

					<Text
						style={{
							top: IMAGE_SIZE / 2 + 15,
							left: followerLeft,
							opacity: textOpacity,
						}}
					>
						<FlexColumn>
							<span>Followers</span>
							<span>260</span>
						</FlexColumn>
					</Text>

					<Text
						style={{
							top: IMAGE_SIZE / 2 + 15,
							left: followingLeft,
							opacity: textOpacity,
						}}
					>
						<FlexColumn>
							<span>Following</span>
							<span>298</span>
						</FlexColumn>
					</Text>
				</AbsoluteFill>
			</Sequence>

			<Sequence from={60} durationInFrames={Infinity}>
				<AbsoluteFill
					style={{
						top: PROFILE_HEADER_HEIGHT,
					}}
				>
					<Feed />
				</AbsoluteFill>
			</Sequence>
		</AbsoluteFill>
	);
};
