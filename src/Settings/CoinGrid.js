import React from 'react';
import styled, { css } from 'styled-components';

import { AppContext } from '../App/AppProvider';

import CoinTile from './CoinTile';

export const CoinGridStyles = styled.div`
	display: grid;
	grid-template-columns: repeat(5, 1fr);
	grid-gap: 15px;
	margin-top: 40px;
`;

const displayCoins = coinList => {
	return Object.keys(coinList).slice(0, 100);
};

const CoinGrid = () => {
	return (
		<AppContext.Consumer>
			{({ coinList }) => (
				<CoinGridStyles>
					{displayCoins(coinList).map((coinKey, idx) => (
						<CoinTile key={idx} coinKey={coinKey} />
					))}
				</CoinGridStyles>
			)}
		</AppContext.Consumer>
	);
};

export default CoinGrid;
