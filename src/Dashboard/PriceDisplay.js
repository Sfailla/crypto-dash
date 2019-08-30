import React from 'react';

import { AppContext } from '../App/AppProvider';
import PriceTile from './PriceTile';
import { PriceTileCompact } from './PriceTile';

const PriceDisplay = ({ price, index }) => {
	let symbol = Object.keys(price)[0];
	let data = price[symbol]['USD'];
	let TileClass = index < 5 ? PriceTile : PriceTileCompact;
	return (
		<AppContext.Consumer>
			{({ currentFavorite, setCurrentFavorite }) => (
				<TileClass
					data={data}
					symbol={symbol}
					currentFavorite={currentFavorite === symbol}
					setCurrentFavorite={() => setCurrentFavorite(symbol)}
				/>
			)}
		</AppContext.Consumer>
	);
};

export default PriceDisplay;
