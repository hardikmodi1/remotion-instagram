import {Composition} from 'remotion';
import {BlogDemo} from './blogDemo';
import {Instagram} from './instagram';
import {VsTodo} from './vsTodo';

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
			<Composition
				id="HardikModiIn"
				component={BlogDemo}
				durationInFrames={390}
				fps={30}
				width={3072}
				height={1980}
			/>
			<Composition
				id="VSTodo"
				component={VsTodo}
				durationInFrames={1350}
				fps={30}
				width={1920}
				height={1080}
			/>
		</>
	);
};
