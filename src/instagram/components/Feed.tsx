import React from 'react';
import {
	Img,
	interpolate,
	spring,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import {FEED_IMAGE_URLS} from '../../local';

export const Feed = () => {
	const frame = useCurrentFrame();
	const {width, height, fps} = useVideoConfig();
	const posts: JSX.Element[] = [];

	const container = spring({
		frame: frame - 3 * 30,
		fps,
		config: {
			stiffness: 300,
			mass: 2000,
			damping: 500,
		},
	});

	const containerTop = interpolate(container, [0, 1], [0, -(width / 3)], {
		extrapolateRight: 'clamp',
	});

	for (let i = 0; i < Math.ceil(FEED_IMAGE_URLS.length / 3); i++) {
		posts.push(<br key={i} />);
		const image = spring({
			frame: frame - i * fps * 2,
			fps,
			from: 0,
			to: 2,
			config: {
				stiffness: 200,
				mass: 100,
				damping: 200,
			},
		});
		for (let j = 3 * i; j <= 3 * i + 2; j++) {
			if (j < FEED_IMAGE_URLS.length) {
				const imageTop = interpolate(
					image,
					[0 + (j % 3) * 0.5, 2],
					[height, i * (width / 3)],
					{
						extrapolateRight: 'clamp',
					}
				);
				posts.push(
					<Img
						key={FEED_IMAGE_URLS[j]}
						src={FEED_IMAGE_URLS[j]}
						style={{
							position: 'absolute',
							height: width / 3,
							width: width / 3,
							top: imageTop,
							left: (j % 3) * (width / 3),
						}}
					/>
				);
			}
		}
	}

	return (
		<div
			style={{
				position: 'absolute',
				top: containerTop,
			}}
		>
			{posts}
		</div>
	);
};
