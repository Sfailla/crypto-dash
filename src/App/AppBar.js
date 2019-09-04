import React from 'react';
import styled from 'styled-components';

import ControlButton from './ControlButton';

const Logo = styled.div`font-size: 1.5em;`;

const Bar = styled.div`
	display: grid;
	grid-template-columns: auto 1fr 100px 100px;
	align-items: center;
	justify-items: center;
	margin-bottom: 40px;
`;

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
