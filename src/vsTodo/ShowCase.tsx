import {
	Easing,
	interpolate,
	useCurrentFrame,
	useVideoConfig,
	Video,
} from 'remotion';
import styled from 'styled-components';

const BigTitle = styled.div`
	font-family: ---apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
		Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	font-size: 70px;
	text-align: left;
	line-height: 1;
	font-weight: bold;
`;

const SectionTitle = styled.div`
	font-family: ---apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
		Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	font-size: 50px;
	font-weight: bold;
	margin-top: 50px;
`;

interface ShowCaseProps {
	feature: string;
	src: string;
}

export const ShowCase = ({feature, src}: ShowCaseProps) => {
	const {width, height} = useVideoConfig();
	const frame = useCurrentFrame();
	const translation = interpolate(frame, [0, 60], [900, 200], {
		extrapolateRight: 'clamp',
		easing: Easing.bezier(0, 0.42, 0.77, 0.63),
	});
	const opacity = interpolate(frame, [0, 60], [0, 1]);
	return (
		<div
			style={{
				flex: 1,
				fontFamily: '--apple-system',
				flexDirection: 'row',
				display: 'flex',
			}}
		>
			<div
				style={{
					flex: 1,
					display: 'flex',
					alignItems: 'center',
					marginLeft: 80,
				}}
			>
				<BigTitle
					style={{
						opacity,
					}}
				>
					{feature}
				</BigTitle>
			</div>
			<div
				style={{
					flex: 1,
					transform: `translateY(${translation}px)`,
					marginRight: 80,
				}}
			>
				<Video muted style={{width: width / 2}} src={src} />
			</div>
		</div>
	);
};
