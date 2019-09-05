import React from 'react';
import styled from 'styled-components';

import { AppContext } from '../App/AppProvider';
import CoinTile from './CoinTile';

export const CoinGridStyles = styled.div`
	display: grid;
	grid-template-columns: repeat(5, 1fr);
	@media (max-width: 1000px) {
		grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
	}
	grid-gap: 15px;
	margin: 40px 0px;
`;

let limitedResults = list => {
	return Object.keys(list).slice(0, 100);
};

const getLowerSectionCoins = (coinList, filteredCoins) => {
	return (
		(filteredCoins && limitedResults(filteredCoins)) ||
		limitedResults(coinList)
	);
};

const displayCoins = (
	coinList,
	topSection,
	favorites,
	filteredCoins
) => {
	return topSection
		? favorites
		: getLowerSectionCoins(coinList, filteredCoins);
};

const CoinGrid = ({ topSection }) => {
	return (
		<AppContext.Consumer>
			{({ coinList, favorites, filteredCoins }) => (
				<CoinGridStyles>
					{displayCoins(
						coinList,
						topSection,
						favorites,
						filteredCoins
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
