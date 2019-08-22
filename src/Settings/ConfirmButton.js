import React from 'react';
import styled from 'styled-components';

import { AppContext } from '../App/AppProvider';

const ConfirmButtonStyle = styled.div`
	color: green;
	margin: 20px;
	cursor: pointer;
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
