import React from 'react';
import styled from 'styled-components';
import { DeletableTile } from '../Shared/Tile';

export const CoinHeaderGridStyle = styled.div`
	display: grid;
	grid-template-columns: auto 1fr;
`;

export const CoinSymbol = styled.div`justify-self: right;`;

const DeleteIcon = styled.div`
	justify-self: right;
	display: none;
	${DeletableTile}:hover & {
		display: block;
		color: red;
	}
`;

const CoinHeader = ({ name, symbol, topSection }) => {
	return (
		<CoinHeaderGridStyle>
			<div>{name}</div>
			{topSection ? (
				<DeleteIcon>X</DeleteIcon>
			) : (
				<CoinSymbol>{symbol}</CoinSymbol>
			)}
		</CoinHeaderGridStyle>
	);
};

export default CoinHeader;
