import React from 'react';
import styled, { css } from 'styled-components';

import { AppContext } from './AppProvider';

const Logo = styled.div`font-size: 1.5em;`;

const Bar = styled.div`
	display: grid;
	grid-template-columns: auto 1fr 100px 100px;
	align-items: center;
	justify-items: center;
	margin-bottom: 40px;
`;

const ControlButtonEl = styled.div`
	cursor: pointer;
	${props => props.active && css`color: green;`};
`;

const toProperCase = lower => {
	return lower[0].toUpperCase() + lower.slice(1);
};

const ControlButton = ({ name }) => {
	return (
		<AppContext.Consumer>
			{({ page, setPage }) => (
				<ControlButtonEl
					active={page === name}
					onClick={() => setPage(name)}
				>
					{toProperCase(name)}
				</ControlButtonEl>
			)}
		</AppContext.Consumer>
	);
};

const AppBar = () => {
	return (
		<Bar>
			<Logo>Crypto Dash</Logo>
			<div />
			<ControlButton name="dashboard" />
			<ControlButton name="settings" />
		</Bar>
	);
};

export default AppBar;
