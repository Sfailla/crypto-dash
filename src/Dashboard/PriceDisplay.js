import React from 'react';

import PriceTile from './PriceTile';
import { PriceTileCompact } from './PriceTile';

const PriceDisplay = ({ price, index }) => {
	let symbol = Object.keys(price)[0];
	let data = price[symbol]['USD'];
	console.log(index);
	let TileClass = index < 5 ? PriceTile : PriceTileCompact;
	return <TileClass symbol={symbol} data={data} />;
};

export default PriceDisplay;
