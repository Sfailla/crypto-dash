import React from 'react';
import styled, { css } from 'styled-components';

import { SelectableTile } from '../Shared/Tile';
import { CoinHeaderGridStyle } from '../Settings/CoinHeaderGrid';
import { fontSize3, fontSizeBig } from '../Shared/Styles';
import { numberFormatter } from '../Shared/UtilityFunctions';
import ChangePCT from './ChangePCT';

const PriceTileStyle = styled(SelectableTile)`
  ${props =>
		props.compact &&
		css`
			${fontSize3};
			display: grid;
			grid-template-columns: repeat(3, 1fr);
			grid-gap: 5px;
			justify-items: right;
		`}
`;

const JustifyLeft = styled.div`justify-self: left;`;

const TickerPrice = styled.div`${fontSizeBig};`;

const PriceTile = ({ symbol, data }) => {
	return (
		<PriceTileStyle>
			<CoinHeaderGridStyle>
				<div>{symbol}</div>
				<ChangePCT data={data} />
			</CoinHeaderGridStyle>
			<TickerPrice>
				${numberFormatter(data.PRICE).toFixed(4)}
			</TickerPrice>
		</PriceTileStyle>
	);
};

export const PriceTileCompact = ({ symbol, data }) => {
	return (
		<PriceTileStyle compact>
			<JustifyLeft>{symbol}</JustifyLeft>
			<ChangePCT data={data} />
			<div>${numberFormatter(data.PRICE).toFixed(4)}</div>
		</PriceTileStyle>
	);
};

export default PriceTile;
