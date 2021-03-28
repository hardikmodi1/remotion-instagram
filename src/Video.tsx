import {Composition} from 'remotion';
import {Instagram} from './instagram';

export const RemotionVideo: React.FC = () => {
	return (
		<>
			<Composition
				id="InstagramProfile"
				component={Instagram}
				durationInFrames={330}
				fps={30}
				width={820}
				height={1280}
			/>
		</>
	);
};
