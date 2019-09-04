import React from 'react';
import styled, { css } from 'styled-components';

import { AppContext } from './AppProvider';
import { toProperCase } from '../Shared/UtilityFunctions';

const ControlButtonEl = styled.div`
	cursor: pointer;
	${props => props.active && css`color: green;`};
	${props =>
		props.disabledLink &&
		css`
			pointer-events: none;
			opacity: 0.2;
		`};
`;

const ControlButton = ({ name }) => {
	return (
		<AppContext.Consumer>
			{({ page, setPage, firstVisit }) => (
				<ControlButtonEl
					active={page === name}
					onClick={() => setPage(name)}
					disabledLink={firstVisit && name === 'dashboard'}
				>
					{toProperCase(name)}
				</ControlButtonEl>
			)}
		</AppContext.Consumer>
	);
};

export default ControlButton;
