import React from 'react';
import styled from 'styled-components';

import { AppContext } from '../App/AppProvider';

import CoinTile from './CoinTile';

export const CoinGridStyles = styled.div`
	display: grid;
	grid-template-columns: repeat(5, 1fr);
	grid-gap: 15px;
	margin: 40px 0px;
`;

const displayCoins = (coinList, topSection, favorites) => {
	return topSection ? favorites : Object.keys(coinList).slice(0, 100);
};

const CoinGrid = ({ topSection }) => {
	return (
		<AppContext.Consumer>
			{({ coinList, favorites }) => (
				<CoinGridStyles>
					{displayCoins(
						coinList,
						topSection,
						favorites
					).map((coinKey, idx) => (
						<CoinTile
							key={idx}
							topSection={topSection}
							coinKey={coinKey}
						/>
					))}
				</CoinGridStyles>
			)}
		</AppContext.Consumer>
	);
};

export default CoinGrid;
