import React from 'react';
import {
	Audio,
	IFrame,
	// Img,
	interpolate,
	Sequence,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import previewSound from './assets/blog-preview.mp3';
// import BlogImage from './images/blog.png';

export const Blog = () => {
	const {fps} = useVideoConfig();
	const frame = useCurrentFrame();

	const scale = interpolate(frame, [0, 60], [0, 1], {
		extrapolateRight: 'clamp',
	});
	const top = interpolate(frame - 60, [0, 60], [0, -200]);

	return (
		<>
			<Sequence name="releasePreview" from={50} durationInFrames={170}>
				<Audio src={previewSound} />
			</Sequence>
			<IFrame
				src="https://hardikmodi.in/opinion/india-pakistan-peaceful-coexistence"
				style={{
					width: '100%',
					transform: `scale(${scale})`,
					marginTop: `${top}px`,
				}}
			></IFrame>
			{/* <Img
				style={{
					width: '100%',
					height: '100%',
					transform: `scale(${scale})`,
				}}
				src={BlogImage}
			/> */}
		</>
	);
};
