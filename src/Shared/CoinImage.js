import React from 'react';
import styled, { css } from 'styled-components';

import Image from './Image';

const CoinImageStyle = styled(Image)`
	height: 50px;
	${props =>
		props.spotlight &&
		css`
			display: block;
			height: 200px;
			margin: auto;
		`};
`;

const CoinImage = ({ coin, spotlight }) => {
	return (
		<CoinImageStyle
			spotlight={spotlight}
			alt={coin.Symbol}
			src={`http://cryptocompare.com/${coin.ImageUrl || ''}`}
		/>
	);
};

export default CoinImage;
