import React from 'react';

import Image from './Image';

const CoinImage = ({ coin, style }) => {
	return (
		<Image
			alt={coin.CoinSymbol}
			style={style || { height: '50px' }}
			src={`http://cryptocompare.com/${coin.ImageUrl || ''}`}
		/>
	);
};

export default CoinImage;
