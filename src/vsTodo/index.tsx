import React from 'react';
import {AbsoluteFill, Audio, Sequence, useCurrentFrame} from 'remotion';
import styled from 'styled-components';
import boardVideo from './assets/board.mp4';
import dndVideo from './assets/dnd.mp4';
import promo from './assets/promo.mp3';
import todoVideo from './assets/todo.mp4';
import todoListVideo from './assets/todoList.mp4';
import {Intro} from './Intro';
import {Outro} from './Outro';
import {ShowCase} from './ShowCase';

const BigTitle = styled.div`
	font-family: ---apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
		Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	font-size: 160px;
	text-align: left;
	line-height: 1;
	font-weight: bold;
`;

export const VsTodo = () => {
	const frame = useCurrentFrame();
	return (
		<AbsoluteFill
			style={{
				backgroundColor: '#08AEEA',
				backgroundImage: 'linear-gradient(0deg, #08AEEA 0%, #2AF598 100%)',
			}}
		>
			<Audio src={promo} volume={0.3} />
			<Sequence name="Intro" from={0} durationInFrames={120}>
				<Intro />
			</Sequence>
			<Sequence name="ShowCaseBoard" from={120} durationInFrames={180}>
				<ShowCase
					feature="Create Boards to Efficiently Manage Your Task"
					src={boardVideo}
				/>
			</Sequence>
			<Sequence name="ShowCaseTodoList" from={300} durationInFrames={240}>
				<ShowCase feature="Add Lists In Your Board" src={todoListVideo} />
			</Sequence>
			<Sequence name="ShowCaseTodo" from={540} durationInFrames={410}>
				<ShowCase feature="Add Todos in TodoLists" src={todoVideo} />
			</Sequence>
			<Sequence name="ShowCaseDnD" from={950} durationInFrames={250}>
				<ShowCase
					feature="Drag and Drop Todos as you complete the tasks"
					src={dndVideo}
				/>
			</Sequence>
			<Sequence name="OutRo" from={1200} durationInFrames={150}>
				<Outro />
			</Sequence>
		</AbsoluteFill>
	);
};
