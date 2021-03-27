import React from 'react';
import {Img} from 'remotion';
import styled from 'styled-components';
import {PROFILE_IMAGE_URL} from '../local';
import {IMAGE_SIZE} from './constants';

const Cover = styled.div`
	width: ${IMAGE_SIZE}px;
	height: ${IMAGE_SIZE}px;
`;

export const Profile = () => {
	return (
		<Cover>
			<Img
				style={{
					height: IMAGE_SIZE,
					width: IMAGE_SIZE,
					borderRadius: '50%',
				}}
				src={PROFILE_IMAGE_URL}
			/>
		</Cover>
	);
};
