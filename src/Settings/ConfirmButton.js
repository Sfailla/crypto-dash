import React from 'react';
import styled from 'styled-components';

import { AppContext } from '../App/AppProvider';

import { fontSize1, greenBoxShadow, color3 } from '../Shared/Styles';

const ConfirmButtonStyle = styled.div`
	color: ${color3};
	${fontSize1};
	padding: 5px;
	margin: 0px 20px;
	cursor: pointer;
	&:hover {
		${greenBoxShadow};
	}
`;

const CenterDiv = styled.div`
	display: grid;
	justify-content: center;
`;

const ConfirmButton = () => {
	return (
		<AppContext.Consumer>
			{({ confirmFavorites }) => (
				<CenterDiv>
					<ConfirmButtonStyle onClick={confirmFavorites}>
						Confirm Favorites
					</ConfirmButtonStyle>
				</CenterDiv>
			)}
		</AppContext.Consumer>
	);
};

export default ConfirmButton;
