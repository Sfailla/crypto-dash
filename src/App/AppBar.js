import React from 'react';
import styled, { css } from 'styled-components';

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
	${props => props.active && css`text-shadow: 0px 0px 20px #30ff03;`};
`;

const toProperCase = lower => {
	return lower[0].toUpperCase() + lower.slice(1);
};

const ControlButton = ({ name, active }) => {
	return <ControlButtonEl active={active}>{toProperCase(name)}</ControlButtonEl>;
};

const AppBar = () => {
	return (
		<Bar>
			<Logo>Crypto Dash</Logo>
			<div />
			<ControlButton active name="dashboard" />
			<ControlButton name="settings" />
		</Bar>
	);
};

export default AppBar;
